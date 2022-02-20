 import axios from 'axios';
import React, { Component } from 'react';
import Joi from 'joi'


class Register extends Component {
    state = { 
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        age:'',
        error:{},
        messageerror:''
     } 
     registerinputchage=(e)=>{
         let state={...this.state}
         state[e.target.name]=e.target.value
         this.setState(state)
     }
     postData=async()=>
     {
        let state = {...this.state}
        delete state.error
        delete state.messageerror
         let {data}=await axios.post('https://route-egypt-api.herokuapp.com/signup',state)
         console.log(data)
         if(data.message==="success"){
             console.log('done')
             this.props.history.replace('/login')

         }else{
console.log('fails')
let state = {...this.state}
state.messageerror=data.messageerror
this.setState(state)
         }

     }
    
     submitForm=(e)=>{
         e.preventDefault();
         //this.postData()
        
        let vailade= this.vailadRegisterForm()
        console.log(vailade)
        
        if(vailade.error){
            const erros={}
            for(let err of vailade.error.details){
                const key=err.path[0]
                const value=err.message
                erros[key]=value
            }
            let state = {...this.state}
          state.error=erros
          this.setState(state)
          
     }
        else{
                  this.postData()
        }
   
     }
     vailadRegisterForm=()=>{
         let schame=Joi.object({
             first_name:Joi.string().min(3).max(30).required().label('first name'),
             last_name:Joi.string().min(3).max(30).required().label('last name'),
             password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).label('password'),
        email: Joi.string()
        .email({ tlds: { allow: ['com', 'net'] } }).label('email'),
        age: Joi.number()
        .integer()
        .min(10)
        .max(80).label('age'),

         })
         let state = {...this.state}
         delete state.error
         delete state.messageerror
      return schame.validate(state,{abortEarly:false})
     }
    
    
    render() { 
        
    //console.log(this.state.error)
    
    return ( 

           <>
            {this.state.messageerror && <div className='alert alert-danger'>{this.state.messageerror}</div>} 
           <h1 className='my-2'>Register</h1>
           <form onSubmit={this.submitForm}>
<label htmlFor="">First Name</label>
<input  type="text" value={this.state.first_name}  onChange={this.registerinputchage}


 className='form-control my-2' name='first_name'/>
 {this.state.error.first_name && <div className='alert alert-danger'>{this.state.error.first_name}</div>} 
 <label htmlFor="">Last Name</label>
<input type="text" value={this.state.last_name}  onChange={this.registerinputchage}
 className='form-control my-2' name='last_name'/>


  {this.state.error.last_name && <div className='alert alert-danger'>{this.state.error.last_name}</div>} 
 <label htmlFor="">Age</label>
<input type="number" value={this.state.age}  onChange={this.registerinputchage}
 className='form-control my-2' name='age'/>
 {this.state.error.age && <div className='alert alert-danger'>{this.state.error.age}</div>} 
  
 <label htmlFor="">Email</label>
<input type="email" value={this.state.email}  onChange={this.registerinputchage}
 className='form-control my-2' name='email'/>
 {this.state.error.email && <div className='alert alert-danger'>{this.state.error.email}</div>} 
 
 <label htmlFor="">Password</label>
<input type="password" value={this.state.password}  onChange={this.registerinputchage}
 className='form-control my-2' name='password'/>
 {this.state.error.password && <div className='alert alert-danger'>{this.state.error.password}</div>}
 
  
 <button className='btn btn-info my-2' type='onsubmit'>Submit</button>



           </form>
           <div  onClick={()=>this.navtologin()} style={{textAlign:'center'}}>
               
{/* //<Link to="/login"> */}
               <h4>I Have Account <span style={{color:'blue'}}> Login</span>
               </h4>
               
               
               {/* </Link> */}
              

           </div>




           </>
        );
    }
    navtologin=()=>
    {
        this.props.history.push('/login')
    }
}
 
export default Register;