import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  rating: number;
  comment: string;
  date?: string;
  children?: string;
}

const TestimonialCard = ({ name, rating, comment, date, children }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-pink-100 p-6">
      <div className="flex items-center mb-4">
        <div className="flex items-center space-x-1 mr-4">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">{rating}/5</span>
      </div>
      
      <blockquote className="text-gray-700 mb-4 italic">
        "{comment}"
      </blockquote>
      
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          {children && (
            <p className="text-sm text-gray-500">{children}</p>
          )}
        </div>
        {date && (
          <span className="text-sm text-gray-400">{date}</span>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard; 