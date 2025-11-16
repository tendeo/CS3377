import React from "react";
import { useNavigate } from "react-router-dom";
import { Wifi, Battery } from "lucide-react";
import { Button } from "../components/ui/Button";

export function SuccessPage() {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
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
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-3xl">✓</span>
            </div>
          </div>
          <h1 className="mb-2 text-2xl font-medium">Success!</h1>
          <p className="text-muted-foreground">You have successfully signed in.</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pb-6 space-y-4 px-6">
        <Button onClick={handleBackToLogin} className="w-full bg-black text-white rounded-lg h-14 text-lg hover:bg-black/90">
          Back to Login
        </Button>

        {/* Home Indicator */}
        <div className="flex justify-center pt-2">
          <div className="w-32 h-1 bg-black/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
