import React from 'react';
import DashboardHeader from './dashboard/DashboardHeader';
import AcademicPerformance from './dashboard/AcademicPerformance';
import SkillsRadar from './dashboard/SkillsRadar';
import AIForecast from './dashboard/AIForecast';
import LearningInsights from './dashboard/LearningInsights';
import PeerBenchmark from './dashboard/PeerBenchmark';
import CareerGuidance from './dashboard/CareerGuidance';
import PersonalizedRecommendations from './dashboard/PersonalizedRecommendations';
import PersonalInfo from './dashboard/PersonalInfo';
import AIMentorWidget from './dashboard/AIMentorWidget';

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 p-4 lg:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="animate-fade-in">
          <DashboardHeader />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Academic & Skills */}
          <div className="lg:col-span-2 space-y-6">
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <AcademicPerformance />
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <SkillsRadar />
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <AIForecast />
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <PeerBenchmark />
            </div>
          </div>

          {/* Right Column - Insights & Guidance */}
          <div className="space-y-6">
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <LearningInsights />
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <CareerGuidance />
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <PersonalInfo />
            </div>
          </div>
        </div>

        {/* Full Width Recommendations */}
        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <PersonalizedRecommendations />
        </div>
      </div>

      {/* Floating AI Mentor Widget */}
      <AIMentorWidget />
    </div>
  );
};

export default StudentDashboard;