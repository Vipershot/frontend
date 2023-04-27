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
          <input name="title" onChange={handleInputChange}></input>
          <textarea name="description" onChange={handleInputChange}></textarea>
          <button type="submit">Create Task</button>
        </form>
      </div>
    </>
  )
}
