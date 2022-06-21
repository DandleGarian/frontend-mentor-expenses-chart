
const Balance = () => {
  return (
    <div className='bg-soft-red flex rounded-lg w-96 items-center justify-between'>
      <div className='p-5 text-cream'>
        <p className='text-xs pb-1'>My balance</p>
        <h1 className='font-bold text-xl'>$921.50</h1>
      </div>
      <div className="pr-5">
        <img className="h-14 w-14" src='/images/logo.svg' alt="logo" />
      </div>
    </div>
  );
};

export default Balance;
