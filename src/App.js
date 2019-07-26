import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './components/Header'
import Dialog from './components/Dialog'
import TodoList from './components/TodoList'

export default class App extends React.Component{
  
  // componentDidMount(){
  //   //get data from local storage
  //   this.setState(JSON.parse(localStorage.getItem('state')))
  //   console.log(JSON.parse(localStorage.getItem('state')))
  // }
  // SaveState=()=>{
  //   //save state to local storage
  //   console.log("State Saved to Local Storage")
  //   localStorage.setItem('state', JSON.stringify(this.state));
  // }
  render(){
    return (
      <div>
        <Header/>
        <br/>
        <Container maxWidth="lg">
          <Dialog/>
          <br/>
          <TodoList/>
        </Container>
      </div>
    );
  }
}
