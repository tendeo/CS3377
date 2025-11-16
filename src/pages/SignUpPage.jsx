import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wifi, Battery } from "lucide-react";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import { Button } from "../components/ui/Button";

export function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSignUp = () => {
    setError("");

    // Validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (!confirmPassword) {
      setError("Please confirm your password.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Success
    setSuccess(true);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleBackToLogin = () => {
    navigate("/");
  };

  if (success) {
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
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-medium">Account Created</h1>
            <p className="text-muted-foreground mb-8">Your account has been successfully created.</p>
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
        {/* Logo/Brand Area */}
        <div className="text-center mb-12">
          <div className="mb-4 flex justify-center">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
              <span className="text-white text-2xl">N</span>
            </div>
          </div>
          <h1 className="mb-2">Create Account</h1>
          <p className="text-muted-foreground">Join NutriGuide today</p>
        </div>

        {/* Sign Up Form */}
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
            <Input 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password" 
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
              placeholder="Confirm your password" 
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
          
          <Button onClick={handleSignUp} className="w-full bg-black text-white rounded-lg h-14 text-lg hover:bg-black/90">
            Sign Up
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
