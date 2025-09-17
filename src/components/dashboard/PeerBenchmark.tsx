import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, TrendingUp, Award, Target } from 'lucide-react';

const PeerBenchmark = () => {
  // Mock benchmark data
  const benchmarkData = [
    {
      subject: 'Mathematics',
      studentScore: 92,
      schoolAverage: 78,
      nationalAverage: 75,
      status: 'excellent'
    },
    {
      subject: 'Science',
      studentScore: 88,
      schoolAverage: 82,
      nationalAverage: 79,
      status: 'good'
    },
    {
      subject: 'English',
      studentScore: 78,
      schoolAverage: 85,
      nationalAverage: 81,
      status: 'below-school'
    },
    {
      subject: 'Social Studies',
      studentScore: 85,
      schoolAverage: 80,
      nationalAverage: 77,
      status: 'good'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-success';
      case 'good': return 'text-primary';
      case 'below-school': return 'text-warning';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent': return <Award className="w-4 h-4" />;
      case 'good': return <TrendingUp className="w-4 h-4" />;
      case 'below-school': return <Target className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  const getComparisonText = (studentScore: number, schoolAverage: number, nationalAverage: number) => {
    const schoolDiff = studentScore - schoolAverage;
    const nationalDiff = studentScore - nationalAverage;
    
    if (schoolDiff > 5 && nationalDiff > 5) {
      return `Excellent! ${schoolDiff > 0 ? '+' : ''}${schoolDiff} above school, ${nationalDiff > 0 ? '+' : ''}${nationalDiff} above national`;
    } else if (schoolDiff > 0 && nationalDiff > 0) {
      return `Good performance, above both averages`;
    } else if (schoolDiff < 0) {
      return `${Math.abs(schoolDiff)} points below school average`;
    } else {
      return `Meeting expectations`;
    }
  };

  return (
    <Card className="card-elevated">
      <div className="flex items-center gap-2 mb-6">
        <Users className="w-5 h-5 text-primary" />
        <h2 className="section-header">Peer Benchmarking</h2>
      </div>

      <div className="space-y-4">
        {benchmarkData.map((item, index) => (
          <div key={index} className="border border-border rounded-lg p-4 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                {getStatusIcon(item.status)}
                {item.subject}
              </h3>
              <span className={`font-bold text-lg ${getStatusColor(item.status)}`}>
                {item.studentScore}%
              </span>
            </div>

            {/* Comparison Bars */}
            <div className="space-y-2 mb-3">
              {/* Student Score */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground min-w-[60px]">You</span>
                <div className="flex-1 relative">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill-excellent h-full rounded-full transition-all duration-500"
                      style={{ width: `${item.studentScore}%` }}
                    ></div>
                  </div>
                  <span className="absolute right-0 top-0 -mt-5 text-xs font-semibold text-foreground">
                    {item.studentScore}%
                  </span>
                </div>
              </div>

              {/* School Average */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground min-w-[60px]">School</span>
                <div className="flex-1 relative">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill-good h-full rounded-full transition-all duration-500"
                      style={{ width: `${item.schoolAverage}%` }}
                    ></div>
                  </div>
                  <span className="absolute right-0 top-0 -mt-5 text-xs text-muted-foreground">
                    {item.schoolAverage}%
                  </span>
                </div>
              </div>

              {/* National Average */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground min-w-[60px]">National</span>
                <div className="flex-1 relative">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill-average h-full rounded-full transition-all duration-500"
                      style={{ width: `${item.nationalAverage}%` }}
                    ></div>
                  </div>
                  <span className="absolute right-0 top-0 -mt-5 text-xs text-muted-foreground">
                    {item.nationalAverage}%
                  </span>
                </div>
              </div>
            </div>

            {/* Comparison Text */}
            <p className="text-xs text-muted-foreground bg-muted/50 rounded-lg p-2">
              {getComparisonText(item.studentScore, item.schoolAverage, item.nationalAverage)}
            </p>
          </div>
        ))}

        {/* Overall Performance Summary */}
        <div className="bg-success/10 border border-success/20 rounded-lg p-4">
          <h4 className="font-semibold text-success mb-2 flex items-center gap-2">
            🏆 Performance Summary
          </h4>
          <p className="text-sm text-foreground">
            You're performing <strong>above average</strong> in 3 out of 4 subjects compared to both 
            school and national benchmarks. Focus on English to reach consistent excellence across all areas.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PeerBenchmark;