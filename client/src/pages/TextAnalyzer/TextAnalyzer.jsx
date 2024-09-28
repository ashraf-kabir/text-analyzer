import React, { useEffect, useState } from 'react';
import textAnalyzerService from 'Services/textAnalyzerService';
import DisplayResult from 'Components/DisplayResult';

const TextAnalyzer = () => {
  const [texts, setTexts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null); // State to hold the result of actions

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await textAnalyzerService.list();
        setTexts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAction = async (action, id) => {
    let actionResult;
    try {
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
      setResult(actionResult); // Set the result to state
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
      <h1 className="text-2xl font-bold mb-4">Text Analyzer</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">ID</th>
            <th className="py-2 px-4 border-b text-left">Content</th>
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {texts.map((text) => (
            <tr key={text.id}>
              <td className="py-2 px-4 border-b">{text.id}</td>
              <td className="py-2 px-4 border-b">{text.content}</td>
              <td className="flex py-2 px-4 border-b gap-1">
                <button
                  onClick={() => handleAction('countWords', text.id)}
                  class="rounded-md bg-blue-700 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-blue-800 focus:shadow-none active:bg-blue-800 hover:bg-blue-800 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Count Words
                </button>
                <button
                  onClick={() => handleAction('countCharacters', text.id)}
                  class="rounded-md bg-blue-700 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-blue-800 focus:shadow-none active:bg-blue-800 hover:bg-blue-800 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Count Characters
                </button>
                <button
                  onClick={() => handleAction('countSentences', text.id)}
                  class="rounded-md bg-blue-700 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-blue-800 focus:shadow-none active:bg-blue-800 hover:bg-blue-800 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Count Sentences
                </button>
                <button
                  onClick={() => handleAction('countParagraphs', text.id)}
                  class="rounded-md bg-blue-700 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-blue-800 focus:shadow-none active:bg-blue-800 hover:bg-blue-800 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Count Paragraphs
                </button>
                <button
                  onClick={() => handleAction('longestWord', text.id)}
                  class="rounded-md bg-blue-700 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-blue-800 focus:shadow-none active:bg-blue-800 hover:bg-blue-800 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
