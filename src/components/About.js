import "././Main.css";
import Headerbar from "./Header";
import AboutPage from "./AboutPage";

function About() {
  return (
    <div>
        <Headerbar />

        <h3 className="aboutustopic">About Us</h3>
        <AboutPage />
      </div>

  );
}

export default About;