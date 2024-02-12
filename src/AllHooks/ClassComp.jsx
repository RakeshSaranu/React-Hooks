import React, { Component } from 'react'
// CONTEXT IN CLASS COMPONENT
export default class ClassComp extends Component {
  render() {
    return (
      <div>
        <h1>ClassComponent</h1>

        <userContext.consumer>
            {
                (value)=>{
                    return <h2>{value}</h2> // RETURN THE JSX CODE
                }
            }
        </userContext.consumer>
      </div>
    )
  }
}
