import { RxBoxModel } from "react-icons/rx";
import { GrTrophy, GrMultimedia } from "react-icons/gr";
import { SlEarphones } from "react-icons/sl";

export default function FeaturesBar() {
  const features = [
    {
      icon: RxBoxModel,
      title: "FASTEST DELIVERY",
      desc: "Delivery in 24/H",
    },
    {
      icon: GrTrophy,
      title: "24 HOURS RETURN",
      desc: "100% money-back guarantee",
    },
    {
      icon: GrMultimedia,
      title: "SECURE PAYMENT",
      desc: "Your money is safe",
    },
    {
      icon: SlEarphones,
      title: "SUPPORT 24/7",
      desc: "Live contact/message",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">

      <div className="border border-gray-300 rounded-xl bg-white p-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div key={i} className={`flex items-center gap-4 p-4 ${ i !== features.length - 1  ? "lg:border-r lg:border-gray-300" : "" }`}>
                <Icon size={26} className="text-black flex-shrink-0" />
                <div>
                  <h2 className="font-semibold text-sm">
                    {item.title}
                  </h2>

                  <p className="text-xs text-gray-600 mt-1">
                    {item.desc}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}