import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

console.log('Main.jsx is running...');

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error("Root element not found");
  
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
  console.log('React App mounted successfully');
} catch (error) {
  console.error('Failed to mount React App:', error);
  document.body.innerHTML = `<div style="color:red; padding:20px;"><h1>Critical Error</h1><p>${error.message}</p></div>`;
}
