import React from 'react';
import { Card } from '@/components/ui/card';
import { Award, CheckCircle, BookOpen, Users } from 'lucide-react';

const NEPAlignment = () => {
  // Mock NEP 2020 alignment data
  const nepPrinciples = [
    {
      principle: 'Holistic Development',
      status: 'excellent',
      score: 92,
      description: 'Balanced academic and skill development',
      areas: ['Academic Excellence', 'Creative Arts', 'Critical Thinking']
    },
    {
      principle: 'Skill-based Learning',
      status: 'good',
      score: 85,
      description: 'Focus on practical and life skills',
      areas: ['Problem Solving', 'Communication', 'Teamwork']
    },
    {
      principle: 'Multilingual Approach',
      status: 'developing',
      score: 72,
      description: 'Language proficiency and cultural awareness',
      areas: ['English Proficiency', 'Regional Language', 'Global Awareness']
    },
    {
      principle: 'Continuous Assessment',
      status: 'excellent',
      score: 88,
      description: 'Regular evaluation and improvement tracking',
      areas: ['Formative Assessment', 'Peer Evaluation', 'Self Assessment']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-success';
      case 'good': return 'text-primary';
      case 'developing': return 'text-warning';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-success/10 border-success/20';
      case 'good': return 'bg-primary/10 border-primary/20';
      case 'developing': return 'bg-warning/10 border-warning/20';
      default: return 'bg-muted/10 border-muted/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent': return <CheckCircle className="w-4 h-4 text-success" />;
      case 'good': return <CheckCircle className="w-4 h-4 text-primary" />;
      case 'developing': return <BookOpen className="w-4 h-4 text-warning" />;
      default: return <BookOpen className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const overallCompliance = Math.round(
    nepPrinciples.reduce((sum, principle) => sum + principle.score, 0) / nepPrinciples.length
  );

  return (
    <Card className="card-elevated">
      <div className="flex items-center gap-2 mb-6">
        <Award className="w-5 h-5 text-primary" />
        <h2 className="section-header">NEP 2020 Alignment</h2>
      </div>

      {/* Overall Compliance Score */}
      <div className="mb-6 p-4 bg-gradient-to-r from-primary/10 to-success/10 border border-primary/20 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-foreground">Overall NEP Compliance</h3>
          <span className="text-2xl font-bold text-primary">{overallCompliance}%</span>
        </div>
        <div className="progress-bar mb-2">
          <div 
            className="progress-fill-good h-full rounded-full transition-all duration-500"
            style={{ width: `${overallCompliance}%` }}
          ></div>
        </div>
        <p className="text-sm text-muted-foreground">
          Emma's development aligns well with National Education Policy 2020 principles of holistic education
        </p>
      </div>

      {/* NEP Principles Breakdown */}
      <div className="space-y-4">
        {nepPrinciples.map((principle, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${getStatusBg(principle.status)}`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                {getStatusIcon(principle.status)}
                <h4 className="font-semibold text-foreground">{principle.principle}</h4>
              </div>
              <span className={`font-bold ${getStatusColor(principle.status)}`}>
                {principle.score}%
              </span>
            </div>

            <p className="text-sm text-muted-foreground mb-3">
              {principle.description}
            </p>

            {/* Areas of Focus */}
            <div className="flex flex-wrap gap-1">
              {principle.areas.map((area, areaIndex) => (
                <span 
                  key={areaIndex}
                  className="px-2 py-1 text-xs bg-card border border-border rounded-full text-muted-foreground"
                >
                  {area}
                </span>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-3">
              <div className="progress-bar">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    principle.status === 'excellent' ? 'progress-fill-excellent' :
                    principle.status === 'good' ? 'progress-fill-good' : 'progress-fill-average'
                  }`}
                  style={{ width: `${principle.score}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* NEP 2020 Information */}
      <div className="mt-6 p-4 bg-gradient-to-r from-card to-accent/10 border border-accent/20 rounded-lg">
        <div className="flex items-start gap-3">
          <Users className="w-5 h-5 text-accent-foreground mt-0.5" />
          <div>
            <h4 className="font-semibold text-accent-foreground mb-2">
              About NEP 2020 Alignment
            </h4>
            <p className="text-sm text-muted-foreground">
              The National Education Policy 2020 emphasizes holistic development, creativity, critical thinking, 
              and multidisciplinary learning. This report tracks Emma's progress across these key areas to ensure 
              comprehensive educational growth aligned with national standards.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NEPAlignment;