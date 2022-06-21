import Bar from './Bar'
import Total from './Total'

const Chart = ({ data }) => {

  return (
    <div className="w-96 rounded-lg bg-very-pale-orange">
      <h1 className='px-5 pt-5 pb-10 font-bold text-xl text-dark-brown'>Spending - Last 7 days</h1>
      <div className="flex justify-between px-5 items-end">
        {data.map((item, index) => {
          return <Bar key={index} day={item.day} amount={item.amount * 2.285714286} greatest={item.greatest} />
        })}
      </div>
      <div className='flex justify-center items-center pt-5 px-5'>
        <div className='bg-cream h-[0.5px] rounded-sm w-full'></div>
      </div>
      <Total />
    </div>
  )
}

export default Chart
