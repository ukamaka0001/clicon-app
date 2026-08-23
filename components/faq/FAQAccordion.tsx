"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What are the shipping options available?",
    answer:
      "We provide Standard Shipping, Express Shipping and Same-Day Delivery in selected cities.",
  },
  {
    question: "How can I return my purchase?",
    answer:
      "Returns are accepted within 30 days. Items must be unused and in their original packaging.",
  },
  {
    question: "Do I need an account to place an order?",
    answer:
      "No. You can checkout as a guest, although creating an account gives you additional benefits.",
  },
  {
    question: "How do I track my order?",
    answer:
      "After shipping, we'll email your tracking number so you can monitor delivery.",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Orders can only be cancelled before shipment.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes. We currently ship to more than 80 countries worldwide.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-4">

      {faqs.map((faq, index) => (

        <div
          key={index}
          className="rounded-xl border bg-white overflow-hidden"
        >
          <button
            onClick={() =>
              setOpen(open === index ? -1 : index)
            }
            className={`w-full flex justify-between items-center px-6 py-5 transition ${
              open === index
                ? "bg-orange-500 text-white"
                : "hover:bg-gray-50"
            }`}
          >
            <span className="font-medium text-left">
              {faq.question}
            </span>

            {open === index ? (
              <Minus size={20} />
            ) : (
              <Plus size={20} />
            )}
          </button>

          {open === index && (
            <div className="px-6 py-5 text-gray-600 leading-7">
              {faq.answer}
            </div>
          )}
        </div>

      ))}

    </div>
  );
}