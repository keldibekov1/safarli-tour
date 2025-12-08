import { Link } from "react-router-dom";
import { Plane, MapPin, Compass } from "lucide-react";

const NotFound = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#020617] text-white flex items-center justify-center px-6">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-lg text-center">
        <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-white/5 flex items-center justify-center">
          <Plane className="w-10 h-10 text-cyan-300 rotate-45" />
        </div>

        <div className="text-[100px] font-extrabold leading-none bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
          404
        </div>

        <h1 className="mt-4 text-3xl font-bold">Sahifa topilmadi</h1>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-cyan-300 transition"
          >
            <Compass className="w-4 h-4" />
            Bosh sahifaga qaytish
          </Link>

          {/* <Link
            to="/tours"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
          >
            <Plane className="w-4 h-4" />
            Turlarni korish
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
