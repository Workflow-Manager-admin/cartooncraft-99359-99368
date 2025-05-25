import React, { useState, useEffect } from 'react';
import PromptInput from './PromptInput';
import TemplateSelector from './TemplateSelector';
import CartoonDisplay from './CartoonDisplay';
import './CartoonCraft.css';

// PUBLIC_INTERFACE
/**
 * Main container component for CartoonCraft application.
 * Manages state and orchestrates interactions between child components.
 */
const CartoonCraftContainer = () => {
  // State for user prompt
  const [prompt, setPrompt] = useState('');
  
  // State for selected template
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  
  // State for tracking when cartoon is being generated
  const [isGenerating, setIsGenerating] = useState(false);
  
  // State for the generated cartoon image URL
  const [generatedCartoon, setGeneratedCartoon] = useState(null);
  
  // State for tracking generation progress
  const [progress, setProgress] = useState(0);

  // Mock templates data - in a real app this might come from an API
  const templates = [
    { id: 1, name: 'Comic Strip', icon: '📚' },
    { id: 2, name: 'Character', icon: '👤' },
    { id: 3, name: 'Landscape', icon: '🌄' },
    { id: 4, name: 'Action Scene', icon: '💥' },
    { id: 5, name: 'Funny Moment', icon: '😂' },
    { id: 6, name: 'Adventure', icon: '🚀' }
  ];

  /**
   * Handles the prompt submission when user generates a cartoon
   */
  const handleGenerateCartoon = () => {
    // In a real implementation, this would call an API to generate the cartoon
    setIsGenerating(true);
    setProgress(0);
    
    // Simulate progress updates
    const totalTime = 2000; // Total generation time in ms
    const updateInterval = 200; // Update progress every 200ms
    const progressIncrement = 10; // Increase by 10% each interval
    
    let currentProgress = 0;
    const progressTimer = setInterval(() => {
      if (currentProgress < 90) {
        currentProgress += progressIncrement;
        setProgress(currentProgress);
      }
    }, updateInterval);
    
    // Mock the API call with a timeout
    setTimeout(() => {
      clearInterval(progressTimer);
      setProgress(100);
      
      // This is where you would handle the API response
      setTimeout(() => {
        setGeneratedCartoon('placeholder-for-generated-cartoon');
        setIsGenerating(false);
      }, 200); // Short delay after reaching 100% before showing result
    }, totalTime);
  };

  /**
   * Handles clearing the current cartoon and inputs
   */
  const handleClearAll = () => {
    setPrompt('');
    setSelectedTemplate(null);
    setGeneratedCartoon(null);
    setProgress(0);
  };

  return (
    <div className="cartoon-craft-container">
      <div className="cartoon-craft-header">
        <h2>CartoonCraft</h2>
        <p>Generate custom cartoons from your prompts or choose from templates</p>
      </div>
      
      <PromptInput 
        prompt={prompt} 
        setPrompt={setPrompt} 
        onGenerate={handleGenerateCartoon}
        onClear={handleClearAll}
        isGenerating={isGenerating}
      />
      
      <TemplateSelector 
        templates={templates}
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
      />
      
      <CartoonDisplay 
        isGenerating={isGenerating}
        generatedCartoon={generatedCartoon}
      />
    </div>
  );
};

export default CartoonCraftContainer;
