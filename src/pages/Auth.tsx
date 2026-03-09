import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { BookOpen } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6">
      <a href="#auth-form" className="skip-link">
        Skip to authentication form
      </a>

      <div className="w-full max-w-md">
        <div className="text-center mb-6 md:mb-8">
          <div className="flex justify-center mb-3 md:mb-4" aria-hidden="true">
            <div className="p-3 md:p-4 bg-vintage-paper rounded-full border-2 border-vintage-burgundy">
              <BookOpen className="h-10 w-10 md:h-12 md:w-12 text-vintage-burgundy" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-vintage-burgundy mb-2 text-shadow-vintage px-4">
            The Scholars' Library
          </h1>
          <p className="text-sm md:text-base text-muted-foreground font-body px-4">
            Your gateway to knowledge and literature
          </p>
        </div>

        <Card className="ornate-border bg-vintage-paper border-vintage-gold/30" id="auth-form">
          <CardHeader className="space-y-2 md:space-y-3">
            <CardTitle className="text-xl sm:text-2xl font-serif text-center text-vintage-burgundy">
              {isLogin ? "Welcome Back" : "Join Our Library"}
            </CardTitle>
            <CardDescription className="text-center font-body text-sm md:text-base">
              {isLogin
                ? "Sign in to access your reading collection"
                : "Create a free account to begin your literary journey"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-3 md:space-y-4"
              onSubmit={(e) => e.preventDefault()}
              aria-label={isLogin ? "Sign in form" : "Create account form"}
              noValidate
            >
              {!isLogin && (
                <div className="space-y-1.5 md:space-y-2">
                  <Label htmlFor="name" className="font-body text-sm md:text-base">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    aria-required="true"
                    className="bg-background border-vintage-sepia focus:border-vintage-gold text-sm md:text-base"
                  />
                </div>
              )}
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="email" className="font-body text-sm md:text-base">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  autoComplete="email"
                  required
                  aria-required="true"
                  className="bg-background border-vintage-sepia focus:border-vintage-gold text-sm md:text-base"
                />
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="password" className="font-body text-sm md:text-base">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete={isLogin ? "current-password" : "new-password"}
                  required
                  aria-required="true"
                  className="bg-background border-vintage-sepia focus:border-vintage-gold text-sm md:text-base"
                />
              </div>
              {!isLogin && (
                <div className="space-y-1.5 md:space-y-2">
                  <Label htmlFor="role" className="font-body text-sm md:text-base">I am a...</Label>
                  <select
                    id="role"
                    aria-label="Select your role"
                    className="w-full rounded-md border border-vintage-sepia bg-background px-3 py-2 text-sm md:text-base focus:border-vintage-gold focus:outline-none focus:ring-2 focus:ring-ring/20"
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Administrator</option>
                  </select>
                </div>
              )}
              <Button
                type="submit"
                className="w-full bg-vintage-burgundy hover:bg-vintage-burgundy/90 text-vintage-paper font-body text-sm md:text-base py-5 md:py-6"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>
            <div className="text-center pt-4">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-xs md:text-sm text-vintage-burgundy hover:underline font-body focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-1"
                aria-label={isLogin ? "Switch to create account form" : "Switch to sign in form"}
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
