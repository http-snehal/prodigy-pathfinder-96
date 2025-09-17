import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain, Users, MessageCircle, Lightbulb, Crown } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const SkillsRadar = () => {
  // Mock skills data
  const skillsData = [
    { skill: 'Problem Solving', score: 92, fullMark: 100 },
    { skill: 'Communication', score: 78, fullMark: 100 },
    { skill: 'Teamwork', score: 85, fullMark: 100 },
    { skill: 'Critical Thinking', score: 88, fullMark: 100 },
    { skill: 'Leadership', score: 74, fullMark: 100 }
  ];

  // Achievement badges
  const badges = [
    { id: 1, title: 'Critical Thinker', emoji: '🧠', level: 'Advanced', color: 'badge-skill' },
    { id: 2, title: 'Creative Innovator', emoji: '🎨', level: 'Expert', color: 'badge-creative' },
    { id: 3, title: 'Team Player', emoji: '🤝', level: 'Proficient', color: 'badge-achievement' }
  ];

  const getSkillIcon = (skill: string) => {
    switch (skill) {
      case 'Problem Solving': return <Brain className="w-4 h-4" />;
      case 'Communication': return <MessageCircle className="w-4 h-4" />;
      case 'Teamwork': return <Users className="w-4 h-4" />;
      case 'Critical Thinking': return <Lightbulb className="w-4 h-4" />;
      case 'Leadership': return <Crown className="w-4 h-4" />;
      default: return <Brain className="w-4 h-4" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-success';
    if (score >= 75) return 'text-primary';
    return 'text-warning';
  };

  return (
    <Card className="card-elevated">
      <div className="flex items-center gap-2 mb-6">
        <Brain className="w-5 h-5 text-primary" />
        <h2 className="section-header">Aptitude & Skills</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skills Radar Chart */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Skills Assessment</h3>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillsData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis 
                  tick={{ fill: '#6b7280', fontSize: 11 }}
                  className="text-xs"
                />
                <PolarRadiusAxis 
                  tick={{ fill: '#6b7280', fontSize: 10 }}
                  domain={[0, 100]}
                  angle={90}
                />
                <Radar
                  name="Skills"
                  dataKey="score"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.1}
                  strokeWidth={2}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Skills Breakdown */}
          <div className="space-y-2 mt-4">
            {skillsData.map((skill) => (
              <div key={skill.skill} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-2">
                  {getSkillIcon(skill.skill)}
                  <span className="font-medium text-sm">{skill.skill}</span>
                </div>
                <span className={`font-semibold ${getScoreColor(skill.score)}`}>
                  {skill.score}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Badges */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Achievement Badges</h3>
          
          <div className="space-y-3">
            {badges.map((badge) => (
              <div 
                key={badge.id} 
                className="flex items-center gap-3 p-3 bg-gradient-to-r from-card to-primary/5 border border-primary/20 rounded-lg hover:border-primary/40 transition-all duration-300"
              >
                <div className="text-2xl">{badge.emoji}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{badge.title}</h4>
                  <p className="text-sm text-muted-foreground">Level: {badge.level}</p>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}>
                  Earned
                </div>
              </div>
            ))}
          </div>

          {/* Skills Improvement Suggestion */}
          <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
            <h4 className="font-semibold text-warning mb-2">💡 Improvement Focus</h4>
            <p className="text-sm text-muted-foreground">
              Work on <strong>Communication skills</strong> to unlock the next level. 
              Try joining debate club or presentation activities!
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SkillsRadar;