const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-between mb-8">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`relative flex-1 text-center ${
            currentStep === index
              ? "text-blue-600"
              : currentStep > index
              ? "text-green-600"
              : "text-gray-400"
          }`}
        >
          <div
            className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2 transition-all duration-300 ease-in-out ${
              currentStep === index
                ? "bg-blue-600 text-white"
                : currentStep > index
                ? "bg-green-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </div>
          <div className="text-sm font-medium">{step.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
