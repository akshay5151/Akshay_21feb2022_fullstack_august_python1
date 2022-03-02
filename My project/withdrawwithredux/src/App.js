import { useSelector , useDispatch } from 'react-redux';
import * as action from './Actions/index'
import "./App.css";

function App() {

  const mystate = useSelector((state)=>state.decrementNumber)
  const dispatch = useDispatch();
  return (
    <>
      <div className="App">
        <img className="App__userpic" src={"https://image.ibb.co/nC8vGp/girl.png"} alt="photographer" />
        <p className="App__username">Hello, Akshay </p>
        <div className="App__amount">
          <p> ${mystate}</p>
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button onClick={()=>dispatch(action.decNumberTen())}>WITHDRAW $10,000</button>
          <button onClick={()=>dispatch(action.decNumberfive())}>WITHDRAW $5,000</button>
          <button onClick={()=>dispatch(action.makeItZero())}>Give to the Charity</button>
        </section>

        
      </div>
    </>
  )
}

export default App

// import React, { Component } from "react";
// import formatNumber from "format-number";
// import "./App.css";

// class App extends Component {
//   state = {
//     username: "Janny",
//     totalAmount: 2500701
//   };
//   mystate = useSelector((state)=>state.decrementNumber)
//   render() {
//     const { totalAmount, username } = this.state;
//     return (
//       <div className="App">
//         <img className="App__userpic" src={"https://image.ibb.co/nC8vGp/girl.png"} alt="photographer" />
//         <p className="App__username">Hello, {username}! </p>
//         <div className="App__amount">
//           {formatNumber({ prefix: "$" })(totalAmount)}
//           <p className="App__amount--info">Total Amount</p>
//         </div>

//         <section className="App__buttons">
//           <button data-amount="10000">WITHDRAW $10,000</button>
//           <button data-amount="5000">WITHDRAW $5,000</button>
//         </section>

//         <p className="App__giveaway">Give away all your cash to charity</p>
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from 'react';
//     import './Getusers.css';
//     import { Table } from 'reactstrap';
//     import store from '../../../Components/Redux/Store/store';
//     import {connect} from 'react-redux';

//     class Getusers extends Component {
//         constructor(props) {
//             super(props)

//             this.state = {
//                 list: []
//             }

//             store.subscribe(() => {
//                 this.setState({
//                     list: this.props.list
//                 })
//             })

//             console.warn(this.state.list)
//         }



//         render() {
//             return (
//                 <Table striped>
//                     <thead>
//                         <tr>
//                             <th>So No</th>
//                             <th>Name</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                     </tbody>
//                 </Table>
//             )
//         }
//     }

//     const mapStateToProps = state => {
// //replace Reducer name with state.'Your Reducer name' and .property
//       return {
//         list: state.getState.userList,
//       };
//     };
//     const mapDispatchToProps = dispatch => {
//       return {
//         CallinComponent: () => {
//           dispatch(MiddlewareName.ActionName());
//         },
//     };

//     export default connect(mapStateToProps, mapDispatchToProps)(Getusers);