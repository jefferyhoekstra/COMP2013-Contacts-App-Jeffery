import { Link } from "react-router-dom";
export default function FormComponent({
  formData,
  handleOnChange,
  handleOnSubmit,
  responseMessage,
  currentPage,
}) {
  return (
    <div>
      <h1>{currentPage === "login" ? "Login Page" : "Register Page"}</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleOnChange}
          value={formData.username}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleOnChange}
          value={formData.password}
        />
        <button>{currentPage === "login" ? "Login" : "Register"}</button>
      </form>
      <p>{responseMessage}</p>
      {currentPage === "login" ? (
        <Link to={"/register"}>Register now</Link>
      ) : (
        <Link to={"/"}>Login now</Link>
      )}
    </div>
  );
}
