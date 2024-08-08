import Overview from "./components/overview";
import Product from "./components/product";
import ChoseUs from "./components/choseUs";
import FAQ from "./components/Faq";
import Reviews from "./components/reviews";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Overview />
      <Product />
      <ChoseUs/>
      <FAQ/>
      <Reviews/>
      <Footer/>
    </main>
  );
}
