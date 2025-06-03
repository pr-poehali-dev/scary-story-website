import React from "react";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1520637836862-4d197d17c50a?w=1920&h=1080&fit=crop&crop=center)",
        }}
      />

      {/* Fog effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <Icon name="Ghost" size={80} className="text-red-500 animate-pulse" />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-oswald tracking-wider">
          МРАЧНЫЕ
          <span className="block text-red-500 mt-2">ИСТОРИИ</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-merriweather leading-relaxed">
          Погрузитесь в мир ужаса и мистики.
          <br />
          Здесь живут самые страшные кошмары человечества.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25">
            <Icon name="BookOpen" size={20} className="inline mr-2" />
            Читать истории
          </button>

          <button className="border-2 border-gray-600 text-gray-300 hover:text-white hover:border-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105">
            <Icon name="PenTool" size={20} className="inline mr-2" />
            Написать свою
          </button>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
