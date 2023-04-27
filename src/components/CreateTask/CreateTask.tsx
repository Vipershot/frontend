import React, { useState } from "react";
import axios from "axios";


interface FormData {
  title: string;
  description: string;
}

export default function CreateTask() {

  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data } = await axios.post("http://localhost:3002/task", formData)
    console.log(data)
    /* onSubmit(formData); */
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input className="input" name="title" onChange={handleInputChange}></input>
          <textarea className="textArea" name="description" onChange={handleInputChange}></textarea>
          <button className="button-basic" type="submit">Create Task</button>
        </form>
      </div>
    </>
  )
}
