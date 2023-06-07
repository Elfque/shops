import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/settings/profile");
    return;
  }, []);

  return <div></div>;
};

export default Settings;
