import {
  PhoneCall,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function FAQSidebar() {
  return (
    <div className="bg-white rounded-xl border p-8 mt-6 sticky top-6">

      <h3 className="text-xl font-semibold mb-8">
        Need More Help?
      </h3>

      <div className="space-y-8">

        <div className="flex gap-4">
          <PhoneCall className="text-orange-500 mt-1" />

          <div>
            <p className="text-sm text-gray-500">
              Phone
            </p>

            <h4 className="font-semibold">
              +1 (800) 123-4567
            </h4>
          </div>
        </div>

        <div className="flex gap-4">
          <Mail className="text-orange-500 mt-1" />

          <div>
            <p className="text-sm text-gray-500">
              Email
            </p>

            <h4 className="font-semibold">
              support@clicon.com
            </h4>
          </div>
        </div>

        <div className="flex gap-4">
          <Clock className="text-orange-500 mt-1" />

          <div>
            <p className="text-sm text-gray-500">
              Working Hours
            </p>

            <h4 className="font-semibold">
              Mon - Fri
            </h4>

            <p className="text-gray-500">
              8:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <MessageCircle className="text-orange-500 mt-1" />

          <div>
            <p className="text-sm text-gray-500">
              Live Chat
            </p>

            <h4 className="font-semibold text-green-600">
              Online 24/7
            </h4>
          </div>
        </div>

      </div>

    </div>
  );
}