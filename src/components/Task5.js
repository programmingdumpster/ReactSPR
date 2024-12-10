import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedDarkAtom } from "react-syntax-highlighter/dist/esm/styles/prism";

function Task5() {
  const [licznik, ustawLicznik] = useState(0); // Stan dla licznika

  const dodaj = () => {
    ustawLicznik(licznik + 1); // Zwiększa licznik o 1
  };

  const odejmij = () => {
    ustawLicznik(licznik - 1); // Zmniejsza licznik o 1
  };

  return (
    <div>
      <h2>Licznik</h2>
      <p>Aktualna wartość: {licznik}</p>
      <button onClick={dodaj} className="btn btn-success mr-2">
        Dodaj
      </button>
      <button onClick={odejmij} className="btn btn-danger">
        Odejmij1
      </button>

      {/* Blok kodu źródłowego */}
      <h3 className="mt-4">Kod źródłowy:</h3>
      <SyntaxHighlighter language="javascript" style={solarizedDarkAtom}>
        {`import React, { useState } from "react";
 

function Task5() {
  const [licznik, ustawLicznik] = useState(0); // Stan dla licznika

  const dodaj = () => {
    ustawLicznik(licznik + 1); // Zwiększa licznik o 1
  };

  const odejmij = () => {
    ustawLicznik(licznik - 1); // Zmniejsza licznik o 1
  };

  return (
    <div>
      <h2>Licznik</h2>
      <p>Aktualna wartość: {licznik}</p>
      <button onClick={dodaj} className="btn btn-success mr-2">
        Dodaj
      </button>
      <button onClick={odejmij} className="btn btn-danger">
        Odejmij
      </button>
    </div>
  );
}

export default Task5;`}
      </SyntaxHighlighter>
    </div>
  );
}

export default Task5;
