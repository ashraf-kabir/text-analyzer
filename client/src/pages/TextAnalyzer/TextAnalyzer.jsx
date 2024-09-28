import React, { useEffect, useState, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import authService from 'Services/authService';
import textAnalyzerService from 'Services/textAnalyzerService';
import DisplayResult from 'Components/DisplayResult';
import { convertNewLineToBr } from 'Utils/utils';

const TextAnalyzer = () => {
  const [texts, setTexts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);

  const { getToken, isAuthenticated } = authService();

  const fetchData = useCallback(async () => {
    if (!isAuthenticated) {
      alert('You need to log in to access this feature.');
      return;
    }

    try {
      const token = await getToken();
      textAnalyzerService.setAuthToken(token);
      localStorage.setItem('token', token);
      const data = await textAnalyzerService.list();
      setTexts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (id) => {
    if (!isAuthenticated) {
      alert('You need to log in to delete text.');
      return;
    }

    if (window.confirm('Are you sure you want to delete this text?')) {
      try {
        const token = await getToken();
        textAnalyzerService.setAuthToken(token);
        await textAnalyzerService.remove(id);
        setTexts(texts.filter((text) => text.id !== id));
      } catch (error) {
        console.error('Error deleting text:', error);
      }
    }
  };

  const handleAction = async (action, id) => {
    if (!isAuthenticated) {
      alert('You need to log in to perform this action.');
      return;
    }

    let actionResult;
    try {
      const token = await getToken();
      textAnalyzerService.setAuthToken(token);

      switch (action) {
        case 'countWords':
          actionResult = await textAnalyzerService.countWords(id);
          break;
        case 'countCharacters':
          actionResult = await textAnalyzerService.countCharacters(id);
          break;
        case 'countSentences':
          actionResult = await textAnalyzerService.countSentences(id);
          break;
        case 'countParagraphs':
          actionResult = await textAnalyzerService.countParagraphs(id);
          break;
        case 'longestWord':
          actionResult = await textAnalyzerService.longestWord(id);
          break;
        default:
          break;
      }
      setResult(actionResult);
    } catch (error) {
      console.error('Error fetching action data:', error);
      alert('Error fetching action data.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Text Analyzer</h1>
        <Link
          to="/text-analyzer/add"
          className="rounded-md bg-blue-500 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-blue-600 focus:shadow-none active:bg-blue-600 hover:bg-blue-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Add Text
        </Link>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Id</th>
            <th className="py-2 px-4 border-b text-left">Content</th>
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {texts.map((text) => (
            <tr key={text.id}>
              <td className="py-2 px-4 border-b">{text.id}</td>
              <td
                className="py-2 px-4 border-b"
                dangerouslySetInnerHTML={{
                  __html: convertNewLineToBr(text.content),
                }}
              ></td>
              <td className="flex py-2 px-4 border-b gap-1">
                <Link
                  to={`/text-analyzer/edit/${text.id}`}
                  className="rounded-md bg-yellow-500 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-yellow-600 focus:shadow-none active:bg-yellow-600 hover:bg-yellow-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Edit
                </Link>
                <Link
                  to={`/text-analyzer/view/${text.id}`}
                  className="rounded-md bg-green-500 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-green-600 focus:shadow-none active:bg-green-600 hover:bg-green-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  View
                </Link>
                <button
                  onClick={() => handleDelete(text.id)}
                  className="rounded-md bg-red-600 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleAction('countWords', text.id)}
                  className="rounded-md bg-blue-700 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-blue-800 focus:shadow-none active:bg-blue-800 hover:bg-blue-800 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Count Words
                </button>
                <button
                  onClick={() => handleAction('countCharacters', text.id)}
                  className="rounded-md bg-blue-700 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-blue-800 focus:shadow-none active:bg-blue-800 hover:bg-blue-800 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Count Characters
                </button>
                <button
                  onClick={() => handleAction('countSentences', text.id)}
                  className="rounded-md bg-blue-700 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-blue-800 focus:shadow-none active:bg-blue-800 hover:bg-blue-800 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Count Sentences
                </button>
                <button
                  onClick={() => handleAction('countParagraphs', text.id)}
                  className="rounded-md bg-blue-700 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-blue-800 focus:shadow-none active:bg-blue-800 hover:bg-blue-800 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Count Paragraphs
                </button>
                <button
                  onClick={() => handleAction('longestWord', text.id)}
                  className="rounded-md bg-blue-700 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-blue-800 focus:shadow-none active:bg-blue-800 hover:bg-blue-800 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Longest Word
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DisplayResult result={result} />
    </div>
  );
};

export default TextAnalyzer;
