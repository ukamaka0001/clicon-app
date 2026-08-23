import { FiPhoneCall, FiMessageCircle, FiArrowRight } from "react-icons/fi";

export default function ContactSupport() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-center">
          <span className="bg-blue-100 text-blue-600 text-xs font-bold uppercase px-4 py-2 rounded">
            Contact Us
          </span>
        </div>

        <h2 className="text-4xl font-bold text-center text-gray-900 mt-5">
          Don't find your answer.
          <br />
          Contact with us
        </h2>

        <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
          Need more help? Our support team is always ready to assist you.
          Choose your preferred contact method below.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14">

          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">

            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
              <FiPhoneCall className="text-3xl text-orange-500" />
            </div>

            <h3 className="text-2xl font-semibold mt-6">
              Call us now
            </h3>

            <p className="text-gray-500 mt-3">
              Available Monday – Sunday, 8:00 AM – 8:00 PM.
            </p>

            <h4 className="text-3xl font-bold mt-6">
              +1 (808) 555-0111
            </h4>

            <button className="mt-8 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition">
              CALL NOW
              <FiArrowRight />
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">

            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <FiMessageCircle className="text-3xl text-green-600" />
            </div>

            <h3 className="text-2xl font-semibold mt-6">
              Chat with us
            </h3>

            <p className="text-gray-500 mt-3">
              Chat live with one of our customer support agents.
            </p>

            <h4 className="text-3xl font-bold mt-6">
              Live Chat Support
            </h4>

            <button className="mt-8 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition">
              START CHAT
              <FiArrowRight />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}