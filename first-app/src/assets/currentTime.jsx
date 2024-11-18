let Currenttime=()=>{
    let date_time=new Date();
 return <p>This is current Time {date_time.toLocaleDateString()} - {date_time.toLocaleTimeString()}</p>
} 
export default Currenttime