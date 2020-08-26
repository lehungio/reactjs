import React from "react"

function ContactCard(props) {
  console.log(props)
  return (
    <div className="contact-card">
        <img src={props.contact.imgUrl} alt="" />
        <h3>{props.contact.name}</h3>
        <p>Phone: {props.contact.phone}</p>
        <p>Email: {props.contact.email}</p>
    </div>
  )
}

// {/* contact card */}
// <div className="contact-card">
//   <ContactCard 
//   contact={{
//     imgUrl: "http://placekitten.com/300/200", 
//     name: "Mr. Whiskerson", 
//     phone: "(212) 555-1234", 
//     email: "mr.whiskaz@catnap.meow"
//   }}
// />
// </div>

// <ContactCard 
// contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com"}}
// />

// <ContactCard 
// contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
// />

// <ContactCard 
// contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
// /> 
// */}

export default ContactCard