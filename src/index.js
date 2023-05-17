const express = require('express')
const app = require("./app");
const port = process.env.PORT || 8080;

const httpServer = app.listen(port , () => {
    console.log(`Server Running at port 3000`);
})

