import React from "react";
import StoryCard from "./StoryCard";
import Icon from "@/components/ui/icon";

const StoriesSection = () => {
  const stories = [
    {
      title: "Шепот в темноте",
      excerpt:
        "Каждую ночь она слышала голоса из подвала. Но дом был построен без подвала...",
      author: "А. Кошмаров",
      readTime: "5 мин",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      genre: "Мистика",
    },
    {
      title: "Последний пассажир",
      excerpt:
        "Ночной автобус всегда был пуст. Кроме той ночи, когда в нем появился странный пассажир...",
      author: "М. Тень",
      readTime: "7 мин",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
      genre: "Триллер",
    },
    {
      title: "Зеркальная комната",
      excerpt:
        "Антикварное зеркало принесло в дом не только красоту, но и нечто ужасное...",
      author: "Л. Отражение",
      readTime: "4 мин",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      genre: "Ужасы",
    },
    {
      title: "Забытая станция",
      excerpt:
        "Метро закрылось, но поезда все еще ходят. И в них есть пассажиры...",
      author: "В. Подземье",
      readTime: "6 мин",
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
      genre: "Мистика",
    },
    {
      title: "Детский смех",
      excerpt:
        "В старом доме по ночам слышался детский смех. Но дети здесь не жили уже много лет...",
      author: "Н. Призрак",
      readTime: "8 мин",
      image:
        "https://images.unsplash.com/photo-1520637836862-4d197d17c50a?w=400&h=300&fit=crop",
      genre: "Паранормальное",
    },
    {
      title: "Красная комната",
      excerpt:
        "Ссылка появилась в чате случайно. Но то, что я увидел, изменило мою жизнь навсегда...",
      author: "Аноним",
      readTime: "10 мин",
      image:
        "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=300&fit=crop",
      genre: "Интернет-ужасы",
    },
  ];

  return (
    <section
      id="stories"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Icon name="BookOpenCheck" size={60} className="text-red-500" />
          </div>

          <h2 className="text-5xl font-bold text-white mb-6 font-oswald">
            КОЛЛЕКЦИЯ УЖАСОВ
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-merriweather">
            Самые страшные истории, рассказанные в темноте. Каждая из них
            способна заставить вас не спать всю ночь.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            <Icon name="Plus" size={20} className="inline mr-2" />
            Загрузить еще истории
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
