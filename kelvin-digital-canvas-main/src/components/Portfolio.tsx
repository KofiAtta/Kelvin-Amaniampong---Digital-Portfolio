import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Share2, Monitor } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Writing Portfolio",
      description: "Collection of in-depth sports articles covering major tournaments, player profiles, and analysis pieces for Mobile Sports Limited.",
      icon: <FileText className="h-8 w-8 text-gold-500" />,
      category: "Writing",
      highlights: ["Match Analysis", "Player Interviews", "Sports Stories"],
      link: "https://blog-ng.msport.com/" // Add your project link here
    },
    {
      title: "Media Projects",
      description: "Multi-platform social media campaigns and multimedia content driving engagement and brand awareness across various digital channels.",
      icon: <Share2 className="h-8 w-8 text-gold-500" />,
      category: "Media",
      highlights: ["Content Strategy", "Community Management", "Video Editing"],
      link: "https://drive.google.com/drive/u/0/folders/1j4uyfNS7wNyxW-a4wP5g8pB2l1msh1UZ"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            My <span className="text-gold-500">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing impactful projects across digital communications, sports journalism, and media production
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 animate-slide-up">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`card-elegant group hover-lift hover-glow border-none`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-4 bg-gradient-gold-subtle rounded-xl shadow-inner border border-gold-200/50 hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <Badge variant="secondary" className="bg-gradient-navy-subtle text-navy-700 border border-navy-200/50 px-3 py-1 rounded-full font-medium">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gradient-subtle group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy-700 mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full glass border-gold-400/50 text-gold-600 hover:bg-gold-400 hover:text-navy-800 font-semibold transition-all duration-500 hover:scale-105 hover:shadow-gold group"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    View More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;