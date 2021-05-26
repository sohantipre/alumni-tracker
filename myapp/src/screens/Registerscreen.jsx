import React , {useState} from 'react'
import {  Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import axios from 'axios'
import Dropdown from 'react-dropdown-select'
import 'react-dropdown/style.css';
import { Link , useHistory } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../App.css'


const RegisterPage = () => {
    const history = useHistory();
    const [formData , setFormData] = useState({
        email: '',
        password: '',
        error: '',
        name:'',
        collegename:'',
        fieldname:'college'

    });
    const [fieldname,setfieldname]=useState('')
    const [collegename,setcollegenamestate]=useState(false)
    localStorage.setItem('field',JSON.stringify(''))
    const options=[
        'college','student','alumni'
    ]



    const handlechange = (e) => {
        const queryname=e.target.name
        const value=e.target.value
        console.log(queryname,value)
        if(value=='alumni'||value=='student'){
            setcollegenamestate(true)
        }
        if(value=='college'){
            setcollegenamestate(false)
        }

        setFormData((prev)=>{
            return {...prev,[queryname]:value}
        })
        
    }
    // const handlefieldchange=(values)=>{
    //     console.log(values)
    // setfieldname(values)
    // }

    const handleSubmit = (e) =>{
        e.preventDefault();
        localStorage.setItem('field',JSON.stringify(formData.fieldname))
        console.log(collegename)
        if(collegename===true){
            setFormData({
                email: formData.email,
                password: formData.password, 
                name:formData.name,
                collegename:formData.collegename
            })
        }
        else{
            setFormData({
                email: formData.email,
                password: formData.password, 
                name:formData.name,
                
            })
            
        }
            
       

        if(formData.fieldname==='college'){
            axios.post('http://localhost:5000/college/register',formData).then(()=>{
console.log('college signed up')
alert('signed up as a college')
            })
        }
        else if(formData.fieldname==='student'){
            axios.post('http://localhost:5000/student/register',formData).then(()=>{
console.log('student signed up')
alert('signed up as a student')
            })
        }
        else{
            axios.post('http://localhost:5000/alumni/register',formData).then(()=>{
console.log('alumni signed up')
alert('signed up as an alumni')
            })
        }
    }
    return (
        <div className='form'>
            <div className="form__box">
            <ValidatorForm  onSubmit={handleSubmit}>
            <AccountCircleIcon fontSize="large"  className="login__icon"/>
            <h1 className="header__login">Sign Up </h1>
            <h1 className="error">{ formData.error }</h1>
            <div className="formcomponent">
                    <TextValidator  
                        variant="outlined"  
                        onChange={handlechange}
                        type="name" 
                        autoFocus
                        autoComplete="off"
                        value={formData.name}
                        validators={['required']} 
                        errorMessages={['this field is required']}
                        label="name" 
                        name="name"
                        placeholder="Enter Your Name Here" />
                </div>
                <div className="formcomponent">
                {/* <Dropdown options={options}  onChange={handlefieldchange} name='fieldname' placeholder="Select your role:" /> */}
                <select style={{width:'220px',height:'50px',padding:'5px',fontSize:'15px'}} name='fieldname' value={formData.fieldname} placeholder='Enter your role' onChange={handlechange}>
                <option name='student'>student</option>
                <option name='alumni'>alumni</option>
                <option name='college'>college</option>
                </select>
                </div>
                {collegename?
                <div className="formcomponent">
                <TextValidator  
                    variant="outlined"  
                    onChange={handlechange}
                    type="name" 
                    autoFocus
                    autoComplete="off"
                    value={formData.collegename}
                    validators={['required']} 
                    errorMessages={['this field is required']}
                    label="collegename" 
                    name="collegename"
                    placeholder="Enter the college name here" />
            </div>:<></>}
                <div className="formcomponent">
                    <TextValidator  
                        variant="outlined"  
                        onChange={handlechange}
                        type="email" 
                        autoFocus
                        autoComplete="off"
                        value={formData.email}
                        validators={['required','isEmail']} 
                        errorMessages={['this field is required','email is invalid']}
                        label="email" 
                        name="email"
                        placeholder="Enter Your Email Here" />
                        
                </div>
                
                <div className="formcomponent">
                    <TextValidator  
                        variant="outlined" 
                        onChange={handlechange} 
                        type="password" 
                        validators={['required']}
                        errorMessages={['this field is required']}
                        value={formData.password}
                        label="password"   
                        name="password"
                        placeholder="Enter Your Password Here" />
                </div>
                <div className="login__button">
                <Button color="primary" variant="contained" type="submit" >Submit</Button>

              
                </div>
                  <p className="login__para">Already registered in
                    
                        <Link to="/" style={{ color: 'purple'  }}>Login</Link>
                    
                </p>


            </ValidatorForm>

            </div>
            
        </div>
    )
}

export default RegisterPage;