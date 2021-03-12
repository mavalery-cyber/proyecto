'use strict';

const express = require('express');
const router = express.Router();
const Artista = require('../models/artistas.model');


router.post('/registrar-artista', (req, res) => {
    let artista = new Artista({
        nombre: req.body.nombre,
        disquera: req.body.disquera,
        fecha_nac: req.body.fecha_nac,
    });
    artista.save((err, artista_db) => {
        if (err) {
            res.json({
                err
            });
        } else {
            res.json({
                artista_db
            });
        }
    });

});

router.get('/listar-artistas', (req, res) => {
    Artista.find((err, lista_artistas) => {
        if (err) {
            res.json({
                msj: 'No se encontraron los artistas',
                err
            });
        } else {
            res.json({
                lista_artistas
            });
        }
    });
});

router.get('/buscar-ejercicio', (req, res) => {
    Ejercicio.findOne({ _id: req.query._id }, (err, artista) => {
        if (err) {
            res.json({
                err
            });
        } else {
            res.json({
                artista
            });
        }
    });
});

router.put('/modificar-artista', (req, res) => {
    Ejercicio.updateOne({ _id: req.body._id }, {
        $set: {
            nombre: req.body.nombre,
            disquera: req.body.disquera,
            fecha_nac: req.body.fecha_nac
        }
    }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo modificar el ejercicio',
                err
            });
        } else {
            res.json({
                info
            });
        }
    });

});

module.exports = router;