import NavBar from '@/components/common/NavBar';

const Setting = () => {
  return (
    <div className="w-full h-full bg-grey-50 flex flex-col items-center justify-center relative">
      <div className="loader" />
      <div className="absolute bottom-0">
        <NavBar />
      </div>
    </div>
  );
};

export default Setting;
