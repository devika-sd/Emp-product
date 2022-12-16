const crud = require('../functions/crud');

exports.getMappedProductsAgainstEmployee = (req,res) =>{
    var checkquery = `select product_id,product_name,price,employeeProductMapping.created_at as created_at from employeeProductMapping left join productInfo on employeeProductMapping.product_id = productInfo.id where employeeProductMapping.employee_id = ${req.params.id};`;
    crud.selectOrDeleteQuery(checkquery).then(result => {
        if(result.data.length>0)
        {
            res.json(result)
        }
        else
        {
            res.json({success:false,message:"no product available for this employee"})
        }
    });
}

exports.getAllRecords = (req,res) =>{
    var checkquery = `select * from employeeProductMapping`;
    crud.selectOrDeleteQuery(checkquery).then(result => {
        if(result.data.length>0)
        {
            res.json(result)
        }
        else
        {
            res.json({success:false,message:"no product available for this employee"})
        }
    });
}