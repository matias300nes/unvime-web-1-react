import Emoji from "./Emoji";

type params = {
    nombre: string;
    apellido?: string;
}

function Hello({ nombre, apellido }: params) {
    return <div>Hola {nombre} {apellido ?? ""} <Emoji /></div>
}

export default Hello;