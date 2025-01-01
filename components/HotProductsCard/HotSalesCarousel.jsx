'use client'

import { useState, useEffect, useRef } from 'react';
import  HotProductsCard  from './HotProductsCard';




export default function HotSalesCarousel({ products }) {

  
const [scrollPosition, setScrollPosition] = useState(0);
const containerRef = useRef(null);

useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  const scrollWidth = container.scrollWidth;
  const clientWidth = container.clientWidth;
  const speed = 1;

  let lastTime = null;
  
  const animate = (currentTime) => {
    if (!lastTime) lastTime = currentTime;
    
    setScrollPosition((prevPosition) => {
      const newPosition = (prevPosition + speed) % (scrollWidth - clientWidth);
      return newPosition;
    });
    
    lastTime = currentTime;
    requestAnimationFrame(animate);
  };

  const animationId = requestAnimationFrame(animate);
  return () => cancelAnimationFrame(animationId);
}, []);

  const handleProductClick = (productId) => {
    console.log(`Product clicked: ${productId}`);
    // Add your logic here for handling the product click
  };

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex transition-transform duration-100 ease-linear"
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        {[...products, ...products].map((product, index) => (
          <div key={`${product.id}-${index}`} className="flex-shrink-0 w-80 mr-4">
            <HotProductsCard
              rating={product.rating}
              image={product.image}
              title={product.title}
              price={product.price}
              onClick={() => handleProductClick(product.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

