import React, { useEffect, useState } from "react";

function CountUp({ end, suffix = "", duration = 1500 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const currentValue = Math.floor(progress * end);
      setValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span className="text-[#d4af37] text-2xl font-light">
      {value}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="flex gap-10 mt-8">

      <div>
        <CountUp end={10} suffix="+" />
        <p className="text-white/60 text-sm">Designs</p>
      </div>

      <div>
        <CountUp end={100} suffix="%" />
        <p className="text-white/60 text-sm">Quality</p>
      </div>

      <div>
        <CountUp end={24} suffix="/7" />
        <p className="text-white/60 text-sm">Support</p>
      </div>

    </div>
  );
}