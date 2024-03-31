import React, { useState } from "react";

function UpArray() {
    let[list,setlist]=useState([])
    let[additem,setadditem]=useState("")
    function cadditem(e){
        setadditem(e.target.value)
    }
    function addlist(){
        if(additem!=="")
        setlist((t)=>[...t,additem])
        setadditem("")
    }
    function remove(index){
        setlist(list.filter((e,i)=>i!==index))

    }

    return (
        <>
        <input type="text" onChange={cadditem} value={additem} style={{textAlign:"center"}}/>
        <button onClick={addlist}>Add</button>
        {
            list.map((e,index)=>
            <li key={index} className="list">{e} <button onClick={()=>remove(index)}>Remove</button></li>
            )
        }
        <img src="https://picsum.photos/id/237/200/300" alt="" />
        </>
    );
}

export default UpArray;
