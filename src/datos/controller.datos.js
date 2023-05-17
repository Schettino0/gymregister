const { Router } = require('express')
const router = Router()
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');
const fs = require('fs');


router.get('/', async (req, res) => {
    let deudaEdu = { nombre: "Eduardo", monto: 0 }
    let deudaNico = { nombre: "Nicolas", monto: 0 }
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile("datos.xlsx");
    const nombreHoja = workbook.worksheets.map((worksheet) => worksheet.name);
    const worksheet = workbook.getWorksheet(nombreHoja[0]);
    const datos = worksheet.getSheetValues();
    const jDatos = [];

    for (let i = 2; i < datos.length; i++) {
        const dato = datos[i];
        const obj = {
            nombre: dato[1],
            fecha: dato[2],
            descripcion: dato[3],
            realizo: dato[4]
        }

        jDatos.push(obj)

    }
    jDatos.forEach(element => {
        if (element.nombre == "Eduardo" && element.realizo == "❌") {
            deudaEdu.monto += 5000
            console.log(deudaEdu)
        }
        if (element.nombre == "Nicolas" && element.realizo == "❌") {
            deudaNico.monto += 5000
            console.log(deudaNico)
        }
    });
    // res.json({ jDatos })

    res.render('datos', { jDatos, style: 'css/datos.css', deudaEdu, deudaNico })
})

module.exports = router