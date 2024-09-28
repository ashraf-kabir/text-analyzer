import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Login from 'Pages/Login';
import TextAnalyzer from 'Pages/TextAnalyzer/TextAnalyzer';
import AddEditText from 'Pages/TextAnalyzer/AddEditText';
import ViewText from 'Pages/TextAnalyzer/ViewText';
import NotFoundPage from 'Pages/NotFoundPage';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/text-analyzer"
        element={isAuthenticated ? <TextAnalyzer /> : <Navigate to="/" />}
      />
      <Route
        path="/text-analyzer/add"
        element={isAuthenticated ? <AddEditText /> : <Navigate to="/" />}
      />
      <Route
        path="/text-analyzer/edit/:id"
        element={isAuthenticated ? <AddEditText /> : <Navigate to="/" />}
      />
      <Route
        path="/text-analyzer/view/:id"
        element={isAuthenticated ? <ViewText /> : <Navigate to="/" />}
      />
      <Route path="*" exact element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
