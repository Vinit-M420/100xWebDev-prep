

export const PurpleBlob = () => {
  return (
    <svg
      viewBox="0 0 1200 600"
      className="absolute -right-70 xl:w-[60vw] lg:w-[40vw] max-w-[700px] h-[300px] translate-y-50
                 lg:block hidden" 
      aria-hidden="true">
      <defs>
        <linearGradient id="blobFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
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


export const LPurpleBlob = () => {
  return (
    <svg
      viewBox="0 0 1200 600"
      className="absolute rotate-180 -left-20 xl:w-[60vw] lg:w-[40vw] max-w-[700px] h-[300px] translate-y-50
                transition duration-500"
      aria-hidden="true">
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
