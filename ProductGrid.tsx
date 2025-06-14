
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro AI',
      description: 'The most advanced iPhone with AI-powered photography and smart assistance.',
      price: 'From $999',
      image: '📱',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'MacBook Pro AI',
      description: 'Supercharged by M3 chip with revolutionary AI processing capabilities.',
      price: 'From $1,999',
      image: '💻',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      name: 'iPad Pro AI',
      description: 'The ultimate creative tool with AI-enhanced drawing and design features.',
      price: 'From $799',
      image: '📱',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      name: 'Apple Watch Ultra AI',
      description: 'Advanced health monitoring with AI insights and personalized coaching.',
      price: 'From $599',
      image: '⌚',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      name: 'AirPods Pro AI',
      description: 'Spatial audio with AI noise cancellation and adaptive transparency.',
      price: 'From $249',
      image: '🎧',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      name: 'Vision Pro AI',
      description: 'The future of computing with AI-powered spatial experiences.',
      price: 'From $3,499',
      image: '🥽',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Title animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );

    // Product cards animation
    if (gridRef.current) {
      const cards = gridRef.current.children;
      gsap.fromTo(cards,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const icon = card.querySelector('.product-icon');
    
    gsap.to(card, {
      y: -10,
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
    
    gsap.to(icon, {
      rotation: 360,
      scale: 1.2,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const icon = card.querySelector('.product-icon');
    
    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
    
    gsap.to(icon, {
      rotation: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            AI-Powered <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Innovation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our revolutionary lineup of products enhanced with artificial intelligence 
            to create magical experiences that adapt to your needs.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/10 overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Product Icon */}
                <div className={`product-icon w-24 h-24 mx-auto mb-8 bg-gradient-to-r ${product.color} rounded-3xl flex items-center justify-center text-4xl shadow-2xl`}>
                  {product.image}
                </div>
                
                {/* Product Info */}
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="space-y-6">
                    <p className="text-2xl font-bold text-white">
                      {product.price}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className={`flex-1 px-8 py-4 bg-gradient-to-r ${product.color} text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                        Learn More
                      </button>
                      <button className="flex-1 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/20">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:scale-110 transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
