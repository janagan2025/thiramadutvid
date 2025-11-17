import { Users, Mail, Award } from "lucide-react";

const StaffDirectory = () => {
  const staff = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Principal",
      qualification: "Ph.D. in Education",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
    },
    {
      name: "Mrs. Priya Sharma",
      role: "Senior Teacher - English",
      qualification: "M.A. English, B.Ed",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop",
    },
    {
      name: "Mr. Arun Patel",
      role: "Mathematics Teacher",
      qualification: "M.Sc. Mathematics, B.Ed",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop",
    },
    {
      name: "Ms. Lakshmi Devi",
      role: "Tamil Teacher",
      qualification: "M.A. Tamil, B.Ed",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop",
    },
    {
      name: "Mr. David Wilson",
      role: "Science Teacher",
      qualification: "M.Sc. Physics, B.Ed",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
    },
    {
      name: "Mrs. Anita Reddy",
      role: "Physical Education",
      qualification: "B.P.Ed, M.P.Ed",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
    },
  ];
  
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Team</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Dedicated educators committed to excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-6 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                  <Award className="w-5 h-5" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  {member.qualification}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffDirectory;
