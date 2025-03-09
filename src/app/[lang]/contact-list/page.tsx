"use client"; // Indique que ce composant doit être rendu côté client

import * as React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Box, Typography, Stack } from "@mui/material";
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
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import { UserDocument } from "../../api/users/users.model";
import EditUserModal from "../../../components/UIElements/Modal/EditUserModal";
import { SearchFormUser } from "../../../components/Apps/User/SearchFormUser";
import { toast } from "sonner";
import DescriptionIcon from '@mui/icons-material/Description';

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
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const [selectedUser, setSelectedUser] = useState<UserDocument | null>(null);
  const { register, handleSubmit, setValue } = useForm<UserDocument>(undefined);
  const [isSearching, setIsSearching] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [openConfirmDeleteMultiple, setOpenConfirmDeleteMultiple] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleOpen = (user: UserDocument) => {
    setSelectedUser(user);
    setValue("firstName", user.firstName);
    setValue("lastName", user.lastName);
    setValue("email", user.email);
    setValue("roles", user.roles);
    setValue("phone", user.phone);
    setValue("address", user.address);
    setValue("postalCode", user.postalCode);
    setValue("city", user.city);
    setOpen(true);
  };

  const handleDeleteClick = (user: UserDocument) => {
    setUserToDelete(user);
    setOpenConfirmDelete(true);
  };

  const confirmDelete = async () => {
    if (userToDelete) {
      await onDelete(userToDelete);
      setOpenConfirmDelete(false);
      setUserToDelete(null);
    }
  };

  const handleCloseConfirmDelete = () => {
    setOpenConfirmDelete(false);
    setUserToDelete(null);
  };

  const handleSearch = (searchTerm) => {
    setIsSearching(!!searchTerm.trim()); // Indique qu'on est en recherche
    if (!searchTerm.trim()) {
      // Si le champ est vide, on remet tous les utilisateurs
      setFilteredUsers(users["hydra:member"]); // 🔥 Remettre toute la réponse API
      return;
    }

    const data = users;
    if (data && data?.length > 0) {
      const results = data?.filter(
        (user) =>
          user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.roles?.join().toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.phone.includes(searchTerm) ||
          user.address?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.postalCode?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.city?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers([...results]); // Forcer un nouvel objet
    }
    //setPage(0);
  };

  const onDelete = async (data: UserDocument) => {
    await fetch(`https://backoffice.ozapay.me/api/users/delete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: data.email }),
    });

    toast.success("Utilisateur supprimé avec succès");
    // Recharger les données après la suppression
    setTimeout(() => {
      fetchUsers();
    }, 250);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const fetchUsers = async () => {
    let itemsPerPage = rowsPerPage;

    if (itemsPerPage === -1) itemsPerPage = totalCount;
    try {
      const response = await fetch(
        `https://backoffice.ozapay.me/api/users?page=${page + 1}&itemsPerPage=${itemsPerPage}`
      );
      if (!response.ok) {
        throw new Error("Error fetching users");
      }
      const data = await response.json();
      setFilteredUsers(data["hydra:member"]); // Stocker toute la réponse de l'API
      setUsers(data["hydra:member"]); // Stocker toute la réponse de l'API
      setTotalCount(data["hydra:totalItems"]); // Stocker toute la réponse de l'API
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isSearching) {
      setFilteredUsers(users);
    }
  }, [users, isSearching]);
  useEffect(() => {
    fetchUsers(); // Appel de l'API quand `page` ou `rowsPerPage` change
  }, [page, rowsPerPage]);

  useEffect(() => {
    if (filteredUsers?.length > 0) {
      // Tu peux exécuter ici d'autres actions qui nécessitent que filteredUsers soit prêt
    }
  }, [filteredUsers]); // Se déclenche quand filteredUsers change

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - filteredUsers?.length)
      : 0;

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    //setPage(0); // Toujours revenir à la première page
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
    fetchUsers(); // Recharger les données après la mise à jour
  };

  const exportCSV = async () => {
    try {
      const itemsPerPage = totalCount || rowsPerPage;
      const response = await fetch(
        `https://backoffice.ozapay.me/api/users?page=1&itemsPerPage=${itemsPerPage}`
      );
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des utilisateurs");
      }
      const data = await response.json();
      const allUsers = data["hydra:member"] || [];

      const csv = convertToCSV(allUsers);
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "users.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      toast.error("Erreur lors de l'export CSV: " + error.message);
    }
  };

  const convertToCSV = (users) => {
    const header = [
      "ID",
      "Prénom",
      "Nom de famille",
      "E-mail",
      "Roles",
      "Numéro",
      "Code",
      "Adresse",
      "Code postal",
      "Ville",
    ];
    const rows = users.map((user) => {
      return [
        user.id,
        user.firstName,
        user.lastName,
        user.email,
        Array.isArray(user.roles) ? user.roles.join(" | ") : user.roles,
        user.phone,
        user.code,
        user.address,
        user.postalCode,
        user.city,
      ]
        .map((field) => {
          if (field === null || field === undefined) {
            field = "";
          }
          field = field.toString();
          if (field.includes(",") || field.includes('"') || field.includes("\n")) {
            field = '"' + field.replace(/"/g, '""') + '"';
          }
          return field;
        })
        .join(",");
    });
    return [header.join(","), ...rows].join("\n");
  };

  const handleOpenConfirmDeleteMultiple = () => {
    setOpenConfirmDeleteMultiple(true);
  };

  const handleCloseConfirmDeleteMultiple = () => {
    setOpenConfirmDeleteMultiple(false);
  };

  const confirmDeleteMultiple = async () => {
    await onDeleteSelectedUsers();
    setOpenConfirmDeleteMultiple(false);
  };

  const onDeleteSelectedUsers = async () => {
    const emails = selectedUsers.map((user) => user.email);
    try {
      const response = await fetch(
        `https://backoffice.ozapay.me/api/users/delete-multiple`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ emails }),
        }
      );
      if (response.ok) {
        toast.success("Utilisateurs supprimés avec succès");
        setSelectedUsers([]);
        fetchUsers();
      } else {
        const errorData = await response.json();
        toast.error("Erreur lors de la suppression: " + errorData.error);
      }
    } catch (error: any) {
      toast.error("Erreur lors de la suppression: " + error.message);
    }
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

          <Stack direction="row" spacing={3}>
            {selectedUsers.length > 1 && (
              <Button
                onClick={handleOpenConfirmDeleteMultiple}
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "13px",
                  padding: "12px 20px",
                  color: "#fff !important",
                  backgroundColor: "#ff6961",
                  ":hover": {
                    backgroundColor: "#ff6961",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.4)",
                  },
                }}
              >
                <DeleteIcon sx={{position: "relative", top: "-1px"}}/>
                <Typography ml={1}>Delete {selectedUsers.length} Users</Typography>
              </Button>
            )}
            <Button
              onClick={exportCSV}
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
              <DescriptionIcon sx={{position: "relative", top: "-1px"}}/>
              <Typography ml={1}>
                Export CSV
              </Typography>
            </Button>
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
              <AddIcon sx={{position: "relative", top: "-1px" }}/>
              <Typography ml={1}>
                Create New User
              </Typography>
            </Button>
          </Stack>
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
                <TableCell align="center">E-mail</TableCell>
                <TableCell align="center">Roles</TableCell>
                <TableCell align="center">Numéro</TableCell>
                <TableCell align="center">Code</TableCell>
                <TableCell align="center">Adresse</TableCell>
                <TableCell align="center">Code postal</TableCell>
                <TableCell align="center">Ville</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredUsers && filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                    <Checkbox
                        size="small"
                        checked={selectedUsers.some(
                          (selected) => selected.id === user.id
                        )}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedUsers((prev) => [...prev, user]);
                          } else {
                            setSelectedUsers((prev) =>
                              prev.filter(
                                (selected) => selected.id !== user.id
                              )
                            );
                          }
                        }}
                      />
                      {user.id}
                    </TableCell>
                    <TableCell align="center">{user.firstName}</TableCell>
                    <TableCell align="center">{user.lastName}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell align="center"> {user.roles.join(" | ")}</TableCell>
                    <TableCell align="center">{user.phone}</TableCell>
                    <TableCell align="center">{user.code}</TableCell>
                    <TableCell align="center">{user.address}</TableCell>
                    <TableCell align="center">{user.postalCode}</TableCell>
                    <TableCell align="center">{user.city}</TableCell>
                    <TableCell align="center">
                      <IconButton color="error">
                        <DeleteIcon onClick={() => handleDeleteClick(user)}/>
                      </IconButton>
                      <IconButton
                        color="primary"
                        onClick={() => handleOpen(user)}
                      >
                        <DriveFileRenameOutlineIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={12} align="center">
                    Aucun utilisateur trouvé
                  </TableCell>
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={7}
                  count={totalCount || 0}
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
      <EditUserModal
        open={open}
        onClose={handleClose}
        setRefresh={() => {}}
        selectedUser={selectedUser}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Modifier l'utilisateur
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register("firstName")} label="Prénom" fullWidth margin="normal"/>
            <TextField {...register("lastName")} label="Nom de famille" fullWidth margin="normal"/>
            <TextField {...register("email")} label="Email" fullWidth margin="normal"/>
            <TextField {...register("roles")} label="Roles" fullWidth margin="normal"/>
            <TextField {...register("phone")} label="Téléphone" fullWidth margin="normal"/>
            <TextField {...register("code")} label="Code" fullWidth margin="normal"/>
            <TextField {...register("address")} label="Adresse" fullWidth margin="normal"/>
            <TextField {...register("postalCode")} label="Code postal" fullWidth margin="normal"/>
            <TextField {...register("city")} label="Ville" fullWidth margin="normal"/>
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

      <Dialog
        open={openConfirmDelete}
        onClose={handleCloseConfirmDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          Confirmer la suppression
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Êtes-vous sûr de vouloir supprimer cet utilisateur ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmDelete} color="primary">
            Annuler
          </Button>
          <Button onClick={confirmDelete} color="error" autoFocus>
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openConfirmDeleteMultiple}
        onClose={handleCloseConfirmDeleteMultiple}
        aria-labelledby="alert-dialog-multiple-title"
        aria-describedby="alert-dialog-multiple-description">
        <DialogTitle id="alert-dialog-multiple-title">
          Confirmer la suppression
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-multiple-description">
            Êtes-vous sûr de vouloir supprimer {selectedUsers.length} utilisateurs ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmDeleteMultiple} color="primary">
            Annuler
          </Button>
          <Button onClick={confirmDeleteMultiple} color="error" autoFocus>
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
