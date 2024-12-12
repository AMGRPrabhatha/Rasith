export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Rasith Abeywickrama</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">UI/UX</span>{" "}
            <br />
            Engineer
          </h1>
          <p className="hero--section-description">
          I specialize in creating intuitive and visually engaging digital experiences.
            <br /> With a focus on user-centered design, I craft seamless interfaces that balance usability and aesthetics to drive impactful results.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
