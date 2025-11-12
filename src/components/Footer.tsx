const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-accent/20 bg-ocean-deep/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-accent">Aquatopia</h3>
            <p className="text-muted-foreground">
              Hack the Future 2025
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Event Details</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>12-13 November 2025</p>
              <p>Flanders Meeting & Convention Center</p>
              <p>Antwerpen, Belgium</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Links</h4>
            <div className="space-y-2">
              <a 
                href="https://www.hackthefuture.be/2025/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-accent hover:text-accent/80 transition-colors"
              >
                Official Website
              </a>
              <a 
                href="https://app.hackthefuture.be/register/5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-accent hover:text-accent/80 transition-colors"
              >
                Register Now
              </a>
              <a 
                href="https://cronos-groep.be/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-accent hover:text-accent/80 transition-colors"
              >
                Cronos Group
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-accent/20 text-center text-muted-foreground">
          <p>© 2025 Hack the Future - Powered by Cronos Group</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
