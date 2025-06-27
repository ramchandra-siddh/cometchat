import { features } from "../assets/features";

export default function Content() {
  return (
    <section className="bg-[#000000] text-white py-16 px-6 md:px-20 font-satoshi">
      {/* --- Responsive Subheading --- */}
      <p className="text-[#FF7F3E] font-semibold text-[22px] leading-[106%]">
        <span className="hidden md:inline">Be a partner</span>
        <span className="md:hidden">The benefits</span>
      </p>

      {/* --- Responsive Heading --- */}
      <h2 className="text-4xl font-semibold mt-2 mb-10">
        <span className="hidden md:inline">CometChat partner advantages</span>
        <span className="md:hidden">
          Moderation to help <br />
          your community thrive
        </span>
      </h2>

      <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 justify-around items-start"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-6 h-6 md:w-10 md:h-10"
            />
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
