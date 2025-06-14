
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Features from '../components/Features';
import AIShowcase from '../components/AIShowcase';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductGrid />
      <Features />
      <AIShowcase />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
