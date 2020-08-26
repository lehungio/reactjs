import React from "react"

function SampleRenderCondition(props) {
  console.log(props.isLoading)
  // return (
  //   <h1>Function Template</h1>
  // )

  if (props.isLoading === true) {
    return (
      <h1>Loading...</h1>
    )
  } 

  return (
    <div>Condition rendering</div>
  )
}

export default SampleRenderCondition