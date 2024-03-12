import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyAlert from "./components/MyAlert"; 
import AllTheBooks from './components/AllTheBooks'


const App = () => {
  return (
    <div className="App">
      <div>
        <header>
          <MyNav subtitle=" A World of Stories Awaits!" />
        </header>
        
        <MyAlert/>
        <AllTheBooks />
        <MyFooter/>
      </div>
    </div>
  );
}

export default App;
