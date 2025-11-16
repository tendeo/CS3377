import React from "react";
import { useNavigate } from "react-router-dom";
import { Wifi, Battery } from "lucide-react";
import { Button } from "../components/ui/Button";

export function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

    const handleContinue = () => {
      navigate("/initial-survey");
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

      {/* Top Right Logout Button */}


      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-medium">Welcome</h1>
          <p className="text-muted-foreground mb-8">You have successfully logged in.</p>
            <Button onClick={handleContinue} className="bg-blue-600 text-white rounded-lg px-6 py-3 text-lg font-medium mb-4 hover:bg-blue-700">
              Continue
            </Button>
          <Button onClick={handleLogout} className="bg-red-600 text-white rounded-lg px-6 py-3 text-lg font-medium hover:bg-red-700">
            Logout
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
