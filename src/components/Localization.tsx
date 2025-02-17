import { useState } from "react";

const LocalizationButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <button
      onClick={toggle}
      className={`w-16 h-8 flex items-center rounded-full p-1 duration-300 relative bg-gray-300`}
    >
      <div
        className={`w-8 h-6 bg-white rounded-full shadow-md transform duration-300 flex items-center justify-center text-xs font-bold ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isOn ? "ID" : "EN"}
      </div>
    </button>
  );
};

export default LocalizationButton;
