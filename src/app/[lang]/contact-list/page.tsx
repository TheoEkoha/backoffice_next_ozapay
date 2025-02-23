'use client'; // Indique que ce composant doit être rendu côté client

import * as React from "react";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import Checkbox from "@mui/material/Checkbox";
import PageTitle from "../../../components/Common/PageTitle";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import {UserDocument} from "../../api/users/users.model"
import EditUserModal from "../../../components/UIElements/Modal/EditUserModal";
import { SearchFormUser } from "../../../components/Apps/User/SearchFormUser";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

// Create new user Modal
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};


function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
// End Create new user Modal

function MembersLists(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;


  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

MembersLists.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function MembersList({ params: { lang } }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState<UserDocument | null>(null);
  const { register, handleSubmit, setValue } = useForm<UserDocument>(undefined);

  const handleOpen = (user: UserDocument) => {
    setSelectedUser(user);
    setValue("firstName", user.firstName);
    setValue("lastName", user.lastName);
    setValue("email", user.email);
    setValue("roles", user.roles);
    setValue("phone", user.phone);
    setOpen(true);
  };

  const [filteredUsers, setFilteredUsers] = useState(users["hydra:member"]);

  useEffect(() => {
    setFilteredUsers(users["hydra:member"]); // Réinitialiser à tous les utilisateurs au départ
  }, [users]);

  const handleSearch = (searchTerm) => {
    const results = users["hydra:member"].filter(user =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.roles?.join().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
    setPage(0);
  };


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://backoffice.ozapay.me/api/users'); // Appel à l'API route
        if (!response.ok) {
          throw new Error('Error fetching users');
        }
        const data = await response.json();
        setUsers(data); // Met à jour l'état avec les utilisateurs
      } catch (err) {
        setError(err.message); // Gestion des erreurs
      } finally {
        setLoading(false); // Fin du chargement
      }
    };

    fetchUsers(); // Appelle la fonction pour récupérer les utilisateurs
  }, [refresh]); // Le tableau vide [] signifie que l'effet ne s'exécute qu'une seule fois

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredUsers?.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = async (data) => {
    await fetch(`/api/users/${selectedUser?.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setOpen(false);
    setRefresh(false)
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 20px 15px",
          mb: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
            mb: "20px",
          }}
        >
          <Typography component="h3" sx={{ fontSize: 18, fontWeight: 500 }}>
            Users List
          </Typography>

          <Button
            onClick={handleClickOpen}
            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: "8px",
              fontWeight: "500",
              fontSize: "13px",
              padding: "12px 20px",
              color: "#fff !important",
            }}
          >
            <AddIcon sx={{ position: "relative", top: "-1px" }} /> Create New User
          </Button>
        </Box>

            {/* Barre de recherche */}
            <SearchFormUser onSearch={handleSearch} />

        <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
          <Table sx={{ minWidth: 850 }} aria-label="custom pagination table">
            <TableHead sx={{ background: "#F7FAFF" }}>
              <TableRow>
              <TableCell align="center">ID</TableCell>
                <TableCell align="center">Prénom</TableCell>
                <TableCell align="center">Nom de famille</TableCell>
                <TableCell align="right">E-mail</TableCell>
                <TableCell align="right">Roles</TableCell>
                <TableCell align="right">Numéro</TableCell>
                <TableCell align="right">Code</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {(rowsPerPage > 0
                ? filteredUsers?.sort((a, b) => a.id - b.id)?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : filteredUsers?.sort((a, b) => a.id - b.id)
              )?.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                  <Checkbox size="small" />{user.id}
                  </TableCell>
                  <TableCell align="center">{user.firstName}</TableCell>
                  <TableCell align="center">{user.lastName}</TableCell>
                  <TableCell align="center">{user.email}</TableCell>
                  <TableCell align="center">{user.roles}</TableCell>
                  <TableCell align="center">{user.phone}</TableCell>
                  <TableCell align="center">{user.code}</TableCell>
                  <TableCell align="right">
                    <IconButton color="error">
                      <DeleteIcon />
                    </IconButton>
                    <IconButton color="primary" onClick={() => handleOpen(user)}>
                      <DriveFileRenameOutlineIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={5} />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={5}
                  count={filteredUsers?.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>

      {/* MODAL */}
      <EditUserModal setRefresh={setRefresh} open={open} onClose={handleClose} selectedUser={selectedUser}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Modifier l'utilisateur
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register("firstName")} label="Prénom" fullWidth margin="normal" />
            <TextField {...register("lastName")} label="Nom de famille" fullWidth margin="normal" />
            <TextField {...register("email")} label="Email" fullWidth margin="normal" />
            <TextField {...register("roles")} label="Roles" fullWidth margin="normal" />
            <TextField {...register("phone")} label="Numéro" fullWidth margin="normal" />
            <TextField {...register("code")} label="Numéro" fullWidth margin="normal" />

            <Box mt={2} display="flex" justifyContent="space-between">
              <Button onClick={handleClose} color="error" variant="outlined">
                Annuler
              </Button>
              <Button type="submit" color="primary" variant="contained">
                Mettre à jour
              </Button>
            </Box>
          </form>
        </Box>
      </EditUserModal>

    </>
  );
}