import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, GraduationCap, BookOpen, Heart } from 'lucide-react';

const PersonalizedRecommendations = () => {
  // Mock recommendations for different stakeholders
  const recommendations = {
    student: [
      {
        title: 'Practice Problem-Solving',
        description: 'Spend 20 minutes daily on math puzzles to strengthen analytical thinking',
        action: 'Try Khan Academy exercises',
        priority: 'high'
      },
      {
        title: 'Join Science Club',
        description: 'Connect with peers who share your interests in scientific discovery',
        action: 'Register for next semester',
        priority: 'medium'
      },
      {
        title: 'Improve Communication',
        description: 'Practice public speaking to enhance confidence in presentations',
        action: 'Join debate team tryouts',
        priority: 'high'
      }
    ],
    parent: [
      {
        title: 'Create Study Environment',
        description: 'Set up a distraction-free zone with good lighting and organization tools',
        action: 'Designate study corner',
        priority: 'high'
      },
      {
        title: 'Encourage Creative Time',
        description: 'Balance academic work with creative activities to foster innovation',
        action: 'Art supplies or music lessons',
        priority: 'medium'
      },
      {
        title: 'Monitor Screen Time',
        description: 'Ensure healthy balance between digital learning and offline activities',
        action: 'Set device time limits',
        priority: 'medium'
      }
    ],
    teacher: [
      {
        title: 'Visual Learning Support',
        description: 'Incorporate more diagrams, charts, and visual aids in lessons',
        action: 'Use interactive whiteboards',
        priority: 'high'
      },
      {
        title: 'Collaborative Projects',
        description: 'Pair with students who excel in communication to build skills',
        action: 'Group assignment planning',
        priority: 'high'
      },
      {
        title: 'Advanced Math Challenges',
        description: 'Provide enrichment activities to maintain engagement and growth',
        action: 'Math olympiad preparation',
        priority: 'medium'
      }
    ]
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-destructive/30 bg-destructive/5';
      case 'medium': return 'border-warning/30 bg-warning/5';
      default: return 'border-success/30 bg-success/5';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high': return 'High Priority';
      case 'medium': return 'Medium Priority';
      default: return 'Low Priority';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return '🔴';
      case 'medium': return '🟡';
      default: return '🟢';
    }
  };

  const stakeholders = [
    { key: 'student', title: 'For You', icon: GraduationCap, color: 'text-primary' },
    { key: 'parent', title: 'For Parents', icon: Heart, color: 'text-warning' },
    { key: 'teacher', title: 'For Teachers', icon: BookOpen, color: 'text-success' }
  ];

  return (
    <Card className="card-elevated">
      <div className="flex items-center gap-2 mb-6">
        <Users className="w-5 h-5 text-primary" />
        <h2 className="section-header">Personalized AI Recommendations</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {stakeholders.map((stakeholder) => (
          <div key={stakeholder.key} className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <stakeholder.icon className={`w-5 h-5 ${stakeholder.color}`} />
              <h3 className="text-lg font-semibold text-foreground">{stakeholder.title}</h3>
            </div>

            <div className="space-y-3">
              {recommendations[stakeholder.key as keyof typeof recommendations].map((rec, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${getPriorityColor(rec.priority)}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground text-sm">{rec.title}</h4>
                    <div className="flex items-center gap-1 text-xs">
                      <span>{getPriorityIcon(rec.priority)}</span>
                      <span className="text-muted-foreground">{getPriorityText(rec.priority)}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {rec.description}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-primary">Action:</span>
                    <span className="text-xs text-foreground">{rec.action}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Insights for each stakeholder */}
            <div className="bg-gradient-to-r from-primary/5 to-success/5 border border-primary/20 rounded-lg p-3">
              <p className="text-xs text-muted-foreground">
                {stakeholder.key === 'student' && "💡 Focus on consistent daily practice rather than long cramming sessions"}
                {stakeholder.key === 'parent' && "🤝 Your support in creating structure will boost Emma's confidence"}
                {stakeholder.key === 'teacher' && "📊 Emma responds well to visual learning and peer collaboration"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Overall AI Insight */}
      <div className="mt-6 bg-gradient-to-r from-primary/10 to-success/10 border border-primary/30 rounded-lg p-4">
        <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
          🤖 AI Collaborative Insight
        </h4>
        <p className="text-sm text-foreground">
          <strong>Emma thrives with visual learning and structured support.</strong> When student practices consistently, 
          parents provide organized environment, and teachers use visual aids, Emma's performance improves by an average of 
          <strong> 15-20%</strong> based on similar student profiles.
        </p>
      </div>
    </Card>
  );
};

export default PersonalizedRecommendations;