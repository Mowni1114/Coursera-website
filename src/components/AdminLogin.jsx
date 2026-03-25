import React, { useState } from "react";
import { Eye, EyeOff, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleContinue = () => {
    setUsernameError("");
    setLoginError("");
    setSuccessMessage("");

    if (!username.trim()) {
      setUsernameError("Admin username is required");
      return;
    }

    setStep(2);
  };

  const handleLogin = async () => {
    setLoginError("");
    setSuccessMessage("");

    if (!password.trim()) {
      setLoginError("Password is required");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://127.0.0.1:8000/admin-panel/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();
      console.log("Login response data:", data);

      if (response.ok && data.success) {
        setSuccessMessage("Admin login successful");
        localStorage.setItem("isAdminLoggedIn", "true");

        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 1000);
      } else {
        setSuccessMessage("");
        setLoginError(data.message || "Invalid admin username or password");
      }
    } catch (error) {
      setSuccessMessage("");
      setLoginError("Server connection error");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#dbeafe] px-4">
      <div className="relative w-full max-w-[420px] md:max-w-[520px] bg-[#1f3b63] shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden">
        <div className="px-5 py-6 sm:px-6 sm:py-7 md:px-9 md:py-9">
          {step === 1 && (
            <>
              <div className="text-[28px] sm:text-[30px] md:text-[36px] font-light leading-tight text-white text-center">
                ADMIN LOGIN
              </div>

              <div className="mt-3 text-[15px] sm:text-[16px] md:text-[18px] leading-6 md:leading-8 text-blue-100 text-center">
                Enter your admin username to continue
              </div>

              <div className="mt-8">
                <div className="block text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-white mb-2">
                  Username <span className="text-red-400">*</span>
                </div>

                <input
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setUsernameError("");
                  }}
                  placeholder="Enter admin username"
                  className="
                    w-full rounded-xl border border-[#34527a]
                    bg-[#27496d]
                    px-4 py-3.5 md:py-4
                    text-[16px] sm:text-[17px] md:text-[20px]
                    text-white outline-none focus:border-[#6ea8ff]
                    placeholder:text-gray-300
                  "
                />

                {usernameError && (
                  <div className="mt-2 text-sm text-red-300">
                    {usernameError}
                  </div>
                )}
              </div>

              <div
                onClick={handleContinue}
                className="
                  mt-6 w-full rounded-xl bg-[#4f8edc]
                  py-3.5 md:py-4
                  text-center
                  text-[17px] md:text-[20px]
                  font-semibold text-white
                  hover:bg-[#3f7fcb] transition cursor-pointer
                "
              >
                Continue
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="text-[28px] sm:text-[32px] md:text-[40px] font-light leading-tight text-white text-center">
                Welcome Admin
              </div>

              <div className="mt-6 md:mt-8">
                <div className="block text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-white mb-2">
                  Username <span className="text-red-400">*</span>
                </div>

                <div className="flex items-stretch rounded-xl border border-[#45658d] overflow-hidden">
                  <input
                    type="text"
                    value={username}
                    disabled
                    className="
                      flex-1 min-w-0 bg-[#edf3ff]
                      px-4 py-3.5 md:py-4
                      text-[16px] sm:text-[17px] md:text-[20px]
                      text-[#111827] outline-none
                    "
                  />
                  <div
                    onClick={() => {
                      setStep(1);
                      setPassword("");
                      setLoginError("");
                      setSuccessMessage("");
                    }}
                    className="w-[56px] md:w-[64px] flex items-center justify-center bg-white border-l border-[#c9d5ea] cursor-pointer"
                  >
                    <Pencil size={20} className="text-black" />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="block text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-white mb-2">
                  Password <span className="text-red-400">*</span>
                </div>

                <div className="flex items-center rounded-xl border border-[#45658d] overflow-hidden">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setLoginError("");
                    }}
                    placeholder="Enter admin password"
                    className="
                      flex-1 min-w-0 bg-[#27496d]
                      px-4 py-3.5 md:py-4
                      text-[16px] sm:text-[17px] md:text-[20px]
                      text-white outline-none
                      placeholder:text-gray-300
                    "
                  />
                  <div
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="w-[56px] md:w-[64px] flex items-center justify-center cursor-pointer bg-[#27496d]"
                  >
                    {showPassword ? (
                      <EyeOff size={22} className="text-white" />
                    ) : (
                      <Eye size={22} className="text-white" />
                    )}
                  </div>
                </div>
              </div>

              {loginError && (
                <div className="mt-3 text-[14px] md:text-[15px] text-red-300">
                  {loginError}
                </div>
              )}

              {successMessage && (
                <div className="mt-3 text-[14px] md:text-[15px] text-green-300">
                  {successMessage}
                </div>
              )}

              <div className="mt-3 text-[14px] sm:text-[15px] md:text-[16px] text-blue-200 underline cursor-pointer">
                Forgot password?
              </div>

              <div
                onClick={handleLogin}
                className={`
                  mt-6 w-full rounded-xl
                  py-3.5 md:py-4
                  text-center
                  text-[17px] md:text-[20px]
                  font-semibold text-white
                  transition cursor-pointer
                  ${
                    loading
                      ? "bg-[#7aa7ea] cursor-not-allowed"
                      : "bg-[#4f8edc] hover:bg-[#3f7fcb]"
                  }
                `}
              >
                {loading ? "Logging in..." : "Login"}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;