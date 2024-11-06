import React from 'react';
import { 
  User, Briefcase, Calendar, Mail, Phone, 
  Award, Book, Target, GitBranch, MessageSquare 
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  endorsements: number;
}

interface Interview {
  date: string;
  interviewer: string;
  type: string;
  notes: string;
  rating: number;
}

interface CandidateProfileProps {
  isOpen: boolean;
  onClose: () => void;
  candidate: {
    id: string;
    name: string;
    position: string;
    email: string;
    phone: string;
    experience: string;
    skills: Skill[];
    interviews: Interview[];
    strengths: string[];
    areas_of_improvement: string[];
  };
}

export default function CandidateProfile({ isOpen, onClose, candidate }: CandidateProfileProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Candidate Profile</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {/* Basic Info */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-white font-bold">
                    {candidate.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{candidate.name}</h3>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    {candidate.position}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  {candidate.email}
                </p>
                <p className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  {candidate.phone}
                </p>
                <p className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  {candidate.experience} years of experience
                </p>
              </div>
            </div>

            {/* Skills Assessment */}
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-500" />
                Skills Assessment
              </h4>
              <div className="space-y-3">
                {candidate.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.endorsements} endorsements</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interview History */}
          <div className="mb-8">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-indigo-500" />
              Interview History
            </h4>
            <div className="space-y-4">
              {candidate.interviews.map((interview, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <div>
                      <p className="font-medium text-gray-800">{interview.type}</p>
                      <p className="text-sm text-gray-600">with {interview.interviewer}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">{interview.date}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span 
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < interview.rating 
                                ? 'bg-green-500' 
                                : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{interview.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Evaluation Summary */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-green-500" />
                Key Strengths
              </h4>
              <ul className="space-y-2">
                {candidate.strengths.map((strength, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-orange-500" />
                Areas for Growth
              </h4>
              <ul className="space-y-2">
                {candidate.areas_of_improvement.map((area, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}