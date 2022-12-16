var product = require('./product')

exports.routing = (app) =>{
    app.use("/product",product)
}