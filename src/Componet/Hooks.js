import React, { useState, useEffect } from 'react';
import User from './comp1';
function Hooks() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [count1, setCount2] = useState(0);
 const updateCount = () => setCount(count + 1)  ;
 const updateCount2 = () => setCount2(count1 + 1)  ;

 useEffect(()=>{
     console.log(count1)
     console.log(count)
 
 },[count]) 

 //this called first time / unmounts
 useEffect(()=>{
    console.log(count1)
    console.log(count)

},[]) 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={updateCount}>
        Click me
      </button>
      <button onClick={updateCount2}>
        Click me Again
      </button>

         <User ucount ={count}/>
    </div>
  );
}

export default Hooks;

//If you used classes in React before, this code should look familiar:
// class ExampleClassComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         count: 0
//       };
//     }
  
//     render() {
//       return (
//         <div>
//           <p>You clicked {this.state.count} times</p>
//           <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//             Click me
//           </button>
//         </div>
//       );
//     }
//   }
