
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmail('');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-dark rounded-3xl p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Ahead of the <span className="gradient-text">AI Revolution</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be the first to know about groundbreaking AI features, exclusive previews, 
            and revolutionary updates that will transform how you interact with technology.
          </p>

          {isSubscribed ? (
            <div className="animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <p className="text-green-400 text-lg font-semibold">
                Welcome to the future! Check your email for confirmation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="px-8 py-4 gradient-bg text-white font-semibold rounded-full hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl animate-glow"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                No spam, just revolutionary updates. Unsubscribe anytime.
              </p>
            </form>
          )}

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <div className="flex items-center space-x-2 glass-dark rounded-full px-4 py-2">
              <span className="text-green-400">🔒</span>
              <span className="text-sm text-gray-300">Privacy Protected</span>
            </div>
            <div className="flex items-center space-x-2 glass-dark rounded-full px-4 py-2">
              <span className="text-blue-400">🚀</span>
              <span className="text-sm text-gray-300">Early Access</span>
            </div>
            <div className="flex items-center space-x-2 glass-dark rounded-full px-4 py-2">
              <span className="text-purple-400">✨</span>
              <span className="text-sm text-gray-300">Exclusive Content</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
