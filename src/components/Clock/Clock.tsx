import { useEffect, useState } from "react";

export const Clock = () => {
  
  const [time, setTime] = useState(new Date());

  useEffect(() => {
  
    const interval = setInterval(() => {
  
      setTime(new Date());
  
    }, 1000);

    return () => clearInterval(interval);
  
  }, []);

  return (
    <div>
  
      <h1>Saat</h1>
  
      <p style={{fontSize: '2rem'}}>{time.toLocaleTimeString()}</p>
  
    </div>
  );
};