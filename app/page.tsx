import FeaturedExercises from "@/components/FeaturedExercises";
import Hero from "@/components/Hero";
import SearchExercises from "@/components/SearchExercises";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="wrapper">
      <Hero />
      <FeaturedExercises />
      <SearchExercises />
      <Testimonials />
    </main>
  );
}
