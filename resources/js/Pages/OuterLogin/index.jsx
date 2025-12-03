import { router } from "@inertiajs/react";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        router.post(route("main.login"), {...formData})
        // console.log("Response", response);
        
    } catch (error) {
        console.error("Error Logging In Main Account")
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex justify-center items-center p-4 font-sans">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-8 animate-[fadeIn_0.5s_ease]">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 👋
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 active:scale-95 transition"
          >
            Login
          </button>
        </form>

        {/* Footer Text */}
        <p className="text-xs text-center text-gray-500 mt-5">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </div>
  );
}
