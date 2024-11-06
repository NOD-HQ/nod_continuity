import React, { useState } from 'react';
import { BarChart, Users, Clock, Brain, Star, TrendingUp, MessageSquare } from 'lucide-react';
import CandidateProfile from './CandidateProfile';

export default function Dashboard() {
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);

  const stats = [
    { icon: Users, label: 'Interviews Conducted', value: '124' },
    { icon: Clock, label: 'Avg. Interview Duration', value: '45m' },
    { icon: BarChart, label: 'Success Rate', value: '76%' },
    { icon: Brain, label: 'AI Insights Generated', value: '892' },
  ];

  const mockCandidate = {
    id: '1',
    name: 'Sarah Chen',
    position: 'Senior Frontend Developer',
    email: 'sarah.chen@email.com',
    phone: '+1 (555) 123-4567',
    experience: '8',
    skills: [
      { name: 'React', level: 95, endorsements: 12 },
      { name: 'TypeScript', level: 90, endorsements: 10 },
      { name: 'System Design', level: 85, endorsements: 8 },
      { name: 'Node.js', level: 80, endorsements: 7 },
    ],
    interviews: [
      {
        date: '2024-03-15',
        interviewer: 'John Smith',
        type: 'Technical Interview',
        notes: 'Excellent problem-solving skills. Strong React expertise. Demonstrated deep understanding of frontend architecture.',
        rating: 5
      },
      {
        date: '2024-03-14',
        interviewer: 'Emily Johnson',
        type: 'System Design',
        notes: 'Great approach to scalability challenges. Clear communication of technical decisions.',
        rating: 4
      },
      {
        date: '2024-03-13',
        interviewer: 'Michael Brown',
        type: 'Cultural Fit',
        notes: 'Strong team player. Shows great leadership potential.',
        rating: 5
      }
    ],
    strengths: [
      'Exceptional problem-solving abilities',
      'Strong technical communication',
      'Deep React ecosystem knowledge',
      'Experience with large-scale applications'
    ],
    areas_of_improvement: [
      'Could strengthen DevOps knowledge',
      'More experience with mobile development needed',
      'Backend development exposure'
    ]
  };

  const recentInterviews = [
    {
      candidate: 'Sarah Chen',
      position: 'Senior Frontend Developer',
      date: '2024-03-15',
      score: 4.8,
      notes: 'Excellent problem-solving skills. Strong React expertise.',
      status: 'Advancing'
    },
    {
      candidate: 'Michael Rodriguez',
      position: 'DevOps Engineer',
      date: '2024-03-14',
      score: 4.2,
      notes: 'Good AWS knowledge. Needs improvement in CI/CD.',
      status: 'Under Review'
    },
    {
      candidate: 'Emma Watson',
      position: 'Product Manager',
      date: '2024-03-13',
      score: 4.5,
      notes: 'Strong leadership qualities. Great product vision.',
      status: 'Advancing'
    }
  ];

  const performanceMetrics = [
    { label: 'Technical Skills', current: 85, previous: 75 },
    { label: 'Communication', current: 90, previous: 88 },
    { label: 'Problem Solving', current: 82, previous: 70 },
    { label: 'Cultural Fit', current: 95, previous: 92 }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ icon: Icon, label, value }) => (
          <div key={label} className="bg-white rounded-xl shadow-sm p-6 transition-transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <Icon className="h-8 w-8 text-indigo-500" />
              <span className="text-2xl font-bold text-gray-800">{value}</span>
            </div>
            <h3 className="text-gray-600 font-medium">{label}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Interviews */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Recent Interviews</h2>
            <button className="btn btn-secondary text-sm">View All</button>
          </div>
          <div className="space-y-4">
            {recentInterviews.map((interview, index) => (
              <div 
                key={index} 
                className="border-b border-gray-100 last:border-0 pb-4 last:pb-0 cursor-pointer hover:bg-gray-50 rounded-lg p-3 transition-colors"
                onClick={() => setSelectedCandidate(mockCandidate)}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-800">{interview.candidate}</h3>
                    <p className="text-sm text-gray-600">{interview.position}</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="font-medium">{interview.score}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{interview.notes}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{interview.date}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    interview.status === 'Advancing' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {interview.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Performance Tracking</h2>
            <div className="flex items-center space-x-2 text-sm">
              <span className="flex items-center">
                <div className="w-3 h-3 bg-indigo-500 rounded-full mr-1"></div>
                Current
              </span>
              <span className="flex items-center">
                <div className="w-3 h-3 bg-gray-300 rounded-full mr-1"></div>
                Previous
              </span>
            </div>
          </div>
          <div className="space-y-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">{metric.label}</span>
                  <span className="text-sm font-medium text-gray-800">
                    {metric.current}% 
                    <span className={`ml-2 text-xs ${
                      metric.current > metric.previous 
                        ? 'text-green-500' 
                        : 'text-red-500'
                    }`}>
                      {metric.current > metric.previous ? '↑' : '↓'}
                      {Math.abs(metric.current - metric.previous)}%
                    </span>
                  </span>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: `${metric.current}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1 mt-1">
                    <div
                      className="bg-gray-300 h-1 rounded-full"
                      style={{ width: `${metric.previous}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Candidate Profile Modal */}
      <CandidateProfile
        isOpen={!!selectedCandidate}
        onClose={() => setSelectedCandidate(null)}
        candidate={selectedCandidate}
      />
    </div>
  );
}