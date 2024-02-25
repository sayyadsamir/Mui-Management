import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import AddForm from "./AddForm";
import Update from "../Products/Update";
import { useAppStore } from "../App_Store";

import { db } from "./Firebase";

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function UsersList() {
  const [ page, setPage ] = useState(0);
  const [ rowsPerPage, setRowsPerPage ] = useState(5);
  const [ open, setOpen ] = useState(false);
  const [ editopen, setEditOpen ] = useState(false);

  const [ selectedRow, setSelectedRow ] = useState(null);


  const setRows = useAppStore((state) => state.setRows);
  const rows = useAppStore((state) => state.rows);
  const empCollectionRef = collection(db, "MuiCrud");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteDocApi(id);
      }
    });
  };

  const deleteDocApi = async (id) => {
    const userDoc = doc(db, "MuiCrud", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  };

  const editData = (id, name, price, category) => {
    const data = {
      id: id,
      name: name,
      price: price,
      category: category,
    };
    setSelectedRow(data);
    setEditOpen(true);
  };


  const filterData = (v) => {
    if (v) {
      setRows([ v, ...rows ]);
    } else {
      setRows([]);
      getUsers();
    }
  };

  return (
    <>
      <div>
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={ open }
          onClose={ () => setOpen(false) }
          sx={ { display: 'flex', justifyContent: 'center', alignItems: 'center' } }
        >
          <Sheet
            variant="outlined"
            sx={ {
              maxWidth: 600,
              m: 2,
              borderRadius: 'md',
              p: 3,
              boxShadow: 'lg',
            } }
          >
            <ModalClose variant="plain" sx={ { m: 1 } } />
            <Typography id="modal-desc" textColor="text.tertiary">
              <AddForm closeEvent={ () => setOpen(false) } />
            </Typography>
          </Sheet>
        </Modal>

        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={ editopen }
          onClose={ () => setEditOpen(false) }
          sx={ { display: 'flex', justifyContent: 'center', alignItems: 'center' } }
        >
          <Sheet
            variant="outlined"
            sx={ {
              maxWidth: 600,
              m: 2,
              borderRadius: 'md',
              p: 3,
              boxShadow: 'lg',
            } }
          >
            <ModalClose variant="plain" sx={ { m: 1 } } />
            <Typography id="modal-desc" textColor="text.tertiary">

              {/* <Update closeEvent={ () => setEditOpen(false) } fid={ formid } /> */}
              <Update closeEvent={() => setEditOpen(false)} fid={selectedRow} />


            </Typography>
          </Sheet>
        </Modal>
      </div>

      { rows.length > 0 && (
        <Paper sx={ { width: "98%", overflow: "hidden", padding: "12px" } }>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={ { padding: "20px" } }
          >
            Products List
          </Typography>
          <Divider />
          <Box height={ 10 } />
          <Stack direction="row" spacing={ 2 } className="my-2 mb-2">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={ rows }
              sx={ { width: 300 } }
              onChange={ (e, v) => filterData(v) }
              getOptionLabel={ (rows) => rows.name || "" }
              renderInput={ (params) => (
                <TextField { ...params } size="small" label="Search Products" />
              ) }
            />
            <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }></Typography>
            <Button
              variant="contained"
              endIcon={ <AddCircleIcon /> }
              onClick={ () => setOpen(true) }
            >
              Add
            </Button>
          </Stack>

          <Box height={ 10 } />
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={ { minWidth: "100px" } }>
                    Name
                  </TableCell>
                  <TableCell align="left" style={ { minWidth: "100px" } }>
                    Price
                  </TableCell>
                  <TableCell align="left" style={ { minWidth: "100px" } }>
                    Category
                  </TableCell>
                  <TableCell align="left" style={ { minWidth: "100px" } }>
                    Date
                  </TableCell>
                  <TableCell align="left" style={ { minWidth: "100px" } }>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={ -1 }
                      key={ row.code }
                    >
                      <TableCell align="left">{ row.name }</TableCell>
                      <TableCell align="left">{ row.price }</TableCell>
                      <TableCell align="left">{ row.category }</TableCell>
                      <TableCell align="left">{ row.date }</TableCell>
                      <TableCell align="left">
                        <Stack spacing={ 2 } direction="row">
                      
                          <EditIcon
                            style={ {
                              fontSize: "20px",
                              color: "blue",
                              cursor: "pointer",
                            } }
                            className="cursor-pointer"
                            onClick={ () => {
                              editData(row.id, row.name, row.price, row.category);
                            } }
                          />

                          <DeleteIcon
                            style={ {
                              fontSize: "20px",
                              color: "darkred",
                              cursor: "pointer",
                            } }
                            onClick={ () => {
                              deleteUser(row.id);
                            } }
                          />
                        </Stack>
                      </TableCell>
                    </TableRow>
                  )) }
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={ [ 5, 10, 25 ] }
            component="div"
            count={ rows.length }
            rowsPerPage={ rowsPerPage }
            page={ page }
            onPageChange={ handleChangePage }
            onRowsPerPageChange={ handleChangeRowsPerPage }
          />
        </Paper>
      ) }
    </>
  );
}
