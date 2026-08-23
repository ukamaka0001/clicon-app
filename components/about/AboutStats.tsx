export default function AboutStats() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h2 className="text-4xl font-bold text-orange-500">
              10K+
            </h2>

            <p className="mt-2 text-gray-600">
              Happy Customers
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-orange-500">
              500+
            </h2>

            <p className="mt-2 text-gray-600">
              Trusted Brands
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-orange-500">
              50+
            </h2>

            <p className="mt-2 text-gray-600">
              Countries Served
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-orange-500">
              1M+
            </h2>

            <p className="mt-2 text-gray-600">
              Products Sold
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}