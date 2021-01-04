import { faEdit, faInfo, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Col, Row, Spinner } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Gap } from "../../../components";

const { SearchBar } = Search;

const defaultSorted = [
  {
    dataField: "id",
    order: "desc",
  },
];

const mapStateToProps = (state) => {
  return {
    getPeriodeList: state.periode.getPeriodeList,
    errorPeriodeList: state.periode.errorPeriodeList,
  };
};

// afljanfoie
const Table = (props) => {
  console.log("response coy: ", props.getPeriodeList);
  const responseAPI = props.getPeriodeList.data;

  const columns = [
    {
      dataField: "periode",
      text: "Periode",
      sort: true,
    },
    {
      dataField: "tglMulai",
      text: "Tanggal Mulai",
      sort: true,
    },
    {
      dataField: "tglSelesai",
      text: "Tanggal Selesai",
      sort: true,
    },
    // nilaiHrdId
    // nilaiSpvId
    {
      dataField: "link",
      text: "Nilai HRD",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={`/periode/${row._id}/nilaihrd`}>Lihat Nilai</Link>
          </div>
        );
      },
    },
    {
      dataField: "link",
      text: "Nilai SPV",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={`/periode/${row._id}/nilaispv`}>Lihat Nilai</Link>
          </div>
        );
      },
    },
    {
      dataField: "status",
      text: "Status",
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"/karyawan/edit/" + row._id}>
              <Button color="warning" className="mr-2">
                <FontAwesomeIcon icon={faEdit} />
              </Button>
            </Link>
            <Button color="danger" className="mr-2">
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      {responseAPI ? (
        <ToolkitProvider
          keyField="_id"
          data={responseAPI}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <div className="float-left">
                    <SearchBar
                      {...props.searchProps}
                      placeholder="Cari Karyawan"
                    />
                  </div>
                </Col>
              </Row>
              <Gap height={20} />
              <div className="table-responsive">
                <BootstrapTable
                  {...props.baseProps}
                  pagination={paginationFactory()}
                />
              </div>
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          <Spinner type="grow" variant="warning" />
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps, null)(Table);
