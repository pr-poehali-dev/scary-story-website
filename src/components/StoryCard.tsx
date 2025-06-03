import React from "react";
import Icon from "@/components/ui/icon";

interface StoryCardProps {
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  image: string;
  genre: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
  title,
  excerpt,
  author,
  readTime,
  image,
  genre,
}) => {
  return (
    <div className="group bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/10">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="bg-red-600/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {genre}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 font-oswald group-hover:text-red-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 mb-4 font-merriweather text-sm leading-relaxed">
          {excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Icon name="User" size={16} />
            <span>{author}</span>
          </div>

          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} />
            <span>{readTime}</span>
          </div>
        </div>

        <button className="w-full mt-4 bg-gray-800 hover:bg-red-600 text-white py-2 rounded-lg transition-all duration-300 font-semibold">
          <Icon name="Eye" size={16} className="inline mr-2" />
          Читать историю
        </button>
      </div>
    </div>
  );
};

export default StoryCard;
