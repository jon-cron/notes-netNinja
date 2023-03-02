import "./NewEventForm.css";
import React, { useRef } from "react";

const NewEventForm = ({ addEvent }) => {
  const title = useRef();
  const date = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title.current.value,
      date: date.current.value,
      id: Math.floor(Math.random() * 10000),
    };
    console.log(event);
    addEvent(event);
    resetForm();
  };
  const resetForm = () => {
    title.current.value = "";
    date.current.value = "";
  };

  // const [title, setTitle] = useState('')
  // const [date, setDate] = useState('')
  // NOTE old submit uses useState()
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const event = {
  //     title: title,
  //     date: date,
  //     id: Math.floor(Math.random() * 10000)
  //   }
  //   // NOTE passing the object up to the parent through props
  //   addEvent(event)
  //   resetForm()
  // }
  // const resetForm = () => {
  //   setTitle('')
  //   setDate('')
  // }
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
          type="text"
          ref={title}
          // onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          ref={date}
          type="date"
          // onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </form>
  );
};

export default NewEventForm;
