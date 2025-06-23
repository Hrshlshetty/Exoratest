
import React from 'react';
import { TeamMember } from '../../types';

interface TeamMemberCardProps {
  member: TeamMember;
  onSelect: (member: TeamMember) => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, onSelect }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      onClick={() => onSelect(member)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(member)}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${member.name}`}
    >
      <img
        className="w-32 h-32 rounded-full object-cover object-center mb-4 shadow-md border-4 border-green-100"
        src={member.imageUrl}
        alt={member.name}
        loading="lazy"
      />
      <h3 className="text-xl font-bold text-green-700 mb-1">{member.name}</h3>
      <p className="text-sm font-semibold text-stone-600 mb-1">{member.role}</p>
      <p className="text-xs text-stone-500">{member.location}</p>
      {/* Bio is removed from card to be shown in modal */}
    </div>
  );
};

export default TeamMemberCard;
