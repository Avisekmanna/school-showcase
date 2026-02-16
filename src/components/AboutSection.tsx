import { BookOpen, GraduationCap, Users, Trophy } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "From STEM to humanities, our curriculum is designed to develop well-rounded students prepared for the future.",
  },
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    description: "Our dedicated teachers bring decades of experience and passion to every classroom interaction.",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "Personalized attention with an average student-to-teacher ratio of 15:1 ensures every child thrives.",
  },
  {
    icon: Trophy,
    title: "Extracurricular Excellence",
    description: "Sports, arts, music, and technology clubs that nurture talent beyond the classroom.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground gold-underline-center">
            About Our School
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            BrightMinds Academy has been a beacon of educational excellence for over 25 years.
            We combine rigorous academics with character development to shape tomorrow's leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="bg-card rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <feat.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 font-serif">{feat.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>

        {/* Courses */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center gold-underline-center mb-12">
            Our Programs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Primary School", grades: "Grades 1–5", desc: "Building strong foundations in literacy, numeracy, and critical thinking through engaging, interactive learning." },
              { title: "Middle School", grades: "Grades 6–8", desc: "Developing analytical skills and independence with a rich blend of core academics and exploratory electives." },
              { title: "High School", grades: "Grades 9–12", desc: "College-preparatory programs including AP courses, career guidance, and leadership development opportunities." },
            ].map((prog) => (
              <div key={prog.title} className="bg-primary text-primary-foreground rounded-lg p-8">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">{prog.grades}</span>
                <h4 className="text-xl font-bold mt-2 mb-3 font-serif">{prog.title}</h4>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
