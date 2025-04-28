// components/SalesBlockers.jsx
import Image from "next/image";

const SalesBlockers = () => {
  const blockers = [
    {
      icon: "/icon/s1.png",
      heading: "You’re Invisible for New Clients",
      description:
        "You're the experts, but the new potential clients can’t see it!",
    },
    {
      icon: "/icon/s2.png",
      heading: "Outdated Online Presence",
      description:
        "You bid on projects but keep losing it to competitors with more attractive online presence",
    },
    {
      icon: "/icon/s3.png",
      heading: "You’re Chasing Cold Leads",
      description:
        "Your sales team spend too much time on chasing, not on closing deals",
    },
    {
      icon: "/icon/s4.png",
      heading: "Your Growth Hit the Glass Ceiling",
      description:
        "Stagnated numbers (no growth) with only repeated business through referrals",
    },
  ];

  return (
    <section className="py-16 max px-[5%] bg-white">
      <div className=" mx-auto">
        <div className="mb-12">
          <h2 className="h2t mb-2 text-[#253844] text-center leading-[135%]">
            Why Are Your Sales Numbers <br /> Not Growing?
          </h2>

          <p className="text-center text-[#404A50] para">
            These are the blockers in your revenue growth and new business
            acquisitions
          </p>
        </div>

        <div className="grid md:px-[5%] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blockers.map((blocker, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className=" relative">
                <Image
                  src={blocker.icon}
                  alt={blocker.heading}
                  width={64}
                  height={64}
                />
              </div>

              <p className="para2 font-bold text-[#253844]">
                {blocker.heading}
              </p>

              <p className="text-[16px] text-[#404A50] leading-[160%]">
                {blocker.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesBlockers;
