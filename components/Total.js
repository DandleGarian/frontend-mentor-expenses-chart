const Total = () => {
  return (
    <div className="flex justify-between items-end p-5">
      <div>
        <p className="text-xs text-medium-brown pb-1">Total this month</p>
        <h1 className="text-3xl font-bold text-dark-brown">$478.50</h1>
      </div>
      <div>
        <p className="text-sm font-bold text-dark-brown pb-1">+2.5%</p>
        <p className="text-xs text-medium-brown">from last month</p>
      </div>

    </div>
  )
}

export default Total