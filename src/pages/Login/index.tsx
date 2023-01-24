import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginLandingImg from "src/assets/images/hotel-g-syariah-beranda.jpg";

interface ILoginForm {
  username: string;
  password: string;
}

const LoginPage = () => {
  const [credentials, setCredentials] = useState<ILoginForm>({
    username: "",
    password: "",
  });

  const handleChangeCredentials = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCredentials((prev: ILoginForm) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(credentials);
  };

  return (
    <div className="py-12 pl-6 flex min-h-screen gap-x-6">
      <div className="basis-[448px] flex-grow flex flex-col items-center justify-center px-16">
        <div className="max-w-[600px] text-center">
          <h1 className="text-4xl text-green-700 font-semibold mb-2">
            G Syariah Hotel
          </h1>
          <div className="text-2xl mb-16">Hotel Management System</div>
          <form className="flex flex-col w-full" onSubmit={handleSubmitLogin}>
            <input
              value={credentials.username}
              onChange={handleChangeCredentials}
              name="username"
              placeholder="Username"
              required
              className="mb-6 w-full outline-none border-none p-3 rounded-lg bg-blue-50 input-shadow"
            />
            <input
              value={credentials.password}
              onChange={handleChangeCredentials}
              name="password"
              placeholder="Password"
              required
              type="password"
              className="mb-4 w-full outline-none border-none p-3 rounded-lg bg-blue-50 input-shadow"
            />
          </form>
          <Link
            to="/lupa-password"
            className="inline-block text-xs text-gray-400 mb-6"
          >
            Lupa Password
          </Link>
          <button className="uppercase text-white px-6 py-3 bg-green-700 rounded-[10px] w-full">
            login
          </button>
        </div>
      </div>
      <div
        className="basis-1/2 flex-shrink rounded-l-[32px] max-h-full overflow-hidden relative flex-grow bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${LoginLandingImg})` }}
      >
        <div className="absolute bg-green-700 inset-0 opacity-80"></div>
      </div>
    </div>
  );
};

export default LoginPage;
