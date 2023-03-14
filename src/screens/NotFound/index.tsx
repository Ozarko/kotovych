import React from "react";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../../components/ActionButton";
import "./not-found.scss";

const NotFound = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="not-found">
      <h1 className="not-found-title">Oops, something went wrong...</h1>
      <p className="not-found-description">
        We apologize for the 404 error page. It looks like you got lost in
        cyberspace 🚀 Maybe we messed up some functionality, but we are already
        working on it 💪
      </p>
      <p className="not-found-description">
        If you're lucky, Harry Potter once found his way to Hogwarts and you can
        find your way again 🧙‍♀️ If not, we'd recommend refreshing your browser or
        you can try Expecto Patronum to find a way to home page.
      </p>
      <div>
        <ActionButton onClick={handleButtonClick} label={"Expecto Patronum"} />
      </div>
    </div>
  );
};

export default NotFound;
