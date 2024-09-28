import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import textAnalyzerService from 'Services/textAnalyzerService';
import { convertNewLineToBr } from 'Utils/utils';

const ViewText = () => {
  const [text, setText] = React.useState('');

  const params = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await textAnalyzerService.get(Number(params.id));
        if (data.id) {
          setText(data.content);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">View Text</h1>
      <div className="border p-4 rounded">
        <div dangerouslySetInnerHTML={{ __html: convertNewLineToBr(text) }} />
      </div>

      <div className="flex justify-start gap-1">
        <button
          onClick={() => navigate(`/text-analyzer/edit/${params.id}`)}
          className="mt-4 bg-blue-600 text-white px-2 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => navigate('/text-analyzer')}
          className="mt-4 bg-gray-600 text-white px-2 py-1 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ViewText;
