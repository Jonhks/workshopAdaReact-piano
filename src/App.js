import {useState} from 'react';
import './App.css';

function App() {

  const [sonando, setSonando] = useState('')

  const notas = [
    {
      nombre: 'Do',
      link: require('./notes/do.wav'),
      sostenido: true
    },
    {
      nombre: 'Re',
      link: require('./notes/re.wav'),
      sostenido: true
    },
    {
      nombre: 'Mi',
      link: require('./notes/mi.wav')
    },
    {
      nombre: 'Fa',
      link: require('./notes/fa.wav'),
      sostenido: true
    },
    {
      nombre: 'Sol',
      link: require('./notes/sol.wav'),
      sostenido: true
    },
    {
      nombre: 'La',
      link: require('./notes/la.wav'),
      sostenido: true
    },
    {
      nombre: 'Si',
      link: require('./notes/si.wav')
    },
  ]

  const handleClick = (nota) => {
    setSonando(nota.nombre)
    const sonido = new Audio(nota.link.default)
    sonido.play()
  }

  setTimeout(()=>{
    setSonando('')
  },200)

  return (
    <div>
      <div className="titulo">
        <h1>Piano con React</h1>
        <h2>Hecho por Male 😀</h2>
        { sonando && <h3>Esta sonando la nota {sonando}</h3>}
      </div>
      <div className="container">
        {notas.map(nota => (
          <div
            key={Math.random() * 1000}
            className={`nota ${sonando === nota.nombre && 'sonando'}`}
            onClick={() => handleClick(nota)}
          >
            {/* {nota.sostenido ? <div className="negra"></div>: null} */}
            {nota.sostenido && <div className="negra"></div>}
          </div>
        ))}

        {/* <div className="nota" onClick={handleClick}>
          <div className="negra"></div>
        </div>
        <div className="nota">
          <div className="negra"></div>
        </div>
        <div className="nota"></div>
        <div className="nota">
          <div className="negra"></div>
        </div>
        <div className="nota">
          <div className="negra"></div>
        </div>
        <div className="nota">
          <div className="negra"></div>
        </div>
        <div className="nota"></div> */}
      </div>
    </div>
  );
}

export default App;
