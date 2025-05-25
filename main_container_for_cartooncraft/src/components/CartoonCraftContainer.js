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
    
    // Mock the API call with a timeout
    setTimeout(() => {
      // This is where you would handle the API response
      setGeneratedCartoon('placeholder-for-generated-cartoon');
      setIsGenerating(false);
    }, 2000);
  };

  /**
   * Handles clearing the current cartoon and inputs
   */
  const handleClearAll = () => {
    setPrompt('');
    setSelectedTemplate(null);
    setGeneratedCartoon(null);
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
