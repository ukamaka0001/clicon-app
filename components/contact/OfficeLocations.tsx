"use client";

import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const offices = [
  {
    city: "New York",
    address: "4517 Washington Ave, Manchester, Kentucky 39495",
    phone: "+1 (800) 123-4567",
    email: "newyork@clicon.com",
  },
  {
    city: "London",
    address: "22 Oxford Street, London, United Kingdom",
    phone: "+44 20 1234 5678",
    email: "london@clicon.com",
  },
  {
    city: "Dubai",
    address: "Business Bay, Dubai, UAE",
    phone: "+971 4 123 4567",
    email: "dubai@clicon.com",
  },
];

export default function OfficeLocations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Our Offices
          </h2>

          <p className="text-gray-500 mt-3">
            Visit any of our offices around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {offices.map((office) => (
            <div
              key={office.city}
              className="border rounded-xl p-8 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-6">
                {office.city}
              </h3>

              <div className="space-y-4">

                <div className="flex gap-3">
                  <MapPin className="text-orange-500 mt-1" />
                  <p className="text-gray-600">
                    {office.address}
                  </p>
                </div>

                <div className="flex gap-3">
                  <Phone className="text-orange-500" />
                  <p>{office.phone}</p>
                </div>

                <div className="flex gap-3">
                  <Mail className="text-orange-500" />
                  <p>{office.email}</p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}