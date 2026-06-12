import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";

export default function Username() {
  const username = useContext(SessionContext);

  return (
    <div className="bg-red-700 text-red-400 lg:bg-green-700  lg:text-green-400 text-lg font-bold rounded-xl">
      <div className="animate-pulse">
        {username}
      </div>
    </div>
  );
}
