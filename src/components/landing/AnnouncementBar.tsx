import { useState, useEffect } from "react";

const getTimeLeft = () => {
const target = new Date("2026-03-21T00:00:00+05:30").getTime();
const now = Date.now();
const diff = Math.max(0, target - now);

return {
days: Math.floor(diff / (1000 * 60 * 60 * 24)),
hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
minutes: Math.floor((diff / (1000 * 60)) % 60),
};
};

const AnnouncementBar = () => {

const [time, setTime] = useState(getTimeLeft());

useEffect(() => {
const id = setInterval(() => setTime(getTimeLeft()), 1000);
return () => clearInterval(id);
}, []);

return ( <div className="fixed top-0 left-0 right-0 z-50 
 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 
 text-white border-b border-purple-600/30">

```
  <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-3">

    <span className="text-yellow-400"></span>

    <p className="text-xs sm:text-sm font-medium">

      Next cohort closes in{" "}

      <span className="font-mono font-bold text-yellow-400">
        {time.days}d {String(time.hours).padStart(2,"0")}h {String(time.minutes).padStart(2,"0")}m
      </span>

    </p>

  </div>

</div>


);
};

export default AnnouncementBar;
