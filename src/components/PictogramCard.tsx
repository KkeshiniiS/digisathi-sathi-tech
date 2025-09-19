import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PictogramCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  color?: "primary" | "secondary" | "success" | "warning" | "trust";
  onClick?: () => void;
  className?: string;
}

export const PictogramCard = ({ 
  icon: Icon, 
  title, 
  description, 
  color = "primary",
  onClick,
  className 
}: PictogramCardProps) => {
  const colorStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover", 
    success: "bg-success text-success-foreground hover:bg-success/90",
    warning: "bg-warning text-warning-foreground hover:bg-warning/90",
    trust: "bg-trust text-trust-foreground hover:bg-trust/90"
  };

  return (
    <Card 
      className={cn(
        "p-6 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg border-2",
        onClick && "hover:border-primary/50",
        className
      )}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={cn(
          "p-4 rounded-2xl transition-colors duration-200",
          colorStyles[color]
        )}>
          <Icon className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
    </Card>
  );
};