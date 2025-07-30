import Link from "next/link";

const features = [
  {
    title: "24x7 Emergency",
    desc: "Immediate care available anytime, day or night.",
    icon: "🚑",
    slug:"emergency"
  },
  {
    title: "Expert Doctors",
    desc: "World-class physicians with decades of experience.",
    icon: "👨‍⚕️",
    slug:"doctors"
  },
  {
    title: "International Patients",
    desc: "Complete assistance for patients from abroad.",
    icon: "🌍",
    slug:"international"
  },
];

const FeaturesSection = ({id}) => {
  return (
    <section id={id} className="features-section">
      <h2>Why Choose Us</h2>
      <div className="features-grid">
        
        {features.map((f, i) => (
          <Link href={`/features/${f.slug}`} key={i} className="feature-card-link">
          <div className="feature-card">
            <span className="feature-icon">{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
