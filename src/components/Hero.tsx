import { Button } from "@/components/ui/button";
import { GraduationCap, LogIn } from "lucide-react";

interface HeroProps {
  onLoginClick: (type: 'student' | 'teacher' | 'principal') => void;
}

const Hero = ({ onLoginClick }: HeroProps) => {
  const taglines = ["Knowledge", "Discipline", "Excellence", "Values"];
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
      
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">
        {/* Logo */}
        <div className="flex justify-center mb-6 animate-fade-in-up">
          <div className="glass-card p-6 rounded-full">
            <GraduationCap className="w-20 h-20 text-primary" />
          </div>
        </div>
        
        {/* School name */}
        <h1 className="text-5xl md:text-7xl font-bold animate-fade-in-up delay-100">
          <span className="gradient-text">Excellence School</span>
        </h1>
        
        {/* Tagline */}
        <div className="flex flex-wrap justify-center gap-4 text-xl md:text-2xl font-medium text-muted-foreground animate-fade-in-up delay-200">
          {taglines.map((tag, index) => (
            <span key={tag} className="flex items-center">
              {tag}
              {index < taglines.length - 1 && (
                <span className="ml-4 text-primary">·</span>
              )}
            </span>
          ))}
        </div>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-300">
          Nurturing young minds from Grade 1 to 5 with quality education and holistic development
        </p>
        
        {/* Login buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up delay-400">
          <Button 
            size="lg"
            onClick={() => onLoginClick('student')}
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <LogIn className="mr-2 h-5 w-5" />
            Student Login
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            onClick={() => onLoginClick('teacher')}
            className="w-full sm:w-auto text-lg px-8 py-6 rounded-full glass-card border-2 hover:bg-white/50 transition-all"
          >
            <LogIn className="mr-2 h-5 w-5" />
            Teacher Login
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            onClick={() => onLoginClick('principal')}
            className="w-full sm:w-auto text-lg px-8 py-6 rounded-full glass-card border-2 hover:bg-white/50 transition-all"
          >
            <LogIn className="mr-2 h-5 w-5" />
            Principal Login
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
