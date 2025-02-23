"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Card from "@mui/material/Card";
import { Typography, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { UserDocument } from "../../../app/api/users/users.model";
import { toast } from "sonner"

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

interface EditUserModalProps {
  open: boolean;
  onClose: () => void;
  setRefresh: (boolean) => void;
  selectedUser: UserDocument | null;
  children?: React.ReactNode; // Ajoute cette ligne
}



const EditUserModal: React.FC<EditUserModalProps> = ({ open, onClose, selectedUser , setRefresh}) => {

  const { register, handleSubmit, setValue } = useForm<UserDocument>(undefined);

  React.useEffect(() => {
    if (selectedUser) {
      setValue("firstName", selectedUser.firstName);
      setValue("lastName", selectedUser.lastName);
      setValue("email", selectedUser.email);
      setValue("roles", selectedUser.roles);
      setValue("phone", selectedUser.phone);
    }
  }, [selectedUser, setValue]);

  // const handleOpen = (user: UserDocument) => {
  //   setSelectedUser(user);
  //   setValue("name", user.name);
  //   setValue("email", user.email);
  //   setOpen(true);
  // };

  // const handleClose = () => setOpen(false);

  const onSubmit = async (data: UserDocument) => {
    console.log("Mise à jour de l'utilisateur :", data);

    await fetch(`https://backoffice.ozapay.me/api/user/${selectedUser?.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setRefresh(true);

    toast.success('Utilisateur mis à jours avec succès');
   // ⚠️ Ajoute un petit délai pour s'assurer que le toast ne bloque pas la mise à jour
    setTimeout(() => {
      setRefresh(true);
    }, 250);

    onClose(); // Fermer la modal après la mise à jour$
  };


  return (
    <>
        <Modal open={open} onClose={onClose}>
          <Box sx={style}>
            <Typography variant="h6" component="h2">
              Modifier l'utilisateur
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register("firstName")} label="Prénom" fullWidth margin="normal" />
          <TextField {...register("lastName")} label="Nom de famille" fullWidth margin="normal" />
          <TextField {...register("email")} label="Email" fullWidth margin="normal" />
          <TextField
            {...register("roles")}
            label="Roles"
            fullWidth
            margin="normal"
            value={selectedUser?.roles?.join(", ") || ""}
            onChange={(e) => setValue("roles", e.target.value.split(", ").map((role) => role.trim()))}
            />
          <TextField {...register("phone")} label="Numéro" fullWidth margin="normal" />

              <Box mt={2} display="flex" justifyContent="space-between">
                <Button onClick={onClose} color="error" variant="outlined">
                  Annuler
                </Button>
                <Button type="submit" color="primary" variant="contained">
                  Mettre à jour
                </Button>
              </Box>
            </form>
          </Box>
        </Modal>
    </>
  );
}

export default EditUserModal;