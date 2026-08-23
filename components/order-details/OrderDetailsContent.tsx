import { FaCheck, FaShoppingBag, FaBoxOpen, FaTruck, FaHome, } from "react-icons/fa";

import { ShoppingBag, Package, Truck, CheckCircle, } from "lucide-react";
import { FaCheckDouble, FaUser, FaMapMarkerAlt, FaSpinner, FaCheckCircle, FaCalendarAlt, } from "react-icons/fa";

export default function OrderDetailsContent() {
  return (
    <>
      {/* Breadcrumb */}

      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">

          <div className="flex items-center gap-2 text-sm">

            <FaHome />

            <span>Home</span>

            <span>{">"}</span>

            <span>Pages</span>

            <span>{">"}</span>

            <span>Track Order</span>

            <span>{">"}</span>

            <span className="text-orange-500">
              Order Details
            </span>

          </div>

        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="border border-gray-200 rounded shadow-sm p-8 mt-8">

        <div className="rounded bg-yellow-100 shadow-sm p-6">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

            <div>
              <h2 className="text-2xl font-bold">
               #965459761
              </h2>

              <p className="text-gray-500 mt-2">
                4 Products • Order Placed Jan 17, 2025 at 7:32pm
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Total Amount
              </p>

              <h3 className="text-3xl font-bold text-blue-600">
                $1199.00
              </h3>
            </div>

          </div>

        </div>


        

  <h2 className="text-xl font-semibold mb-10">
    Order Progress
  </h2>

  <div className="relative">
    <div className="absolute top-4 left-40 right-40 h-1 bg-orange-200"></div>
    <div className="absolute top-4 left-40 w-[25%] h-1 bg-orange-500"></div>

    <div className="relative grid grid-cols-4">

      <div className="flex flex-col items-center">

        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white z-10">
          <FaCheck size={12} />
        </div>

        <FaShoppingBag size={22} className="mt-4 text-orange-500"/>

        <p className="mt-2 text-sm font-medium">
          Order Placed
        </p>

      </div>


      <div className="flex flex-col items-center">

        <div className="w-8 h-8 rounded-full bg-orange-500 border-4 border-white z-10"></div>

        <FaBoxOpen size={22} className="mt-4 text-orange-500"/>

        <p className="mt-2 text-sm font-medium">
          Packaging
        </p>

      </div>

      <div className="flex flex-col items-center">

        <div className="w-8 h-8 rounded-full bg-white border-2 border-orange-500 z-10"></div>

        <FaTruck size={22} className="mt-4 text-orange-200" />

        <p className="mt-2 text-sm text-gray-500">
          On The Road
        </p>

      </div>

      <div className="flex flex-col items-center">

        <div className="w-8 h-8 rounded-full bg-white border-2 border-orange-500 z-10"></div>

        <FaHome size={22} className="mt-4 text-orange-200" />

        <p className="mt-2 text-sm text-gray-500">
          Delivered
        </p>

      </div>

    </div>

  </div>

</div>

        

        <div className="border border-gray-200 rounded shadow-sm p-8 mt-8">

  <h2 className="text-xl font-semibold mb-8">
    Order Activity
  </h2>

  <div className="space-y-8">

    <div className="flex gap-4">

      <FaCheckDouble
        className="text-green-600 mt-1"
        size={18}
      />

      <div>
        <h3 className="font-medium">
          Order Confirmed
        </h3>

        <p className="text-sm text-gray-500">
          Jan 17, 2025 • 7:32 PM
        </p>
      </div>

    </div>


    <div className="flex gap-4">

      <FaUser
        className="text-blue-500 mt-1"
        size={18}
      />

      <div>
        <h3 className="font-medium">
          Order Received By Warehouse
        </h3>

        <p className="text-sm text-gray-500">
          Jan 18, 2025 • 8:15 AM
        </p>
      </div>

    </div>

    <div className="flex gap-4">

      <FaMapMarkerAlt
        className="text-blue-500 mt-1"
        size={18}
      />

      <div>
        <h3 className="font-medium">
          Package Arrived At Sorting Center
        </h3>

        <p className="text-sm text-gray-500">
          Jan 18, 2025 • 2:00 PM
        </p>
      </div>

    </div>

    <div className="flex gap-4">

      <FaSpinner
        className="text-orange-500 mt-1"
        size={18}
      />

      <div>
        <h3 className="font-medium">
          Package In Transit
        </h3>

        <p className="text-sm text-gray-500">
          Jan 19, 2025 • 10:20 AM
        </p>
      </div>

    </div>

    <div className="flex gap-4">

      <FaCheckCircle
        className="text-green-600 mt-1"
        size={18}
      />

      <div>
        <h3 className="font-medium">
          Shipment Verified
        </h3>

        <p className="text-sm text-gray-500">
          Jan 19, 2025 • 4:00 PM
        </p>
      </div>

    </div>

    <div className="flex gap-4">

      <FaCalendarAlt
        className="text-blue-500 mt-1"
        size={18}
      />

      <div>
        <h3 className="font-medium">
          Expected Delivery Date
        </h3>

        <p className="text-sm text-gray-500">
          Jan 20, 2025
        </p>
      </div>

    </div>

  </div>

</div>

        <div className="bg-gray-50 border rounded-xl p-8 mt-8">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

            <div>

              <h2 className="text-xl font-semibold">
                Need Help With Your Order?
              </h2>

              <p className="text-gray-500 mt-2">
                Contact our support team for assistance.
              </p>

            </div>

            <div className="flex gap-3">

              <button className="px-6 py-3 bg-orange-500 text-white rounded-lg">
                Contact Support
              </button>

              <button className="px-6 py-3 border rounded-lg">
                Live Chat
              </button>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}