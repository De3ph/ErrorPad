import React from "react";
import featuresImage from "@/images/features.png";
import benefitsImage from "@/images/benefits.png";
import solutionsImage from "@/images/solutions.png";
import Image from "next/image";
import Pricing from "./pricing";

const Home = () => {
  const features = [
    "Identify software errors instantly.",
    "Optimize your development processes.",
    "Enhance reliability of your enterprise software.",
    "Fast and effective analysis with user-friendly interface.",
  ];

  const benefits = [
    "Quick error detection and resolution.",
    "Visible increase in software quality.",
    "Improve your corporate processes.",
    "Boost customer satisfaction with reliable software.",
  ];

  const corporateSolution = [
    "Optimize your business processes.",
    "Provide a more effective working environment for your team.",
    "Use the right tool to increase your project's success.",
  ];

  return (
    <div className="container mx-auto mt-8">
      <section className="flex justify-between items-center  mb-8">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside">
            {features.map((feature, index) => (
              <li key={index} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={featuresImage}
          className="w-[50%] h-auto"
          alt="features.png"
        />
      </section>

      <section className="flex justify-between items-center  mb-8">
        <Image
          src={benefitsImage}
          className="w-[50%] h-auto"
          alt="features.png"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside">
            {benefits.map((benefit, index) => (
              <li key={index} className="mb-2">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="flex justify-between items-center  mb-8">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Corporate Solution</h2>
          <ul className="list-disc list-inside">
            {corporateSolution.map((solution, index) => (
              <li key={index} className="mb-2">
                {solution}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={solutionsImage}
          className="w-[50%] h-auto"
          alt="features.png"
        />
      </section>

      <p className="text-center mt-8 text-2xl font-semibold">
        Redefine Your Development Processes, Achieve Success!
      </p>
      <Pricing />
    </div>
  );
};

export default Home;
