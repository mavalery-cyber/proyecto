'use strict';

const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario.model');

router.post('/registrar-usuario', (req, res) => {
    let body = req.body;
    let nuevo_usuario = new Usuario({
        nombre: body.nombre,
        nacimiento: body.fecha_nac,
        correo: body.correo,
        genero: body.genero,
        contrasena: body.contrasena,
        conf_contra: body.conf_contra,
        estado: 'activo'

    });

    nuevo_usuario.save((err, usuarioDB) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'Ocurrio un error, no se pudo registrar',
                err
            });
        } else {
            res.json({
                resultado: true,
                msj: 'Los datos fueron registrados correctamente',
                usuarioDB
            });
        }
    });

});

router.get('/listar-usuario', (req, res) => {
    Usuario.find((err, lista_usuario) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'Ocurrio un error, no se pudo registrar',
                err
            });
        } else {
            res.json({
                resultado: true,
                msj: 'Los usuarios se listaron correctamente',
                lista_usuario
            });
        }
    });
});

module.exports = router;