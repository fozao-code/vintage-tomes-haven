import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Library, Users, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b-2 border-vintage-burgundy/30 bg-vintage-paper py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-vintage-gold via-transparent to-transparent" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 p-6 bg-vintage-paper rounded-full border-4 border-vintage-burgundy shadow-lg">
              <BookOpen className="h-16 w-16 text-vintage-burgundy" />
            </div>
            <h1 className="mb-6 text-5xl md:text-7xl font-serif font-bold text-vintage-burgundy text-shadow-vintage">
              The Scholars' Library
            </h1>
            <p className="mb-8 max-w-2xl text-xl md:text-2xl font-body text-foreground">
              A charming digital sanctuary of knowledge, freely offering curated storybooks 
              and academic treasures to Cambridge and BTEC students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/library">
                <Button size="lg" className="bg-vintage-burgundy hover:bg-vintage-burgundy/90 text-vintage-paper text-lg px-8 font-body">
                  <Library className="mr-2 h-5 w-5" />
                  Browse Collection
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="lg" variant="outline" className="border-vintage-burgundy text-vintage-burgundy hover:bg-vintage-burgundy hover:text-vintage-paper text-lg px-8 font-body">
                  Join the Library
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center text-vintage-burgundy mb-12 text-shadow-vintage">
            A Library for Everyone
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 ornate-border bg-vintage-paper">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-vintage-burgundy/10 rounded-full">
                  <BookOpen className="h-10 w-10 text-vintage-burgundy" />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-vintage-ink">
                Curated Collection
              </h3>
              <p className="font-body text-foreground">
                Enchanting storybooks, classic literature, and comprehensive academic texts 
                tailored for Cambridge and BTEC curricula.
              </p>
            </div>

            <div className="text-center p-6 ornate-border bg-vintage-paper">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-vintage-burgundy/10 rounded-full">
                  <Users className="h-10 w-10 text-vintage-burgundy" />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-vintage-ink">
                Community Driven
              </h3>
              <p className="font-body text-foreground">
                Students, teachers, and administrators collaborate to grow and enrich 
                our literary treasure trove.
              </p>
            </div>

            <div className="text-center p-6 ornate-border bg-vintage-paper">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-vintage-burgundy/10 rounded-full">
                  <Heart className="h-10 w-10 text-vintage-burgundy" />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-vintage-ink">
                Forever Free
              </h3>
              <p className="font-body text-foreground">
                Access to knowledge should never be limited by cost. Every resource 
                is freely available to all students.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t-2 border-vintage-burgundy/30 bg-vintage-paper">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-vintage-burgundy mb-6 text-shadow-vintage">
            Begin Your Literary Journey
          </h2>
          <p className="text-xl font-body text-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students discovering the joy of reading and learning 
            in our vintage-inspired digital library.
          </p>
          <Link to="/auth">
            <Button size="lg" className="bg-vintage-burgundy hover:bg-vintage-burgundy/90 text-vintage-paper text-lg px-8 font-body">
              Create Free Account
            </Button>
          </Link>
        </div>
      </section>

      <footer className="border-t-2 border-vintage-burgundy/30 bg-vintage-paper py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-body">
            © 2025 The Scholars' Library. A free resource for Cambridge and BTEC students.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
