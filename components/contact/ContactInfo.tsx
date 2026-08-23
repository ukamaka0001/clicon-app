import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-8">

      <div className="flex gap-4">
        <Phone className="text-orange-500" />
        <div>
          <h3 className="font-semibold">Phone</h3>
          <p className="text-gray-500">
            +1 (800) 123-4567
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <Mail className="text-orange-500" />
        <div>
          <h3 className="font-semibold">Email</h3>
          <p className="text-gray-500">
            support@clicon.com
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <MapPin className="text-orange-500" />
        <div>
          <h3 className="font-semibold">Address</h3>
          <p className="text-gray-500">
            4517 Washington Ave. Manchester, Kentucky 39495
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <Clock className="text-orange-500" />
        <div>
          <h3 className="font-semibold">Working Hours</h3>
          <p className="text-gray-500">
            Monday - Friday
            <br />
            8:00 AM - 6:00 PM
          </p>
        </div>
      </div>

    </div>
  );
}