import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn } from "lucide-react";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: 'student' | 'teacher' | 'principal';
}

const LoginModal = ({ open, onOpenChange, type }: LoginModalProps) => {
  const [intexNumber, setIntexNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication with Lovable Cloud
    console.log('Login attempt:', { type, intexNumber, email, password });
  };
  
  const titles = {
    student: 'Student Login',
    teacher: 'Teacher Login',
    principal: 'Principal Login',
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md glass-card border-2">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {titles[type]}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {type === 'student' ? (
            <div className="space-y-2">
              <Label htmlFor="intex">IntEx Number</Label>
              <Input
                id="intex"
                type="text"
                placeholder="Enter your IntEx number"
                value={intexNumber}
                onChange={(e) => setIntexNumber(e.target.value)}
                className="rounded-full"
                required
              />
            </div>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-full"
                  required
                />
              </div>
            </>
          )}
          
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 rounded-full py-6"
          >
            <LogIn className="mr-2 h-5 w-5" />
            Login
          </Button>
        </form>
        
        <p className="text-sm text-center text-muted-foreground mt-4">
          {type === 'student' 
            ? "Contact your teacher if you forgot your IntEx number"
            : "Contact the principal for login assistance"
          }
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
