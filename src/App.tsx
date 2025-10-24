import React, { useEffect, useState } from 'react';
import { WorkspaceAPI } from 'trimble-connect-workspace-api';
import ElementSearch from './ElementSearch';
import DragDropMarkupBuilder from './DragDropMarkupBuilder';
import './App.css'; // Lisa oma CSS siia, kui vaja

function App() {
  const [api, setApi] = useState<WorkspaceAPI | null>(null);
  const [selectedObjects, setSelectedObjects] = useState<any[]>([]);
  const [language] = useState<'et' | 'en'>('et'); // Eesti keel vaikimisi

  useEffect(() => {
    const initApi = async () => {
      try {
        const workspaceApi = await (window as any).WorkspaceAPI.getInstance(); // Laadi Workspace API
        setApi(workspaceApi);
        console.log('Workspace API laetud!');
      } catch (error) {
        console.error('API laadimise viga:', error);
      }
    };
    initApi();
  }, []);

  if (!api) {
    return <div>Laen Trimble Connect API-d...</div>;
  }

  return (
    <div className="app">
      <h1>Markup Extension (MARKUP teema)</h1>
      <ElementSearch api={api} onSelectionChange={setSelectedObjects} language={language} />
      <DragDropMarkupBuilder api={api} selectedObjects={selectedObjects} language={language} />
    </div>
  );
}

export default App;
