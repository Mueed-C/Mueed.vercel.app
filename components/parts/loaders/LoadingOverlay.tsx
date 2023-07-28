const LoadingOverlay = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-slate-950 bg-opacity-50 z-50">
      <div className="text-white text-xl">Loading...</div>
    </div>
  );
};

export default LoadingOverlay;
