import React , {useState} from 'react'
import {  Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import axios from 'axios'
import { Link , useHistory } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../App.css'
import Dropdown from 'react-dropdown-select'
import 'react-dropdown/style.css';

const LoginPage = (props) => {
    const history = useHistory();
    const [formData , setFormData] = useState({
        email: '',
        password: '',
        error: '',
        fieldname:'college'
    });

  const options=[
      'college','student','alumni'
  ]

    const handlechange = (e) => {
        const queryname=e.target.name
        const value=e.target.value
        setFormData((prev)=>{
            return {...prev,[queryname]:value}
        })
        
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = {
           
            email: formData.email,
            password: formData.password, 

        };
        const field=JSON.parse(localStorage.getItem('field'))

        if(formData.fieldname==='college'){
            axios.post('http://localhost:5000/college/login',data).then((value)=>{
                console.log(value.data)
                localStorage.setItem('token',JSON.stringify(value.data.token))
                localStorage.setItem('id',JSON.stringify(value.data.id))
                localStorage.setItem('name',JSON.stringify(value.data.name))
console.log('college logged in')
props.history.push('/collegescreen');

            })
        }
        else if(formData.fieldname==='student'){
            axios.post('http://localhost:5000/student/login',data).then((value)=>{
                localStorage.setItem('token',JSON.stringify(value.data.token))
                localStorage.setItem('id',JSON.stringify(value.data.id))
                localStorage.setItem('name',JSON.stringify(value.data.name))
console.log('student logged in')
props.history.push('/studentscreen');
            })
        }
        else{
            axios.post('http://localhost:5000/alumni/login',data).then((value)=>{
                localStorage.setItem('token',JSON.stringify(value.data.token))
                localStorage.setItem('id',JSON.stringify(value.data.id))
                localStorage.setItem('name',JSON.stringify(value.data.name))
console.log('alumni logged in')
props.history.push('/alumniscreen');
            })
        }
        
    }

    return (
        <div className='form'>
            <div className="form__box">
            <ValidatorForm  onSubmit={handleSubmit}>
            <AccountCircleIcon fontSize="large" className="login__icon"/>
            <h1 className="header__login">Log In </h1>
            <h1 className="error">{ formData.error }</h1>
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
                {/* <Dropdown options={options}  onChange={handlefieldchange} name='fieldname' placeholder="Select your role:" /> */}
                <select style={{width:'220px',height:'50px',padding:'5px',fontSize:'15px'}} name='fieldname' value={formData.fieldname} placeholder='Enter your role' onChange={handlechange}>
                <option name='student'>student</option>
                <option name='alumni'>alumni</option>
                <option name='college'>college</option>
                </select>
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
                  <p className="login__para">Don't Have an account?  
                    
                        <Link to="/register" style={{ color: 'purple'  }}>Sign up</Link>
                    
                </p>


            </ValidatorForm>

            </div>
            
        </div>
    )
}

export default LoginPage;