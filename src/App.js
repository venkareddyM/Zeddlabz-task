
import Sidebar from "./component/Sidebar";
import './App.css';
import Group from "./component/Group";
import Footer from "./component/Footer";
import Product from "./component/Product";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header/><br/><br/>
      <Group/>
      <div style={{display:'flex',justifyContent:'space-evenly'}}>
      <Sidebar/>
      <Product/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;