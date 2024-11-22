function Items()
{    const itemName="BuyMilk"
    const itemdate="10/02/2024"
    return <div className="container todo-container">
    <div class="row Crow">
      <div class="col-sm-4">
       {itemName}
      </div> 
      <div class="col-sm-4">{itemdate}</div>
      <div class="col-sm-2"><button className="btn btn-danger Cbutton">Delete</button></div>
    </div>
    </div>
}
export default Items