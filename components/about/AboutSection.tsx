import Image from "next/image";
import { Check } from "lucide-react";

export default function AboutSection() {
  const features = [
    "Great 24/7 customer services.",
    "600+ Dedicated employees.",
    "50+ Branches all over the world.",
    "Over 1 Million Electronics Products.",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <div>
          <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-orange-600">
              Who We Are
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-900">
            Kinbo - largest electronics retail shop in the world.
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Pellentesque ultrices, dolor vel hendrerit congue, ipsum velit
            vestibulum risus, ac tincidunt urna lectus at magna. Praesent
            maximus, tortor in malesuada semper, metus lorem tempus lectus,
            eu volutpat arcu ultricies nibh elementum dolor.
          </p>

          <div className="mt-8 space-y-5">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Check
                    size={15}
                    className="text-green-600"
                  />
                </div>

                <p className="text-gray-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          <Image
            src="/images/Banner-1.png"
            alt="Company"
            width={620}
            height={520}
            className="rounded-lg object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}