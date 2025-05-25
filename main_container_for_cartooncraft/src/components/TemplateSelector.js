import React from 'react';

// PUBLIC_INTERFACE
/**
 * Component for selecting cartoon templates
 * 
 * @param {Object} props - Component props
 * @param {Array} props.templates - List of available templates
 * @param {Object} props.selectedTemplate - Currently selected template
 * @param {Function} props.setSelectedTemplate - Function to set the selected template
 */
const TemplateSelector = ({ templates, selectedTemplate, setSelectedTemplate }) => {
  /**
   * Handle template selection
   * 
   * @param {Object} template - Selected template
   */
  const handleSelectTemplate = (template) => {
    setSelectedTemplate(selectedTemplate?.id === template.id ? null : template);
  };

  return (
    <div className="template-selector-container">
      <h3 className="template-selector-title">Or select a template:</h3>
      
      <div className="templates-grid">
        {templates.map(template => (
          <div
            key={template.id}
            className={`template-card ${selectedTemplate?.id === template.id ? 'selected' : ''}`}
            onClick={() => handleSelectTemplate(template)}
          >
            <div className="template-card-image">
              {template.icon}
            </div>
            <div className="template-card-name">{template.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
