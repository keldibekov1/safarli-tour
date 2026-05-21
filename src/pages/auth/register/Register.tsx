import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle2, KeyRound, Lock, Phone, User } from "lucide-react";

const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_URL ?? "https://api.avtotestzone.uz",
});

type RegisterForm = {
  name: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

type VerifyOtpResponse = {
  token: string;
};

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<RegisterForm>({
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [otpCode, setOtpCode] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const normalizedPhone = form.phone.replace(/[\s()-]/g, "");

  const getErrorMessage = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as { message?: string } | undefined;
      return data?.message ?? "Server bilan bog'lanishda xatolik yuz berdi";
    }

    return "Kutilmagan xatolik yuz berdi";
  };

  const handleChange =
    (field: keyof RegisterForm) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
      setError("");
      setMessage("");
    };

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!form.name.trim()) {
      setError("Ismingizni kiriting");
      return;
    }

    if (!/^\+998\d{9}$/.test(normalizedPhone)) {
      setError("Telefon raqamni +998901234567 ko'rinishida kiriting");
      return;
    }

    if (form.password.length < 6) {
      setError("Parol kamida 6 ta belgidan iborat bo'lishi kerak");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Parollar bir xil emas");
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await authApi.post("/users/register", {
        name: form.name.trim(),
        phone: normalizedPhone,
        password: form.password,
      });

      setOtpSent(true);
      setMessage(data?.message ?? "OTP kod yuborildi");
    } catch (error) {
      setError(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!/^\d{4}$/.test(otpCode)) {
      setError("4 xonali OTP kodni kiriting");
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await authApi.post<VerifyOtpResponse>("/users/verify-otp", {
        phone: normalizedPhone,
        code: otpCode,
      });

      localStorage.setItem("accessToken", data.token);
      navigate("/base");
    } catch (error) {
      setError(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToRegister = () => {
    setOtpSent(false);
    setOtpCode("");
    setError("");
    setMessage("");
  };

  return (
    <div
      className="
        min-h-[100dvh]
        flex items-center justify-center
        px-4 py-6
        bg-gradient-to-br
        from-[#0F172A]
        via-[#1E1B4B]
        to-[#312E81]
        overflow-y-auto
      "
    >
      <div
        className="
          relative
          w-full max-w-md
          rounded-3xl
          bg-white/90
          backdrop-blur-xl
          p-6 sm:p-8
          shadow-2xl
          border border-white/20
          overflow-hidden
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            -top-[10vw] -right-[10vw]
            w-[30vw] h-[30vw]
            max-w-40 max-h-40
            bg-[#22D3EE]/30
            rounded-full
            blur-3xl
          "
        />
        <div
          className="
            pointer-events-none
            absolute
            -bottom-[10vw] -left-[10vw]
            w-[30vw] h-[30vw]
            max-w-40 max-h-40
            bg-indigo-500/30
            rounded-full
            blur-3xl
          "
        />

        <div className="relative">
          <h1 className="mb-2 text-center text-3xl font-extrabold text-[#0F172A]">
            {otpSent ? "OTP tasdiqlash" : "Ro'yxatdan o'tish"}
          </h1>
          <p className="mb-8 text-center text-sm text-slate-500">
            {otpSent
              ? `${normalizedPhone} raqamiga yuborilgan kodni kiriting`
              : "Safarli hisobingizni yarating"}
          </p>

          {error && (
            <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
              {error}
            </div>
          )}

          {message && (
            <div className="mb-5 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>{message}</span>
            </div>
          )}

          {!otpSent ? (
            <form className="space-y-5" onSubmit={handleRegister}>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Ismingiz
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder="Ismingizni kiriting"
                    className="
                      w-full rounded-xl border border-slate-300
                      pl-11 pr-4 py-2.5 text-sm outline-none
                      focus:border-[#22D3EE]
                      focus:ring-2 focus:ring-[#22D3EE]/30
                    "
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Telefon raqam
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    placeholder="+998 90 999 99 99"
                    className="
                      w-full rounded-xl border border-slate-300
                      pl-11 pr-4 py-2.5 text-sm outline-none
                      focus:border-[#22D3EE]
                      focus:ring-2 focus:ring-[#22D3EE]/30
                    "
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Parol
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    value={form.password}
                    onChange={handleChange("password")}
                    placeholder="Kamida 6 ta belgi"
                    className="
                      w-full rounded-xl border border-slate-300
                      pl-11 pr-4 py-2.5 text-sm outline-none
                      focus:border-[#22D3EE]
                      focus:ring-2 focus:ring-[#22D3EE]/30
                    "
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Parolni tasdiqlash
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    value={form.confirmPassword}
                    onChange={handleChange("confirmPassword")}
                    placeholder="Parolni qayta kiriting"
                    className="
                      w-full rounded-xl border border-slate-300
                      pl-11 pr-4 py-2.5 text-sm outline-none
                      focus:border-[#22D3EE]
                      focus:ring-2 focus:ring-[#22D3EE]/30
                    "
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="
                  w-full rounded-xl
                  bg-gradient-to-r from-[#22D3EE] to-[#38E0F5]
                  py-2.5 text-sm font-bold text-[#0F172A]
                  transition-transform
                  hover:scale-[1.01]
                  active:scale-[0.99]
                  disabled:cursor-not-allowed disabled:opacity-70
                "
              >
                {isLoading ? "Yuborilmoqda..." : "Ro'yxatdan o'tish"}
              </button>
            </form>
          ) : (
            <form className="space-y-5" onSubmit={handleVerifyOtp}>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  OTP kod
                </label>
                <div className="relative">
                  <KeyRound className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={4}
                    value={otpCode}
                    onChange={(event) => {
                      setOtpCode(event.target.value.replace(/\D/g, ""));
                      setError("");
                      setMessage("");
                    }}
                    placeholder="1189"
                    className="
                      w-full rounded-xl border border-slate-300
                      pl-11 pr-4 py-2.5 text-center text-lg font-semibold
                      tracking-[0.35em] outline-none
                      focus:border-[#22D3EE]
                      focus:ring-2 focus:ring-[#22D3EE]/30
                    "
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="
                  w-full rounded-xl
                  bg-gradient-to-r from-[#22D3EE] to-[#38E0F5]
                  py-2.5 text-sm font-bold text-[#0F172A]
                  transition-transform
                  hover:scale-[1.01]
                  active:scale-[0.99]
                  disabled:cursor-not-allowed disabled:opacity-70
                "
              >
                {isLoading ? "Tekshirilmoqda..." : "Tasdiqlash"}
              </button>

              <button
                type="button"
                onClick={handleBackToRegister}
                className="w-full rounded-xl border border-slate-300 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Raqamni o'zgartirish
              </button>
            </form>
          )}

          {!otpSent && (
            <p className="mt-8 text-center text-sm text-slate-600">
              Hisobingiz bormi?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#22D3EE] hover:underline"
              >
                Kirish
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
