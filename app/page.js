import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Events from "./components/Events";
import VideoGallery from "./components/VideoGallery";
import DonationCard from "./components/DonationCard";
import Description from "./components/Description";


export default function Home(){
  return (
    <>
     
      <main className="pt-4">
        <Hero />
        <Description/>
        <Stats />
        
        <Events />
        <VideoGallery />
        <DonationCard />
      </main>
      
    </>
  );
}
