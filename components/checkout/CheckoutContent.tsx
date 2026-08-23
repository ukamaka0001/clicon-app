"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; 

import {
  FaPaypal,
  FaAmazonPay,
  FaCreditCard,
} from "react-icons/fa";

import { MdPayments } from "react-icons/md";

interface CartItem {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface BillingForm {
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zip: string;
  email: string;
  phone: string;
  orderNotes: string;
}

type PaymentMethod =
  | "Cash"
  | "Visa"
  | "PayPal"
  | "Amazon Pay"
  | "Debit Card";

export default function CheckoutContent() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("Cash");

    const router = useRouter();

  const [billing, setBilling] = useState<BillingForm>({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    email: "",
    phone: "",
    orderNotes: "",
  });

  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  useEffect(() => {
    const savedCart: CartItem[] = JSON.parse(
  localStorage.getItem("cart") || "[]"
);

setCartItems(savedCart);
  }, []);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 0;
  const discount = 24;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax - discount;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    setBilling({
      ...billing,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = () => {
  if (
    !billing.firstName ||
    !billing.email ||
    !billing.address
  ) {
    alert("Please complete required fields");
    return;
  }

  if (
    paymentMethod === "Debit Card" &&
    (!card.number ||
      !card.expiry ||
      !card.cvv)
  ) {
    alert("Please enter card details");
    return;
  }

  const orderData = {
    orderNumber:
      "ORD-" +
      Math.floor(
        100000 + Math.random() * 900000
      ),

    customerName:
      `${billing.firstName} ${billing.lastName}`.trim(),

    email: billing.email,

    paymentMethod,

    paymentStatus:
    paymentMethod === "Cash"
    ? "Pending"
    : "Paid",
    orderStatus: "Processing",

    orderDate: new Date().toLocaleDateString(),

    total,

    items: cartItems,

    estimatedDelivery:
      new Date(
        Date.now() +
          7 * 24 * 60 * 60 * 1000
      ).toLocaleDateString(),
  };

  localStorage.setItem(
    "latestOrder",
    JSON.stringify(orderData)
  );

  localStorage.removeItem("cart");

  setCartItems([]);

  router.push("/order-success");
};

  return (
    <>

      <div className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 text-sm">

          <Link
            href="/"
            className="text-gray-500 hover:text-orange-500"
          >
            Home
          </Link>

          <span>{">"}</span>

          <Link
            href="/shopping-cart"
            className="text-gray-500 hover:text-orange-500"
          >
            Shopping Cart
          </Link>

          <span>{">"}</span>

          <span className="text-sky-500">
            Checkout
          </span>

        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-10">

        {/* Heading */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Checkout
          </h1>

          <p className="text-gray-500 mt-2">
            Complete your billing information and place your order.
          </p>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">

          {/* LEFT */}

          <div className="space-y-6">

            {/* Billing */}

            <div className="bg-white border border-gray-200 rounded-xl p-6">

              <h2 className="text-xl font-semibold mb-6">
                Billing Information
              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  name="firstName"
                  value={billing.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name *"
                  className="h-12 border rounded-lg px-4 outline-none focus:border-orange-500"
                />

                <input
                  name="lastName"
                  value={billing.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="h-12 border rounded-lg px-4 outline-none focus:border-orange-500"
                />

                <input
                  name="company"
                  value={billing.company}
                  onChange={handleInputChange}
                  placeholder="Company Name"
                  className="h-12 border rounded-lg px-4 md:col-span-2 outline-none focus:border-orange-500"
                />

                <input
                  name="address"
                  value={billing.address}
                  onChange={handleInputChange}
                  placeholder="Address *"
                  className="h-12 border rounded-lg px-4 md:col-span-2 outline-none focus:border-orange-500"
                />

              </div>

              <div className="grid md:grid-cols-4 gap-4 mt-4">

                <select
                  name="country"
                  value={billing.country}
                  onChange={handleInputChange}
                  className="h-12 border rounded-lg px-4"
                >
                  <option>Country</option>
                </select>

                <select
                  name="state"
                  value={billing.state}
                  onChange={handleInputChange}
                  className="h-12 border rounded-lg px-4"
                >
                  <option>State</option>
                </select>

                <select
                  name="city"
                  value={billing.city}
                  onChange={handleInputChange}
                  className="h-12 border rounded-lg px-4"
                >
                  <option>City</option>
                </select>

                <input
                  name="zip"
                  value={billing.zip}
                  onChange={handleInputChange}
                  placeholder="Zip Code"
                  className="h-12 border rounded-lg px-4"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">

                <input
                  name="email"
                  value={billing.email}
                  onChange={handleInputChange}
                  placeholder="Email *"
                  className="h-12 border rounded-lg px-4"
                  
                />

                <input
                  name="phone"
                  value={billing.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="h-12 border rounded-lg px-4"
                />
                </div>
                <label className="flex items-center gap-3 mt-6">
                <input
                 type="checkbox"
                 className="w-4 h-4 accent-orange-500"
                  />

                  <span className="text-sm text-gray-600">
                   Ship to different address
                   </span>
                </label>

              

            </div>

            {/* Payment */}

            <div className="bg-white border border-gray-200 rounded-xl p-6">
               <h2 className="text-xl font-semibold mb-6">
                Payment Option
               </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 border rounded-xl overflow-hidden">

            <label
                onClick={() => setPaymentMethod("Cash")}
                className={`flex flex-col items-center gap-2 p-5 cursor-pointer border-r ${
               paymentMethod === "Cash"
               ? "bg-orange-50"
               : ""
               }`}>
                <MdPayments size={28} />

               <span className="text-sm text-center">
                 Cash On Delivery
               </span>

      <input
        type="radio"
        checked={paymentMethod === "Cash"}
        readOnly
      />
    </label>

    <label
      onClick={() => setPaymentMethod("Visa")}
      className={`flex flex-col items-center gap-2 p-5 cursor-pointer border-r ${
        paymentMethod === "Visa"
          ? "bg-orange-50"
          : ""
      }`}
    >
      <Image
        src="/payment/visa.png"
        alt="Visa"
        width={40}
        height={40}
      />

      <span className="text-sm">
        Visa
      </span>

      <input
        type="radio"
        checked={paymentMethod === "Visa"}
        readOnly
      />
    </label>

    <label
      onClick={() => setPaymentMethod("PayPal")}
      className={`flex flex-col items-center gap-2 p-5 cursor-pointer border-r ${
        paymentMethod === "PayPal"
          ? "bg-orange-50"
          : ""
      }`}
    >
      <FaPaypal
        size={28}
        className="text-blue-600"
      />

      <span className="text-sm">
        PayPal
      </span>

      <input
        type="radio"
        checked={paymentMethod === "PayPal"}
        readOnly
      />
    </label>

    <label
      onClick={() => setPaymentMethod("Amazon Pay")}
      className={`flex flex-col items-center gap-2 p-5 cursor-pointer border-r ${
        paymentMethod === "Amazon Pay"
          ? "bg-orange-50"
          : ""
      }`}
    >
      <FaAmazonPay size={28} />

      <span className="text-sm">
        Amazon Pay
      </span>

      <input
        type="radio"
        checked={paymentMethod === "Amazon Pay"}
        readOnly
      />
    </label>

    <label
      onClick={() => setPaymentMethod("Debit Card")}
      className={`flex flex-col items-center gap-2 p-5 cursor-pointer ${
        paymentMethod === "Debit Card"
          ? "bg-orange-50"
          : ""
      }`}
    >
      <FaCreditCard size={28} />

      <span className="text-sm">
        Debit / Credit
      </span>

      <input
        type="radio"
        checked={paymentMethod === "Debit Card"}
        readOnly
      />
    </label>

  </div>

  {paymentMethod === "Debit Card" && (
    <div className="mt-6 space-y-4">

      <input
        value={card.number}
        onChange={(e) =>
          setCard({
            ...card,
            number: e.target.value,
          })
        }
        placeholder="Card Number"
        className="w-full h-12 border rounded-lg px-4"
      />

      <div className="grid grid-cols-2 gap-4">

        <input
          value={card.expiry}
          onChange={(e) =>
            setCard({
              ...card,
              expiry: e.target.value,
            })
          }
          placeholder="MM / YY"
          className="h-12 border rounded-lg px-4"
        />

        <input
          value={card.cvv}
          onChange={(e) =>
            setCard({
              ...card,
              cvv: e.target.value,
            })
          }
          placeholder="CVC"
          className="h-12 border rounded-lg px-4"
        />

      </div>

    </div>
  )}
</div>
       

            <div className="bg-white border border-gray-200 rounded-xl p-6">

              <h2 className="text-xl font-semibold mb-4">
                Additional Information
              </h2>

              <textarea
                rows={5}
                name="orderNotes"
                value={billing.orderNotes}
                onChange={handleInputChange}
                placeholder="Notes about your order..."
                className="w-full border rounded-lg p-4 resize-none"
              />

            </div>

          </div>
{/* RIGHT */}
<div>
  <div className="border rounded-lg p-5 bg-white sticky top-6">

    <h2 className="text-lg font-semibold mb-5">
      Order Summary
    </h2>

    {cartItems.length === 0 ? (
      <div className="text-center py-10">
        <p className="text-gray-500 mb-4">
          Your cart is empty
        </p>

        <Link
          href="/shop-grid"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md"
        >
          Continue Shopping
        </Link>
      </div>
    ) : (
      <>
        {/* Products */}
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mb-4"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={64}
              height={64}
              className="w-16 h-16 object-contain"
            />

            <div>
              <h3 className="text-sm">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500">
                {item.quantity} × $
                {item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}

        <hr className="my-4" />

        {/* Totals */}
        <div className="space-y-3 text-sm">

          <div className="flex justify-between">
            <span>Sub-total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between">
            <span>Discount</span>
            <span>-${discount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <hr />

          <div className="flex justify-between font-semibold text-base">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

        </div>
      </>
    )}

    <button
      onClick={handlePlaceOrder}
      disabled={cartItems.length === 0}
      className="w-full mt-6 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white py-3 rounded-md font-medium"
    >
      PLACE ORDER →
    </button>

  </div>
</div>
</div>
</main>
</>
);
}