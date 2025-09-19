import { Mic, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface VoiceButtonProps {
  isListening?: boolean;
  onToggle?: (listening: boolean) => void;
  className?: string;
}

export const VoiceButton = ({ isListening = false, onToggle, className }: VoiceButtonProps) => {
  const [listening, setListening] = useState(isListening);

  const handleToggle = () => {
    const newState = !listening;
    setListening(newState);
    onToggle?.(newState);
  };

  return (
    <Button
      onClick={handleToggle}
      variant="outline"
      size="lg"
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        listening 
          ? "bg-success text-success-foreground border-success hover:bg-success/90" 
          : "hover:bg-primary hover:text-primary-foreground",
        className
      )}
    >
      {listening ? (
        <>
          <MicOff className="w-5 h-5 mr-2" />
          Listening...
          <div className="absolute inset-0 bg-success/20 animate-pulse" />
        </>
      ) : (
        <>
          <Mic className="w-5 h-5 mr-2" />
          Voice Help
        </>
      )}
    </Button>
  );
};