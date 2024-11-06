import Image from "next/image";
import Homehead from './Components/Home-page/Homehead'
import Card from './Components/Home-page/Card'
import Footer from './Components/Home-page/Footer'

export default function Home() {
  return (
    <div>
      <Homehead />
      <Card />
      <Footer />
    </div>
  );
}
