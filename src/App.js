import React,{Component} from 'react';

import './App.css';


const customcomp

class App extends Component {
  
  
onClick=()=>{
  console.log(this.firstName.value);
}

onKeyUp=(target,e)=>{
  if(e.keyCode===13){
    switch(target){
      case 'firstName':
        this.lastName.focus();
        break;
      case 'lastName' :
    this.age.focus();
    case 'age':
    this.submit.focus();
      default:
        this.firstName.focus();
  }
  }

}
  render() { 

     
    return ( 
      <div className="App">
        <div>
          <span>First name:</span>
          <input ref={(input)=>{this.firstName=input}} 
          onKeyUp={this.onKeyUp.bind(this,'firstName')}
           type="text"></input>
        </div>
        <div>
          <span>Last name:</span>
          <input 
             ref={(input)=>{this.lastName=input}} 
             onKeyUp={this.onKeyUp.bind(this,'lastName')}
             type="text"></input>
        </div>
        <div>
          <span>Age:</span>
          <input 
            ref={(input)=>{this.age=input}} 
            onKeyUp={this.onKeyUp.bind(this,'age')}
          type="text"></input>
        </div>

        <div>
         
          <input type="submit" value="submit"
           ref={(input)=>{this.submit=input}} 
           onKeyUp={this.onKeyUp.bind(this,'submit')}
           onClick={this.onClick}></input>
        </div>


      </div>
     );
  }
}
 
export default App;
