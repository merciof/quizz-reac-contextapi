import React from "react";

import axios from "axios";

function ConsultarArtigo() {
  const [artigo, mudarArtigo] = React.useState({});

  const [tituloComprimido, mudarTituloComprimido] = React.useState("titulo-7");

  const [buscar, mudarBuscar] = React.useState(false);

  React.useEffect(() => {
    axios({
      url: `http://localhost:3001/api/artigo/${tituloComprimido}`,
      method: "GET",
    }).then((resposta) => {
      mudarArtigo(resposta.data.artigo);
    });
  }, [buscar]);

  return (
    <div>
      <h1>Componente ConsultarArtigo</h1>
      <h1>Titulo: {artigo.titulo}</h1>
      <h1>Descricao: {artigo.descricao}</h1>
      <h1>Slug: {artigo.slug}</h1>
      <h1>Corpo: {artigo.corpo}</h1>

      <input
        type="text"
        value={tituloComprimido}
        onChange={(e) => mudarTituloComprimido(e.target.value)}
      />

      <h1>{tituloComprimido}</h1>

      <h1 onClick={() => mudarBuscar(!buscar)}>Clique para buscar</h1>
    </div>
  );
}

export default ConsultarArtigo;
