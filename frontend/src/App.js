import "./App.css";
import ClientSlider from "./components/ClientSlider";
import ContactButton from "./components/ContactButton";
import CyberResilience from "./components/CyberResilience";
import FeedbackSection from "./components/Feedbacks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import JourneyTimeline from "./components/OurJourney";
import ProgramsOffered from "./components/ProgramsOffered";
import StatsSection from "./components/StatsSection";
import WhyForensic from "./components/WhyForensic";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSlider />
      <WhyForensic />
      <CyberResilience />
      <StatsSection />
      <ClientSlider />
      <ProgramsOffered />
      <JourneyTimeline />
      <FeedbackSection />
      <ContactButton />
      <Footer />
    </div>
  );
}

export default App;
