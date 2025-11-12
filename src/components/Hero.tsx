import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-ocean.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/80 via-ocean-deep/60 to-ocean-mid/80" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-glow rounded-full animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-float">
          <h1 className="text-7xl md:text-9xl font-serif font-bold tracking-wider glow-effect">
            AQUATOPIA
          </h1>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 text-lg md:text-xl text-foreground/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                <span>12-13 November 2025</span>
              </div>
              <span className="text-accent">•</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Antwerpen</span>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Flanders Meeting & Convention Center
            </p>
          </div>

          <p className="text-2xl md:text-3xl font-serif italic text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            De oceaan onthult haar geheimen...
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              variant="ocean"
              className="text-lg px-8 py-6 group"
              asChild
            >
              <a href="https://app.hackthefuture.be/register/5" target="_blank" rel="noopener noreferrer">
                Schrijf je in
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="glow"
              className="text-lg px-8 py-6"
            >
              Bekijk de trailer
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
