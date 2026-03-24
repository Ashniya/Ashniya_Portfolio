import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './FlowingMenu.css';

function FlowingMenu({
  items = [],
  textColor = '#fff',
  bgColor = 'transparent',
  marqueeBgColor = '#3B82F6',
  borderColor = 'rgba(255,255,255,0.05)'
}) {
  return (
    <div className="menu-wrap" style={{ backgroundColor: bgColor }}>
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            borderColor={borderColor}
          />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ text, tools = [], textColor, marqueeBgColor, borderColor }) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const linkRef = useRef(null);
  const logosRef = useRef([]);

  const animationDefaults = { duration: 0.4, ease: 'expo.out' };

  const handleMouseEnter = () => {
    if (!itemRef.current || !marqueeRef.current || !linkRef.current) return;

    const tl = gsap.timeline();
    
    // Hide original heading
    tl.to(linkRef.current, { 
      opacity: 0, 
      y: -20, 
      duration: 0.3, 
      ease: 'power2.inOut' 
    }, 0);

    // Show flash area
    tl.set(marqueeRef.current, { display: 'flex', y: '100%' }, 0);
    tl.to(marqueeRef.current, { 
      y: '0%', 
      duration: 0.5, 
      ease: 'expo.out' 
    }, 0.1);

    // Flash logos in from sides
    logosRef.current.forEach((logo, i) => {
      if (!logo) return;
      const direction = i % 2 === 0 ? -1 : 1; // Alternate left and right
      gsap.fromTo(logo, 
        { x: direction * 100, opacity: 0, scale: 0.5 },
        { 
          x: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 0.6, 
          delay: 0.1 + (i * 0.05),
          ease: 'back.out(1.7)'
        }
      );
    });
  };

  const handleMouseLeave = () => {
    if (!itemRef.current || !marqueeRef.current || !linkRef.current) return;

    const tl = gsap.timeline();

    // Show heading back
    tl.to(linkRef.current, { 
      opacity: 1, 
      y: 0, 
      duration: 0.3, 
      ease: 'power2.out' 
    }, 0);

    // Hide flash area
    tl.to(marqueeRef.current, { 
      y: '-100%', 
      duration: 0.4, 
      ease: 'expo.in',
      onComplete: () => gsap.set(marqueeRef.current, { display: 'none' })
    }, 0);
  };

  return (
    <div 
      className="menu__item" 
      ref={itemRef} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ borderColor }}
    >
      <div
        className="menu__item-link"
        ref={linkRef}
        style={{ color: textColor }}
      >
        {text}
      </div>
      
      <div className="marquee" ref={marqueeRef} style={{ backgroundColor: marqueeBgColor, display: 'none' }}>
        <div className="flash-content">
          {tools.map((tool, idx) => (
            <div 
              key={idx} 
              className="tech-logo-wrap"
              ref={el => logosRef.current[idx] = el}
            >
              <img 
                src={`https://cdn.simpleicons.org/${tool.slug}`} 
                alt={tool.name} 
                className="tech-logo"
              />
              <span className="tech-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;
