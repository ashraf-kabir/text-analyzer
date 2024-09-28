import { Routes, Route } from 'react-router-dom';
import Login from 'Pages/Login';
import TextAnalyzer from 'Pages/TextAnalyzer/TextAnalyzer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/text-analyzer" element={<TextAnalyzer />} />
    </Routes>
  );
}

export default App;
