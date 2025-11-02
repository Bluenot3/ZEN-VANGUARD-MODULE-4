import React, { useState, useEffect } from 'react';
import type { InteractiveComponentProps } from '../../types';
import { useAuth } from '../../hooks/useAuth';
import { getAiClient } from '../../services/aiService';
import { SparklesIcon } from '../icons/SparklesIcon';
import MermaidDiagram from '../MermaidDiagram';

const placeholder = `Our system has a React Frontend that sends requests to a Python Flask Backend.
The backend communicates with a Gemini Pro model for complex reasoning and a Gemini Flash model for quick summarization.
Data is stored in a PostgreSQL database.
The Flask app also integrates with a third-party payment API.`;

const AiSystemsBlueprintVisualizer: React.FC<InteractiveComponentProps> = ({ interactiveId }) => {
    const { user, addPoints, updateProgress } = useAuth();
    const [description, setDescription] = useState(placeholder);
    const [mermaidCode, setMermaidCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const hasCompleted = user?.progress.completedInteractives.includes(interactiveId);

    const handleGenerate = async () => {
        if (!description.trim()) {
            setError('Please provide a system description.');
            return;
        }
        setLoading(true);
        setError('');
        setMermaidCode('');

        const prompt = `Based on the following system description, generate a Mermaid.js graph diagram code that visually represents the architecture.
- Use a 'graph TD' (Top Down) layout.
- Use clear labels for nodes.
- For arrows (links), use the format 'A -->|label text| B'. Do NOT use colons (:) in the arrow definitions.

Description:
${description}`;

        try {
            const ai = await getAiClient();
            const response = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: prompt });
            // Clean the response to get only the Mermaid code block
            const code = response.text.replace(/```mermaid\n|```/g, '').trim();
            setMermaidCode(code);

            if (!hasCompleted) {
                addPoints(30);
                updateProgress(interactiveId, 'interactive');
            }
        } catch (e) {
            console.error(e);
            setError('Failed to generate the diagram. Please try a different description.');
        } finally {
            setLoading(false);
        }
    };
    
    // Automatically generate on initial load
    useEffect(() => {
        handleGenerate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="my-8 p-6 bg-brand-bg rounded-2xl shadow-neumorphic-out">
            <h4 className="font-bold text-lg text-brand-text mb-2 text-center">AI Systems Blueprint Visualizer</h4>
            <p className="text-center text-brand-text-light mb-4 text-sm">Describe your system architecture, and Gemini will generate a visual blueprint.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="font-semibold text-sm text-brand-text mb-1">System Description</label>
                    <textarea 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        rows={8}
                        className="w-full p-2 bg-brand-bg rounded-lg shadow-neumorphic-in"
                    />
                     <button onClick={handleGenerate} disabled={loading} className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-brand-primary text-white font-bold py-3 px-6 rounded-full shadow-neumorphic-out hover:shadow-neumorphic-in disabled:opacity-50">
                        <SparklesIcon />
                        {loading ? 'Visualizing...' : 'Generate Blueprint'}
                    </button>
                </div>
                <div className="p-2 bg-brand-bg rounded-lg shadow-neumorphic-in">
                    {loading && <div className="animate-pulse h-full w-full bg-brand-shadow-dark/20 rounded-md flex items-center justify-center text-brand-text-light">Generating...</div>}
                    {error && <p className="text-red-500 p-4">{error}</p>}
                    {mermaidCode && <MermaidDiagram chart={mermaidCode} />}
                </div>
            </div>
        </div>
    );
};

export default AiSystemsBlueprintVisualizer;