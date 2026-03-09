import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Library, Users, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header role="banner">
        <section className="relative overflow-hidden border-b-2 border-vintage-burgundy/30 bg-vintage-paper py-12 md:py-20">
          <div className="absolute inset-0 opacity-5" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-vintage-gold via-transparent to-transparent" />
          </div>
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 md:mb-6 p-4 md:p-6 bg-vintage-paper rounded-full border-2 md:border-4 border-vintage-burgundy shadow-lg" aria-hidden="true">
                <BookOpen className="h-10 w-10 md:h-16 md:w-16 text-vintage-burgundy" />
              </div>
              <h1 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-vintage-burgundy text-shadow-vintage px-4">
                The Scholars' Library
              </h1>
              <p className="mb-6 md:mb-8 max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl font-body text-foreground px-4">
                A charming digital sanctuary of knowledge, freely offering curated storybooks 
                and academic treasures to Cambridge and BTEC students.
              </p>
              <nav aria-label="Primary actions" className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto px-4">
                <Link to="/library" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-vintage-burgundy hover:bg-vintage-burgundy/90 text-vintage-paper text-base md:text-lg px-6 md:px-8 font-body">
                    <Library className="mr-2 h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                    Browse Collection
                  </Button>
                </Link>
                <Link to="/auth" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-vintage-burgundy text-vintage-burgundy hover:bg-vintage-burgundy hover:text-vintage-paper text-base md:text-lg px-6 md:px-8 font-body">
                    Join the Library
                  </Button>
                </Link>
              </nav>
            </div>
          </div>
        </section>
      </header>

      <main id="main-content" className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-vintage-burgundy mb-8 md:mb-12 text-shadow-vintage px-4">
            A Library for Everyone
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" role="list">
            <article className="text-center p-4 md:p-6 ornate-border bg-vintage-paper" role="listitem">
              <div className="flex justify-center mb-3 md:mb-4" aria-hidden="true">
                <div className="p-3 md:p-4 bg-vintage-burgundy/10 rounded-full">
                  <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-vintage-burgundy" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 md:mb-3 text-vintage-ink">
                Curated Collection
              </h3>
              <p className="font-body text-sm md:text-base text-foreground">
                Enchanting storybooks, classic literature, and comprehensive academic texts 
                tailored for Cambridge and BTEC curricula.
              </p>
            </article>

            <article className="text-center p-4 md:p-6 ornate-border bg-vintage-paper" role="listitem">
              <div className="flex justify-center mb-3 md:mb-4" aria-hidden="true">
                <div className="p-3 md:p-4 bg-vintage-burgundy/10 rounded-full">
                  <Users className="h-8 w-8 md:h-10 md:w-10 text-vintage-burgundy" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 md:mb-3 text-vintage-ink">
                Community Driven
              </h3>
              <p className="font-body text-sm md:text-base text-foreground">
                Students, teachers, and administrators collaborate to grow and enrich 
                our literary treasure trove.
              </p>
            </article>

            <article className="text-center p-4 md:p-6 ornate-border bg-vintage-paper sm:col-span-2 lg:col-span-1" role="listitem">
              <div className="flex justify-center mb-3 md:mb-4" aria-hidden="true">
                <div className="p-3 md:p-4 bg-vintage-burgundy/10 rounded-full">
                  <Heart className="h-8 w-8 md:h-10 md:w-10 text-vintage-burgundy" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 md:mb-3 text-vintage-ink">
                Forever Free
              </h3>
              <p className="font-body text-sm md:text-base text-foreground">
                Access to knowledge should never be limited by cost. Every resource 
                is freely available to all students.
              </p>
            </article>
          </div>
        </div>
      </main>

      <section className="py-12 md:py-16 border-t-2 border-vintage-burgundy/30 bg-vintage-paper" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-serif font-bold text-vintage-burgundy mb-4 md:mb-6 text-shadow-vintage px-4">
            Begin Your Literary Journey
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-body text-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Join thousands of students discovering the joy of reading and learning 
            in our vintage-inspired digital library.
          </p>
          <Link to="/auth" className="inline-block w-full sm:w-auto px-4">
            <Button size="lg" className="w-full sm:w-auto bg-vintage-burgundy hover:bg-vintage-burgundy/90 text-vintage-paper text-base md:text-lg px-6 md:px-8 font-body">
              Create Free Account
            </Button>
          </Link>
        </div>
      </section>

      <footer role="contentinfo" className="border-t-2 border-vintage-burgundy/30 bg-vintage-paper py-8">
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
