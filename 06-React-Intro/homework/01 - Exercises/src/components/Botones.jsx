import React from "react";

class Botones extends React.Component {
    render() {
        return <div>
            <button onClick={() => alert('Modulo 1')}>Módulo 1</button>
            <button onClick={() => alert('Modulo 2')}>Módulo 2</button>
        </div>
    }
}

export { Botones }