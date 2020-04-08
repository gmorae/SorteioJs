import React, { useState } from 'react';
import data from './user'

function App() {

  const [result, setResult] = useState({})

  function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function sort() {
    let numberResult = random(1, data.length + 1)

    var filtrado = data.filter(function (objArray) { return objArray.id_user === numberResult });

    setResult(filtrado[0])

    document.getElementById('button').classList.add('d-none')
    document.getElementById('conteudo').classList.add('d-block')
  }

  const date = newDate => new Intl.DateTimeFormat('pt-br').format(newDate)

  return (
    <div className="container mt-5">
      <h1>Sorteio - {date(new Date())}</h1>
      <div className="row">
        <table className="table table-striped col-md-6 col-sm-12">
          <thead>
            <tr>
              <th scope="col">Número do sorteio</th>
              <th scope="col">Nome</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(res => (
                <tr key={res.id_user}>
                  <th scope="row">{res.id_user}</th>
                  <td>{res.name_user}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

        <div className="col-md-6">
          <button className="my-5 btn btn-secondary" id="button" onClick={sort}>Sortear</button>
          <div className="mt-5 d-none" id="conteudo">
            <h2>Número sorteado: {result.id_user} </h2>
            <h2>Pessoa Sorteada: {result.name_user}</h2>
          </div>
        </div>

      </div>
    </div>
  );

}

export default App;
