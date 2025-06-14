
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🧠',
      title: 'Neural Intelligence',
      description: 'Advanced machine learning algorithms that understand and adapt to your usage patterns for a truly personalized experience.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🔒',
      title: 'Privacy-First AI',
      description: 'All AI processing happens on-device, ensuring your personal data never leaves your hands while delivering intelligent features.',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: '⚡',
      title: 'Lightning Performance',
      description: 'Custom silicon optimized for AI workloads delivers unprecedented speed and efficiency across all your tasks.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🎨',
      title: 'Creative AI Tools',
      description: 'Revolutionary creative assistance that helps you design, edit, and create content with professional-quality results.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: '🌐',
      title: 'Seamless Integration',
      description: 'AI features work harmoniously across all your Apple devices, creating a unified and intelligent ecosystem.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: '🚀',
      title: 'Future-Ready',
      description: 'Built for tomorrow with continuous AI model updates and new capabilities delivered through software updates.',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Future is <span className="gradient-text">Intelligent</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience AI technology that's not just smart, but thoughtfully designed 
            to enhance every aspect of your digital life while protecting your privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative glass rounded-3xl p-8 h-full hover:scale-105 transform transition-all duration-300 hover:shadow-2xl">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl group-hover:rotate-12 transform transition-all duration-300`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:gradient-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">40%</div>
            <div className="text-gray-600">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-gray-600">Privacy Protection</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-600">AI Assistance</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">∞</div>
            <div className="text-gray-600">Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
