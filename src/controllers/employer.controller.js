const {getAllEmployer, AddEmployer, EditEmployer, DeleteEmployer, getByID} = require('../query/employer.query');


const AllEmployer = async(req,res) => {
    try{
        const {rows} = await getAllEmployer();
        res.status(200).json({
            status: "OK",
            data: rows
        })
    }catch(error){
        res.json({
            error: error.message
        })
    }
}


const GetSingleEmploye = async(req,res) => {
    try {
        const {rows} = await getByID(req.params.id);
        res.status(200).json({
            status: 'OK',
            data: rows
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const AddEmploy = async(req,res)=>{
    try {
       const {rows} = await AddEmployer(req.body);
       console.log(rows)
       res.status(201).json({
        status: "Created",
        data: rows
       })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const UpdateEmployer = async(req,res)=>{
    try {
        const id = req.params.id;
        const {rows} = await EditEmployer(req.body, id);
        
        res.status(200).json({
            status: 'Updated',
            data: rows
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const deleteEmployer = async(req,res)=>{
    try {
        const id = req.params.id;
        await DeleteEmployer(id)
        res.status(200).json({
            status: "Deleted"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


module.exports = {
    AllEmployer,
    AddEmploy,
    UpdateEmployer,
    deleteEmployer,
    GetSingleEmploye
}