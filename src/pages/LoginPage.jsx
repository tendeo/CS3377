import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wifi, Battery } from "lucide-react";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import { Button } from "../components/ui/Button";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Generate 6-digit code and log to console
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    // eslint-disable-next-line no-console
    console.log(`2FA Code: ${code}`);

    // Store code in sessionStorage so TwoFactorPage can verify it
    sessionStorage.setItem("verificationCode", code);
    sessionStorage.setItem("userEmail", email);

    // Navigate to 2FA page
    navigate("/2fa");
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

        {/* Login Form */}
        <div className="space-y-6">
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
            <button 
              onClick={() => navigate("/forgot-password")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Forgot password?
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
          
          <Button onClick={handleSignIn} className="w-full bg-black text-white rounded-lg h-14 text-lg hover:bg-black/90">
            Sign In
          </Button>
          
          <div className="text-center">
            <span className="text-muted-foreground">Don't have an account? </span>
            <button 
              onClick={() => navigate("/sign-up")}
              className="hover:underline"
            >
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
