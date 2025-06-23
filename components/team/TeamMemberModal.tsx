
import React, { useEffect } from 'react';
import { TeamMember } from '../../types';

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ member, onClose }) => {
  useEffect(() => {
    if (!member) return;

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [member, onClose]);

  if (!member) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 transition-opacity duration-300 ease-in-out"
      onClick={onClose} // Close on overlay click
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${member.id}`}
      aria-describedby={`modal-description-${member.id}`}
    >
      <div 
        className="bg-white rounded-lg shadow-xl overflow-hidden max-w-lg w-full transform transition-all duration-300 ease-in-out scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside modal content
      >
        <div className="relative p-6 md:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-stone-500 hover:text-stone-700 transition-colors"
            aria-label="Close modal"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="text-center">
            <img
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-center mx-auto mb-4 shadow-lg border-4 border-green-200"
              src={member.imageUrl} // Using the same image, could be a larger version if available
              alt={member.name}
            />
            <h2 id={`modal-title-${member.id}`} className="text-2xl md:text-3xl font-bold text-green-700 mb-1">{member.name}</h2>
            <p className="text-md md:text-lg font-semibold text-stone-600 mb-1">{member.role}</p>
            <p className="text-sm text-stone-500 mb-4">{member.location}</p>
          </div>
          
          <div id={`modal-description-${member.id}`} className="text-sm md:text-base text-stone-700 leading-relaxed space-y-3">
            {member.experience.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal;
