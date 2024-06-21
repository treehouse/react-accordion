import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
const Accordion = ({ title, options }) => {
  const [activeAccordion, setActiveAccordion] = useState(false);
  return (
    <div
      onClick={() => {
        setActiveAccordion(!activeAccordion);
      }}
      className="w-full max-w-[500px] bg-white p-3 rounded-lg cursor-pointer"
    >
      {/* accordion header */}
      <div className="flex justify-between items-center">
        <p>{title}</p>
        <IoChevronDown
          className={`${
            activeAccordion && "rotate-180"
          } duration-200 delay-200`}
        />
      </div>
      {/* accordion body */}
      {activeAccordion && (
        <div className="bg-zinc-100 p-3 rounded-lg mt-4 text-sm">
          <ul>
            {options.map((option, index) => {
              return <li key={index}>{option}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Accordion;
