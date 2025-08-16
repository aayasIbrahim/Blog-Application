import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ScrollCounter = ({ end, duration = 5 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // count only once
    threshold: 0.5, // 50% of element visible
  });

  return (
    <div ref={ref} className="text-4xl font-bold text-center ">
      {inView ? <CountUp end={end} duration={duration} /> : 0}
    </div>
  );
};

export default ScrollCounter;
