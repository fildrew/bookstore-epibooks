import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
 
import AllTheBooks from './components/AllTheBooks'
import Welcome from './components/Welcome'


const App = () => {
  return (
    <div className="App">
      <div>
        <header>
          <MyNav subtitle=" A World of Stories Awaits!" />
        </header>
        <Welcome/> 
        
        <AllTheBooks />
        <MyFooter/>
      </div>
    </div>
  );
}

export default App;
