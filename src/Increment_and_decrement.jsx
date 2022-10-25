import React, { Component } from 'react'

export class IncrementAndDecrement extends Component {
    constructor (props){
      super(props)
      this.state={
        counter:0,
        enable:true,
        text:'',
        list:['apple','banana','orenge','graps'],
        obj:[
          {name:'rahil',age:22},
          {name:'basith',age:22},
          {name:'muhthar',age:22},
          {name:'pachu',age:22},

        ]
      }
    }

    increment=()=>{
      this.setState((prev,props)=>(
        {counter:prev.counter+1}
      ))
    }
    decrement=()=>{
      this.setState((prev,props)=>(
        {counter:prev.counter-1}
      ))
    }

    status=()=>{
     this.setState((prev,props)=>(
      { enable: !prev.enable}
     ))
    }
    ChangeVale=(e)=>{
      this.setState({text:e.target.value})
    }
  render() {
    return (
      <div>
        <button onClick={this.increment }>+</button>
        <button onClick={ this.decrement }>-</button>
        <p>Your click { this.state.counter } times</p>
          <input type="text" onChange={ this.ChangeVale }/>
          <p>{this.state.text}</p>
        <label>Enabled</label>
        <input type="checkbox"  onClick={ this.status }  />
        <p>now { this.state.enable ? 'enabled' : 'disabled' }</p>
        <h4>array list map</h4>
          <ul>
          {
          this.state.list.map((items,key)=><li key={key} >{items}</li>)
          }
          </ul>
          <h4>row object</h4>
          <table>
            <tr>
            <td>Name</td>
            <td>Age</td>
            </tr>
            
              {
                this.state.obj.map((items,key)=>{
                  return(
                    <tr>
                      <td>{items.name}</td>
                      <td>{items.age}</td>
                    </tr>
                  )
                })
              }
          </table>
      </div>
    )
  }
}

export default IncrementAndDecrement
