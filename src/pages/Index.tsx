import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StoriesSection from "@/components/StoriesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <StoriesSection />
    </div>
  );
};

export default Index;
