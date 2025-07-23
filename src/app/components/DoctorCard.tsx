import React from "react";

interface DoctorCardProps {
  name: string;
  specialty: string;
  image: string;
  status: string;
  bio: string;
  time: string;
  selected?: boolean;
  onClick?: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, specialty, image, status, bio, time, selected, onClick }) => {
  return (
    <div
      className={`relative cursor-pointer bg-white rounded-2xl shadow-[0_4px_24px_rgba(31,38,135,0.08)] p-4 flex flex-row items-center border transition-all duration-200 ${selected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:shadow-lg hover:border-blue-200'}`}
      onClick={onClick}
    >
      {/* Doctor Image */}
      <img src={image} alt={name} className="w-20 h-20 rounded-xl object-cover mr-4 border-2 border-gray-100" />
      {/* Card Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="text-lg font-bold text-gray-900 leading-tight truncate">{name}</div>
            <div className="text-sm text-primary font-medium leading-tight mb-1">{specialty}</div>
            <span className="inline-block bg-green-100 text-green-600 text-xs font-semibold rounded-lg px-2 py-0.5 mb-1">{status}</span>
          </div>
          {/* Heart Icon */}
          <button className="flex-shrink-0 ml-2 p-1 rounded-full hover:bg-gray-100 transition">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
            </svg>
          </button>
        </div>
        <div className="text-xs text-gray-500 truncate mb-2">{bio}</div>
        <div className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold rounded-lg px-3 py-1">{time}</div>
      </div>
    </div>
  );
};

export default DoctorCard; 