import Image from "next/image";
import Profile from "./components/profile";
import "./globals.css";
import { Gallery } from "./components/gallery";


export default function Home() {
  return (
    <main className="">
      <div>
        <center>
          <h1>Ilmuwan Luar Biasa</h1>
        </center>
          <Gallery/>
      </div>
  </main>
);
}
