import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import textAnalyzerService from 'Services/textAnalyzerService';

const AddEditText = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchText = async () => {
      if (id) {
        try {
          const text = await textAnalyzerService.get(id);
          setContent(text.content);
        } catch (error) {
          console.error('Error fetching text:', error);
        }
      }
    };

    fetchText();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        const result = await textAnalyzerService.update(id, content);
        console.log('Updated text:', result);
        if (!result.error) {
          alert('Text updated successfully');
          navigate('/text-analyzer');
        }
      } else {
        const result = await textAnalyzerService.add(content);
        console.log('Added text:', result);
        if (!result.error) {
          alert('Text added successfully');
          navigate('/text-analyzer');
        }
      }
    } catch (error) {
      console.error('Error saving text:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        {id ? 'Edit Text' : 'Add Text'}
      </h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <div className="flex gap-1">
          <button
            type="submit"
            className="mt-4 bg-green-600 text-white px-2 py-1 rounded"
          >
            {id ? 'Update' : 'Add'}
          </button>
          <button
            onClick={() => navigate('/text-analyzer')}
            className="mt-4 bg-gray-600 text-white px-2 py-1 rounded"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEditText;
