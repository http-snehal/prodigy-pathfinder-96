import React from 'react';
import { Card } from '@/components/ui/card';
import { User, Phone, Mail, MapPin, Calendar, Users, Award } from 'lucide-react';

const PersonalInfo = () => {
  // Mock personal information data
  const personalData = {
    studentId: 'STU2024001',
    dateOfBirth: 'March 15, 2010',
    age: 14,
    gender: 'Female',
    bloodGroup: 'B+',
    address: '123 Oak Street, Greenwood Heights, Mumbai 400001',
    phone: '+91 98765 43210',
    email: 'emma.johnson@greenwoodschool.edu',
    parentName: 'Dr. Sarah Johnson',
    parentPhone: '+91 98765 43211',
    emergencyContact: 'Robert Johnson (+91 98765 43212)',
    admissionDate: 'April 10, 2018',
    currentSession: '2024-25',
    house: 'Blue Phoenix',
    rollNumber: '08A15',
    transportRoute: 'Route B - Andheri West'
  };

  const infoSections = [
    {
      title: 'Student Details',
      icon: User,
      items: [
        { label: 'Student ID', value: personalData.studentId },
        { label: 'Date of Birth', value: personalData.dateOfBirth },
        { label: 'Age', value: `${personalData.age} years` },
        { label: 'Gender', value: personalData.gender },
        { label: 'Blood Group', value: personalData.bloodGroup },
        { label: 'House', value: personalData.house },
        { label: 'Roll Number', value: personalData.rollNumber }
      ]
    },
    {
      title: 'Contact Information',
      icon: Phone,
      items: [
        { label: 'Address', value: personalData.address },
        { label: 'Phone', value: personalData.phone },
        { label: 'Email', value: personalData.email },
        { label: 'Transport Route', value: personalData.transportRoute }
      ]
    },
    {
      title: 'Family Details',
      icon: Users,
      items: [
        { label: 'Parent/Guardian', value: personalData.parentName },
        { label: 'Parent Contact', value: personalData.parentPhone },
        { label: 'Emergency Contact', value: personalData.emergencyContact }
      ]
    },
    {
      title: 'Academic Info',
      icon: Award,
      items: [
        { label: 'Admission Date', value: personalData.admissionDate },
        { label: 'Current Session', value: personalData.currentSession },
        { label: 'Years at School', value: '6 years' }
      ]
    }
  ];

  return (
    <Card className="card-elevated">
      <div className="flex items-center gap-2 mb-6">
        <User className="w-5 h-5 text-primary" />
        <h2 className="section-header">Personal Information</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {infoSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <section.icon className="w-4 h-4 text-primary" />
              <h3 className="font-semibold text-foreground">{section.title}</h3>
            </div>

            <div className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex flex-col gap-1 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {item.label}
                  </span>
                  <span className="text-sm text-foreground font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-6 flex flex-wrap gap-2">
        <button className="flex items-center gap-2 px-3 py-2 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
          <Mail className="w-4 h-4" />
          Update Email
        </button>
        <button className="flex items-center gap-2 px-3 py-2 text-sm bg-success/10 text-success rounded-lg hover:bg-success/20 transition-colors">
          <MapPin className="w-4 h-4" />
          Update Address
        </button>
        <button className="flex items-center gap-2 px-3 py-2 text-sm bg-warning/10 text-warning rounded-lg hover:bg-warning/20 transition-colors">
          <Phone className="w-4 h-4" />
          Update Contact
        </button>
      </div>

      {/* Information Note */}
      <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
        <p className="text-xs text-muted-foreground">
          <strong>Privacy Notice:</strong> Personal information is kept secure and only shared with authorized school personnel and parents/guardians as per school policy.
        </p>
      </div>
    </Card>
  );
};

export default PersonalInfo;