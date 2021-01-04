import {
    faEdit,
    faInfo,
    faTrash,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React from "react";
  import BootstrapTable from "react-bootstrap-table-next";
  import { Button, Col, Row, Spinner } from "reactstrap";
  import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
  import paginationFactory from "react-bootstrap-table2-paginator";
  import { Link } from "react-router-dom";
  import { Gap } from "../../../components";
  import { connect } from "react-redux";
  import swal from 'sweetalert';
  import { karyawanDeleteAction } from "../../../config/actions/karyawan";
  
  const { SearchBar } = Search;
  
  const handleRemove = (dispatch, id) => {
    swal({
      title: "Are you sure?",
      text: "Jika Karyawan dihapus, maka seluruh data karyawan terkait akan terhapus",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        dispatch(karyawanDeleteAction(id))
        swal("Data Karyawan telah di hapus!", {
          icon: "success",
        });
        window.location.reload(false);
      } else {
        swal("Periksa kembali sebelum menghapus data");
      }
    });
  }
  
  
  
  const defaultSorted = [
    {
      dataField: "id",
      order: "desc",
    },
  ];
  
  const mapStateToProps = (state) => {
    return {
      getKaryawanList: state.karyawan.getKaryawanList,
      errorKaryawanList: state.karyawan.errorKaryawanList,
    };
  };
  
  const Table = (props) => {
    // console.log("response dari Table Component Karyawan coy: ", props.getKaryawanList);
    const responseAPI = props.getKaryawanList.data

    const columns = [
      {
        dataField: "name",
        text: "Nama",
        sort: true,
      },
      {
        dataField: "nik",
        text: "NIK",
        sort: true,
      },
      {
        dataField: "jabatanId.nama_jab",
        text: "Jabatan",
        sort: true,
      },
      {
        dataField: "departemenId.nama_dep",
        text: "Departemen",
        sort: true,
      },
      {
        dataField: "link",
        text: "Action",
        formatter: (rowContent, row) => {
          return (
            <div>
              <Link to={"/karyawan/profile/" + row._id}>
                <Button color="info" className="mr-2">
                  <FontAwesomeIcon icon={faInfo} />
                </Button>
              </Link>
              <Link to={"/karyawan/edit/" + row._id}>
                <Button color="warning" className="mr-2">
                  <FontAwesomeIcon icon={faEdit} />
                </Button>
              </Link>
              <Button color="danger" className="mr-2" onClick={()=> handleRemove(props.dispatch, row._id)}>
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
  