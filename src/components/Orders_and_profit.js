import React from 'react'
import ordersidechart from "./../assets/images/order_side_chart.png"
import carimg from "./../assets/images/car.png"
 import {AiOutlineDash} from "react-icons/ai"
 import {IoIosSend} from "react-icons/io"
 import {RiTimerFill} from "react-icons/ri"
const Orders_and_profit = () => {
    return (
        <div>
            <section >
                <div className=' pt-8 px-4  sm:pt-6 md:p-2'>
                    <div className='max-h-[400px] max-w-[800px]'>
                        <div className='md:text-3xl font-semibold '> Orders and Profits</div>
                    <div style={{display:"grid", gridTemplateColumns:"3fr 1fr 1fr 1fr",gap:"10px", alignItems:"center"}} >
                        <div className='p-2 '>
                            <img src={carimg} alt="" />
                        </div>
                        <div className='p-2'>
                            <AiOutlineDash size={20} />
                            <h1 className=' md:font-semibold'>Car on line</h1>
                            <h1 className='md:text-xl font-bold'>35</h1>
                        </div>
                        <div className='p-2'>
                            <IoIosSend size={20} />
                            <h1 className='md:font-semibold'>On order</h1>
                            <h1 className='md:text-xl font-bold'>23</h1>
                        </div>
                        <div className='p-2'>
                            <RiTimerFill size={20} />
                            <h1 className='md:font-semibold'>Awaiting</h1>
                            <h1 className='md:text-xl font-bold'>12</h1>
                        </div>

                    </div>
                    </div>
                    
                    <div className='pt-4 max-h-[400px] max-w-[800px]'>
                        <div className='text-3xl  font-semibold p-2'>Profit dynamics</div>
                        <div className='flex px-2'>
                            <div className='px-2 font-semibold'>Time: 11:35am</div>
                            <div className='px-2 font-semibold'>Income: $2,55,000</div>
                            <div className='px-2 font-semibold'>Expenses: $2,55,000</div>
                        </div>
                        <hr />
                        <div className='flex justify-center'>
                            <img src={ordersidechart} alt="oder side chart" />
                        </div>
                    </div>

                    <div className='text-3xl p-2'>
                        <div className='text-3xl  font-semibold '>Order list</div>
                    </div>
                    <div className='max-h-[400px] max-w-[800px]'>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr ", padding: "10px 6px", borderBottom:"1px solid #F2F2F2" }}>
                            <div>#</div>
                            <div>Number</div>
                            <div>Driver</div>
                            <div>Status</div>
                            <div>Cost</div>
                            <div>Vat</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr " ,padding: "10px 6px", borderBottom:"1px solid #F2F2F2"}}>
                            <div>1</div>
                            <div><span style={{backgroundColor:"#23312B", color:"white",padding:"1px"}}>123457</span> </div>
                            <div>Armaan</div>
                            <div>Completed</div>
                            <div>$97.00</div>
                            <div>$12.80</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr ",padding: "10px 6px", borderBottom:"1px solid #F2F2F2" }}>
                            <div>2</div>
                            <div><span style={{backgroundColor:"#23312B", color:"white",padding:"1px"}}>123457</span> </div>
                            <div>Armaan</div>
                            <div>Completed</div>
                            <div>$97.00</div>
                            <div>$12.80</div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Orders_and_profit