import React from 'react';

// PUBLIC_INTERFACE
/**
 * Component for displaying generated cartoons or placeholders
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isGenerating - Flag indicating if generation is in progress
 * @param {string|null} props.generatedCartoon - URL or data for the generated cartoon
 * @param {number} props.progress - Current generation progress percentage (0-100)
 */
const CartoonDisplay = ({ isGenerating, generatedCartoon, progress }) => {
  /**
   * Renders the appropriate content based on the current state
   * (placeholder, loading, or generated cartoon)
   */
  const renderContent = () => {
    if (isGenerating) {
      return (
        <div className="loading-indicator">
          <div className="loading-spinner"></div>
          <p>Generating your cartoon...</p>
          
          <div className="progress-bar-container">
            <div 
              className={`progress-bar ${progress < 100 ? 'progress-bar-animated' : ''}`} 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">
            {progress < 100 ? 'Processing your cartoon...' : 'Almost ready!'}
            {progress < 100 && ` ${progress}%`}
          </div>
        </div>
      );
    }
    
    if (generatedCartoon) {
      // In a real app, this would display the actual generated image
      // For now, we'll show a placeholder representation
      return (
        <>
          <div className="generated-cartoon">
            {/* This would be an actual image in a real implementation */}
            <div 
              style={{ 
                height: '300px', 
                background: 'linear-gradient(135deg, var(--kavia-orange) 0%, #8855FF 100%)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem'
              }}
            >
              Your generated cartoon would appear here
            </div>
          </div>
          <div className="cartoon-controls">
            <button className="control-button">
              <span>↻</span> Regenerate
            </button>
            <button className="control-button">
              <span>⬇</span> Download
            </button>
            <button className="control-button">
              <span>♡</span> Save
            </button>
          </div>
        </>
      );
    }
    
    return (
      <div className="cartoon-placeholder">
        <div className="cartoon-placeholder-icon">🎨</div>
        <p>Enter a prompt or choose a template to generate your cartoon</p>
      </div>
    );
  };

  return (
    <div className="cartoon-display-container">
      {renderContent()}
    </div>
  );
};

export default CartoonDisplay;
