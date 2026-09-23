import { useEffect, useRef, useState } from "react";

interface CounterNumberProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const CounterNumber = ({ end, duration = 800, suffix = "+" }: CounterNumberProps) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 } // 40% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, end, duration]);

  return (
    <h1
      ref={ref}
      className="text-[32px] font-semibold"
    >
      {count.toLocaleString()}
      {suffix}
    </h1>
  );
};

export default CounterNumber;
