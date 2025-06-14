
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // Initial setup - hide elements
    gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current, previewRef.current], {
      opacity: 0,
      y: 100
    });

    // Hero entrance animation
    const tl = gsap.timeline();
    
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out"
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8")
    .to(buttonsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")
    .to(previewRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.4");

    // Floating elements animation
    if (floatingRef.current) {
      const floatingElements = floatingRef.current.children;
      gsap.to(floatingElements, {
        y: -30,
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.5
      });
    }

    // Scroll-triggered animations
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top center",
      end: "bottom center",
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(heroRef.current, {
          scale: 1 - progress * 0.1,
          opacity: 1 - progress * 0.3,
          duration: 0.3
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.2),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,119,198,0.2),transparent)]"></div>
      </div>
      
      {/* Floating elements */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-500/30 to-red-500/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main heading */}
          <h1 ref={titleRef} className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
              Think
            </span>{' '}
            <span className="text-white drop-shadow-2xl">Different</span>
            <br />
            <span className="text-white drop-shadow-2xl">Think</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
              AI
            </span>
          </h1>
          
          {/* Subtitle */}
          <p ref={subtitleRef} className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-300 font-medium leading-relaxed">
            Experience the future of technology with AI-powered innovation that adapts to your life. 
            <br />
            <span className="text-blue-400">Seamlessly integrated.</span>{' '}
            <span className="text-purple-400">Intelligently designed.</span>{' '}
            <span className="text-pink-400">Beautifully crafted.</span>
          </p>
          
          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
              <span className="relative z-10">Explore AI Products</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group relative px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/20 overflow-hidden transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:shadow-2xl hover:shadow-white/20">
              <span className="relative z-10">Watch Innovation</span>
            </button>
          </div>
          
          {/* Product preview */}
          <div ref={previewRef} className="mt-20">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <div className="aspect-video bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-3xl">🤖</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      AI Preview
                    </h3>
                    <p className="text-gray-300 text-lg">Revolutionary AI integration coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
