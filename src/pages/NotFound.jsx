import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops! π«₯</h1>
      <p>ν΄λΉ νμ΄μ§λ₯Ό μ°Ύμ§ λͺ»νμ΅λλ€</p>
      <p>μ£Όμκ° μλͺ»λμκ±°λ, λ μ΄μ μ κ³΅νμ§ μλ νμ΄μ§μλλ€.</p>
      <p>
        μλ¬ λ©μΈμ§ :<i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">λ©μΈνμ΄μ§λ‘</Link>
    </div>
  );
}
