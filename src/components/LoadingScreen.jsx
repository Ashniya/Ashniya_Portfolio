import React, { useEffect, useState } from 'react';
import Shuffle from './Shuffle';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds total loading time
    const intervalTime = 25; // Update every 25ms
    const totalSteps = duration / intervalTime;
    const increment = 100 / totalSteps;

    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        setTimeout(() => {
          setIsHidden(true);
          setTimeout(onLoadingComplete, 800); // Wait for fade out animation
        }, 500);
      }
      setProgress(Math.floor(currentProgress));
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${isHidden ? 'hidden' : ''}`}>
      <div className="loading-content">
        <div className="loading-text">
          <Shuffle 
            text="Welcome to my portfolio" 
            duration={0.8}
            stagger={0.05}
            shuffleTimes={3}
            triggerOnMount={true}
          />
        </div>
        <div className="loading-counter">{progress}%</div>
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
