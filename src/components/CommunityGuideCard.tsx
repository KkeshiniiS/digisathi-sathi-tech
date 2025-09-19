import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Phone, MessageCircle } from "lucide-react";

interface CommunityGuideProps {
  name: string;
  location: string;
  languages: string[];
  rating: number;
  specialties: string[];
  avatar?: string;
  isOnline?: boolean;
}

export const CommunityGuideCard = ({ 
  name, 
  location, 
  languages, 
  rating, 
  specialties, 
  avatar, 
  isOnline = false 
}: CommunityGuideProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start gap-4">
        <div className="relative">
          <Avatar className="w-12 h-12">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          {isOnline && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white" />
          )}
        </div>
        
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground">{name}</h3>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-warning fill-current" />
              <span className="text-sm text-muted-foreground">{rating}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {languages.map((lang) => (
              <Badge key={lang} variant="secondary" className="text-xs">
                {lang}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-1">
            {specialties.map((specialty) => (
              <Badge key={specialty} variant="outline" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex gap-2 mt-4">
        <Button size="sm" className="flex-1">
          <Phone className="w-4 h-4 mr-2" />
          Call
        </Button>
        <Button size="sm" variant="outline" className="flex-1">
          <MessageCircle className="w-4 h-4 mr-2" />
          Chat
        </Button>
      </div>
    </Card>
  );
};