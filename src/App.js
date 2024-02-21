import { Hero, Footer, Navbar, Service, Location, PopularService, AppDownload, FrequentlyAskedQuestion, Testimonial, ExclusiveStore, Subscribe, Guarantee } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Service />
      <Location />
      <PopularService />
      <Guarantee />
      <Subscribe />
      <ExclusiveStore />
      <Testimonial />
      <FrequentlyAskedQuestion />
      <AppDownload />
      <Footer />
    </ div >
  );
}

export default App;
