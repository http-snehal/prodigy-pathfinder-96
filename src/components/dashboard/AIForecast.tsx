import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain, TrendingUp, Target, Zap } from 'lucide-react';

const AIForecast = () => {
  // Mock forecast data
  const predictions = [
    {
      area: 'Mathematics',
      current: 78,
      predicted: 88,
      timeframe: '3 months',
      improvement: 10
    },
    {
      area: 'Communication Skills', 
      current: 72,
      predicted: 85,
      timeframe: '4 months',
      improvement: 13
    },
    {
      area: 'Overall Performance',
      current: 82,
      predicted: 91,
      timeframe: '6 months', 
      improvement: 9
    }
  ];

  const getImprovementColor = (improvement: number) => {
    if (improvement >= 10) return 'text-success';
    if (improvement >= 5) return 'text-primary';
    return 'text-warning';
  };

  const getProgressBarFill = (current: number, predicted: number) => {
    return (current / predicted) * 100;
  };

  return (
    <Card className="card-elevated">
      <div className="flex items-center gap-2 mb-6">
        <Brain className="w-5 h-5 text-primary" />
        <h2 className="section-header">AI Forecast & Predictions</h2>
      </div>

      <div className="space-y-4">
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-primary">Potential Impact Analysis</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Based on current learning patterns and performance trends, here's what you could achieve with focused improvement:
          </p>
        </div>

        <div className="space-y-4">
          {predictions.map((pred, index) => (
            <div key={index} className="border border-border rounded-lg p-4 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  <h4 className="font-semibold text-foreground">{pred.area}</h4>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className={`w-4 h-4 ${getImprovementColor(pred.improvement)}`} />
                  <span className={`font-semibold text-sm ${getImprovementColor(pred.improvement)}`}>
                    +{pred.improvement} points
                  </span>
                </div>
              </div>

              {/* Progress Visualization */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Current: {pred.current}%</span>
                  <span>Predicted: {pred.predicted}%</span>
                </div>
                
                <div className="relative">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill-good h-full rounded-full transition-all duration-500"
                      style={{ width: `${getProgressBarFill(pred.current, pred.predicted)}%` }}
                    ></div>
                  </div>
                  <div 
                    className="absolute top-0 h-full w-1 bg-success rounded-full"
                    style={{ left: `${(pred.predicted / 100) * 100}%` }}
                  ></div>
                </div>
                
                <p className="text-xs text-muted-foreground mt-1">
                  Expected timeframe: <span className="font-medium">{pred.timeframe}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Recommendations */}
        <div className="bg-gradient-to-r from-success/10 to-primary/10 border border-success/20 rounded-lg p-4">
          <h4 className="font-semibold text-success mb-2 flex items-center gap-2">
            <Brain className="w-4 h-4" />
            AI Recommendation
          </h4>
          <p className="text-sm text-foreground">
            Focus on <strong>structured practice sessions</strong> in Mathematics and join 
            <strong> communication workshops</strong> to achieve these predictions. 
            Consistent effort over the next 3-4 months will yield the best results.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default AIForecast;