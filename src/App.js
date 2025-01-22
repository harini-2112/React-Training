import logo from './logo.svg';
import './App.css';
import Validation from './Validation';
import Useeffecthook from './Useeffecthook'
import Useeffectex2 from './Useeffectex2'
import Useeffectapi from './Useeffectapi';
import Useeffectimg from './Useeffectimg';
import Context1 from './Context1';
import Usereducercount from './Usereducercount';
import Usereeucercrud from './Usereeucercrud';
import Usememoclbak from './Usememoclbak';
import Datatable from './Datatable';
function App() {
  function add(a,b)
  {
console.log(a+b);

  } // pure function
  add(3,6)
let x=8
  function sums(b){
    x=x+b

  } // impure function
  sums(7)
  sums(7)
  
  return (
    <div >
      <Datatable/>
      <Usememoclbak/>
      <Usereeucercrud/>
      <Usereducercount/>
      <Context1/>
      {/* <Useeffectimg/>
      <Useeffectapi/>
      <Useeffecthook/>
      <Useeffectex2/>
     <Validation/> */}


    </div>
  );
}

export default App;
