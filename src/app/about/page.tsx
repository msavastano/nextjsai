"use client";

import BusinessInfo from "@/components/BusinessInfo";

const About: React.FC = () => {
  return (
    <main className="min-h-screen p-8">
      <BusinessInfo
        businessName="Your Business Name"
        address="123 Business Street, City, State 12345"
        email="contact@yourbusiness.com"
        phoneNumber="(555) 123-4567"
      />
    </main>
  );
};

export default About;
