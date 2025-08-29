import type { Benefit } from "./AboutBenefitsWrapper";

type AboutBenefitProps = {
  benefit: Benefit;
};

export default function AboutBenefit({ benefit }: AboutBenefitProps) {
  return (
    <div className="flex items-start gap-x-4">
      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#E63636] flex items-center justify-center
                      transition-transform duration-300 ease-in-out hover:-translate-y-[2px]">
        {benefit.icon}
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="text-base font-medium">{benefit.title}</h4>
        <p className="mt-1 text-sm text-gray-800">{benefit.description}</p>
      </div>
    </div>
  );
}
