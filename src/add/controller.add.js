const { Router } = require('express')
const router = Router()
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');


// const workbook = new ExcelJS.Workbook();
const workbook = new ExcelJS.Workbook()
const worksheet = workbook.addWorksheet('Datos');
worksheet.addRow(['Nombre', 'Fecha', 'Descripcion', '¿Realizo Ejercicio?']);


router.post('/', async (req, res) => {
    const { opcion, fecha, descripcion, realizo_ejercicio } = req.body
    worksheet.addRow([opcion, fecha, descripcion, realizo_ejercicio])
    workbook.xlsx.writeFile('datos.xlsx')
        .then(function () {
            console.log('Archivo guardado correctamente.');
        });

})



module.exports = router