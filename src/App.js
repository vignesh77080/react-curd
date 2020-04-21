import React from 'react';
import Form from './AppsComponents/Form';
import ListView from './AppsComponents/ListView';

import styles from './App.module.css';

class App extends React.Component{


  constructor(props){
    super(props);
    this.initialstate = {
      name : '',
      job : '',
      arr : [],
      upState : false,
      index : 0
    }
    this.state = this.initialstate
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
    this.handleClickUpdate = this.handleClickUpdate.bind(this);
    this.handleUpdateChange = this.handleUpdateChange.bind(this);
  }

  handleChange(e){
    let value = e.target

    this.setState({
      [value.name] : value.value
    })

  }

  handleSubmit(e){
    e.preventDefault();

    let name = this.state.name;
    let job = this.state.job;

    if(name.length === 0 || job.length === 0){
      return ;
    }

    let newItems = {
      name : name,
      job : job,
      id : Date.now()
    }

    this.setState({
      arr : [...this.state.arr, newItems],
      name : '',
      job : ''
    })

  }

  handleDelete(item){

    let newArr = this.state.arr.slice();

    let findItem = newArr.find((items) => {
        return items.id === item.id
    })
    
    let index = newArr.indexOf(findItem);

    newArr.splice(index, 1)
    this.setState({
      arr : newArr
    })
    
  }

  handleOnUpdate(e){
    e.preventDefault();
    this.setState({
      upState : false,
      name : '',
      job : ''
    })
  }

  handleClickUpdate(item){
    this.setState({
      upState : true
    })
    console.log('hello abae', item)

    let newArr = this.state.arr.slice();

    let findItem = newArr.find((items) => {
      return items.id === item.id
    })
    
    let index = newArr.indexOf(findItem);
    
    this.setState({
      index : index
    })    

  }

  handleUpdateChange(e, index){
    const {name , value} = e.target

    let itemChange = this.state.arr.slice();
    itemChange[index][name] = value

    this.setState({
      arr : itemChange,
    })

  }

  render(){

    let {arr} = this.state;

    return(
      <div className={styles['app']}>
        <h1> React App </h1>
        <p> This app is an example of CURD operations </p>
        <Form 
          onupdate={this.handleOnUpdate}
          onsubmit={this.handleSubmit} 
          onchange={this.handleChange} 
          onupdatechange = {this.handleUpdateChange}
          state ={this.state} />
        <ListView 
          listitems={arr} 
          ondelete={this.handleDelete}
          onclickupdate={this.handleClickUpdate} />
      </div>
    )
  }


}


export default App;
