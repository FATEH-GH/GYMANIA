import FeaturedExercises from "@/components/FeaturedExercises";
import Hero from "@/components/Hero";
import SearchExercises from "@/components/SearchExercises";

export default function Home() {
  return (
    <main className="wrapper">
      <Hero />
      <FeaturedExercises />
      <SearchExercises />
    </main>
  );
}
