import React, {Component} from 'react'

class Greeting extends Component {
  render() {
    const date = new Date()
    // const date = new Date(2018, 6, 31, 10) // set specific date time 
    const hours = date.getHours()
    let timeOfDay

    const styles = {
      color: "#FF8C00",
      // fontSize: "200px"
    }
    
    if (hours < 12) {
      timeOfDay = "morning"
      styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
      styles.color = "#2E0927"
    } else {
      timeOfDay = "night"
      styles.color = "#D90000"
    }

    return (
      <h1 style={styles}>Good {timeOfDay} to you, sir or madam!</h1>
    )
  }
}

export default Greeting


/* 
<div>
  <Header />
  <MainContent />
  <Footer />
  <Greeting />
</div> 
*/