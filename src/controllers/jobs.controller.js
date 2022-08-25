const pool = require('../config/db')
const {getAllJobs, AddJob, DeleteJob, getById} = require('../query/jobs.query')



const AllJobs = async(req,res) => {
    try{
        const {rows} = await getAllJobs()
        res.status(200).json({
            status: 'OK',
            data: rows
        })
    }catch(err){
        res.status(500).json({
            error: err.message
        })
    }
}

const GetSingleJob = async(req,res)=>{
    try {
        const {rows} = await getById(req.params.id)
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

const AddJobs = async(req,res)=>{
    try {
        const {rows} =await AddJob(req.body.title)

        res.status(201).json({
            status: 'Created',
            data: rows
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const RemoveJobs = async(req,res)=>{
    try {
        await DeleteJob(req.params.id);
        res.status(200).json({
            status: 'Deleted'
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    AllJobs,
    AddJobs,
    RemoveJobs,
    GetSingleJob
}