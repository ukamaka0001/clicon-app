import Image from "next/image";
import { FaStar } from "react-icons/fa";

type ProductCardProps = {
  title: string;
  price: string;
  oldPrice: string;
  image: string;
  badge?: string;
  badgeColor?: string;
};

export default function ProductCard({
  title,
  price,
  oldPrice,
  image,
  badge,
  badgeColor,
}: ProductCardProps) {
  return (
    <div className="border border-gray-300 p-4 hover:shadow-lg transition bg-white">

      <div className="p-4 mb-4 relative h-[220px] flex items-center justify-center">

        {badge && (
          <div className={`${badgeColor} text-white text-xs px-3 py-1 rounded-full absolute top-3 left-3`}>
            {badge}
          </div>
        )}

        <Image src={image} alt={title} width={180} height={180} className="object-contain" />

      </div>
      <div className="flex items-center gap-1 text-yellow-400 mb-2">

        {[1, 2, 3, 4, 5].map((item) => (
          <FaStar key={item} size={12} />
        ))}

        <span className="text-gray-500 text-xs ml-2">
          (738)
        </span>

      </div>
      <h2 className="font-medium text-sm leading-relaxed mb-3">
        {title}
      </h2>

      <div className="flex items-center gap-3">

        <span className="text-blue-600 font-bold">
          {price}
        </span>

        <span className="line-through text-gray-400 text-sm">
          {oldPrice}
        </span>

      </div>

    </div>
  );
}