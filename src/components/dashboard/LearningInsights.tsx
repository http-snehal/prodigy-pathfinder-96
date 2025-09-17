import React from 'react';
import { Card } from '@/components/ui/card';
import { Eye, Volume2, Zap, Brain, Clock, TrendingDown } from 'lucide-react';

const LearningInsights = () => {
  // Mock learning insights data
  const learningStyle = {
    primary: 'Visual',
    secondary: 'Kinesthetic',
    breakdown: [
      { type: 'Visual', percentage: 65, icon: Eye, color: 'text-primary' },
      { type: 'Kinesthetic', percentage: 25, icon: Zap, color: 'text-warning' }, 
      { type: 'Auditory', percentage: 10, icon: Volume2, color: 'text-muted-foreground' }
    ]
  };

  const insights = [
    {
      title: 'Learning Style',
      value: `${learningStyle.primary} Learner`,
      icon: Eye,
      color: 'text-primary',
      description: 'Prefers visual aids, diagrams, and charts'
    },
    {
      title: 'Stress Level',
      value: 'Low',
      icon: Brain,
      color: 'text-success', 
      description: 'Maintains composure during assessments'
    },
    {
      title: 'Study Habit Score',
      value: '8.2/10',
      icon: Clock,
      color: 'text-success',
      description: 'Consistent and well-organized study routine'
    },
    {
      title: 'Attention Span',
      value: '35 minutes',
      icon: TrendingDown,
      color: 'text-warning',
      description: 'Above average for age group'
    }
  ];

  return (
    <Card className="card-elevated">
      <div className="flex items-center gap-2 mb-6">
        <Brain className="w-5 h-5 text-primary" />
        <h2 className="section-header">Learning Insights</h2>
      </div>

      <div className="space-y-4">
        {/* Learning Style Breakdown */}
        <div className="bg-gradient-to-br from-card to-primary/5 border border-primary/20 rounded-lg p-4">
          <h3 className="font-semibold text-foreground mb-3">Learning Style Analysis</h3>
          
          <div className="space-y-3">
            {learningStyle.breakdown.map((style, index) => (
              <div key={index} className="flex items-center gap-3">
                <style.icon className={`w-4 h-4 ${style.color}`} />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{style.type}</span>
                    <span className="text-sm text-muted-foreground">{style.percentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill-good h-full rounded-full transition-all duration-500"
                      style={{ width: `${style.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Insights Cards */}
        <div className="grid grid-cols-1 gap-3">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary/40 transition-all duration-300">
              <div className={`p-2 rounded-lg bg-muted/50 ${insight.color}`}>
                <insight.icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-foreground">{insight.title}</span>
                  <span className={`text-sm font-semibold ${insight.color}`}>{insight.value}</span>
                </div>
                <p className="text-xs text-muted-foreground">{insight.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Personalized Learning Tip */}
        <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
          <h4 className="font-semibold text-warning mb-2 flex items-center gap-2">
            💡 Personalized Learning Tip
          </h4>
          <p className="text-sm text-foreground">
            As a <strong>visual learner</strong>, try using mind maps, flowcharts, and colorful 
            diagrams to enhance retention. Consider breaking study sessions into 30-minute 
            focused blocks with short breaks.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default LearningInsights;