import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";


type RegisterFormData = {
  email: string;
  password: string;
};

function Login() {
  const [formData, setFormData] = useState<RegisterFormData>({
    email: '',
    password: '',
  });

  const router = useRouter();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: event.target.value });
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, password: event.target.value });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data } = await axios.post("http://localhost:3002/auth/login", formData)
    if (data.token) {
      localStorage.setItem("token", data.token)
      router.push("/");
      console.log("funciona")
    } else {
      console.log("no funciona")
    }

    /*  */
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" value={formData.email} onChange={handleUsernameChange} />
      </label>
      <label>
        Contraseña:
        <input type="password" value={formData.password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default Login;
