import { BookOpen, Target, Trophy, Users } from "lucide-react";

const SchoolInfo = () => {
  const achievements = [
    "Best School Award 2023",
    "100% Pass Rate",
    "State Level Sports Champions",
    "Excellence in Arts & Culture",
  ];
  
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Our School</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Vision */}
          <div className="glass-card rounded-3xl p-8 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To nurture young minds into confident, responsible citizens equipped with knowledge, 
              values, and skills to excel in a rapidly changing world. We strive to create an 
              environment where every child discovers their potential and develops a lifelong 
              love for learning.
            </p>
          </div>
          
          {/* Mission */}
          <div className="glass-card rounded-3xl p-8 animate-fade-in-up delay-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-secondary/10 p-3 rounded-full">
                <BookOpen className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To provide quality education that emphasizes academic excellence, character 
              development, and holistic growth. We are committed to fostering creativity, 
              critical thinking, and cultural awareness in a safe and inclusive learning 
              environment.
            </p>
          </div>
        </div>
        
        {/* History */}
        <div className="glass-card rounded-3xl p-8 mb-12 animate-fade-in-up delay-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-accent/10 p-3 rounded-full">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold">Our Story</h3>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              Established in 1995, Excellence School began with a dream to provide quality 
              education to young learners in the community. Over the past three decades, we 
              have grown from a small institution with 50 students to a thriving educational 
              center serving over 500 students from Grade 1 to Grade 5.
            </p>
            <p className="leading-relaxed">
              Our journey has been marked by continuous innovation in teaching methodologies, 
              infrastructure development, and a steadfast commitment to our core values. Today, 
              we stand proud as one of the leading primary schools in the region, known for our 
              academic excellence and holistic approach to education.
            </p>
          </div>
        </div>
        
        {/* Achievements */}
        <div className="glass-card rounded-3xl p-8 animate-fade-in-up delay-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 p-3 rounded-full">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Our Achievements</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-4 flex items-center gap-3"
              >
                <Trophy className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolInfo;
