const MainContainer = ({ children }) => {
  return (
    <>
      <div className="flex flex-col w-11/12 h-5/6 justify-around items-center bg-black overflow-y-auto flex-nowrap scrollbar-hide snap-y">
        {children}
      </div>
    </>
  );
};

export default MainContainer;
