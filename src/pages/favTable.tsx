import React from "react";
import { useNavigate } from "react-router-dom";

function FavTable() {
  const favList: any = localStorage.getItem("favList");
  const filterDuplicate = JSON.parse(favList)?.filter(
    (item: any, index: number) => favList.indexOf(item) === index
  );
  console.log(filterDuplicate)
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="my-2">
        <div className="btn btn-success" onClick={() => navigate(-1)}>
          Go Back
        </div>
      </div>{" "}
      {favList ? (
        <div className="mt-5">
          <h1 className="text-success">Your Favourite Spells List</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">S.N.</th>
                <th scope="col"> Name</th>
              </tr>
            </thead>
            <tbody>
              {JSON.parse(favList)?.map((item: any, idx: number) => (
                <tr key={item.id}>
                  <td>{idx + 1}</td>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="">
          <div>You do not have any favourite spells </div>
        </div>
      )}
    </div>
  );
}

export default FavTable;
