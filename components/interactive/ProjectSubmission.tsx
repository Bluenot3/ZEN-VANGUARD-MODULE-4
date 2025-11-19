import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { SparklesIcon } from '../icons/SparklesIcon';
import { SendIcon } from '../icons/SendIcon';

// ⚠️ CRITICAL CONFIGURATION:
// 1. ACTION URL: Must end in /formResponse (not /viewform)
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc7osJ5b9VwpKE2jWQQFHUhAAtPJjIcROiokeUzLittC6Qvgg/formResponse";

// 2. ENTRY ID: You MUST replace 'entry.123456789' with the actual field ID from your Google Form.
// To find it: Open your form -> Right Click -> View Page Source -> Search for "entry."
// If this ID is wrong, the form submits successfully but the cell in Google Sheets will be BLANK.
const GOOGLE_FORM_ENTRY_ID = "entry.123456789"; 

const ProjectSubmission: React.FC<{ interactiveId: string }> = ({ interactiveId }) => {
    const { user, addPoints, updateProgress } = useAuth();
    const [url, setUrl] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const hasCompleted = user?.progress.completedInteractives.includes(interactiveId);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        
        if (!url.trim()) {
            return;
        }

        // Basic URL validation
        if (!url.startsWith('http')) {
            setError('Please enter a valid URL starting with http:// or https://');
            return;
        }

        setLoading(true);

        try {
            const formData = new FormData();
            formData.append(GOOGLE_FORM_ENTRY_ID, url);

            // Use fetch with no-cors mode. 
            // This allows us to send data to Google Forms without a CORS error blocking the request.
            // Note: The response will be 'opaque' (status 0), so we can't read the actual success message,
            // but we assume success if the network request doesn't throw an exception.
            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            });

            setSubmitted(true);
            
            if (!hasCompleted) {
                addPoints(50);
                updateProgress(interactiveId, 'interactive');
            }

        } catch (err) {
            console.error("Form submission error:", err);
            setError('There was a network error submitting your project. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="my-12 p-8 bg-brand-bg rounded-3xl shadow-neumorphic-out border border-slate-100/50 relative overflow-hidden transform transition-all hover:scale-[1.01] duration-500">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary to-brand-secondary"></div>
             
             {/* Header */}
             <div className="text-center mb-8 relative z-10">
                <h3 className="text-2xl font-bold text-brand-text mb-2">Submit Your Build</h3>
                <p className="text-brand-text-light max-w-md mx-auto">
                    Paste the URL to your deployed Gradio app (Hugging Face Space) to complete this module and earn your badge.
                </p>
             </div>

             {submitted ? (
                 <div className="flex flex-col items-center justify-center p-8 animate-fade-in-up">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 shadow-neumorphic-out border-4 border-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-brand-text mb-2">Submission Received!</h4>
                    <p className="text-brand-text-light mb-6 text-center">Your project has been logged in the Vanguard database. Excellent work.</p>
                    {!hasCompleted && (
                        <div className="px-6 py-2 bg-brand-primary/10 text-brand-primary rounded-full font-bold flex items-center gap-2 animate-pulse">
                            <SparklesIcon /> +50 XP Earned
                        </div>
                    )}
                 </div>
             ) : (
                 <div className="max-w-lg mx-auto relative z-10">
                     <form onSubmit={handleSubmit} className="relative">
                        <div className="relative group mb-6">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-focus-within:text-brand-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                            </div>
                            <input 
                                type="url" 
                                required
                                placeholder="https://huggingface.co/spaces/username/space-name"
                                className="w-full pl-11 pr-4 py-4 bg-brand-surface rounded-xl shadow-neumorphic-in focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-brand-text placeholder-slate-400 transition-all border border-transparent focus:bg-white"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                disabled={loading}
                            />
                        </div>
                        
                        {error && <p className="text-red-500 text-sm text-center mb-4 font-semibold">{error}</p>}
                        
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-brand-primary/30 transition-all transform hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-wait disabled:transform-none disabled:shadow-none"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    Submit Project <SendIcon />
                                </>
                            )}
                        </button>
                     </form>
                     <p className="text-center text-xs text-slate-400 mt-4 font-medium">
                         Troubleshooting: If your Google Sheet row is blank, ensure `GOOGLE_FORM_ENTRY_ID` in the code matches your form's input ID.
                     </p>
                 </div>
             )}
             
             {/* Background decorations */}
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
    );
};

export default ProjectSubmission;