import { useState } from "react";
import { DigiSathiLogo } from "@/components/DigiSathiLogo";
import { VoiceButton } from "@/components/VoiceButton";
import { PictogramCard } from "@/components/PictogramCard";
import { WalletCard } from "@/components/WalletCard";
import { DigitalLiteracyQuiz } from "@/components/DigitalLiteracyQuiz";
import { CommunityGuideCard } from "@/components/CommunityGuideCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wallet, 
  GraduationCap, 
  Users, 
  Shield, 
  MessageSquare, 
  Accessibility,
  Globe,
  Smartphone,
  Heart,
  ChevronRight
} from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  const handleVoiceToggle = (listening: boolean) => {
    setIsVoiceActive(listening);
    if (listening) {
      // Simulate voice command
      setTimeout(() => {
        setIsVoiceActive(false);
        // Example voice navigation
        if (Math.random() > 0.5) {
          setActiveSection("wallet");
        } else {
          setActiveSection("learning");
        }
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <DigiSathiLogo />
          <VoiceButton 
            isListening={isVoiceActive}
            onToggle={handleVoiceToggle}
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge variant="outline" className="text-sm font-medium">
              Universal Digital Inclusion Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Digital Inclusion for
              <span className="text-primary block">Everyone</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bridging the digital divide with voice navigation, pictogram interfaces, 
              micro-wallets, and community support. Works offline-first for true universal access.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <Button size="lg" onClick={() => setActiveSection("demo")}>
                Try Demo
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="w-4 h-4 mr-2" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Platform Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <PictogramCard
              icon={Wallet}
              title="Micro Wallet"
              color="primary"
              onClick={() => setActiveSection("wallet")}
            />
            <PictogramCard
              icon={GraduationCap}
              title="Digital Learning"
              color="secondary"
              onClick={() => setActiveSection("learning")}
            />
            <PictogramCard
              icon={Users}
              title="Community Guides"
              color="trust"
              onClick={() => setActiveSection("community")}
            />
            <PictogramCard
              icon={Accessibility}
              title="Accessibility"
              color="success"
              onClick={() => setActiveSection("accessibility")}
            />
          </div>
        </div>
      </section>

      {/* Dynamic Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {activeSection === "overview" && (
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Why DigiSathi?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <Globe className="w-8 h-8 text-primary" />
                    <h3 className="font-semibold text-foreground">Offline-First</h3>
                    <p className="text-sm text-muted-foreground">
                      Works with USSD, SMS, and apps - even without internet connection.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <MessageSquare className="w-8 h-8 text-secondary" />
                    <h3 className="font-semibold text-foreground">Voice + Visual</h3>
                    <p className="text-sm text-muted-foreground">
                      Pictogram navigation supports illiterate and disabled users.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <Shield className="w-8 h-8 text-trust" />
                    <h3 className="font-semibold text-foreground">Secure & Safe</h3>
                    <p className="text-sm text-muted-foreground">
                      Built-in fraud detection and digital literacy education.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeSection === "wallet" && (
            <div className="max-w-2xl mx-auto">
              <WalletCard />
            </div>
          )}

          {activeSection === "learning" && (
            <div className="max-w-2xl mx-auto">
              <DigitalLiteracyQuiz />
            </div>
          )}

          {activeSection === "community" && (
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl font-bold text-center text-foreground">Community Digital Ambassadors</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <CommunityGuideCard
                  name="Priya Sharma"
                  location="Rajkot, Gujarat"
                  languages={["Hindi", "Gujarati", "English"]}
                  rating={4.8}
                  specialties={["Banking", "Government Services"]}
                  isOnline={true}
                />
                <CommunityGuideCard
                  name="Ravi Kumar"
                  location="Patna, Bihar"
                  languages={["Hindi", "Bhojpuri"]}
                  rating={4.9}
                  specialties={["Digital Payments", "Online Shopping"]}
                  isOnline={false}
                />
              </div>
            </div>
          )}

          {activeSection === "accessibility" && (
            <div className="max-w-2xl mx-auto">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Accessibility Features</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-success/10 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Voice Navigation</h3>
                      <p className="text-muted-foreground">Complete app navigation using voice commands</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Accessibility className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Screen Reader Support</h3>
                      <p className="text-muted-foreground">Full compatibility with screen reading software</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Smartphone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Large Touch Targets</h3>
                      <p className="text-muted-foreground">Easy-to-press buttons for users with motor difficulties</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeSection === "demo" && (
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <WalletCard />
                <DigitalLiteracyQuiz />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <DigiSathiLogo className="h-12 justify-center mb-4" />
          <p className="text-muted-foreground">
            Building digital inclusion for everyone, everywhere.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;