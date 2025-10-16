import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { BookOpen } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-vintage-paper rounded-full border-2 border-vintage-burgundy">
              <BookOpen className="h-12 w-12 text-vintage-burgundy" />
            </div>
          </div>
          <h1 className="text-4xl font-serif font-bold text-vintage-burgundy mb-2 text-shadow-vintage">
            The Scholars' Library
          </h1>
          <p className="text-muted-foreground font-body">
            Your gateway to knowledge and literature
          </p>
        </div>

        <Card className="ornate-border bg-vintage-paper border-vintage-gold/30">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-center text-vintage-burgundy">
              {isLogin ? "Welcome Back" : "Join Our Library"}
            </CardTitle>
            <CardDescription className="text-center font-body">
              {isLogin
                ? "Sign in to access your reading collection"
                : "Create a free account to begin your literary journey"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="font-body">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  className="bg-background border-vintage-sepia focus:border-vintage-gold"
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email" className="font-body">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="bg-background border-vintage-sepia focus:border-vintage-gold"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="font-body">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="bg-background border-vintage-sepia focus:border-vintage-gold"
              />
            </div>
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="role" className="font-body">I am a...</Label>
                <select
                  id="role"
                  className="w-full rounded-md border border-vintage-sepia bg-background px-3 py-2 focus:border-vintage-gold focus:outline-none focus:ring-2 focus:ring-vintage-gold/20"
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="admin">Administrator</option>
                </select>
              </div>
            )}
            <Button className="w-full bg-vintage-burgundy hover:bg-vintage-burgundy/90 text-vintage-paper font-body">
              {isLogin ? "Sign In" : "Create Account"}
            </Button>
            <div className="text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-vintage-burgundy hover:underline font-body"
              >
                {isLogin
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Sign in"}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
