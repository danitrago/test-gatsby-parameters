import React from "react";
import { StringParam, useQueryParam } from "use-query-params";
import { Link } from "gatsby";

const data = [
  {
    id: 0,
    name: "Auxiliar de enfermería",
    cat: "Salud",
    mun: "Rionegro"
  },
  {
    id: 1,
    name: "Auxiliar contable",
    cat: "Administración",
    mun: "La Ceja"
  },
  {
    id: 2,
    name: "Desarrollador backend",
    cat: "Tecnología",
    mun: "Marinilla"
  },
  {
    id: 3,
    name: "Maquetador HTML",
    cat: "Tecnología",
    mun: "Rionegro"
  }
];

const unique = (value: any, index: any, self: any) => {
  return self.indexOf(value) === index;
};

const MunicipioTemplate = (props: any) => {
  console.log(props);
  const categorias = data.map((vacante) => vacante.cat).filter(unique);
  const municipios = data.map((vacante) => vacante.mun).filter(unique);

  // something like: ?cat=cat2&mun=mun3 in the URL
  const [cat, setCat] = useQueryParam<any>("Categoría", StringParam);
  const [mun, setMun] = useQueryParam<any>("Municipio", StringParam);

  const dataFiltered = data.filter(
    (vacante) =>
      vacante.cat.includes(cat || "") && vacante.mun.includes(props.pageContext.municipio)
  );

  return (
    <div>
      <h3>Vacantes, Servicios de Empleo</h3>
      <hr />
      <div style={{ display: "flex" }}>
        <div>
          <h3>Filtros</h3>
          <h4>Categorías</h4>
          {categorias.map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                value={item}
                onChange={() => setCat(item)}
                checked={item === cat ? true : false}
              />
              {item} <br />
            </label>
          ))}
          <h4>Municipios</h4>
          {municipios.map((item) => (
            <p>
              <Link to={`/vacantesV3/municipio/${item}`}>{item}</Link>
            </p>
          ))}
        </div>
        <div>
          <h1>
            Vacantes Disponibles en la Región: {props.pageContext.region} {props.pageContext.municipio}{" "}
            {cat ? `en la Categoría de ${cat}` : null}
          </h1>
          <ul>
            {dataFiltered.length > 0
              ? dataFiltered.map((vacante) => (
                  <li key={vacante.id} style={{ marginBottom: 20 }}>
                    <b>{vacante.name}</b> <br />
                    <small>{vacante.cat + " --- En: " + vacante.mun}</small>
                  </li>
                ))
              : "No hay vacantes disponibles para tu búsqueda."}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MunicipioTemplate;
