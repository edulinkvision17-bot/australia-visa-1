// AdminLogin.jsx
import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Please enter both email and password.");
      return;
    }

    // 🔐 Log data here (replace with API call later)
    console.log("Admin login:", form);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1.1fr,0.9fr] gap-8 items-center">
        {/* Left side text / branding */}
        <div className="hidden md:flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Secure Admin Access
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white">
            Welcome back,  
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400">
              Admin Dashboard
            </span>
          </h1>
          <p className="text-sm leading-relaxed text-slate-400 max-w-md">
            Manage users, monitor activity, and configure your system from a single,
            beautifully crafted control panel.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-400">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
              <p className="font-semibold text-slate-100 mb-1">
                Real-time insights
              </p>
              <p>Instant overview of key metrics at a glance.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
              <p className="font-semibold text-slate-100 mb-1">
                Role-based control
              </p>
              <p>Fine-grained access with secure authentication.</p>
            </div>
          </div>
        </div>

        {/* Right side card */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-0.5 rounded-[2rem] bg-gradient-to-tr from-sky-500/40 via-transparent to-indigo-600/30 blur-2 opacity-80" />

          <div className="relative rounded-[1.9rem] border border-slate-800 bg-slate-900/90 backdrop-blur-xl px-6 py-7 sm:px-8 sm:py-9 shadow-[0_18px_60px_rgba(15,23,42,0.9)]">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-white tracking-tight">
                  Admin Login
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Use your admin credentials to sign in.
                </p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800/80 border border-slate-700">
                <span className="text-sm font-semibold text-sky-400">A</span>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-4 rounded-2xl border border-red-500/50 bg-red-500/10 px-3 py-2 text-xs text-red-200">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-slate-200"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="admin@example.com"
                    autoComplete="email"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-shadow shadow-inner"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label
                  htmlFor="password"
                  className="text-xs font-medium text-slate-200"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-shadow pr-16 shadow-inner"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-[11px] font-medium text-slate-400 hover:text-slate-100 transition"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 w-full rounded-2xl bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-4 py-2.5 text-sm font-semibold text-white tracking-wide shadow-lg shadow-sky-500/40 hover:shadow-sky-500/60 hover:translate-y-[0.5px] active:translate-y-[1px] transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:ring-sky-500"
              >
                Sign in
              </button>
            </form>

            <p className="mt-5 text-[10px] text-center text-slate-500">
              Restricted area. Unauthorized access is prohibited and monitored.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
