import { useState, useEffect } from "react"; //useState allows functional components to have a dedicated state of their own    UseEffect allows functional components to manipulate DOM elements before each render

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({}); //empty object
  const [isSubmitting, setIsSubmitting] = useState(false); //false cause its not submitted initially

  const handleChange = (e) => {
    const { name, value } = e.target; //ES6 destruction assignment, same as const name =e.target.name;
    //e.target is typically used when delegating an event handler to an element that has dynamic children or descendants;
    setValues({
      //this method adds or updates the value of the current element
      ...values, // "..." spread operator ES6, expands iterable (values) into its elements.
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents from refreshing the page when submitted
    // preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
    //Clicking on a "Submit" button, prevent it from submitting a form

    setErrors(validate(values)); //so after it is stopped from submitting, this is executed
    setIsSubmitting(true); //submits
  };

  useEffect(() => {
    //submit only if zero errors
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]); //only triggers when errors are updated

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
