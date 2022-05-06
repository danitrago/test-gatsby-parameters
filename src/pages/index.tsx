import { Link } from "gatsby";
import * as React from "react";

// markup
const IndexPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/vacantes?Municipio=Rionegro">Vacantes V1</Link>
        </li>
        <li>
          <Link to="/vacantesV2/municipio/Rionegro">Vacantes V2</Link>
        </li>
        <li>
          <Link to="/vacantesV3/municipio/Rionegro">Vacantes V3</Link>
        </li>
      </ul>
    </div>
  );
};

export default IndexPage;
