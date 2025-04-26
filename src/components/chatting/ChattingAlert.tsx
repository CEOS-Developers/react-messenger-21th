const ChattingAlert = ({ count }: { count: number }) => {
  return (
    <div className='flex bg-blue-200 text-white rounded-full w-4 h-4 items-center align-middle text-center justify-center sm:leading-none font-cap-sb'>
      {count}
    </div>
  );
};

export default ChattingAlert;
