import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import CortexView from './views/CortexView.jsx';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cortex" element={<CortexView />} />
      </Routes>
    </BrowserRouter>
  );
}
