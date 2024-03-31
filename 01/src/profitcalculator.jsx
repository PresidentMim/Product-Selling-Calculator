import { useState } from "react"

function profitcalculator(){
    let [spp,setspp]=useState(0)
    function addspp(e){
        setspp(parseInt(e.target.value))
    }

    let [q,setq]=useState(1)
    function addq(e){
        let qq=parseFloat(e.target.value)
        if(qq>0)
        setq(qq)
    }
    let [acpp,setacpp]=useState(0)
    function addacpp(e){
        setacpp(parseFloat(e.target.value))
    }
    let [pcc,setpcc]=useState(0)
    function addpcc(e){
        setpcc(parseFloat(e.target.value))
    }
    let [pc,setpc]=useState(0)
    function addpc(e){
        setpc(parseFloat(e.target.value))
    }
    let[csum,setcsum]=useState(0)
    function ccsum(e){
        e.preventDefault();
        setcsum(parseFloat((spp+acpp + pcc + pc)*q))
    }

    let [profit,setprofit]=useState(0)
    function addprofit(e){
        setprofit(parseInt(e.target.value))
    }
    let [Totalprofit,setTotalprofit]=useState(0)
    function ttlp(e){
        e.preventDefault()
        setTotalprofit(csum+profit)
    }
    return(
        <>
        <form action="post" className="form">
        <h1>Product Selling Calculator</h1>
        <label>
        Single Product Price:
            <input type="text"  onChange={addspp}/>
        </label>
        <label>
        Quantity (optional):
            <input type="number" value={q}  onChange={addq}/>
        </label>
        <label>
            Ads Cost Per Products:
            <input type="text"  onChange={addacpp}/>
        </label>
        <label>
            Phone Call Cost: 
            <input type="text"  onChange={addpcc}/>
        </label>
        <label>
        Packaging Cost: 
            <input type="text"  onChange={addpc}/>
        </label>
        <div className="btn">
        <button onClick={ccsum}> Show Boundary</button>
        </div>
       
        <label >
        Total Boundary: ${csum}  
        </label>
        <label>SetProfit: <input type="text" placeholder="Type Profit number" onChange={addprofit}/></label>
        <div className="btn1">
        <button onClick={ttlp}> Show Selling Price</button>
        </div>
        
        <h1 className="h1">Final Selling Price <br /> ${Totalprofit} </h1>
        </form>
        
        
        
        
        </>
    )
}
export default profitcalculator