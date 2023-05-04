import Employee from '../models/Employee.js';

export const createEmployee = async ( req, res ) => {
    console.log("**Executing the function after the middleware***")
    const { name, email, age, dui, position } = req.body;
    
    const newEmployee = new Employee( { name: name, email: email, age: age, dui: dui, position: position } );
    
    try {
        await newEmployee.save();
       return res.json({code: 200, message:"The employee was created in the DB!!"})
    } catch (error) {
       return res.json({message: "We could not create the employee please check your information"})
    }

}