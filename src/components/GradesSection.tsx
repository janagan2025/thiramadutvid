import { BookOpen, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GradesSectionProps {
  onViewResults: (grade: number) => void;
}

const GradesSection = ({ onViewResults }: GradesSectionProps) => {
  const grades = [1, 2, 3, 4, 5];
  
  const gradeColors = [
    "from-red-400/20 to-pink-400/20",
    "from-orange-400/20 to-amber-400/20", 
    "from-yellow-400/20 to-lime-400/20",
    "from-green-400/20 to-emerald-400/20",
    "from-blue-400/20 to-cyan-400/20",
  ];
  
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Grade Levels</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive education from Grade 1 to Grade 5
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {grades.map((grade, index) => (
            <div
              key={grade}
              className="glass-card rounded-3xl p-6 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${gradeColors[index]} rounded-2xl p-8 mb-4`}>
                <div className="text-center">
                  <BookOpen className="w-12 h-12 mx-auto mb-2 text-primary" />
                  <h3 className="text-3xl font-bold text-foreground">Grade {grade}</h3>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button
                  onClick={() => onViewResults(grade)}
                  className="w-full bg-primary hover:bg-primary/90 rounded-full"
                >
                  <TrendingUp className="mr-2 h-4 w-4" />
                  View Results
                </Button>
                
                <div className="text-center text-sm text-muted-foreground">
                  Monthly Exam Records
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GradesSection;
