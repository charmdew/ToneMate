const LandingContainer = ({ children }) => {
  return (
    <>
      <div className="flex flex-col w-full h-full items-center bg-black">
        {children}
      </div>
    </>
  );
};

export default LandingContainer;
