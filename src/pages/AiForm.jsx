import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";  // FontAwesome icon

export default function InputWithIcon() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col items-center gap-4 p-4 max-w-sm mx-auto">
      <div className="relative w-full">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
          className="p-2 border rounded-lg w-full pr-10"
        />
        
        {/* Icon show only if inputValue is not empty */}
        {inputValue && (
          <FaCheckCircle className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500 text-xl" />
        )}
      </div>
    </div>
  );
}
