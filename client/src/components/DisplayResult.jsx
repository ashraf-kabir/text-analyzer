const DisplayResult = ({ result }) => {
  if (!result) {
    return null;
  }
  return (
    <div className="mt-4 p-4 border border-gray-300 rounded bg-gray-50">
      <h2 className="text-lg font-bold mb-2">Result:</h2>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};

export default DisplayResult;
