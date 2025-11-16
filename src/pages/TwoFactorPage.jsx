import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wifi, Battery } from "lucide-react";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import { Button } from "../components/ui/Button";

export function TwoFactorPage() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const userEmail = sessionStorage.getItem("userEmail");
  const verificationCode = sessionStorage.getItem("verificationCode");

  const handleVerify = () => {
    if (!code) {
      setError("Enter the 6-digit code.");
      return;
    }

    if (code === verificationCode) {
      // Success — navigate to dashboard page
      sessionStorage.removeItem("verificationCode");
      sessionStorage.removeItem("userEmail");
      navigate("/dashboard");
    } else {
      // Show error message and let them try again
      setError("Incorrect code. Please try again.");
      setCode("");
    }
  };

  const handleResend = () => {
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    // eslint-disable-next-line no-console
    console.log(`New 2FA Code: ${newCode}`);
    sessionStorage.setItem("verificationCode", newCode);
    setCode("");
    setError("");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* iOS Status Bar */}
      <div className="flex items-center justify-between px-6 pt-3 pb-2">
        <span className="text-[15px]">9:41</span>
        <div className="flex items-center gap-1">
          <Wifi className="h-4 w-4" strokeWidth={2.5} />
          <div className="flex gap-[2px]">
            <div className="w-[3px] h-3 bg-foreground rounded-sm"></div>
            <div className="w-[3px] h-3 bg-foreground rounded-sm"></div>
            <div className="w-[3px] h-3 bg-foreground rounded-sm"></div>
            <div className="w-[3px] h-3 bg-foreground/40 rounded-sm"></div>
          </div>
          <Battery className="h-5 w-6 ml-1" strokeWidth={2} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-6 pt-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="mb-2 text-lg font-medium">Two-Factor Authentication</h1>
          <p className="text-sm text-muted-foreground">A code has been sent to you as part of 2FA authentication.</p>
          <p className="text-xs text-muted-foreground mt-1">Email: <span className="font-medium">{userEmail}</span></p>
        </div>

        {/* Code Input Form */}
        <div className="space-y-6 flex-1">
          <div>
            <Label htmlFor="code" className="text-[13px] text-muted-foreground mb-2 block">
              6-Digit Code
            </Label>
            <div className="flex gap-2 items-end">
              <Input
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                type="text"
                placeholder="123456"
                maxLength="6"
                className="flex-1 border-0 border-b border-border rounded-none px-0 py-3 text-lg focus-visible:ring-0 focus-visible:border-foreground"
              />
              <button
                onClick={handleVerify}
                className="px-4 py-3 bg-black text-white rounded-lg text-sm font-medium hover:bg-black/90"
              >
                ↵
              </button>
            </div>
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded">
              {error}
            </div>
          )}

          <div className="flex gap-2">
            <button onClick={handleResend} className="text-sm text-blue-600 hover:underline">
              Resend Code
            </button>
            <button onClick={handleBack} className="ml-auto text-sm text-muted-foreground hover:underline">
              Back
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pb-6">
          {/* Home Indicator */}
          <div className="flex justify-center pt-2">
            <div className="w-32 h-1 bg-black/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
