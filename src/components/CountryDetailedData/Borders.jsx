import { useContext } from "react";
import { Link } from "react-router-dom";

import CountriesContext from "../../context/countries";

function Borders({ borders }) {
  const { border } = useContext(CountriesContext);

  const borderHandler = (element) => {
    border(element);
  };

  return (
    <div className="grid grid-cols-3 gap-5">
      {borders &&
        borders.map((element, index) => (
          <Link
            onClick={() => borderHandler(element)}
            key={index}
            className="inline-block py-1 px-6 rounded-md shadow-md bg-white dark:bg-el-dark-blue"
          >
            {element}
          </Link>
        ))}
      {!borders && <p>No borders</p>}
    </div>
  );
}

export default Borders;
