import React from 'react';
import { GraduationCap, School, Calendar, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import studentProfileImage from '@/assets/student-profile.jpg';

const DashboardHeader = () => {
  // Mock student data
  const student = {
    name: "Emma Johnson",
    class: "Class 8A",
    school: "Greenwood International School",
    academicYear: "2024-25",
    overallScore: 87
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return 'text-success';
    if (score >= 80) return 'text-primary';
    if (score >= 70) return 'text-warning';
    return 'text-destructive';
  };

  const getPerformanceLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Good';
    if (score >= 70) return 'Average';
    return 'Needs Improvement';
  };

  return (
    <Card className="card-elevated">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
        {/* Student Profile */}
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="relative">
            <img 
              src={studentProfileImage} 
              alt="Student Profile" 
              className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-primary/20"
            />
            <div className="absolute -bottom-2 -right-2 bg-success text-success-foreground rounded-full p-1">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          
          <div className="text-center lg:text-left">
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">{student.name}</h1>
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 text-muted-foreground mt-1">
              <div className="flex items-center gap-1">
                <GraduationCap className="w-4 h-4" />
                <span>{student.class}</span>
              </div>
              <div className="flex items-center gap-1">
                <School className="w-4 h-4" />
                <span>{student.school}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{student.academicYear}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Meter */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="text-center">
            <div className="relative w-32 h-32">
              {/* Circular Progress */}
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-muted"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 50}`}
                  strokeDashoffset={`${2 * Math.PI * 50 * (1 - student.overallScore / 100)}`}
                  className={getPerformanceColor(student.overallScore)}
                  strokeLinecap="round"
                />
              </svg>
              
              {/* Score Display */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`text-2xl font-bold ${getPerformanceColor(student.overallScore)}`}>
                  {student.overallScore}%
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  {getPerformanceLabel(student.overallScore)}
                </span>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-foreground mt-2">Overall Performance</h3>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DashboardHeader;