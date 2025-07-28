const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

async function connectDB()
{
    try{
        await mongoose.connect('mongodb://localhost:27017/company');
        console.log('MongoDB connected');
    }
    catch(error)
    {
        console.error('MongoDB connection failed:',error);
        process.exit(1);
    }
}
connectDB();


const employeeSchema = new mongoose.Schema(
    {
        empNo: {type:Number , required: true },
        empName: {type:String,required:true,unique:true},
        empSal:{type:Number,required:true},
    },
    {
        timestamps: false,
        versionKey: false
    });
    const Employee = mongoose.model('Employee',employeeSchema);
    //create new employee

    app.post('/api/employees',async(req,res)=> {
        try
        {
            const {empNo,empName,empSal}=req.body;
            const employee=new Employee({
            empNo : empNo,
            empName: empName,
            empSal: empSal
            });
            
            await employee.save();
           // res.status(201).json(savedEmployee);
           res.status(201).json({message:'Employee added successfully'});
        }
    catch(error){
        res.status(400).json({message:error.message});
    }
    });
    app.get('/api/employees',async(req,res)=> {
        
            const employees = await Employee.find();
            res.json(employees);
    });
    app.get('/api/employees/:id',async(req,res)=> {
        try{
            const employee = await Employee.findById(req.params.id);
            if(!employee)
                return res.status(404).json({message: 'Employee not found'});
            res.json(employee);
        }
        catch(error){
            res.status(500).json({message:error.message});
        }
        
            // const employees = await Employee.find();
            // res.json(employees);
    });
     app.delete('/api/employees/:id', async(req,res)=>{
        try{
            const deletedEmployee =await Employee.findByIdAndDelete(req.params.id);
            if(!deletedEmployee)
                return res.status(404).json({message: 'Employee not found'});
            res.json({message: 'Employee deleted successfully'});
        }
        catch(error){
            res.status(500).json({message:error.message});
        }
    });
    app.put('/api/employees/:id', async(req,res)=>{
        try{
            const updatedemployee = await Employee.findByIdAndUpdate(req.params.id, 
                req.body,
                {
                    new:true,
                    runValidators:true
                }
            );

            if(!updatedemployee)
                return res.status(404).json({message: 'Employee not found'});
                //res.json(updatedemployee);
                res.json({message: 'Employee Updated successfully'});

        }
        catch(error){
            res.status(500).json({message:error.message});
        }
    });
    app.listen(3001,()=>{
        console.log('server running on http://localhost:3001');
    });