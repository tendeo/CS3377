import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { TwoFactorPage } from "./pages/TwoFactorPage";
import { SuccessPage } from "./pages/SuccessPage";
import { FailurePage } from "./pages/FailurePage";
import { DashboardPage } from "./pages/DashboardPage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { SignUpPage } from "./pages/SignUpPage";
import { InitialSurveyPage } from "./pages/InitialSurveyPage";

export default function App() {
  return (
    <div className="size-full bg-muted/20 flex items-center justify-center min-h-screen">
      <div 
        id="phone-frame"
        className="w-[390px] h-[844px] bg-background relative overflow-hidden shadow-2xl"
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/2fa" element={<TwoFactorPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/failure" element={<FailurePage />} />
            <Route path="/initial-survey" element={<InitialSurveyPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
