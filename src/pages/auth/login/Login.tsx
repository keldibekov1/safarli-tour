import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Phone } from "lucide-react";

const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_URL ?? "https://api.avtotestzone.uz",
});

type LoginForm = {
  phone: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<LoginForm>({
    phone: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const normalizedPhone = form.phone.replace(/[\s()-]/g, "");

  const getErrorMessage = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as { message?: string } | undefined;
      return data?.message ?? "Telefon raqam yoki parol noto'g'ri";
    }

    return "Kutilmagan xatolik yuz berdi";
  };

  const handleChange =
    (field: keyof LoginForm) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
      setError("");
    };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!/^\+998\d{9}$/.test(normalizedPhone)) {
      setError("Telefon raqamni +998901234567 ko'rinishida kiriting");
      return;
    }

    if (!form.password) {
      setError("Parolni kiriting");
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await authApi.post<LoginResponse>("/users/login", {
        phone: normalizedPhone,
        password: form.password,
      });

      localStorage.setItem("accessToken", data.token);
      navigate("/base");
    } catch (error) {
      setError(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
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
      <div className="border border-white/20 relative  rounded-3xl w-full max-w-md  bg-white/90  backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden">
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
          <h1 className="mb-8 text-center text-3xl font-extrabold text-[#0F172A]">
            Safarliga kirish
          </h1>

          {error && (
            <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleLogin}>
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
                    w-full
                    rounded-xl
                    border border-slate-300
                    pl-11 pr-4 py-2.5
                    text-sm
                    outline-none
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
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="password"
                  value={form.password}
                  onChange={handleChange("password")}
                  placeholder="••••••••"
                  className="
                    w-full
                    rounded-xl
                    border border-slate-300
                    pl-11 pr-4 py-2.5
                    text-sm
                    outline-none
                    focus:border-[#22D3EE]
                    focus:ring-2 focus:ring-[#22D3EE]/30
                  "
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input
                  type="checkbox"
                  className="rounded border-slate-300 text-[#22D3EE] focus:ring-[#22D3EE]"
                />
                Eslab qolish
              </label>

              <Link
                to="/forgot-password"
                className="text-[#22D3EE] hover:underline"
              >
                Parolni unutdingizmi?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="
                w-full
                rounded-xl
                bg-gradient-to-r
                from-[#22D3EE]
                to-[#38E0F5]
                py-2.5
                text-sm font-bold
                text-[#0F172A]
                transition-transform
                hover:scale-[1.01]
                active:scale-[0.99]
                disabled:cursor-not-allowed disabled:opacity-70
              "
            >
              {isLoading ? "Kirilmoqda..." : "Kirish"}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-600">
            Hisobingiz yo'qmi?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#22D3EE] hover:underline"
            >
              Ro'yxatdan o'tish
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
