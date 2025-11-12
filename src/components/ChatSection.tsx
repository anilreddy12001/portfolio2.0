import React, { useEffect, useMemo, useRef, useState } from 'react';
import Fuse from 'fuse.js';
import { projects, skills, experiences, aboutMe, socialLinks } from '../data';
import { Project, Skill, Experience } from '../types';

type ChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

interface ChatSectionProps {
  webSocket: WebSocket | null;
}

export const ChatSection: React.FC<ChatSectionProps> = ({ webSocket }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([{
    role: 'assistant',
    content: 'Hi! Ask me anything about my projects, skills, or experience.',
  }]);
  const [input, setInput] = useState('');
  const [wsReady, setWsReady] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  // Removed unused local chat state in favor of unified message flow
  // Build local semantic index as fallback when WS/AI is not available
  const unifiedData = useMemo(() => {
    const projectItems = projects.map((project: Project) => ({
      type: 'project' as const,
      title: project.title,
      description: project.description,
      tags: project.tags,
      data: project,
    }));

    const skillItems = skills.map((skill: Skill) => ({
      type: 'skill' as const,
      title: skill.name,
      description: `${skill.category} skill (Level ${skill.level}/5)`,
      category: skill.category,
      data: skill,
    }));

    const experienceItems = experiences.map((experience: Experience) => ({
      type: 'experience' as const,
      title: `${experience.position} at ${experience.company}`,
      description: experience.description,
      technologies: experience.technologies,
      company: experience.company,
      position: experience.position,
      data: experience,
    }));

    const aboutItem = [{
      type: 'about' as const,
      title: 'About Me',
      description: aboutMe.description,
      name: aboutMe.name,
      role: aboutMe.title,
      location: aboutMe.location,
      availability: aboutMe.availability,
      data: aboutMe,
    }];

    const socialItems = socialLinks.map((social) => ({
      type: 'social' as const,
      title: social.name,
      description: `Connect with me on ${social.name}`,
      data: social,
    }));

    return [...projectItems, ...skillItems, ...experienceItems, ...aboutItem, ...socialItems];
  }, []);

  const fuse = useMemo(() => new Fuse(unifiedData, {
    includeScore: true,
    threshold: 0.35,
    ignoreLocation: true,
    keys: [
      { name: 'title', weight: 0.5 },
      { name: 'description', weight: 0.3 },
      { name: 'tags', weight: 0.2 },
      { name: 'category', weight: 0.2 },
      { name: 'technologies', weight: 0.25 },
      { name: 'company', weight: 0.25 },
      { name: 'position', weight: 0.25 },
      { name: 'name', weight: 0.2 },
      { name: 'role', weight: 0.2 },
      { name: 'location', weight: 0.15 },
      { name: 'availability', weight: 0.1 },
    ],
  }), [unifiedData]);

  // Attach non-destructive WS listeners
  useEffect(() => {
    if (!webSocket) return;

    const handleOpen = () => setWsReady(true);
    const handleClose = () => setWsReady(false);
    const handleMessage = (event: MessageEvent) => {
      try {
        const data = typeof event.data === 'string' ? event.data : '';
        //setMessages(prev => ([...prev, { role: 'assistant', content: data }]));
      } catch {
        // Fallback plain text
        //setMessages(prev => ([...prev, { role: 'assistant', content: String(event.data) }]));
      }
    };

    webSocket.addEventListener('open', handleOpen);
    webSocket.addEventListener('close', handleClose);
    webSocket.addEventListener('message', handleMessage);

    setWsReady(webSocket.readyState === WebSocket.OPEN);

    return () => {
      webSocket.removeEventListener('open', handleOpen);
      webSocket.removeEventListener('close', handleClose);
      webSocket.removeEventListener('message', handleMessage);
    };
  }, [webSocket]);

  useEffect(() => {
    // Auto-scroll to bottom on new messages
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  const localAnswer = (question: string): string => {
    if (!question.trim()) return '';
    const results = fuse.search(question).slice(0, 5);
    if (results.length === 0) {
      return "I couldn't find anything relevant. Try keywords like React, projects, or a company name.";
    }
    const lines = results.map((r, idx) => {
      const item = r.item as unknown as { type?: string; title?: string; description?: string };
      const type = item.type ?? 'item';
      const title = item.title ?? 'Untitled';
      const desc = item.description ?? '';
      return `${idx + 1}. [${type}] ${title} — ${desc}`;
    });
    return `Here are some things I found:\n\n${lines.join('\n')}`;
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;
    setInput('');
    setMessages(prev => ([...prev, { role: 'user', content: text }]));
const restAPI=true;
    const wsUsable = webSocket && webSocket.readyState === WebSocket.OPEN;
    if (!wsUsable && wsUsable) {
      try {
        const payload = {
          type: 'chat',
          model: 'gpt-4',
          content: text,
          context: 'portfolio_conversational_search',
        };
        webSocket!.send(JSON.stringify(payload));
        return;
      } catch {
        // fall through to local
      }
    }
    if(restAPI){
      const aiReply = await GeminiChat(text);
      if (aiReply && typeof aiReply === 'string') {
        setMessages(prev => ([...prev, { role: 'assistant', content: aiReply }]));
        return;
      }
    }

    // Local fallback answer
    const answer = localAnswer(text);
    setMessages(prev => ([...prev, { role: 'assistant', content: answer }]));
  };

  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
 console.log(import.meta.env);
async function GeminiChat(query: string) {
  const context: string[] = [
    "You are a helpful assistant that can answer questions about the user's portfolio. You are also able to search the user's portfolio for information and respond as the user himself instead of as a chat bot.",
    projects.map(project => project.description).join('\n'),
    skills.map(skill => `${skill.name} — ${skill.category} (Level ${skill.level}/5)`).join('\n'),
    experiences.map(experience => experience.description).join('\n'),
    aboutMe.description
  ];

console.log("calling gemini..")
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    const payload = {
      contents: [
        { role: 'user', parts: [{ text: `Context:\n${context}\n\nQuestion: ${query}` }] }
      ]
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      return data?.candidates?.[0]?.content?.parts?.[0]?.text ?? 'Sorry, I could not generate a response.';
    } catch (error) {
      console.error('Gemini API error:', error);
      return 'Sorry, there was an error processing your request.';
    }
  };


  const suggestions = [
    'What are your top React projects? ',
    'Do you have experience with TypeScript? ',
    'Tell me about your lead roles. ',
    'Where are you based and are you available? ',
  ];

  return (
    <section id="chat" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Ask My Portfolio</h2>
          <p className="text-gray-600 dark:text-gray-300">Conversational search powered by {wsReady ? 'AI' : 'smart local search'}.</p>
        </div>

        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div ref={containerRef} className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white'} max-w-[85%] px-4 py-2 rounded-xl shadow-sm ${m.role === 'user' ? 'rounded-br-sm' : 'rounded-bl-sm'} whitespace-pre-wrap`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 p-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
                placeholder="Ask about projects, skills, experience..."
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={sendMessage}
                className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
              >
                Send
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {suggestions.map((s) => (
                <button key={s} onClick={() => setInput(s)} className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                  {s.trim()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;


