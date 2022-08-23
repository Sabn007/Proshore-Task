import { useState } from "react";
import { FiRotateCw } from "react-icons/fi";

function DynamicSearch({ onchange, handleReset }: any) {
  const [value, setValue] = useState("");
  const handleChange = (event: any) => {
    onchange(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div className="row align-items-center">
      <div className="col-md-4 col-sm-9 col-9">
        <div className="custom_form_control">
          <input
            id="create-course-form"
            className="form-control"
            placeholder="Search..."
            type="text"
            onChange={handleChange}
            value={value}
          />
        </div>
      </div>

      <div
        className="col-md-1 col-sm-3 col-3 "
        onClick={() => {
          handleReset();
          setValue("");
        }}
      >
        <button className="btn btn-reset bg-danger text-white" title="Reset Search">
          <FiRotateCw />
        </button>
      </div>
    </div>
  );
}

export default DynamicSearch;
