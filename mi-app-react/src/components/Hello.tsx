import Emoji from "./Emoji";
import Username from "./Username";

function Hello() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      Hola <Username /> <Emoji />
    </div>
  );
}

export default Hello;
