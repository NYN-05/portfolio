import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 text-center">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Building thoughtful products
      </h2>
      <p className="max-w-2xl mx-auto text-sm md:text-lg text-gray-600 dark:text-gray-300">
        From idea to launch, I focus on clarity, performance, and delightful
        user experiences that scale with your product.
      </p>
    </BackgroundLines>
  );
}
