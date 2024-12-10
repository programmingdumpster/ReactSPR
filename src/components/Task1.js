import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedDarkAtom } from "react-syntax-highlighter/dist/esm/styles/prism";

function Task1() {
  const [swiatloWlaczone, ustawSwiatlo] = useState(false); // false oznacza tryb ciemny

  const przełączSwiatlo = () => {
    // Zmiana stanu światła
    if (swiatloWlaczone) {
      ustawSwiatlo(false); // Wyłącz światło (ciemny tryb)
    } else {
      ustawSwiatlo(true); // Włącz światło (jasny tryb)
    }
  };

  return (
    <div
      style={{
        backgroundColor: swiatloWlaczone ? "white" : "#121212", // Białe tło w trybie jasnym
        color: swiatloWlaczone ? "black" : "white", // Czarny tekst w trybie jasnym
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>Przełącznik Światła</h2>
      <button onClick={przełączSwiatlo} className="btn btn-primary">
        {swiatloWlaczone ? "Wyłącz światło" : "Włącz światło"}
      </button>

      {/* Blok kodu źródłowego */}
      <h3 className="mt-4">Kod źródłowy:</h3>
      <SyntaxHighlighter language="javascript" style={solarizedDarkAtom}>
        {`import React, { useState } from "react";
 

function Task1() {
  const [swiatloWlaczone, ustawSwiatlo] = useState(false); // false oznacza tryb ciemny

  const przełączSwiatlo = () => {
    // Zmiana stanu światła
    if (swiatloWlaczone) {
      ustawSwiatlo(false); // Wyłącz światło (ciemny tryb)
    } else {
      ustawSwiatlo(true); // Włącz światło (jasny tryb)
    }
  };

  return (
    <div
      style={{
        backgroundColor: swiatloWlaczone ? "white" : "#121212", // Białe tło w trybie jasnym
        color: swiatloWlaczone ? "black" : "white", // Czarny tekst w trybie jasnym
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>Przełącznik Światła</h2>
      <button onClick={przełączSwiatlo} className="btn btn-primary">
        {swiatloWlaczone ? "Wyłącz światło" : "Włącz światło"}
      </button>
    </div>
  );
}

export default Task1;`}
      </SyntaxHighlighter>
    </div>
  );
}

export default Task1;
