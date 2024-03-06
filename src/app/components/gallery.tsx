import Profile from "./profile";
import Image from "next/image";

export function Gallery() {
    return (
        <div className="imageContainer"  >
            <Profile />
            <Profile />
            <Profile />
        </div>
    );
}