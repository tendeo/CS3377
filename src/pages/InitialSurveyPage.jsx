import React, { useState } from "react";
import { Wifi, Battery, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DIETARY_OPTIONS = [
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Dairy-Free",
  "Nut-Free",
  "Keto",
  "Paleo",
  "Halal",
  "Pescatarian",
  "Kosher",
];

const CUISINE_OPTIONS = [
  "American",
  "Italian",
  "Chinese",
  "Mexican",
  "Japanese",
  "Indian",
  "Thai",
  "Mediterranean",
];

const PRICE_OPTIONS = ["Budget", "Moderate", "Premium", "No limit"];

const PRIORITY_OPTIONS = [
  "Health & Nutrition",
  "Sustainability",
  "Animal Welfare",
  "Taste & Flavor",
  "Convenience",
  "Cultural / Traditional",
  "Organic Ingredients",
  "Local Sourcing",
];

export function InitialSurveyPage() {
  const [step, setStep] = useState(1);
  const [selectedDietary, setSelectedDietary] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedPriorities, setSelectedPriorities] = useState([]);
  const navigate = useNavigate();

  const toggleSingle = (option, current, setter) => {
    setter(current === option ? "" : option);
  };

  const toggleMulti = (option, selected, setter) => {
    setter((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Save all answers
      localStorage.setItem("survey", JSON.stringify({
        dietary: selectedDietary,
        cuisines: selectedCuisines,
        price: selectedPrice,
        priorities: selectedPriorities,
      }));
      navigate("/dashboard");
    }
  };

  const handleBack = () => setStep(step - 1);

  const isStepValid = () => {
    switch (step) {
      case 1: return selectedDietary.length > 0;
      case 2: return selectedCuisines.length > 0;
      case 3: return selectedPrice !== "";
      case 4: return selectedPriorities.length > 0;
      default: return true;
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Status Bar */}
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-medium">Initial Survey</h1>
          <p className="text-sm text-gray-600 mt-2">Step {step} of 4</p>
        </div>

        <div className="w-full max-w-md mx-auto">
          {/* Step 1: Dietary */}
          {step === 1 && (
            <>
              <h2 className="text-lg font-semibold text-center mb-6">
                Any dietary restrictions?
              </h2>
              <div className="space-y-3">
                {DIETARY_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => toggleMulti(opt, selectedDietary, setSelectedDietary)}
                    className={`w-full px-5 py-4 rounded-xl border-2 text-left font-medium transition-all flex justify-between items-center ${
                      selectedDietary.includes(opt)
                        ? "bg-black text-white border-black"
                        : "bg-white border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {opt}
                    {selectedDietary.includes(opt) && <Check className="h-5 w-5" />}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Step 2: Cuisines */}
          {step === 2 && (
            <>
              <h2 className="text-lg font-semibold text-center mb-6">
                Favorite cuisines?
              </h2>
              <div className="space-y-3">
                {CUISINE_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => toggleMulti(opt, selectedCuisines, setSelectedCuisines)}
                    className={`w-full px-5 py-4 rounded-xl border-2 text-left font-medium transition-all flex justify-between items-center ${
                      selectedCuisines.includes(opt)
                        ? "bg-black text-white border-black"
                        : "bg-white border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {opt}
                    {selectedCuisines.includes(opt) && <Check className="h-5 w-5" />}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Step 3: Price */}
          {step === 3 && (
            <>
              <h2 className="text-lg font-semibold text-center mb-6">
                What is your price preference?
              </h2>
              <div className="space-y-3">
                {PRICE_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => toggleSingle(opt, selectedPrice, setSelectedPrice)}
                    className={`w-full px-5 py-4 rounded-xl border-2 text-left font-medium transition-all flex justify-between items-center ${
                      selectedPrice === opt
                        ? "bg-black text-white border-black"
                        : "bg-white border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {opt}
                    {selectedPrice === opt && <Check className="h-5 w-5" />}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Step 4: Priorities */}
          {step === 4 && (
            <>
              <h2 className="text-lg font-semibold text-center mb-6">
                What matters most to you? (Select all that apply)
              </h2>
              <div className="space-y-3">
                {PRIORITY_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => toggleMulti(opt, selectedPriorities, setSelectedPriorities)}
                    className={`w-full px-5 py-4 rounded-xl border-2 text-left font-medium transition-all flex justify-between items-center ${
                      selectedPriorities.includes(opt)
                        ? "bg-black text-white border-black"
                        : "bg-white border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {opt}
                    {selectedPriorities.includes(opt) && <Check className="h-5 w-5" />}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Navigation */}
        <div className="w-full max-w-md mx-auto mt-10 space-y-3">
          {step > 1 && (
            <button
              onClick={handleBack}
              className="w-full h-12 rounded-xl bg-gray-100 text-black font-medium hover:bg-gray-200 transition"
            >
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!isStepValid()}
            className={`w-full h-14 rounded-xl font-semibold transition-all ${
              isStepValid()
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {step === 4 ? "Finish & Continue" : "Next"}
          </button>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="pb-6 px-6">
        <div className="flex justify-center pt-2">
          <div className="w-32 h-1 bg-black/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
