import Image from "next/image";
import { galleryImages } from "@/data/blogData";

export default function Gallery() {
  return (
    <div className="rounded-lg border border-gray-200 p-6 bg-white">

      <h2 className="mb-6 text-xl font-semibold text-gray-900">
        Gallery
      </h2>

      <div className="grid grid-cols-4 gap-1">

        {galleryImages.map((image, index) => (

          <div
            key={index}
            className="group overflow-hidden rounded-md border border-gray-200 cursor-pointer"
          >

            <Image
              src={image}
              alt={`Gallery ${index + 1}`}
              width={180}
              height={180}
              className="h-32 w-full object-cover transition duration-300 group-hover:scale-105"/>

          </div>

        ))}

      </div>

    </div>
  );
}