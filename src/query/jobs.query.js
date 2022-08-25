const pool  = require('../config/db');

const getAllJobs = async()=>{
   return await pool.query('SELECT * FROM job');
}

const getById = async(id)=>{
  return await pool.query('SELECT * FROM job WHERE id = $1', [id])
}
const AddJob = async(title)=>{
  return await pool.query('INSERT INTO job(title) VALUES ($1) RETURNING *', [title])
} 
const DeleteJob = async(id) =>{
  return await pool.query('DELETE FROM job WHERE id = $1', [id]);
}
module.exports = {getAllJobs, AddJob, DeleteJob, getById} 