import './App.css';
import CardsSection from './components/CardsSection';
import ImageCard from './components/ImageCard';
import Navbar from './components/Navbar';
import chair from './assets/chair1.png';

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center mx-[5rem]">
        <div className="flex max-md:flex-wrap w-screen justify-center items-center">
          <ImageCard />
          <ImageCard />
        </div>
        <CardsSection />
      </div>
    </>
  );
}

export default App;
