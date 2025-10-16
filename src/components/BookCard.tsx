import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  coverUrl: string;
}

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  return (
    <Card className="page-turn overflow-hidden border-vintage-sepia bg-vintage-paper hover:border-vintage-gold transition-all">
      <CardHeader className="p-0">
        <div className="aspect-[2/3] overflow-hidden relative">
          <img
            src={book.coverUrl}
            alt={`Cover of ${book.title}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </CardHeader>
      <CardContent className="p-3 md:p-4">
        <Badge className="mb-2 bg-vintage-burgundy text-vintage-paper hover:bg-vintage-burgundy/90 text-xs">
          {book.category}
        </Badge>
        <h3 className="font-serif font-bold text-lg md:text-xl mb-1 text-vintage-ink line-clamp-2">
          {book.title}
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground mb-2 font-body italic">
          by {book.author}
        </p>
        <p className="text-xs md:text-sm text-foreground font-body line-clamp-3">
          {book.description}
        </p>
      </CardContent>
      <CardFooter className="p-3 md:p-4 pt-0">
        <Button className="w-full bg-vintage-burgundy hover:bg-vintage-burgundy/90 text-vintage-paper text-sm md:text-base">
          <BookOpen className="mr-2 h-3 w-3 md:h-4 md:w-4" />
          Read Now
        </Button>
      </CardFooter>
    </Card>
  );
};
