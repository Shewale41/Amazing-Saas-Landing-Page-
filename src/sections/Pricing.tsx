import CheckIcon from "@/assets/check.svg";

//sample data for pricing component
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <>
    <section className="py-24">
      <div className="container" >
        <h2 className="section-title">Pricing</h2>
        <p className="section-description mt-5 ">
          Free forever.Upgrade for better security,unlimited tasks and exclusive
          features.
        </p>
        {/* //the pricing charts here  */}
        <div>
            {pricingTiers.map(({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features
            }) => (
              <div className="p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] " >
                <h3 className="text-lg font-bold text-black/50 " >{title}</h3>
                <div className="flex items-baseline gap-1 mt-[30px] " >
                  <span className="text-4xl font-bold tracking-tighter leading-none " >${monthlyPrice}</span>
                  <span className="tracking-tight font-bold text-black/50 ">/month</span>
                </div>
                <button className="btn btn-primary mt-[30px] w-full ">{buttonText}</button>
                <ul>
                  {features.map((feature)=>(
                    <li>
                     <CheckIcon className="h-6 w-6"/>
                     <span> {feature} </span> 
                    </li>
                  ))}
                </ul>
              </div>
            ) )}
        </div>
      </div>
    </section>
    </>
  );
};
