// RENDER HTML Elements to the <DOM></DOM>
// const JSX = (
//   <div>
//     <h1>Hello World</h1>
//     <p>Lets render this to the DOM</p>
//   </div>
// );
// // Change code below this line
// ReactDOM.render(JSX, document.getElementById("challenge-node")
// );

// Class Component RENDERED TO DOM
// class TypesOfFood extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>Types of Food:</h1>
//         {/* Change code below this line */}
//         <Fruits />
//         <Vegetables />
//         {/* Change code above this line */}
//       </div>
//     );
//   }
// };
// ReactDOM.render(<TypesOfFood/>, document.getElementById('challenge-node'))
// // Change code below this line

// Looking at UDEMY REVIEW OF deconstruction and ARROW FUNcTIons VS traditional functions

// BACK TO FCC
// Change code below this line
// class MyComponent extends React.Component {
//     constructor(props){
//       super(props);
//     }
//   render(){
//     return(
//       <div id="challenge-node" >
//       <h1>My First React Component!</h1>
//       </div>
//     );
//   }
//   };
//   ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node"));
  
// Pass PROPS TO STATELESS FUNCTION
// const CurrentDate = (props) => {
//     return (
//       <div>
//         { /* Change code below this line */ }
//         <p>The current date is: {props.date}</p>
//         { /* Change code above this line */ }
//       </div>
//     );
//   };
  
//   class Calendar extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return (
//         <div>
//           <h3>What date is it?</h3>
//           { /* Change code below this line */ }
//           <CurrentDate date= {Date()} />
//           { /* Change code above this line */ }
//         </div>
//       );
//     }
//   };

// // CONFUSING PROPS HELP *********************
// const List = (props) => {
//     { /* Change code below this line */ }
//     return <p>{props.tasks.join(", ")}</p>;
//     { /* Change code above this line */ }
//   };
  
//   class ToDo extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return (
//         <div>
//           <h1>To Do Lists</h1>
//           <h2>Today</h2>
//           { /* Change code below this line */ }
//           <List tasks={['Walk', 'Cook', 'Bake' ]} />
//           <h2>Tomorrow</h2>
//           <List tasks={['Study', 'Code', 'Eat' ]} />
//           { /* Change code above this line */ }
//         </div>
//       );
//     }
//   }