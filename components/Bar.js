import { useState } from 'react'

const Bar = ({ day, amount, greatest }) => {

  const [showValue, setShowValue] = useState(false)

  function toggleShow() {
    setShowValue(!showValue)
  }

  return (
    <div className="w-10 h-40 flex flex-col justify-end items-center">
      <div
        className={'bg-dark-brown rounded-[4px] text-very-pale-orange text-center text-xs font-bold px-2 py-1 w-14 mb-[5px] z-10 ' + (showValue ? 'block' : 'hidden')}
        >${amount / 2.285714286}</div>
      <div
        className={"hover:cursor-pointer hover:bg-opacity-70 rounded-[4px] w-11/12 justify-center " + (greatest ? "bg-cyan" : "bg-soft-red")}
        style={{height: `${amount}px`}}
        onClick={() => toggleShow()}></div>
      <p className="text-center text-xs text-medium-brown">{day}</p>
    </div>
  )
}

export default Bar
