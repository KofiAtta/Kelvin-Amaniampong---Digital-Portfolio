import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    "Digital Communications",
    "Social Media",
    "Video Editing", 
    "Writing",
    "Web Developer",
    "Analytics",
    "Project Management"
  ];

  const certifications = [
    { name: "Google Analytics", logo: "🔍" },
    { name: "Meta Marketing", logo: "📱" },
    { name: "Salesforce", logo: "☁️" }
  ];

  return (
    <section id="skills" className="py-20 bg-navy-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            Core <span className="text-gold-500">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set built through years of experience in digital media and communications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto animate-slide-up">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className={`p-4 text-center text-lg font-medium bg-white border-navy-200 text-navy-700 hover:bg-gold-50 hover:border-gold-300 transition-all duration-300 hover:scale-105 shadow-card`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;