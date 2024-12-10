import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedDarkAtom } from "react-syntax-highlighter/dist/esm/styles/prism";

function Task2() {
  const [zadanie, ustawZadanie] = useState(""); // Stan na nowe zadanie
  const [listaZadan, ustawListeZadan] = useState([]); // Stan na listę zadań

  const dodajZadanie = () => {
    if (zadanie !== "") {
      ustawListeZadan([...listaZadan, zadanie]);
      ustawZadanie(""); // Czyści pole po dodaniu zadania
    }
  };

  const usunZadanie = (index) => {
    const nowaLista = listaZadan.filter((_, i) => i !== index);
    ustawListeZadan(nowaLista); // Usuwa zadanie z listy
  };

  return (
    <div>
      <h2>Lista Zadań</h2>
      <input
        type="text"
        value={zadanie}
        onChange={(e) => ustawZadanie(e.target.value)}
        className="form-control"
        placeholder="Dodaj nowe zadanie"
      />
      <button onClick={dodajZadanie} className="btn btn-success my-2">
        Dodaj zadanie
      </button>
      <ul className="list-group">
        {listaZadan.map((zadanie, index) => (
          <li key={index} className="list-group-item">
            {zadanie}
            <button
              onClick={() => usunZadanie(index)}
              className="btn btn-danger btn-sm ml-2"
            >
              Usuń
            </button>
          </li>
        ))}
      </ul>

      {/* Blok kodu źródłowego */}
      <h3 className="mt-4">Kod źródłowy:</h3>
      <SyntaxHighlighter language="javascript" style={solarizedDarkAtom}>
        {`import React, { useState } from "react";

function Task2() {
  const [zadanie, ustawZadanie] = useState(""); // Stan na nowe zadanie
  const [listaZadan, ustawListeZadan] = useState([]); // Stan na listę zadań

  const dodajZadanie = () => {
    if (zadanie !== "") {
      ustawListeZadan([...listaZadan, zadanie]);
      ustawZadanie(""); // Czyści pole po dodaniu zadania
    }
  };

  const usunZadanie = (index) => {
    const nowaLista = listaZadan.filter((_, i) => i !== index);
    ustawListeZadan(nowaLista); // Usuwa zadanie z listy
  };

  return (
    <div>
      <h2>Lista Zadań</h2>
      <input
        type="text"
        value={zadanie}
        onChange={(e) => ustawZadanie(e.target.value)}
        className="form-control"
        placeholder="Dodaj nowe zadanie"
      />
      <button onClick={dodajZadanie} className="btn btn-success my-2">
        Dodaj zadanie
      </button>
      <ul className="list-group">
        {listaZadan.map((zadanie, index) => (
          <li key={index} className="list-group-item">
            {zadanie}
            <button
              onClick={() => usunZadanie(index)}
              className="btn btn-danger btn-sm ml-2"
            >
              Usuń
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task2;`}
      </SyntaxHighlighter>
    </div>
  );
}

export default Task2;
