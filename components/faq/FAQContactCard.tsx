export default function FAQContactCard() {
  return (
    <div className="bg-[#FFF3D6] rounded-xl p-8">

      <h2 className="text-2xl font-bold">
        Didn't find your answer?
      </h2>

      <p className="text-gray-600 mt-4 leading-7">
        Send us your question and our support team
        will get back to you as soon as possible.
      </p>

      <form className="space-y-4 mt-8">

        <input
          placeholder="Your Name"
          className="w-full rounded-lg border bg-white px-4 py-3 outline-none focus:border-orange-500"
        />

        <input
          placeholder="Email Address"
          className="w-full rounded-lg border bg-white px-4 py-3 outline-none focus:border-orange-500"
        />

        <input
          placeholder="Subject"
          className="w-full rounded-lg border bg-white px-4 py-3 outline-none focus:border-orange-500"
        />

        <textarea
          rows={5}
          placeholder="Message"
          className="w-full rounded-lg border bg-white px-4 py-3 resize-none outline-none focus:border-orange-500"
        />

        <button className="w-full rounded-lg bg-orange-500 py-4 font-semibold text-white hover:bg-orange-600">
          SEND MESSAGE →
        </button>

      </form>

    </div>
  );
}