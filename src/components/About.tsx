import { Card } from "@/components/ui/card";
import { Waves, Compass, Trophy } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Waves,
      title: "Duik in de diepte",
      description: "Verken de mysteries van de oceaan terwijl je innovatieve oplossingen ontwikkelt voor de uitdagingen van morgen.",
    },
    {
      icon: Compass,
      title: "Navigeer door code",
      description: "Werk samen met andere developers en designers om unieke projecten tot leven te brengen tijdens dit 24-uur hackathon.",
    },
    {
      icon: Trophy,
      title: "Vind je schat",
      description: "Compete voor geweldige prijzen en maak kans om je carrière te lanceren met topbedrijven in de tech industrie.",
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-serif font-bold glow-effect">
            Welkom in Aquatopia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Een wereld waar technologie en oceaan samenkomen. Hack the Future 2025 
            brengt de beste developers, designers en tech enthousiasten samen voor 
            een onvergetelijke hackathon ervaring.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="bg-card/40 backdrop-blur-sm border-accent/30 p-8 hover:border-accent/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(94,234,212,0.2)] group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-accent/20 rounded-full group-hover:bg-accent/30 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-card/40 backdrop-blur-sm border-accent/30 p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Wat kun je verwachten?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-accent">Voor developers</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 24-uur intense coding sessies</li>
                  <li>• Mentorship van industry experts</li>
                  <li>• Workshops en tech talks</li>
                  <li>• Netwerken met bedrijven</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-accent">Inclusief</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Gratis eten en drinken</li>
                  <li>• Prijzen en swag</li>
                  <li>• Slaapruimte (optioneel)</li>
                  <li>• Onvergetelijke ervaring</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
