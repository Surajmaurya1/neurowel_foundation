import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Focusarea from "./components/Focusarea";
import VideoGallery from "./components/VideoGallery";
import DonationCard from "./components/DonationCard";
import Description from "./components/Description";

export default function Home() {
  return (
    <>
      <main className="pt-4">
        <Hero />
        <Description />
        <Focusarea />
        <Stats />
        <VideoGallery />
        <DonationCard />
      </main>
    </>
  );
}
