import React, { useEffect, useState } from 'react';

const TooManyRequests = () => {
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(countdownInterval);
          window.history.back();
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-center">Too Many Requests</h1>
      <p className="text-lg text-center">
        Please wait for {countdown} seconds before trying again.
      </p>
      <p className="text-lg text-center">
        Redirecting back in <span>{countdown}</span> seconds...
      </p>
    </div>
  );
};

export default TooManyRequests;
