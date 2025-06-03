import React from "react";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-red-900/20 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Skull" size={28} className="text-red-500" />
            <h1 className="text-2xl font-bold text-white font-oswald">
              ТЕМНЫЕ ИСТОРИИ
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#stories"
              className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-merriweather"
            >
              Истории
            </a>
            <a
              href="#authors"
              className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-merriweather"
            >
              Авторы
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-merriweather"
            >
              О проекте
            </a>
          </div>

          <button className="md:hidden text-white">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
