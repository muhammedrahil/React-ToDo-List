import React, { Component } from 'react'
import axios from 'axios'

export class Ajax extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }
   componentDidMount() {
    axios.get('https://dummyjson.com/products').then((response) => {
      this.setState({products:response.data})
      console.log(response.data);
    })
  }

  render() {
    
    return (
 
      <div>
        {console.log('response')}
            {
              this.state.products.map((item,key)=>{
                return( <h1>{item.id}</h1>)
              })
            }
      </div>
    )
  }
}

export default Ajax
