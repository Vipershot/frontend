import { useState } from 'react';
import axios from "axios";

type RegisterFormData = {
  email: string;
  name: string;
  password: string;
};

export default function RegisterForm() {

  const [formData, setFormData] = useState<RegisterFormData>({
    email: '',
    name: '',
    password: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Enviar datos de registro a la API o realizar otra acción aquí
    const req = await axios.post("http://localhost:3002/auth/register", formData)
    console.log(req)
    console.log(formData);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          className='input'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Nombre:
        <input
          className='input'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Contraseña:
        <input
          className='input'
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </label>
      <button className="button-basic" type="submit" >Registrarse</button>
    </form>
  );
}
