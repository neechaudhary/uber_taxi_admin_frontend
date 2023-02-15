
import React from 'react'
import chartimg from "./../assets/images/chart_for_uber.png"
import { AiOutlineLineChart } from "react-icons/ai"


const Statistics = () => {
    return (
        <div>
            <section>
                <div style={{background:"#F8F7F1", padding:'30px'}} className='min-h-[100vh]'>
                    <div style={{padding:"15px 8px"}}  >
                        <h1 className='text-3xl font-semibold py-3'>Statistics</h1>
                        <h3 style={{fontWeight:"600"}}>Today: 06 jun 2023</h3>
                    </div>
                    <div style={{display:"flex", justifyContent:"center", padding:"5px 20px", backgroundColor:"#ffffff"}}>
                        <span style={{paddingRight:"10px", display:"flex", alignItems:"center"}}><AiOutlineLineChart /> </span><span> 23% better performance</span>
                    </div >
                    <div style={{display:"flex", justifyContent:"start"}}>
                        <div style={{padding:"10px " }} >
                            <h1 style={{fontWeight:"600", fontSize:"18px", padding:" 10px 0"}}>Expenses</h1>
                            <p style={{fontSize:"12px",color:"#C1C1C1", fontWeight:600}}>Total price</p>
                            <h1 style={{fontSize:"22px", fontWeight:"700"}}>$7,230.000</h1>
                        </div>
                        <div style={{padding:'10px 20px'}}>
                            <h1 style={{fontWeight:"600", fontSize:"18px", padding:" 10px 0"}}>Income</h1>
                            <p style={{fontSize:"12px",color:"#C1C1C1", fontWeight:600}}>Total price</p>
                            <h1 style={{fontSize:"22px", fontWeight:"700"}}>$7,230.000</h1>
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"start"}}>
                        <div style={{padding:"10px " }} >
                            <h1 style={{fontWeight:"600", fontSize:"18px", padding:" 10px 0"}}>Middle price</h1>
                            <p style={{fontSize:"12px",color:"#C1C1C1", fontWeight:600}}>Amount per mile</p>
                            <h1 style={{fontSize:"22px", fontWeight:"700"}}>$24.00</h1>
                        </div>
                        <div style={{padding:'10px 20px'}}>
                            <h1 style={{fontWeight:"600", fontSize:"18px", padding:" 10px 0"}}>Park load</h1>
                            <p style={{fontSize:"12px",color:"#C1C1C1", fontWeight:600}}>Number of cars</p>
                            <h1 style={{fontSize:"22px", fontWeight:"700"}}>56/78</h1>
                        </div>
                    </div>
                    <hr />

                    <div style={{padding:"15px 0"}}>
                        <div style={{fontSize:"23px", fontWeight:"600"}}>Receiving orders</div>
                        <div style={{display:"flex", justifyContent:"center", paddingTop:"5px"}}>
                            <img src={chartimg} alt="" />
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between", background:"#F1EEE3",padding:"20px 10px"}}>
                        <div style={{fontWeight:"600"}}>Total income</div>
                        <div style={{fontWeight:"600"}}>$12,870.00</div>
                    </div>
                </div>
                <div className='orders_and_profits'>

                </div>
            </section>

        </div>
    )
}

export default Statistics