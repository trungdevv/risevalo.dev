import Overview from "./components/overview";
import ChoseUs from "./components/Us";
import FAQ from "./components/Faq";
import Reviews from "./components/reviews";

export default function Home() {
  return (
    <main>
      <Overview />
      <ChoseUs />
      <FAQ />
      <Reviews />
    </main>
  );
}
