import { useState } from "react";
import "../index.css";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa6";

const FooterAccordion = ({ title, items, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;

  const handleToggle = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={handleToggle}
        className="w-full flex justify-between items-center py-4  text-[#9C6BFF] font-semibold"
      >
        {title}
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <ul className="pl-2 pb-4 text-gray-300 text-sm space-y-1">
          {items.map((item, idx) => (
            <li key={idx} className="cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <footer className="bg-[#0D0B18] text-white pt-10 pb-6 px-6 md:px-20 font-sans text-sm">
      {/* ----- Mobile Accordion View ----- */}
      <div className="block md:hidden">
        <FooterAccordion
          title="Platform"
          index={0}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
          items={[
            "Features",
            "Chat & Messaging",
            "Voice & Video Calls",
            "Security & Compliance",
            "Extensions",
            "Features at a glance",
            "Webhooks & Bots",
            "Moderation",
            "Analytics & Insights",
            "Implementation",
            "Widgets",
            "UI Kits",
            "SDKs & APIs",
            "Technologies",
            "React Chat SDK & API",
            "Angular Chat SDK & API",
            "Vue Chat SDK & API",
            "iOS Swift Chat SDK & API",
            "Android Kotlin Chat SDK & API",
            "Android Java Chat SDK & API",
            "React Native Chat SDK & API",
            "Ionic/Capacitor Chat SDK & API",
            "WordPress Chat SDK & API",
            "Laravel/PHP Chat SDK & API",
            "Flutter Chat SDK & API",
            "Next.js Chat SDK & API",
          ]}
        />
        <FooterAccordion
          title="Solutions"
          index={1}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
          items={[
            "By Use Cases",
            "Social Community",
            "Marketplace",
            "Healthcare",
            "Education",
            "Virtual Events",
            "On-Demand Service",
            "Dating Apps",
            "Gaming",
            "By Organization Type",
            "Enterprise",
            "Startups",
          ]}
        />
        <FooterAccordion
          title="Developers"
          index={2}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
          items={[
            "Technologies documentation",
            "React",
            "Angular",
            "Vue",
            "iOS Swift",
            "Android Kotlin",
            "Android Java",
            "React Native",
            "Ionic/Capacitor",
            "WordPress",
            "Laravel/PHP",
            "Flutter",
            "Next.js",
            "Documentation",
            "Documentation",
            "Product updates",
            "Tutorials",
            "Open-source Apps",
            "Product status",
            "Glossary",
          ]}
        />
        <FooterAccordion
          title="Resources"
          index={3}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
          items={[
            "Customer stories",
            "Blog",
            "Give feedback",
            "Community forum",
            "Help center",
            "Partners",
          ]}
        />
        <FooterAccordion
          title="Competitors"
          index={4}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
          items={["SendBird", "GetStream", "Applozic", "Twilio", "PubNub"]}
        />
        <FooterAccordion
          title="Company"
          index={5}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
          items={["About us", "Careers", "Partners", "Pricing", "Chat with us"]}
        />
      </div>

      {/* ----- Desktop Grid View ----- */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Platform */}
        <div>
          <h3 className="text-[#9C6BFF] font-semibold mb-4 cursor-pointer">
            Platform
          </h3>
          <ul className="all-pointer space-y-1 text-gray-300 text-sm">
            <li className="text-gray-500 py-2 ">Features</li>

            <li>Chat & Messaging</li>
            <li>Voice & Video Calls</li>
            <li>Security & Compliance</li>
            <li>Extensions</li>
            <li>Features at a glance</li>
            <li>Webhooks & Bots</li>
            <li>Moderation</li>
            <li>Analytics & Insights</li>
            <li className="text-gray-500 py-2">Implementation </li>
            <li>Widgets</li>
            <li>UI Kits</li>
            <li>SDKs & APIs</li>
            <li className="text-gray-500 py-2">Technologies</li>
            <li>React Chat SDK & API</li>
            <li>Angular Chat SDK & API</li>
            <li>Vue Chat SDK & API</li>
            <li>iOS Swift Chat SDK & API</li>
            <li>Android Kotlin Chat SDK & API</li>
            <li>Android Java Chat SDK & API</li>
            <li>React Native Chat SDK & API</li>
            <li>Ionic/Capacitor Chat SDK & API</li>
            <li>WordPress Chat SDK & API</li>
            <li>Laravel/PHP Chat SDK & API</li>
            <li>Flutter Chat SDK & API</li>
            <li>Next.js Chat SDK & API</li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-[#9C6BFF] font-semibold mb-4 cursor-pointer">
            Solutions
          </h3>
          <ul className="all-pointer space-y-1 text-gray-300 text-sm">
            <li className="text-gray-500 py-2 ">By Use Cases</li>
            <li>Social Community</li>
            <li>Marketplace</li>
            <li>Healthcare</li>
            <li>Education</li>
            <li>Virtual Events</li>
            <li>On-Demand Service</li>
            <li>Dating Apps</li>
            <li>Gaming</li>
            <li className="text-gray-500 py-2">By Organization Type</li>
            <li>Enterprise</li>
            <li>Startups</li>
          </ul>
        </div>

        {/* Developers */}
        <div>
          <h3 className="text-[#9C6BFF] font-semibold mb-4 cursor-pointer">
            Developers
          </h3>
          <ul className="all-pointer space-y-1 text-gray-300 text-sm">
            <li className="text-gray-500 py-2">Technologies documentation </li>
            <li>React</li>
            <li>Angular</li>
            <li>Vue</li>
            <li>iOS Swift</li>
            <li>Android Kotlin</li>
            <li>Android Java</li>
            <li>React Native</li>
            <li>Ionic/Capacitor</li>
            <li>WordPress</li>
            <li>Laravel/PHP</li>
            <li>Flutter</li>
            <li>Next.js</li>
            <li className="text-gray-500 py-2">Documentation</li>
            <li>Documentation</li>
            <li>Product updates</li>
            <li>Tutorials</li>
            <li>Open-source Apps</li>
            <li>Product status</li>
            <li>Glossary</li>
          </ul>
        </div>

        {/* Resources, Competitors, Company */}
        <div>
          <h3 className="text-[#9C6BFF] font-semibold mb-4 cursor-pointer">
            Resources
          </h3>
          <ul className="all-pointer space-y-1 text-gray-300 text-sm">
            <li>Customer stories</li>
            <li>Blog</li>
            <li>Give feedback</li>
            <li>Community forum</li>
            <li>Help center</li>
            <li>Partners</li>
          </ul>

          <h3 className="text-[#9C6BFF] font-semibold mt-6 mb-4 cursor-pointer">
            Competitors
          </h3>
          <ul className="all-pointer space-y-1 text-gray-300 text-sm">
            <li>SendBird</li>
            <li>GetStream</li>
            <li>Applozic</li>
            <li>Twilio</li>
            <li>PubNub</li>
          </ul>

          <h3 className="text-[#9C6BFF] font-semibold mt-6 mb-4 cursor-pointer">
            Company
          </h3>
          <ul className="all-pointer space-y-1 text-gray-300 text-sm">
            <li>About us</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>Pricing</li>
            <li>Chat with us</li>
          </ul>
        </div>
      </div>

      {/* ----- Footer Bottom ----- */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center text-gray-400 text-xs mt-6 gap-4">
        <div className="flex  md:flex-row items-center gap-4">
          <p>2025 © Ramchandra</p>
          <ul className="flex gap-4">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <ul className="flex gap-4 text-white text-sm items-center flex-wrap">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 cursor-pointer hover:text-[#9C6BFF]"
            >
              <FaFacebook /> Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 cursor-pointer hover:text-[#9C6BFF]"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 cursor-pointer hover:text-[#9C6BFF]"
            >
              <FaInstagram /> Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 cursor-pointer hover:text-[#9C6BFF]"
            >
              <FaTwitter /> Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 cursor-pointer hover:text-[#9C6BFF]"
            >
              <FaGithub /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
