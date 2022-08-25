const pool  = require('../config/db');

const getAllEmployer = async() => {
    return await pool.query('SELECT * FROM employer')
}

const getByID = async(id) =>{
    console.log(id)
    return await pool.query('SELECT employer.name, employer.salary, employer.degree, job.title FROM employer LEFT JOIN job ON job.id = employer.job_id WHERE employer.id = $1', [id])
}

const AddEmployer = async({name, salary, degree, job_id}) => {
    return await pool.query('INSERT INTO employer (name, salary, degree, job_id) VALUES ($1, $2, $3, $4) RETURNING *', [name, salary, degree, job_id])
}

const EditEmployer = async({name, salary, degree, job_id}, id)=>{
    const oldEmployer = await pool.query('SELECT * FROM employer WHERE id = $1', [id]);
    return await pool.query(`UPDATE employer SET name = $1, salary = $2, degree = $3, job_id = $4 WHERE id = $5 RETURNING *`, [name ? name : oldEmployer.rows[0].name,  salary ? salary : oldEmployer.rows[0].salary,  degree ? degree : oldEmployer.rows[0].degree, job_id ? job_id : oldEmployer.rows[0].job_id, id])
}

const DeleteEmployer = async(id) => {
    return await pool.query('DELETE FROM employer WHERE id=$1', [id]);
}

module.exports ={
    getAllEmployer,
    AddEmployer,
    EditEmployer,
    DeleteEmployer,
    getByID
}