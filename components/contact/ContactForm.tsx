export default function ContactForm() {
  return (
    <div className="bg-white rounded-xl shadow p-8">

      <h2 className="text-3xl font-bold">
        Send us a Message
      </h2>

      <form className="space-y-5 mt-8">

        <input
          placeholder="Your Name"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          placeholder="Email Address"
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          placeholder="Subject"
          className="w-full border rounded-lg px-4 py-3"
        />

        <textarea
          rows={6}
          placeholder="Message"
          className="w-full border rounded-lg px-4 py-3"
        />

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold">
          SEND MESSAGE →
        </button>

      </form>

    </div>
  );
}