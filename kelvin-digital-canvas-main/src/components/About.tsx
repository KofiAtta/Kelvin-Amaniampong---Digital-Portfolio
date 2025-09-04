const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-card-hover">
                <img 
                  src="/profile-photo.jpg"
                  alt="Kelvin Amaniampong"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-navy-500 rounded-full opacity-10"></div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
              About <span className="text-gold-500">Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a versatile digital communications and media professional with a background in journalism, content creation, and public administration. I specialize in storytelling across digital platforms, creating content that connects with diverse audiences.
              </p>
              <p>
                I bring a data-driven approach to communication strategies, supported by skills in project management, analytics, and editorial leadership. My experience ranges from leading editorial teams to optimizing customer experiences, always with a focus on impact.
              </p>
              <p>
                I thrive in fast-paced environments, leveraging social media strategy, multimedia production, and web development to deliver engaging content and help organizations achieve their goals.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-navy-800 mb-2">Location</h3>
                <p className="text-muted-foreground">Ghana</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-800 mb-2">Experience</h3>
                <p className="text-muted-foreground">5+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;