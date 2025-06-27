import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Solid1 from "../assets/solid1.png";
import Solid2 from "../assets/solid2.png";
import Solid3 from "../assets/solid3.png";

const faqs = [
  {
    question: "This is a frequently asked question?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Tellus eget consectetur tortor odio malesuada cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
  },
  {
    question: "This is a frequently asked question?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Tellus eget consectetur tortor  feugiat laoreet morbi tellus dui massa.",
  },
  {
    question:
      "This is a very long frequently asked question about our services with more than one line?",
    answer:
      "lorem ipsum dolor sit amet consectetur. Tellus eget consectetur tortor odio malesuada cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
  },
  {
    question: "This is a frequently asked question?",
    answer:
      "lorem ipsum dolor sit amet consectetur. Tellus eget consectetur tortor odio malesuada cursus leo dui.",
  },
  {
    question: "This is a question?",
    answer:
      "lorem ipsum dolor sit amet consectetur. Tellus eget consectetur tortor odio malesuada cursus leo dui.",
  },
  {
    question: "This is a question?",
    answer:
      "lorem ipsum dolor sit amet consectetur. Tellus eget consectetur tortor odio malesuada cursus leo dui.",
  },
];

export default function PartnerPrograms() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-white text-black font-sans">
      {/* Partnership Programs Section */}
      <section className="px-6 py-10 md:px-10 md:py-20">
        <p className="text-xl md:text-2xl text-[#6C63FF] font-medium mb-2">
          Our programs
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12">
          Types of partnerships <br /> programs
        </h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="flex flex-col gap-4">
            <img className="w-8 md:w-10 h-auto" src={Solid1} alt="Solid1" />
            <div>
              <h3 className="font-semibold mb-1">Affiliate partner program</h3>
              <p className="text-sm text-gray-600">
                Bring value to your customers with a world-class in-app
                messaging tool that increases user-to-user engagement and
                retention. Get incentivized for referring CometChat to any of
                your customers.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col gap-4">
            <img className="w-8 md:w-10 h-auto" src={Solid2} alt="Solid2" />
            <div>
              <h3 className="font-semibold mb-1">Technology partner program</h3>
              <p className="text-sm text-gray-600">
                Development teams can use our plug and play solution to build
                top class chat solutions for their clients using our SDKs and
                APIs. It’s simple, safe and secure!
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col gap-4">
            <img className="w-8 md:w-10 h-auto" src={Solid3} alt="Solid3" />
            <div>
              <h3 className="font-semibold mb-1">Start-up growth program</h3>
              <p className="text-sm text-gray-600">
                We help incubators, accelerators, co-working space that foster
                an ecosystem of start-ups. This program also enables VCs to
                accelerate the growth of their portfolio companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-white to-[#f4f2fa] px-10 py-20 ">
        <p className="text-center text-[#FF7F3E] font-semibold text-2xl mb-2 ">
          FAQ’s
        </p>
        <h2 className="text-3xl font-bold text-center mb-10">
          We want to help you <br /> with all your doubts
        </h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden ">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-5 py-4 flex justify-between items-center font-medium text-base bg-gray-200 opacity-85"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {openIndex === index && faq.answer && (
                <div className="px-5 pb-4 text-sm text-gray-600 bg-gray-200 opacity-85">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
