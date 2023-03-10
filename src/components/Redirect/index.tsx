import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Redirect = () => {
  const nav = useNavigate();
  useEffect(() => {
    nav("/");
  });
  return <div>Redirecting</div>;
};
