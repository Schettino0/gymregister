const addController =  require('../add/controller.add')
const datosController = require('../datos/controller.datos')

const router = app => {

    app.get('/',(req,res)=>{
        res.render('home' , {style: "css/home.css"})
    })

    app.use('/add',addController)
    app.use('/datos', datosController)

    
}

module.exports = router

