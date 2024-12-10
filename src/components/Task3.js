import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedDarkAtom } from "react-syntax-highlighter/dist/esm/styles/prism";

function Task3() {
  const [koszyk, ustawKoszyk] = useState([]);
  const produkty = [
    { id: 1, nazwa: "Jabłko", cena: 3 },
    { id: 2, nazwa: "Banany", cena: 2 },
    { id: 3, nazwa: "Pomarańcze", cena: 4 },
  ];

  const dodajDoKoszyka = (produkt) => {
    ustawKoszyk([...koszyk, produkt]);
  };

  const usunZKoszyka = (id) => {
    const nowyKoszyk = koszyk.filter((produkt) => produkt.id !== id);
    ustawKoszyk(nowyKoszyk);
  };

  const suma = koszyk.reduce((acc, produkt) => acc + produkt.cena, 0);

  return (
    <div>
      <h2>Koszyk Zakupowy</h2>
      <h3>Produkty:</h3>
      <ul>
        {produkty.map((produkt) => (
          <li key={produkt.id}>
            {produkt.nazwa} - {produkt.cena} PLN
            <button
              onClick={() => dodajDoKoszyka(produkt)}
              className="btn btn-primary ml-2"
            >
              Dodaj do koszyka
            </button>
          </li>
        ))}
      </ul>
      <h3>Twój Koszyk:</h3>
      <ul>
        {koszyk.map((produkt) => (
          <li key={produkt.id}>
            {produkt.nazwa} - {produkt.cena} PLN
            <button
              onClick={() => usunZKoszyka(produkt.id)}
              className="btn btn-danger btn-sm ml-2"
            >
              Usuń
            </button>
          </li>
        ))}
      </ul>
      <h3>Łączna cena: {suma} PLN</h3>

      {/* Blok kodu źródłowego */}
      <h3 className="mt-4">Kod źródłowy:</h3>
      <SyntaxHighlighter language="javascript" style={solarizedDarkAtom}>
        {`import React, { useState } from "react";

function Task3() {
  const [koszyk, ustawKoszyk] = useState([]);
  const produkty = [
    { id: 1, nazwa: "Jabłko", cena: 3 },
    { id: 2, nazwa: "Banany", cena: 2 },
    { id: 3, nazwa: "Pomarańcze", cena: 4 },
  ];

  const dodajDoKoszyka = (produkt) => {
    ustawKoszyk([...koszyk, produkt]);
  };

  const usunZKoszyka = (id) => {
    const nowyKoszyk = koszyk.filter((produkt) => produkt.id !== id);
    ustawKoszyk(nowyKoszyk);
  };

  const suma = koszyk.reduce((acc, produkt) => acc + produkt.cena, 0);

  return (
    <div>
      <h2>Koszyk Zakupowy</h2>
      <h3>Produkty:</h3>
      <ul>
        {produkty.map((produkt) => (
          <li key={produkt.id}>
            {produkt.nazwa} - {produkt.cena} PLN
            <button
              onClick={() => dodajDoKoszyka(produkt)}
              className="btn btn-primary ml-2"
            >
              Dodaj do koszyka
            </button>
          </li>
        ))}
      </ul>
      <h3>Twój Koszyk:</h3>
      <ul>
        {koszyk.map((produkt) => (
          <li key={produkt.id}>
            {produkt.nazwa} - {produkt.cena} PLN
            <button
              onClick={() => usunZKoszyka(produkt.id)}
              className="btn btn-danger btn-sm ml-2"
            >
              Usuń
            </button>
          </li>
        ))}
      </ul>
      <h3>Łączna cena: {suma} PLN</h3>
    </div>
  );
}

export default Task3;`}
      </SyntaxHighlighter>
    </div>
  );
}

export default Task3;
