import { Hero, Footer, Navbar, Service, Location, PopularService, AppDownload, FrequentlyAskedQuestion } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Service />
      <Location />
      <PopularService />
      <FrequentlyAskedQuestion />
      <AppDownload />
      <Footer />
    </ div >
  );
}

export default App;
