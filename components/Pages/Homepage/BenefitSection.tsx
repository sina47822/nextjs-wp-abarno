import React from "react";

interface BenefitSectionProps {
  label: string;       // مثل "Benefits for Business Operations"
  title: string;       // تیتر اصلی
  description: string; // متن توضیح
}

const BenefitSection: React.FC<BenefitSectionProps> = ({ label, title, description }) => {
  return (
    <section className="bg-white py-16 text-center max-w-4xl mx-auto px-6">
      <div className="text-sm font-semibold text-gray-700 mb-2">
        <span className="border-b-2 border-yellow-500 pb-1">{label}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
      <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
    </section>
  );
};

export default BenefitSection;
