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

// PROPS TO STATELESS FUNCTIONAL COMPONENT
// const CurrentDate = (props) => {
//     return (
//       <div>
//         { /* Change code below this line */ }
//         <p>The current date is: {props.date} </p>
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
//           <CurrentDate date ={Date()}/>
//           { /* Change code above this line */ }
//         </div>
//       );
//     }
//   };

// OVERRIDE DEFAULT PROPS
// const Items = (props) => {
//     return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
//   }
  
//   Items.defaultProps = {
//     quantity: 0
//   }
  
//   class ShoppingCart extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       { /* Change code below this line */ }
//       return <Items quantity={10}/>
//       { /* Change code above this line */ }
//     }
//   };

// Access props this.props
// class App extends React.Component {
//     constructor(props) {
//       super(props);
  
//     }
//     render() {
//       return (
//           <div>
//               { /* Change code below this line */ }
//               <Welcome name ="Randall"/>
//               { /* Change code above this line */ }
//           </div>
//       );
//     }
//   };
  
//   class Welcome extends React.Component {
//     constructor(props) {
//       super(props);
  
//     }
//     render() {
//       return (
//           <div>
//             { /* Change code below this line */ }
//             <p>Hello, <strong>{this.props.name}</strong>!</p>
//             { /* Change code above this line */ }
//           </div>
//       );
//     }
//   };

// class App extends React.Component {
//     constructor(props) {
//       super(props);
  
//     }
//     render() {
//       return (
//           <div>
//               { /* Change code below this line */ }
//               <Welcome name ="Randall"/>
//               { /* Change code above this line */ }
//           </div>
//       );
//     }
//   };
  
//   class Welcome extends React.Component {
//     constructor(props) {
//       super(props);
  
//     }
//     render() {
//       return (
//           <div>
//             { /* Change code below this line */ }
//             <p>Hello, <strong>{this.props.name}</strong>!</p>
//             { /* Change code above this line */ }
//           </div>
//       );
//     }
//   };

// REVIEW USING PROPS IWTH STATELES FUNCTIONAL COMPONENTS
// class CampSite extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return (
//         <div>
//           <Camper/>
//         </div>
//       );
//     }
//   };
//   // Change code below this line
  
//   const Camper = props => <p>{props.name}</p>
  
//   Camper.defaultProps = {
//     name: "CamperBot"
//   };
  
//   Camper.propTypes = {
//     name: PropTypes.string.isRequired
//   };

// RENDER STATE IN UI
// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         name: 'freeCodeCamp'
//       }
//     }
//     render() {
//       return (
//         <div>
//           { /* Change code below this line */ }
//           <h1>{this.state.name}</h1>
//           { /* Change code above this line */ }
//         </div>
//       );
//     }
//   };

// REACT DOM Interface

// Render State in User Interface ANOTHER way
// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         name: 'freeCodeCamp'
//       }
//     }
//     render() {
//       // Change code below this line
//       const name = this.state.name
//       // Change code above this line
//       return (
//         <div>
//           { /* Change code below this line */ }
//           <h1>{name}</h1>
//           { /* Change code above this line */ }
//         </div>
//       );
//     }
//   };

// SET STATE with this.setState
// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         name: 'Initial State'
//       };
//       this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//       // Change code below this line
//     this.setState({ name: "React Rocks!"})
//       // Change code above this line
//     }
//     render() {
//       return (
//         <div>
//           <button onClick={this.handleClick}>Click Me</button>
//           <h1>{this.state.name}</h1>
//         </div>
//       );
//     }
//   };

// BINDING THIS to class method
// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         text: "Hello"
//       };
//       // Change code below this line
//       this.handleClick = this.handleClick.bind(this);
//       // Change code above this line
//     }
//     handleClick() {
//       this.setState({
//         text: "You clicked!"
//       });
//     }
//     render() {
//       return (
//         <div>
//           { /* Change code below this line */ }
//           <button onClick = {this.handleClick}>Click Me</button>
//           { /* Change code above this line */ }
//           <h1>{this.state.text}</h1>
//         </div>
//       );
//     }
//   };