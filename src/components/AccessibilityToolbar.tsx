import { Moon, Sun, Minus, Plus, Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAccessibility } from "@/contexts/AccessibilityContext";

const SIZES = ["small", "medium", "large", "x-large"] as const;

export const AccessibilityToolbar = () => {
  const { fontSize, setFontSize, theme, toggleTheme } = useAccessibility();

  const currentIndex = SIZES.indexOf(fontSize);

  const decreaseFont = () => {
    if (currentIndex > 0) setFontSize(SIZES[currentIndex - 1]);
  };

  const increaseFont = () => {
    if (currentIndex < SIZES.length - 1) setFontSize(SIZES[currentIndex + 1]);
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex items-center gap-1 bg-card border border-border rounded-full px-2 py-1.5 shadow-lg"
      role="toolbar"
      aria-label="Accessibility controls"
    >
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-full"
        onClick={toggleTheme}
        aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      >
        {theme === "light" ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </Button>

      <div className="w-px h-5 bg-border" aria-hidden="true" />

      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-full"
        onClick={decreaseFont}
        disabled={currentIndex === 0}
        aria-label="Decrease font size"
      >
        <Minus className="h-3 w-3" />
      </Button>

      <Type className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
      <span className="sr-only">Current font size: {fontSize}</span>

      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-full"
        onClick={increaseFont}
        disabled={currentIndex === SIZES.length - 1}
        aria-label="Increase font size"
      >
        <Plus className="h-3 w-3" />
      </Button>
    </div>
  );
};
