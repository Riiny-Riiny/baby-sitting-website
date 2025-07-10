import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price?: string;
  features?: string[];
}

const ServiceCard = ({ icon: Icon, title, description, price, features }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-pink-100 p-6">
      <div className="flex items-center mb-4">
        <div className="bg-pink-100 p-3 rounded-full mr-4">
          <Icon className="h-6 w-6 text-pink-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      {price && (
        <div className="mb-4">
          <span className="text-2xl font-bold text-pink-500">{price}</span>
          <span className="text-gray-500 ml-1">per hour</span>
        </div>
      )}
      
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 bg-pink-300 rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard; 