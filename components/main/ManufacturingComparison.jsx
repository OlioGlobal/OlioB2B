import { CheckCircle, XCircle } from "lucide-react";
import Image from "next/image";
const comparisonData = {
  left: {
    header: "Generic Marketing Agencies",
    points: [
      {
        text: "Generic agencies don't understand industrial buyers",
        positive: false,
      },
      {
        text: "They focus on vanity metrics (likes, traffic)",
        positive: false,
      },
      {
        text: "They give you 'strategies' but no execution",
        positive: false,
      },
    ],
  },
  right: {
    header: <span className="font-bold">Olio Global AdTech</span>,
    points: [
      {
        text: "We specialize in B2B manufacturing & engineering",
        positive: true,
      },
      {
        text: "We focus on Sales Qualified Leads (SQLs) & revenue growth",
        positive: true,
      },
      {
        text: "We take full ownership of your digital growth",
        positive: true,
      },
    ],
  },
};

const ComparisonTable = () => {
  const left = comparisonData.left;
  const right = comparisonData.right;

  return (
    <div className="flex flex-col max lg:flex-row px-[5%] gap-8 py-16">
      <div className="lg:w-[40%] flex flex-col gap-5 justify-center">
        <h2 className="h2t text-[#253844] leading-[135%]">
          Why Most <br className="hidden lg:block" /> Manufacturing Firms{" "}
          <br className="hidden lg:block" />
          Fail at Digital Growth <br className="hidden lg:block" />
          <span className="text-[#808892] font-bold">And How We Fix It</span>
        </h2>
        <p className="para text-[#404A50]">
          We attract them systematically <br /> while you focus on delivery.
        </p>
      </div>

      <div className="lg:w-[60%] flex justify-center">
        <div className="flex flex-col justify-center md:flex-row relative w-full">
          <div className="flex flex-col gap-5 bg-white text-gray-800 border border-[#D9D9D9] p-6 sm:p-8 rounded-[10px] md:rounded-none md:rounded-l-[10px]">
            <p className="text-[18px] text-[#404A50] font-semibold">
              {left.header}
            </p>
            <div className="space-y-6 leading-[160%]">
              {left.points.map((point, index) => (
                <div
                  key={index}
                  className={`flex gap-3 py-2  items-baseline ${
                    index !== left.points.length - 1
                      ? "border-b-[1px] border-[#00000026] pb-4 mb-4"
                      : ""
                  }`}
                >
                  <Image height={20} width={20} src={"/icon/x.png"} />
                  <p className="para text-[16px] text-[#404A50] font-medium">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center flex-col gap-5 bg-[#253844] text-white border border-gray-800 p-6 sm:p-8  rounded-t-none rounded-[10px] md:rounded-[10px] -mt-4 -mb-4 md:-my-6">
            <p className="text-[18px] text-[#ffffff] font-semibold">
              {right.header}
            </p>
            <div className="space-y-6">
              {right.points.map((point, index) => (
                <div
                  key={index}
                  className={`flex gap-3 py-2 items-baseline ${
                    index !== right.points.length - 1
                      ? "border-b-[1px] border-[#FFFFFF26] pb-4 mb-4"
                      : ""
                  }`}
                >
                  <Image height={20} width={20} src={"/icon/y.png"} />
                  <p className="para text-[16px] text-[#ffffff] font-medium">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
