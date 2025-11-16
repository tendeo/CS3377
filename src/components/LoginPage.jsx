import React, { useState } from "react";
import { Wifi, Battery } from "lucide-react";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { Button } from "./ui/Button";

export function LoginPage() {
  const [step, setStep] = useState("login"); // login | 2fa | success
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState(null);
  const [error, setError] = useState("");
  const [sendRequestedAt, setSendRequestedAt] = useState(null);

  const validateLogin = () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email.");
      return false;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    return true;
  };

  const send2FACode = (dest = email) => {
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCode(newCode);
    setSendRequestedAt(Date.now());
    // In a real app you'd call an API to send the code; here we just log it.
    // eslint-disable-next-line no-console
    console.log(`(Dummy) Sent 2FA code to ${dest}: ${newCode}`);
  };

  const handleSignIn = () => {
    // eslint-disable-next-line no-console
    console.log("handleSignIn called");
    if (!validateLogin()) return;
    send2FACode();
    setStep("2fa");
    setCode("");
  };

  const handleVerify = () => {
    if (!code) {
      setError("Enter the 6-digit code.");
      return;
    }
    if (code === generatedCode) {
      setStep("success");
      // clear sensitive state
      setPassword("");
      setGeneratedCode(null);
      setCode("");
      // eslint-disable-next-line no-console
      console.log("2FA verification successful");
    } else {
      setError("Invalid code. Try again.");
    }
  };

  const handleResend = () => {
    send2FACode();
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
  <div className="flex-1 flex flex-col px-6 pt-12">
        {/* Logo/Brand Area */}
        <div className="text-center mb-12">
          <div className="mb-4 flex justify-center">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
              <span className="text-white text-2xl">N</span>
            </div>
          </div>
          <h1 className="mb-2">Welcome to NutriGuide</h1>
          <p className="text-muted-foreground">Your personal nutrition companion</p>
        </div>

        {/* Login Form or 2FA Step */}
        <div className="space-y-6 flex-1 mt-2">
          {step === "login" && (
            <>
              <div>
                <Label htmlFor="email" className="text-[13px] text-muted-foreground mb-2 block">
                  Email
                </Label>
                <Input 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email" 
                  placeholder="john@example.com" 
                  className="border-0 border-b border-border rounded-none px-0 py-3 text-lg focus-visible:ring-0 focus-visible:border-foreground"
                />
              </div>
              
              <div>
                <Label htmlFor="password" className="text-[13px] text-muted-foreground mb-2 block">
                  Password
                </Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter your password" 
                    className="border-0 border-b border-border rounded-none px-0 pr-2 py-3 text-lg focus-visible:ring-0 focus-visible:border-foreground"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  Forgot password?
                </button>
              </div>
            </>
          )}

          {step === "2fa" && (
            <div>
              <div className="mb-4">
                <h2 className="text-lg font-medium">Two-Factor Authentication</h2>
                <p className="text-sm text-muted-foreground">Enter the 6-digit code sent to <span className="font-medium">{email}</span>.</p>
              </div>

              <div>
                <Label htmlFor="code" className="text-[13px] text-muted-foreground mb-2 block">Code</Label>
                <Input
                  id="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  type="text"
                  placeholder="123456"
                  className="border-0 border-b border-border rounded-none px-0 py-3 text-lg focus-visible:ring-0 focus-visible:border-foreground"
                />
              </div>

              <div className="flex gap-2 mt-4">
                <Button onClick={handleVerify} className="bg-black text-white rounded-lg h-12 px-6">Verify</Button>
                <button onClick={handleResend} className="text-muted-foreground underline">Resend code</button>
                <button onClick={() => setStep("login")} className="ml-auto text-muted-foreground">Back</button>
              </div>
              <p className="text-sm text-muted-foreground mt-3">(This demo logs the code to the console.)</p>
            </div>
          )}

          {step === "success" && (
            <div className="text-center">
              <h2 className="text-lg font-medium">Signed in</h2>
              <p className="text-sm text-muted-foreground">You have successfully signed in (demo).</p>
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="pb-6 space-y-4">
          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded">
              {error}
            </div>
          )}
          
          {step === "login" && (
            <Button onClick={handleSignIn} className="w-full bg-black text-white rounded-lg h-14 text-lg hover:bg-black/90">
              Sign In
            </Button>
          )}
          
          {step === "2fa" && (
            <Button onClick={handleVerify} className="w-full bg-black text-white rounded-lg h-14 text-lg hover:bg-black/90">
              Verify Code
            </Button>
          )}
          
          <div className="text-center">
            <span className="text-muted-foreground">Don't have an account? </span>
            <button className="hover:underline">
              Sign Up
            </button>
          </div>

          {/* Home Indicator */}
          <div className="flex justify-center pt-2">
            <div className="w-32 h-1 bg-black/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
