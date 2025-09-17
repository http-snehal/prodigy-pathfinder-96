import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const AIMentorWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: "Hi Emma! I'm your AI mentor. I can help you with study tips, career guidance, or answer questions about your progress. What would you like to discuss today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const quickSuggestions = [
    "How can I improve my English scores?",
    "What study schedule works best?", 
    "Career advice for my skills",
    "Help with time management"
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    const newUserMessage = {
      type: 'user',
      content: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMessage]);

    // Simulate AI response (in real app, this would be an API call)
    setTimeout(() => {
      const aiResponse = {
        type: 'ai', 
        content: getAIResponse(message),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setMessage('');
  };

  const getAIResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('english') || lowerMessage.includes('communication')) {
      return "Great question! To improve your English scores, try reading for 20 minutes daily, practice writing summaries of what you read, and join the debate club to build confidence. Your visual learning style means flashcards with images can help with vocabulary too! 📚";
    } else if (lowerMessage.includes('study') || lowerMessage.includes('schedule')) {
      return "Based on your learning profile, I recommend 25-minute focused study sessions with 5-minute breaks. As a visual learner, use colorful charts and mind maps. Your best focus time seems to be early morning - try scheduling challenging subjects then! ⏰";
    } else if (lowerMessage.includes('career') || lowerMessage.includes('job')) {
      return "Your strong math and problem-solving skills point toward exciting careers! Software engineering (92% match) and data analysis (88% match) are great fits. Consider joining coding clubs or taking online programming courses to explore these paths! 💻";
    } else if (lowerMessage.includes('time') || lowerMessage.includes('management')) {
      return "Time management is key! Try the 'time blocking' method - assign specific subjects to time slots. Use a visual calendar since you're a visual learner. Also, your 35-minute attention span is great - structure study sessions around this natural rhythm! 🎯";
    } else {
      return "I understand you're looking for guidance! Based on your performance data, you're doing well in math and science. Focus on building communication skills and maintaining your excellent study habits. Feel free to ask me about specific subjects or study strategies! 🌟";
    }
  };

  const handleQuickSuggestion = (suggestion: string) => {
    setMessage(suggestion);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="floating-widget group"
          size="lg"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-2 -right-2 w-3 h-3 bg-success rounded-full animate-pulse"></span>
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-4 right-4 w-80 h-96 z-50 shadow-2xl border-primary/20">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <div>
                <h3 className="font-semibold">AI Mentor</h3>
                <p className="text-xs opacity-90">Here to help you succeed!</p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 h-64">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  {msg.content}
                  <div className="text-xs opacity-70 mt-1">{msg.time}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Suggestions (show only if no messages from user yet) */}
          {messages.length === 1 && (
            <div className="p-2 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">Quick suggestions:</p>
              <div className="space-y-1">
                {quickSuggestions.slice(0, 2).map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuickSuggestion(suggestion)}
                    className="w-full text-left justify-start h-auto p-2 text-xs"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                disabled={!message.trim()}
                className="px-3"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default AIMentorWidget;