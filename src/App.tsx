import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import SearchSection from './components/SearchSection';
import ChatSection from './components/ChatSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  const webSocketAPIURL="wss://fastapipython.onrender.com";//This is the websocket service hosted in the cloud.
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
  useEffect(() => {
    const ws = new WebSocket(webSocketAPIURL);
    setWebSocket(ws);
    ws.onmessage = (event) => {
      console.log("message received:", event.data);
    };
    ws.onopen = () => {
      console.log('WebSocket connected');
      ws&&ws.send("Hello from client");
    };
    
    ws.onclose = () => {
      console.log('WebSocket disconnected');
    };
    ws.onerror = (event) => {
      console.log('WebSocket error', event);
    };
  }, []);

    return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <ChatSection webSocket={webSocket} />
        <SearchSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;