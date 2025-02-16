"use client";

interface BusinessInfoProps {
  businessName: string;
  address: string;
  email: string;
  phoneNumber: string;
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({
  businessName,
  address,
  email,
  phoneNumber,
}) => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{businessName}</h1>
      <div className="space-y-2">
        <p>{address}</p>
        <p>Email: {email}</p>
        <p>Phone: {phoneNumber}</p>
      </div>
    </div>
  );
};

export default BusinessInfo;
