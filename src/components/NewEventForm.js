import './NewEventForm.css'
import React, {useState} from 'react'

const NewEventForm = ({addEvent}) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 10000)
    }
    // NOTE passing the object up to the parent through props
    addEvent(event)
    resetForm()
  }
  const resetForm = () => {
    setTitle('')
    setDate('')
  }
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
          <input 
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </label>
        <label>
          <span>Event Date:</span>
          <input 
          value={date}
            type='date'
            onChange={(e) => setDate(e.target.value)}
            />
        </label>
        <button
        onClick={(e) => handleSubmit(e)}
        >Submit</button>
    </form>
    )
}

export default NewEventForm