import { Link } from "react-router-dom";
import { User, Lock, Phone } from "lucide-react";

const Register = () => {
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
          <h1 className="mb-8 text-center text-3xl font-extrabold text-[#0F172A]">
            Ro'yxatdan o'tish
          </h1>

          <form className="space-y-5">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Ismingiz
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
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
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="tel"
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
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="password"
                  placeholder="Kamida 8 ta belgi"
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
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="password"
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
              className="
                w-full rounded-xl
                bg-gradient-to-r from-[#22D3EE] to-[#38E0F5]
                py-2.5 text-sm font-bold text-[#0F172A]
                transition-transform
                hover:scale-[1.01]
                active:scale-[0.99]
              "
            >
              Ro'yxatdan o'tish
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-600">
            Hisobingiz bormi?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#22D3EE] hover:underline"
            >
              Kirish
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
