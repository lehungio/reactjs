import React from 'react'

function TimeOfDay() {
  const firstName = "Hung"
  const lastName = "Le"

  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    // backgroundColor: "#FF2D00",
    fontSize: 50
  }

  if (hours < 12) {
    timeOfDay = "morning"
    styles.colors = "green"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.colors = "blue"
  } else {
    timeOfDay = "night"
    styles.colors = "read"
  }

  return (
    // <h1>Hello {`${firstName} ${lastName}`}!</h1>
    <div>
      "Good"<h1 style={styles}> {timeOfDay}!</h1>
    </div>
  )
}

export default TimeOfDay