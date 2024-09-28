import { Routes, Route } from 'react-router-dom';
import Login from 'Pages/Login';
import TextAnalyzer from 'Pages/TextAnalyzer/TextAnalyzer';
import AddEditText from 'Pages/TextAnalyzer/AddEditText';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/text-analyzer" element={<TextAnalyzer />} />
      <Route path="/text-analyzer/add" element={<AddEditText />} />
      <Route path="/text-analyzer/edit/:id" element={<AddEditText />} />
    </Routes>
  );
}

export default App;
