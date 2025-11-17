import { useState } from "react";
import Hero from "@/components/Hero";
import AnnouncementTicker from "@/components/AnnouncementTicker";
import GradesSection from "@/components/GradesSection";
import EventsSlider from "@/components/EventsSlider";
import StaffDirectory from "@/components/StaffDirectory";
import SchoolInfo from "@/components/SchoolInfo";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";

const Index = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginType, setLoginType] = useState<'student' | 'teacher' | 'principal'>('student');
  
  const handleLoginClick = (type: 'student' | 'teacher' | 'principal') => {
    setLoginType(type);
    setLoginModalOpen(true);
  };
  
  const handleViewResults = (grade: number) => {
    // TODO: Implement grade results view
    console.log('View results for grade:', grade);
  };
  
  return (
    <div className="min-h-screen">
      <Hero onLoginClick={handleLoginClick} />
      <AnnouncementTicker />
      <GradesSection onViewResults={handleViewResults} />
      <EventsSlider />
      <StaffDirectory />
      <SchoolInfo />
      <Footer />
      
      <LoginModal 
        open={loginModalOpen}
        onOpenChange={setLoginModalOpen}
        type={loginType}
      />
    </div>
  );
};

export default Index;
