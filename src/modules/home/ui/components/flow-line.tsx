export default function FlowLine() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black">
      {/* SVG line */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 800 400"
      >
        <path
          d="M 200 100 C 250 200, 550 200, 600 300"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0,1000;1000,0"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>

        {/* Glow gradient */}
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00f5ff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Example card */}
      <div className="relative z-10 grid grid-cols-3 gap-6">
        <div className="rounded-xl bg-gradient-to-b from-neutral-900 to-neutral-800 p-6 text-white shadow-lg">
          git add . <br /> git commit -m "update" <br /> git push
        </div>
        <div className="rounded-xl bg-gradient-to-b from-neutral-900 to-neutral-800 p-6 text-white shadow-lg flex items-center justify-center">
          <span className="text-4xl">🐙</span>
        </div>
        <div className="rounded-xl bg-gradient-to-b from-neutral-900 to-neutral-800 p-6 text-white shadow-lg flex flex-col items-center justify-center">
          <span className="text-xl font-bold">aws</span>
          <span className="text-gray-300">your site is live ✨</span>
        </div>
      </div>
    </div>
  );
}
