import { Heart, Shield, Users } from "lucide-react";

export const DigiSathiLogo = ({ className = "h-8 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
          <Users className="w-6 h-6 text-primary-foreground" />
        </div>
        <Heart className="absolute -top-1 -right-1 w-4 h-4 text-success fill-current" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-foreground">DigiSathi</span>
        <span className="text-xs text-muted-foreground -mt-1">Universal Platform</span>
      </div>
    </div>
  );
};