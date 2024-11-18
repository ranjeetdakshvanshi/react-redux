import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
function FragMent(){
    let ItemList=[1,2,3,4,5,6,7];
    
    return( <>
        <h1>Map Test</h1>
        <ul className="list-group">
        {ItemList.length===0?<h2>Still Array Empty</h2>:null}   
        {
         ItemList.map((item)=>(<li key={item} className="list-group-item">{item}</li>))}
   </ul>
       </>);
} export default FragMent