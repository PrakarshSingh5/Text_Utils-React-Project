
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/Textform';
import About from './components/about';
function App() {
  return (
   <>
  <Navbar title="Text_Utils"/>
 <div className="container my-3">
 {/* <TextFrom heading="Enter the text to Convert below"/> */}
 <About/>
 </div>
  
  </>
  );
}

export default App;
