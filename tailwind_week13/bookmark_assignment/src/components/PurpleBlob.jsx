

export const PurpleBlob = () => {
  return (
    <svg
      viewBox="0 0 1200 600"
      className="absolute right-0 top-1/2 -translate-y-1/2 w-[65vw] max-w-[1000px] h-auto drop-shadow-[0_40px_100px_rgba(79,70,229,0.45)]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="blobFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      {/* Path: semicircle (left) + rectangle (right) */}
      <path
        d="
          M 300 300
          m -300 0
          a 300 300 0 0 0 300 300
          L 1200 600
          L 1200 0
          L 300 0
          a 300 300 0 0 0 -300 300
          Z
        "
        fill="url(#blobFill)"
      />
    </svg>
  );
};
