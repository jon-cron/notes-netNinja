import './NewEventForm.css'

import React from 'react'

const NewEventForm = () => {
  return (
    <form className="new-event-form">
      {/* NOTE these are both acceptable ways of labeling a form input */}
      {/* <label htmlFor="title">Title</label>
      <input 
        placeholder="title..."
        id="title"
        type='text'
        /> */}
        {/* NOTE by wrapping the input with the label this eliminates the need for the htmlFor="" */}
        <label>
          <span>Event Title:</span>
          <input/>
        </label>
    </form>
    )
}

export default NewEventForm