import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookCard } from "@/components/BookCard";
import { Search, BookOpen } from "lucide-react";

const sampleBooks = [
  {
    id: "1",
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    category: "Classic Literature",
    description: "A historical novel set in London and Paris before and during the French Revolution.",
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Cambridge Mathematics Textbook",
    author: "Cambridge Press",
    category: "Academic",
    description: "Comprehensive mathematics resource for Cambridge curriculum students.",
    coverUrl: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400&h=600&fit=crop",
  },
  {
    id: "3",
    title: "BTEC Business Studies Guide",
    author: "Education Publishing",
    category: "Academic",
    description: "Essential guide for BTEC Business Studies qualification.",
    coverUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Classic Literature",
    description: "A romantic novel of manners exploring themes of love, class, and society.",
    coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
  },
  {
    id: "5",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Classic Literature",
    description: "A story of the Jazz Age and the American Dream in 1920s New York.",
    coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
  },
  {
    id: "6",
    title: "Cambridge Science Practicals",
    author: "Cambridge Press",
    category: "Academic",
    description: "Laboratory guide for Cambridge science curriculum.",
    coverUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
  },
];

const Library = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-2 border-vintage-burgundy/30 bg-vintage-paper py-4 md:py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 md:gap-3 min-w-0">
              <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-vintage-burgundy flex-shrink-0" />
              <h1 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-vintage-burgundy text-shadow-vintage truncate">
                The Scholars' Library
              </h1>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="border-vintage-burgundy text-vintage-burgundy hover:bg-vintage-burgundy hover:text-vintage-paper flex-shrink-0 text-xs md:text-sm"
            >
              Sign In
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-vintage-burgundy mb-3 md:mb-4 text-shadow-vintage px-4">
            Browse Our Collection
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-body max-w-2xl mx-auto px-4">
            Discover a curated selection of enchanting storybooks and comprehensive academic texts, 
            freely available to all students.
          </p>
        </div>

        <div className="mb-6 md:mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search books, authors, or subjects..."
              className="pl-9 md:pl-10 bg-vintage-paper border-vintage-sepia focus:border-vintage-gold text-sm md:text-base"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sampleBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </main>

      <footer className="border-t-2 border-vintage-burgundy/30 bg-vintage-paper py-6 md:py-8 mt-12 md:mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base text-muted-foreground font-body px-4">
            © 2025 The Scholars' Library. A free resource for Cambridge and BTEC students.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Library;
