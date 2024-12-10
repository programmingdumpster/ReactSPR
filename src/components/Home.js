import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedDarkAtom } from "react-syntax-highlighter/dist/esm/styles/prism";

function Home() {
  return (
    <div>
      <h3>Najważniejsze pojęcia w React:</h3>
      <ul>
        <li>
          <strong>useState</strong> - Hook do zarządzania stanem w komponencie.
          <p>
            Umożliwia przechowywanie wartości, które mogą się zmieniać w czasie.
            Przykład:
          </p>
          <SyntaxHighlighter language="javascript" style={solarizedDarkAtom}>
            {`import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Inicjalizuje stan licznika na 0

  return (
    <div>
      <p>Licznik: {count}</p>
      <button onClick={() => setCount(count + 1)}>Dodaj</button>
      <button onClick={() => setCount(count - 1)}>Odejmij</button>
    </div>
  );
}`}
          </SyntaxHighlighter>
        </li>

        <li>
          <strong>useEffect</strong> - Hook do wykonywania efektów ubocznych
          (np. aktualizacja czasu, zapisywanie danych do localStorage itp.).
          <p>
            Umożliwia wykonywanie kodu po renderowaniu komponentu. Przykład:
          </p>
          <SyntaxHighlighter language="javascript" style={solarizedDarkAtom}>
            {`import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Czyści interval przy odmontowywaniu
  }, []); // Pusty array oznacza, że efekt uruchomi się tylko raz

  return (
    <div>
      <h2>Aktualny czas: {time}</h2>
    </div>
  );
}`}
          </SyntaxHighlighter>
        </li>

        <li>
          <strong>Komponenty</strong> - Podstawowe jednostki budujące aplikacje
          w React.
          <p>
            Komponenty mogą być klasowe lub funkcyjne. Przykład komponentu
            funkcyjnego:
          </p>
          <SyntaxHighlighter language="javascript" style={solarizedDarkAtom}>
            {`import React from "react";

function Greeting({ name }) {
  return <h1>Cześć, {name}!</h1>;
}`}
          </SyntaxHighlighter>
        </li>

        <li>
          <strong>Props</strong> - Właściwości przekazywane do komponentów.
          <p>
            Umożliwiają przekazywanie danych z jednego komponentu do drugiego.
            Przykład użycia props:
          </p>
          <SyntaxHighlighter language="javascript" style={solarizedDarkAtom}>
            {`import React from "react";
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting name="Janek" />
      <Greeting name="Ania" />
    </div>
  );
}`}
          </SyntaxHighlighter>
        </li>

        {/* Możesz dodać więcej pojęć według potrzeb */}
      </ul>
    </div>
  );
}

export default Home;
