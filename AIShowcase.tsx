
import React, { useState } from 'react';

const AIShowcase = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      title: 'Smart Photography',
      description: 'AI analyzes scenes in real-time to capture perfect moments with professional-quality results.',
      icon: '📸',
      features: ['Scene Recognition', 'Auto Composition', 'Light Optimization', 'Background Enhancement']
    },
    {
      title: 'Intelligent Assistant',
      description: 'Natural conversation with AI that understands context and helps with complex tasks.',
      icon: '🗣️',
      features: ['Natural Language', 'Context Awareness', 'Task Automation', 'Personal Learning']
    },
    {
      title: 'Creative Tools',
      description: 'AI-powered creative assistance that turns ideas into professional-quality content.',
      icon: '🎨',
      features: ['Design Generation', 'Style Transfer', 'Content Creation', 'Auto Editing']
    },
    {
      title: 'Health Insights',
      description: 'Advanced health monitoring with AI analysis for personalized wellness recommendations.',
      icon: '❤️',
      features: ['Health Tracking', 'Pattern Analysis', 'Predictive Insights', 'Personalized Tips']
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience <span className="gradient-text">AI in Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how artificial intelligence seamlessly integrates into everyday tasks, 
            making technology more intuitive and powerful than ever before.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Selection */}
          <div className="space-y-6">
            {demos.map((demo, index) => (
              <div
                key={index}
                onClick={() => setActiveDemo(index)}
                className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
                  activeDemo === index
                    ? 'glass scale-105 shadow-xl'
                    : 'hover:glass hover:scale-102'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`text-4xl p-3 rounded-xl ${
                    activeDemo === index ? 'gradient-bg' : 'bg-gray-100'
                  } transition-all duration-300`}>
                    {demo.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${
                      activeDemo === index ? 'gradient-text' : 'text-gray-900'
                    } transition-all duration-300`}>
                      {demo.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {demo.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {demo.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            activeDemo === index
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-gray-100 text-gray-600'
                          } transition-all duration-300`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Demo Visualization */}
          <div className="relative">
            <div className="glass rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className={`w-32 h-32 mx-auto mb-6 gradient-bg rounded-3xl flex items-center justify-center text-6xl animate-float`}>
                  {demos[activeDemo].icon}
                </div>
                <h3 className="text-3xl font-bold gradient-text mb-4">
                  {demos[activeDemo].title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {demos[activeDemo].description}
                </p>
                
                {/* Animated indicators */}
                <div className="mt-8 flex justify-center space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === activeDemo ? 'gradient-bg' : 'bg-gray-300'
                      }`}
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        animation: i === activeDemo ? 'pulse 2s infinite' : 'none'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 gradient-bg rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 gradient-bg-alt rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 gradient-bg text-white font-semibold rounded-full hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl animate-glow">
            Try AI Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIShowcase;
