import React from 'react';
import { Card } from '@/components/ui/card';
import { Briefcase, Code, BarChart3, Stethoscope, Palette, Gavel } from 'lucide-react';

const CareerGuidance = () => {
  // Mock career recommendations based on student profile
  const careerRecommendations = [
    {
      title: 'Software Engineer',
      emoji: '💻',
      icon: Code,
      match: 92,
      reason: 'Strong problem-solving & logical thinking',
      skills: ['Mathematics', 'Critical Thinking', 'Problem Solving']
    },
    {
      title: 'Data Analyst',
      emoji: '📊',
      icon: BarChart3,
      match: 88,
      reason: 'Excellent analytical & mathematical skills',
      skills: ['Mathematics', 'Data Analysis', 'Pattern Recognition']
    },
    {
      title: 'Doctor',
      emoji: '👩‍⚕️',
      icon: Stethoscope,
      match: 75,
      reason: 'Strong science foundation & helping nature',
      skills: ['Science', 'Communication', 'Critical Thinking']
    },
    {
      title: 'Graphic Designer',
      emoji: '🎨',
      icon: Palette,
      match: 78,
      reason: 'Creative thinking & visual learning style',
      skills: ['Art', 'Creativity', 'Visual Learning']
    }
  ];

  // Career Readiness Index
  const careerReadinessScore = 82;

  const getMatchColor = (match: number) => {
    if (match >= 85) return 'text-success';
    if (match >= 75) return 'text-primary';
    return 'text-warning';
  };

  const getReadinessColor = (score: number) => {
    if (score >= 80) return 'text-success';
    if (score >= 70) return 'text-primary';
    return 'text-warning';
  };

  return (
    <Card className="card-elevated">
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="w-5 h-5 text-primary" />
        <h2 className="section-header">Career Guidance</h2>
      </div>

      {/* Career Readiness Index */}
      <div className="mb-6 p-4 bg-gradient-to-r from-primary/10 to-success/10 border border-primary/20 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-foreground">Career Readiness Index</h3>
          <span className={`text-xl font-bold ${getReadinessColor(careerReadinessScore)}`}>
            {careerReadinessScore}/100
          </span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill-good h-full rounded-full transition-all duration-500"
            style={{ width: `${careerReadinessScore}%` }}
          ></div>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Based on academic performance, skills development, and future readiness
        </p>
      </div>

      {/* Career Recommendations */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground mb-3">Recommended Career Paths</h3>
        
        {careerRecommendations.map((career, index) => (
          <div 
            key={index} 
            className="recommendation-card hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{career.emoji}</span>
                <career.icon className="w-5 h-5 text-primary" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-foreground">{career.title}</h4>
                  <div className="flex items-center gap-1">
                    <span className={`text-sm font-bold ${getMatchColor(career.match)}`}>
                      {career.match}%
                    </span>
                    <span className="text-xs text-muted-foreground">match</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-2">{career.reason}</p>
                
                <div className="flex flex-wrap gap-1">
                  {career.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Items */}
      <div className="mt-6 bg-warning/10 border border-warning/20 rounded-lg p-4">
        <h4 className="font-semibold text-warning mb-2 flex items-center gap-2">
          🎯 Next Steps for Career Development
        </h4>
        <ul className="text-sm text-foreground space-y-1 ml-4">
          <li>• Explore coding bootcamps or programming clubs</li>
          <li>• Consider mathematics olympiad participation</li>
          <li>• Join science fair competitions</li>
          <li>• Develop communication skills through debates</li>
        </ul>
      </div>
    </Card>
  );
};

export default CareerGuidance;