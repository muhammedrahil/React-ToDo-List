import React, { Component } from 'react'
import './App.css';

export class ToDo extends Component {

  constructor(props) {
    super(props)
    this.state = {

      todo_list: [],
      todo_text: '',
      fill: ''
    }
  }

  pick_a_text = (e) => {
    this.setState({ todo_text: e.target.value });
  }
  add_list_text = (e) => {
    let current_text = this.state.todo_text;
    if (current_text !== '') {
      let current_list = this.state.todo_list;
      current_list.push({ name: current_text, status: false })
      this.setState({ todo_list: current_list })
    }
  }
  delete = (key) => {
    if (!window.confirm('are you sure , delete your item')) {
      return
    }
    let current_list = this.state.todo_list;
    current_list.splice(key, 1);
    this.setState({ todo_list: current_list })
  }
  stauts_true=(key,e)=>{
    let current_list = this.state.todo_list;
    current_list[key].status= e.target.checked;
    this.setState({ todo_list: current_list });
  }

  render() {
    return (
      <div className=" container ">
        <div className="row">
          <div className='col-lg-6'>
            <div className="subHeading mt-5">
              <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
            </div>
            <div className="input row">
              <div className="col-lg-10 border p-1">
                <input type="text" className='form-control' placeholder="🖊️  Add item..." onChange={this.pick_a_text} />
              </div>
              <div className="col-lg-2">
                <button className='btn btn-light shadow' onClick={this.add_list_text}><i className="fas fa-plus" ></i></button>
              </div>
            </div>

            {
              this.state.todo_list.map((items, key) => {
                return (
                  <div key={key} className="input row mt-2">
                    <div className='col-lg-10 border p-1'>
                      <div className="row">
                        <div className="col-lg-4"><input type="checkbox" className='form-checkbox m-3' name="" onClick={(e) => { this.stauts_true(key,e) }}id="" /></div>
                        <div className="col-lg-8 "><p className=' text-wrap fw-bold'>{items.name}</p></div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <button className='btn btn-light shadow' onClick={() => { this.delete(key) }}><i className="fas fa-times" ></i></button>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='col-lg-6'>
            <div className="subHeading mt-5">
              <h2 className='text-success text-center fw-bold'> Save List</h2>
            </div>
            {
              this.state.todo_list.map((items, key) => {
                if (items.status) {
                  return (
                    <div key={key} className="input row mt-2  border p-1">
                      <div className="col-lg-10">
                        <div><p className='font-weight-bold fw-bold h3'>{items.name}</p></div>
                      </div>
                      <div className="col-lg-2">
                        <button className='btn btn-light shadow' onClick={() => { this.delete(key) }}><i className="fas fa-times" ></i></button>
                      </div>
                    </div>
                  )
                }
                return null
              })
            }
          </div>
        </div>
      </div >
    )
  }
}

export default ToDo
