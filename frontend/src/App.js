import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import WhyForensic from "./components/WhyForensic";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSlider />
      <WhyForensic />
      <Footer />
    </div>
  );
}

export default App;
