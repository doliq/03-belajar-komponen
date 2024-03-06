import React from "react";
import Image from "next/image";
import Profile from "./components/profile";
import "./globals.css";
import { Gallery } from "./components/gallery";
import Bio from "./components/bio";
import TodoList from "./components/todolist";
import MyGallery from "./components/mygallery";
import MyProfileV2 from "./components/myprofile";
import MyProfile from "./components/myprofile";


// //no 1
// export default function Home() {
//   return (
//     <main className="titleFont">
//       <div>
//         <center>
//           <h1>Ilmuwan Luar Biasa</h1>
//         </center>
//           <Gallery/>
//       </div>
//   </main>
// );
// }

// //no 2
// export default function Home() {
//   return (
//     <main className="titleFont">
//       <div>
//         <center>
//           <h1>Ilmuwan Luar Biasa</h1>
//         </center>
//           <Gallery/>
//       </div>
//   </main>
// );
// }

// // no 3
// export default function Home() {
//   return (
//     <main className="bioText">
//       <div>
//         <center>
//           {/* <h1>Ilmuwan Luar Biasa</h1> */}
//         </center>
//           {/* <Gallery/> */}
//           <Bio/>
//       </div>
//   </main>
// );
// }

// // no 4
// export default function Home() {
//   return (
//     <section>
//       <h1 className="titleFont">Ilmuwan yang luar biasa</h1>
//       <hr />
//       {/* <Gallery /> */}
//       <hr />
//       <TodoList />
//     </section>
//   );
// }

// //no 7 
// export default function Home() {
//   return (
//     <main className="myGallery">
//       <div>
//           <MyGallery/>
//       </div>
//   </main>
// );
// }

// //no 8 
// export default function Home() {
//   return (
//     <main className="">
//       <div>
//           <MyProfile/>
//       </div>
//   </main>
// );
// }

//no 9
export default function Home() {
  return (
    <main className="myGallery">
      <div>
          <MyProfileV2/>
      </div>
  </main>
);
}