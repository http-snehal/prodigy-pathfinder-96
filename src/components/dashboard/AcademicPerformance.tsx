import React from 'react';
import { Card } from '@/components/ui/card';
import { BookOpen, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const AcademicPerformance = () => {
  // Mock subject performance data
  const subjectData = [
    { subject: 'Math', score: 92, status: 'excellent' },
    { subject: 'Science', score: 88, status: 'good' },
    { subject: 'English', score: 78, status: 'average' },
    { subject: 'History', score: 85, status: 'good' },
    { subject: 'Geography', score: 72, status: 'average' },
    { subject: 'Art', score: 95, status: 'excellent' }
  ];

  // Mock monthly progress data
  const progressData = [
    { month: 'Aug', overall: 75 },
    { month: 'Sep', overall: 78 },
    { month: 'Oct', overall: 82 },
    { month: 'Nov', overall: 85 },
    { month: 'Dec', overall: 87 },
    { month: 'Jan', overall: 89 }
  ];

  const getBarColor = (status: string) => {
    switch (status) {
      case 'excellent': return '#10b981'; // success green
      case 'good': return '#3b82f6'; // primary blue  
      case 'average': return '#f59e0b'; // warning yellow
      default: return '#ef4444'; // destructive red
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-medium">{`${label}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="card-elevated">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="w-5 h-5 text-primary" />
        <h2 className="section-header">Academic Performance</h2>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Subject Scores Bar Chart */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            Subject Scores
            <span className="text-sm text-muted-foreground font-normal">(Current Term)</span>
          </h3>
          
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="subject" 
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  tickLine={{ stroke: '#e5e7eb' }}
                />
                <YAxis 
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  tickLine={{ stroke: '#e5e7eb' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="score" 
                  radius={[4, 4, 0, 0]}
                  fill="#3b82f6"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-success"></div>
              <span>Excellent (90+)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-primary"></div>
              <span>Good (80-89)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-warning"></div>
              <span>Average (70-79)</span>
            </div>
          </div>
        </div>

        {/* Progress Over Time */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-success" />
            Progress Trend
            <span className="text-sm text-muted-foreground font-normal">(6 Months)</span>
          </h3>
          
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  tickLine={{ stroke: '#e5e7eb' }}
                />
                <YAxis 
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  tickLine={{ stroke: '#e5e7eb' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="overall" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Insight */}
          <div className="bg-success/10 border border-success/20 rounded-lg p-3 mt-4">
            <p className="text-sm text-success font-medium">📈 Excellent progress! You've improved 14 points over 6 months</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AcademicPerformance;