import { useContext } from "react";
import AlertContext from "../../Context/AlertContext/AlertContext";

const Alert = () => {
  const alertCon = useContext(AlertContext);
  const { alert } = alertCon;

  if (alert.length === 0) return;

  return (
    <div className="alert">
      {alert.map((ale) => (
        <div
          className={`alert py-2 px-4 text-white ${
            ale.type === "positive" ? "bg-green-500" : "bg-red-500"
          }`}
          key={ale.id}
        >
          {ale.text}
        </div>
      ))}
    </div>
  );
};

export default Alert;
