import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Filter = () => {
  return (
    <aside className="bg-white p-4 gap-4 rounded-sm flex flex-col ">
      <div>
        <div className="flex gap-2 mb-2 items-center">
          <span className="font-bold">Tillverkare</span>
          <FontAwesomeIcon className="text-xs" icon={faChevronDown} />
        </div>
        <ul className="ml-4">
          <li className="flex items-center gap-2 ">
            <input type="checkbox" className="form-checkbox rounded-md" />
            <label className="leading-1">Nvidia</label>
          </li>
          <li className="flex items-center gap-2 ">
            <input type="checkbox" className="form-checkbox rounded-md" />
            <label className="leading-1">Ati Radeon</label>
          </li>
        </ul>
      </div>
      <div>
        <div className="flex gap-2 mb-2 items-center">
          <span className="font-bold">Serie</span>
          <FontAwesomeIcon className="text-xs" icon={faChevronDown} />
        </div>
        <ul className="mx-4">
          <li className="flex items-center gap-2 ">
            <input type="checkbox" className="form-checkbox rounded-md" />
            <label className="leading-1">2000 serien</label>
          </li>
          <li className="flex items-center gap-2 ">
            <input type="checkbox" className="form-checkbox rounded-md" />
            <label className="leading-1">3000 serien</label>
          </li>
          <li className="flex items-center gap-2 ">
            <input type="checkbox" className="form-checkbox rounded-md" />
            <label className="leading-1">4000 serien</label>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Filter;
