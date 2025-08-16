import type { Benefit } from "././AboutBenefitsWrapper";

type AboutBenefitProps = {
  benefit: Benefit;
  index: number;
};

export default function AboutBenefit({ benefit, index }: AboutBenefitProps) {
  return (
    <div key={index} className="flex items-center justify-center gap-x-4">
      <div className="w-11 h-11 bg-[#E63636] rounded-xl flex items-center justify-center bg-">
        {benefit.icon}
      </div>
      <div className="w-full flex flex-col items- justify-center gap-y-1">
        <h4 className="font-medium">{benefit.title}</h4>
        <p className="text-sm">{benefit.description}</p>
      </div>
    </div>
  );
}
