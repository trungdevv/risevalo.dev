import Image from "next/image";
import Overview from "./components/overview";
import Bestseller from "./components/bestseller";

export default function Home() {
  return (
    <main> 
     <Overview/>
     <Bestseller/>
    </main>
  );
}
