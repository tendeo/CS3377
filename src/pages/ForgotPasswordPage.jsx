import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wifi, Battery } from "lucide-react";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import { Button } from "../components/ui/Button";

export function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleResetPassword = () => {
    setError("");

    // Validation
    if (!newPassword) {
      setError("Please enter a new password.");
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (!confirmPassword) {
      setError("Please confirm your password.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Success
    setSuccess(true);
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleBackToLogin = () => {
    navigate("/");
  };

  if (success) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        {/* iOS Status Bar */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <span className="text-[15px]">9:41</span>
          <div className="flex items-center gap-1">
            <Wifi className="h-4 w-4" strokeWidth={2.5} />
            <div className="flex gap-[2px]">
              <div className="w-[3px] h-3 bg-foreground rounded-sm"></div>
              <div className="w-[3px] h-3 bg-foreground rounded-sm"></div>
              <div className="w-[3px] h-3 bg-foreground rounded-sm"></div>
              <div className="w-[3px] h-3 bg-foreground/40 rounded-sm"></div>
            </div>
            <Wifi className="h-5 w-6 ml-1" strokeWidth={2} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-medium">Password Reset</h1>
            <p className="text-muted-foreground mb-8">Your password has been successfully reset.</p>
            <Button onClick={handleBackToLogin} className="bg-black text-white rounded-lg px-6 py-3 text-lg font-medium hover:bg-black/90">
              Back to Login
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pb-6 px-6">
          {/* Home Indicator */}
          <div className="flex justify-center pt-2">
            <div className="w-32 h-1 bg-black/20 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

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
      <div className="flex-1 flex flex-col px-6 pt-12">
        {/* Header Area */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground">Enter your new password below.</p>
        </div>

        {/* Reset Password Form */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="newPassword" className="text-[13px] text-muted-foreground mb-2 block">
              New Password
            </Label>
            <Input
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              placeholder="Enter new password"
              className="border-0 border-b border-border rounded-none px-0 py-3 text-lg focus-visible:ring-0 focus-visible:border-foreground"
            />
          </div>

          <div>
            <Label htmlFor="confirmPassword" className="text-[13px] text-muted-foreground mb-2 block">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Confirm new password"
              className="border-0 border-b border-border rounded-none px-0 py-3 text-lg focus-visible:ring-0 focus-visible:border-foreground"
            />
          </div>

          <div className="flex justify-end">
            <button 
              onClick={handleBackToLogin}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Login
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pb-6 space-y-4 mt-12">
          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded">
              {error}
            </div>
          )}

          <Button
            onClick={handleResetPassword}
            className="w-full bg-black text-white rounded-lg h-14 text-lg hover:bg-black/90"
          >
            Reset Password
          </Button>

          {/* Home Indicator */}
          <div className="flex justify-center pt-2">
            <div className="w-32 h-1 bg-black/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
