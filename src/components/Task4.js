import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedDarkAtom } from "react-syntax-highlighter/dist/esm/styles/prism";

function Task4() {
  const [czas, ustawCzas] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      ustawCzas(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Czyści interval przy odmontowywaniu
  }, []);

  return (
    <div>
      <h2>Zegar</h2>
      <p>{czas}</p>

      {/* Blok kodu źródłowego */}
      <h3 className="mt-4">Kod źródłowy:</h3>
      <SyntaxHighlighter language="javascript" style={solarizedDarkAtom}>
        {`import React, { useState, useEffect } from "react";

function Task4() {
  const [czas, ustawCzas] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      ustawCzas(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Czyści interval przy odmontowywaniu
  }, []);

  return (
    <div>
      <h2>Zegar</h2>
      <p>{czas}</p>
    </div>
  );
}

export default Task4;`}
      </SyntaxHighlighter>
    </div>
  );
}

export default Task4;
