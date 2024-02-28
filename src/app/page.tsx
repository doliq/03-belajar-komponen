import Image from "next/image";
import Profile from "./components/profile";
import "./globals.css";
import { Gallery } from "./components/gallery";
import Bio from "./components/bio";
import TodoList from "./components/todolist";
import MyGallery from "./components/mygallery";


// export default function Home() {
//   return (
//     <main className="">
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

// export default function Home() {
//   return (
//     <section>
//       <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
//       <hr />
//       <Gallery />
//       <hr />
//       <TodoList />
//     </section>
//   );
// }

export default function Home() {
  return (
    <main className="">
      <div>
          <MyGallery/>
      </div>
  </main>
);
}