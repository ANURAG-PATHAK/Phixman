import { Hero, Footer, Navbar, Service, Location, PopularService, AppDownload, FrequentlyAskedQuestion, Testimonial } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Service />
      <Location />
      <PopularService />
      <Testimonial />
      <FrequentlyAskedQuestion />
      <AppDownload />
      <Footer />
    </ div >
  );
}

export default App;
