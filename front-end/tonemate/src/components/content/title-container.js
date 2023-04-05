const TitleContainer = ({ children }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-11/12 h-8 lg:h-16 justify-between items-center lg:items-center">
        {children}
      </div>
    </>
  );
};

export default TitleContainer;
