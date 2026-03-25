import React, { useEffect, useState } from "react";
import { X, Eye, EyeOff, Pencil } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";

const LoginModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setEmail("");
      setPassword("");
      setShowPassword(false);
      setLoading(false);
      setEmailError("");
      setLoginError("");
      setSuccessMessage("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleContinue = () => {
    setEmailError("");
    setLoginError("");
    setSuccessMessage("");

    if (!email.trim()) {
      setEmailError("Email is required");
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

      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage("Login successful");
        setLoginError("");

        setTimeout(() => {
          onClose();
        }, 1200);
      } else {
        setSuccessMessage("");
        setLoginError(data.message || "Invalid email or password");
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-3 sm:px-4">
      <div
        className="
          relative w-full
          max-w-[360px]
          sm:max-w-[420px]
          md:max-w-[520px]
          bg-white shadow-2xl
          rounded-2xl md:rounded-3xl
          max-h-[95vh] overflow-y-auto
        "
      >
        <div
          onClick={onClose}
          className="absolute right-4 top-4 md:right-5 md:top-5 text-gray-600 hover:text-black z-10 cursor-pointer"
        >
          <X size={24} className="md:w-[28px] md:h-[28px]" />
        </div>

        <div className="px-5 py-6 sm:px-6 sm:py-7 md:px-9 md:py-9">
          {step === 1 && (
            <>
              <div className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold leading-tight text-[#1f1f1f] pr-10">
                Log in or create account
              </div>

              <div className="mt-2 text-[15px] sm:text-[16px] md:text-[18px] leading-6 md:leading-8 text-gray-600">
                Learn on your own time from top universities and businesses.
              </div>

              <div className="mt-6 md:mt-7">
                <div className="block text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-black mb-2">
                  Email <span className="text-red-500">*</span>
                </div>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                  placeholder="name@email.com"
                  className="
                    w-full rounded-xl border border-gray-400
                    px-4 py-3.5 md:py-4
                    text-[16px] sm:text-[17px] md:text-[20px]
                    outline-none focus:border-[#0056d2]
                    placeholder:text-gray-400
                  "
                />

                {emailError && (
                  <div className="mt-2 text-sm text-red-600">{emailError}</div>
                )}
              </div>

              <div
                onClick={handleContinue}
                className="
                  mt-5 md:mt-6 w-full rounded-xl bg-[#0056d2]
                  py-3.5 md:py-4
                  text-center
                  text-[17px] md:text-[20px]
                  font-semibold text-white
                  hover:bg-[#0046b0] transition cursor-pointer
                "
              >
                Continue
              </div>

              <div className="my-6 md:my-8 flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-gray-300"></div>
                <span className="text-gray-500 text-[15px] md:text-[18px]">
                  or
                </span>
                <div className="h-[1px] flex-1 bg-gray-300"></div>
              </div>

              <div
                className="
                  w-full rounded-xl border border-gray-400
                  py-3.5 md:py-4 mb-4
                  flex items-center justify-center gap-3
                  text-[16px] sm:text-[17px] md:text-[20px]
                  font-medium text-[#1f1f1f]
                  hover:bg-gray-50 transition cursor-pointer
                "
              >
                <FcGoogle size={24} />
                Continue with Google
              </div>

              <div
                className="
                  w-full rounded-xl border border-gray-400
                  py-3.5 md:py-4 mb-4
                  flex items-center justify-center gap-3
                  text-[16px] sm:text-[17px] md:text-[20px]
                  font-medium text-[#1f1f1f]
                  hover:bg-gray-50 transition cursor-pointer
                "
              >
                <FaFacebookF size={20} className="text-[#1877F2]" />
                Continue with Facebook
              </div>

              <div
                className="
                  w-full rounded-xl border border-gray-400
                  py-3.5 md:py-4
                  flex items-center justify-center gap-3
                  text-[16px] sm:text-[17px] md:text-[20px]
                  font-medium text-[#1f1f1f]
                  hover:bg-gray-50 transition cursor-pointer
                "
              >
                <FaApple size={22} className="text-black" />
                Continue with Apple
              </div>

              <div className="mt-6 md:mt-8">
                <div className="text-[15px] md:text-[18px] text-[#0056d2] underline underline-offset-2 font-medium cursor-pointer">
                  Sign up with your organization
                </div>
              </div>

              <div className="mt-5 md:mt-6 text-[12px] sm:text-[13px] md:text-[16px] leading-5 md:leading-7 text-gray-600">
                I accept Coursera&apos;s{" "}
                <span className="text-[#0056d2] underline cursor-pointer">
                  Terms of Use
                </span>{" "}
                and{" "}
                <span className="text-[#0056d2] underline cursor-pointer">
                  Privacy Notice
                </span>
                . Having trouble logging in?{" "}
                <span className="text-[#0056d2] underline cursor-pointer">
                  Learner help center
                </span>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="text-[28px] sm:text-[32px] md:text-[44px] font-semibold leading-tight text-[#111827] pr-10">
                Welcome back
              </div>

              <div className="mt-6 md:mt-8">
                <div className="block text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-black mb-2">
                  Email <span className="text-red-500">*</span>
                </div>

                <div className="flex items-stretch rounded-xl border border-[#9db4da] overflow-hidden">
                  <input
                    type="text"
                    value={email}
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
                <div className="block text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-black mb-2">
                  Password <span className="text-red-500">*</span>
                </div>

                <div className="flex items-center rounded-xl border border-[#9db4da] overflow-hidden">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setLoginError("");
                    }}
                    placeholder="Enter your password"
                    className="
                      flex-1 min-w-0 bg-white
                      px-4 py-3.5 md:py-4
                      text-[16px] sm:text-[17px] md:text-[20px]
                      text-[#111827] outline-none
                      placeholder:text-[#6b7280]
                    "
                  />
                  <div
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="w-[56px] md:w-[64px] flex items-center justify-center cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOff size={22} className="text-black" />
                    ) : (
                      <Eye size={22} className="text-black" />
                    )}
                  </div>
                </div>
              </div>

              {loginError && (
                <div className="mt-3 text-[14px] md:text-[15px] text-red-600">
                  {loginError}
                </div>
              )}

              {successMessage && (
                <div className="mt-3 text-[14px] md:text-[15px] text-green-600">
                  {successMessage}
                </div>
              )}

              <div className="mt-3 text-[14px] sm:text-[15px] md:text-[16px] text-[#0056d2] underline cursor-pointer">
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
                      : "bg-[#0056d2] hover:bg-[#0046b0]"
                  }
                `}
              >
                {loading ? "Logging in..." : "Next"}
              </div>

              <div
                className="
                  mt-4 w-full rounded-xl border-2 border-[#2563eb]
                  bg-white
                  py-3.5 md:py-4
                  text-center
                  text-[17px] md:text-[20px]
                  font-semibold text-[#0056d2]
                  hover:bg-blue-50 transition cursor-pointer
                "
              >
                Login with link
              </div>

              <div className="my-6 md:my-7 flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-gray-300"></div>
                <span className="text-gray-500 text-[15px] md:text-[18px]">
                  or
                </span>
                <div className="h-[1px] flex-1 bg-gray-300"></div>
              </div>

              <div
                className="
                  w-full rounded-xl border border-gray-500
                  py-3.5 md:py-4
                  flex items-center justify-center gap-3
                  text-[16px] sm:text-[17px] md:text-[20px]
                  font-medium text-[#1f1f1f]
                  hover:bg-gray-50 transition cursor-pointer
                "
              >
                <FcGoogle size={24} />
                Continue with Google
              </div>

              <div className="mt-6 border-b border-gray-200 pb-5">
                <div className="text-[15px] sm:text-[16px] md:text-[18px] text-gray-800">
                  New to Coursera?{" "}
                  <span className="text-[#0056d2] underline font-medium cursor-pointer">
                    Sign up
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <div className="text-[15px] sm:text-[16px] md:text-[18px] text-[#0056d2] underline font-medium cursor-pointer">
                  Log in with your organization
                </div>
              </div>

              <div className="mt-6 text-[12px] sm:text-[13px] md:text-[16px] leading-5 md:leading-7 text-gray-600">
                <div>
                  Having trouble logging in?{" "}
                  <span className="text-[#0056d2] underline cursor-pointer">
                    Learner help center
                  </span>
                </div>

                <div className="mt-3">
                  This site is protected by reCAPTCHA Enterprise and the Google{" "}
                  <span className="text-[#0056d2] underline cursor-pointer">
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span className="text-[#0056d2] underline cursor-pointer">
                    Terms of Service
                  </span>{" "}
                  apply.
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;