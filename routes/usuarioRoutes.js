import express from "express";
import { formularioLogin, formularioRegistro, registrar, confirmar, formularioOlvidePassword, resetPassword, comprobarToken, nuevoPassword, autenticar, cerrarSesion } from "../controllers/usuarioController.js";

const router = express.Router();

// Página de inicio de sesión
router.get('/login', formularioLogin);
router.post('/login', autenticar);

// Cerrar sesión
router.post('/cerrar-sesion', cerrarSesion);

// Registro de usuarios
router.get('/registro', formularioRegistro);
router.post('/registro', registrar);

// Confirmar cuenta de usuario
router.get('/confirmar/:token', confirmar);

// Recuperación de contraseña
router.get('/olvide-password', formularioOlvidePassword);
router.post('/olvide-password', resetPassword);

// Restablecer contraseña con token
router.get('/olvide-password/:token', comprobarToken);
router.post('/olvide-password/:token', nuevoPassword);

export default router;
