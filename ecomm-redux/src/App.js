import logo from './logo.svg';
import './App.css';
import InputFields from './Component/inputField';
import Context from './Component/Context';
import AppBar from './Component/AppBar';
import Banner from './Component/Banner';
import Menu from './Component/Menu';
import PizzaCard from './Component/PizzaCard';
import Drag from './DragableComponent/Drag';
import ImageDrag from './DragableComponent/ImageDrag';


function App() {
  return (
    <div className="App">
      {/* <Context>
        <InputFields/>
      </Context> */}
      {/* <p className='display-5'>Hello Bootstrap</p> */}

      {/* Heading */}
      <>
      {/* <AppBar />
      <Banner/>
      <Menu/> */}
      {/* <PizzaCard/> */}
      {/* <Rectangle/> */}
      <Drag/>
      <ImageDrag/>
      </>
    </div>

  );
}

export default App;
