
const features = [
  {
    title: "24x7 Emergency",
    desc: "Immediate care available anytime, day or night.",
    icon: "🚑",
  },
  {
    title: "Expert Doctors",
    desc: "World-class physicians with decades of experience.",
    icon: "👨‍⚕️",
  },
  {
    title: "International Patients",
    desc: "Complete assistance for patients from abroad.",
    icon: "🌍",
  },
];

const FeaturesSection = ({id}) => {
  return (
    <section id={id} className="features-section">
      <h2>Why Choose Us</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <span className="feature-icon">{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
