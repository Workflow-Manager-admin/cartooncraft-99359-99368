import React from 'react';

// PUBLIC_INTERFACE
/**
 * Component for user prompt input to generate cartoons
 * 
 * @param {Object} props - Component props
 * @param {string} props.prompt - Current prompt value
 * @param {Function} props.setPrompt - Function to update prompt value
 * @param {Function} props.onGenerate - Function to trigger cartoon generation
 * @param {Function} props.onClear - Function to clear all inputs
 * @param {boolean} props.isGenerating - Flag indicating if cartoon generation is in progress
 */
const PromptInput = ({ prompt, setPrompt, onGenerate, onClear, isGenerating }) => {
  /**
   * Handle prompt input change
   * 
   * @param {Event} e - Input change event
   */
  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="prompt-input-container">
      <textarea
        className="prompt-input"
        placeholder="Describe your cartoon... (e.g., 'A cartoon dog playing basketball in space')"
        value={prompt}
        onChange={handlePromptChange}
        disabled={isGenerating}
      />
      <div className="buttons-row">
        <button 
          className="btn" 
          onClick={onClear}
          disabled={isGenerating || (!prompt && !isGenerating)}
        >
          Clear
        </button>
        <button 
          className="btn" 
          onClick={onGenerate}
          disabled={isGenerating || !prompt}
        >
          {isGenerating ? 'Generating...' : 'Generate Cartoon'}
        </button>
      </div>
    </div>
  );
};

export default PromptInput;
