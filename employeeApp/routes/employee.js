var express = require('express');
var employeeController = require('../controller/employee');
var register = require('../middleware/validators');
var router = express.Router();

router.route('/register')
.post(register,employeeController.registerUser);

router.route('/login')
.post(employeeController.login);

router.route('/profile/:email')
.get(employeeController.profile);

router.route('/uploadresume/:email')
.post(employeeController.uploadresume)

router.route('/end')
.get(employeeController.closeconnection)

router.route("/products/:email/:id")
.get(employeeController.employeeProductById)

router.route('/')
.get(employeeController.getAllProduct)

// router.route('/joins/:id')
// .get(employeeController.joinTables)

// .post(employeeController.postrecord)

// router.route('/:id')
// .put(employeeController.updaterecord)
// .delete(employeeController.deleterecord);

module.exports=router;