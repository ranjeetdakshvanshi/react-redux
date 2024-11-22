
import './App.css'
import AddItems from "./assets/components/AddItems";
import ItemName from "./assets/components/ItemName";
import Items from './assets/components/Items';
function App(){
    return <center className="main-container">
        <ItemName/>
        <AddItems/>
        <Items/>
    </center>
}
export default App