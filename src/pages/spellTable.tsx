import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Toast } from "react-bootstrap";
import DynamicSearch from "../component/search";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { GetSpellList, GetSpells } from "../actions/actions";
import { GrView } from "react-icons/gr";
import { AiFillHeart } from "react-icons/ai";

function ListTable() {
  // const [spellDetails, setSpellDetails] = useState<any>("");
  const [searchField, setSearchField] = useState("");
  const [url, setUrl] = useState<any>("");

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const rowsPerPage = [10, 20, 50, 100];
  const [metaData, setMetaData] = useState({
    current_page: 1,
    perPage: 10,
    total: 1200,
  });
  const dispatch: any = useDispatch();
  const SpellList = useSelector((state: any) => state.SpellList);
  React.useEffect(() => {
    FetchData();
  }, []);
  const FetchData = () => {
    dispatch(GetSpellList());
  };

  const columns: any = [
    {
      name: "S.N",
      selector: (row: any, idx: number) =>
        idx + 1 + metaData.perPage * metaData.current_page - metaData.perPage,
    },

    {
      name: "Spells Name",
      selector: (row: any) => (
        <span className={`${newArr?.includes(row?.name) ? "bg-success" : ""}`}>
          {row?.name}
        </span>
      ),
    },

    {
      name: "Action",
      selector: (row: any) => (
        <div>
          <div
            className="btn btn-info"
            onClick={() => {
              setUrl(row?.url);
              handleShow();
            }}
            title="View Spell"
          >
            <GrView color="white" />
          </div>
          <div
            className="btn btn-success mx-2"
            onClick={() => addToFav(row?.name)}
            title="Add to favourite"
          >
            <AiFillHeart color="red" />
          </div>
        </div>
      ),
    },
  ];

  const Spell = useSelector((state: any) => state.SpellIndividual);

  React.useEffect(() => {
    dispatch(GetSpells(url));
  }, [url]);

  const spellDetails = Spell ? Spell?.data.undefined : "";

  const onchange = (data: any) => {
    setSearchField(data);
  };
  const handleClose = () => {
    setShow(false);
  };

  const filterData =
    SpellList &&
    SpellList?.data.filter((data: any) => {
      return data.name.toLowerCase().includes(searchField.toLowerCase());
    });
  const newArr: any = [];
  const addToFav = (favName: string) => {
    toast.success(` ${favName} added to favourite`);
    newArr.push(favName);
    localStorage.setItem("newArr", JSON.stringify(newArr));
  };

  return (
    <div className="container border border-rounded p-5 my-5">
      <h1>Dungeons and Dragons Spells</h1>
      <div className="d-flex row justify-content-between">
        <div className=" col-6">
          <DynamicSearch
            data={searchField}
            onchange={(e: any) => {
              onchange(e);
            }}
            handleReset={() => setSearchField("")}
          />
        </div>
        <div className="col-6 cursor-pointer">
          <button
            className="ms-5 btn btn-success"
            onClick={() => navigate("/fav-table")}
          >
            {" "}
            View Fav List
          </button>
        </div>
      </div>
      <div className="">
        <DataTable
          columns={columns}
          data={filterData}
          pagination
          onChangePage={(page: any) => {
            setMetaData({ ...metaData, current_page: page });
          }}
          onChangeRowsPerPage={(newPerPage: any) =>
            setMetaData({ ...metaData, perPage: newPerPage })
          }
          paginationPerPage={metaData.perPage}
          paginationRowsPerPageOptions={rowsPerPage}
          progressComponent={
            <div className="p-5 m-5">
              <div
                className="spinner-border text-success d-flex align-items-center justify-content-center "
                role="status"
              ></div>
            </div>
          }
        />
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{spellDetails?.name}</Modal.Title>
        </Modal.Header>
        {spellDetails ? (
          <Modal.Body>
            <div className="border border-rounded p-3">
              <div>{spellDetails?.desc}</div>

              <div className="mt-2">
                <div>
                  {" "}
                  <span className="text-danger">Attack Type</span> :{" "}
                  {spellDetails?.attack_type}
                </div>
                <div>
                  <span className="text-danger">level</span>:{" "}
                  {spellDetails?.level}
                </div>
                <div>
                  <span className="text-danger">Range</span> :{" "}
                  {spellDetails?.range}
                </div>
                
                <div>
                  <span className="text-danger">Duration</span> :{" "}
                  {spellDetails?.duration}
                </div>
                <div>
                  <span className="text-danger">Material </span>:{" "}
                  {spellDetails?.material}
                </div>
              </div>
            </div>
          </Modal.Body>
        ) : (
          <div className="">
            <div>Loading...</div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default ListTable;
