
import './App.css';
import  Welcome  from './welcome/welcome';
import  Welcome_01  from './welcome/welcome';
import Home from './welcome/home/home';
import About from './welcome/function_component/about';
function App() {
  return (
    <div className="App">
      <Welcome name ="Ravi Kumar " age= "123"></Welcome>
      <div></div>
     <Welcome_01 name= "Amit Kumar"></Welcome_01>
     <div></div>
     <About></About>
     <div></div> 
    <Home/>
      </div>
  );
}

export default App;
