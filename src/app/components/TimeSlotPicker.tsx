import React from "react";

interface TimeSlotPickerProps {
  slots: string[];
  selectedSlot: string | null;
  onSelect: (slot: string) => void;
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({ slots, selectedSlot, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {slots.map((slot) => (
        <button
          key={slot}
          type="button"
          className={`px-6 py-3 rounded-xl border font-semibold text-base shadow-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-200 ${selectedSlot === slot ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-gray-800 border-gray-300 hover:bg-blue-50'}`}
          onClick={() => onSelect(slot)}
        >
          {slot}
        </button>
      ))}
    </div>
  );
};

export default TimeSlotPicker; 