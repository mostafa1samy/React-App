import axios from 'axios';

import Joi from 'joi'
import React, { Component } from 'react';
import SecureLS from 'secure-ls';
import authentiction from './authentiction';

var ls = new SecureLS({encodingType: 'aes'});
let messageerror=''
class Login extends Component {
    state = { 
        email:'',
        passworf:'',
        password:'',
        error:{},
        messageerror:''
     } 
     postData=async()=>
     {
        let state = {...this.state}
        delete state.error
        delete state.messageerror
         let {data}=await axios.post('https://route-egypt-api.herokuapp.com/signin',state)
         console.log(data)
         if(data.message==="success"){
             
             ls.set('curentTokken',data.token)

             console.log('done')
             authentiction.login(()=>{
                this.props.history.replace('/home')
             })
             console.log(authentiction.isAuthed())
            

         }else{
            let state = {...this.state}
            state.messageerror=data.message
            this.setState(state)
            
                      console.log('fails')
                      console.log(messageerror)
         }

     }
     submitForm=(e)=>{
        e.preventDefault();
        //this.postData()
       
       let vailade= this.vailadLoginForm()
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
    logininputchage=(e)=>{
        let state={...this.state}
        state[e.target.name]=e.target.value
        this.setState(state)
    }
     vailadLoginForm=()=>{
        let schame=Joi.object({
            
            password: Joi.string()
       .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
       passworf: Joi.ref('password'),
       email: Joi.string()
       .email({ tlds: { allow: ['com', 'net'] } }),
       

        })
        let state = {...this.state}
        delete state.error
        delete state.messageerror
     return schame.validate(state,{abortEarly:false})
    }
    render() { 
       
        return (
        <> 
        {this.state.messageerror && <div className='alert alert-danger'>{this.state.messageerror}</div>} 
       
            <h1 className="py-3">login</h1>
            <form onSubmit={this.submitForm}>

            <label htmlFor="">Email</label>
            <input type="email" value={this.state.email}  onChange={this.logininputchage}
 className='form-control my-2' name='email'/>
 
  {this.state.error.email&& <div className='alert alert-danger'>{this.state.error.email}</div>} 
 
 <label htmlFor="">Password</label>
<input type="password" value={this.state.password}  onChange={this.logininputchage}
 className='form-control my-2' name='password'/>
 {this.state.error.password && <div className='alert alert-danger'>{this.state.error.password}</div>} 
 
  <label htmlFor=""> confirm Password</label>
<input type="password" value={this.state.passworf}  onChange={this.logininputchage}
 className='form-control my-2' name='passworf'/>
 {this.state.error.passworf && <div className='alert alert-danger'>{this.state.error.passworf}</div>} 
 
  
 <button className='btn btn-info my-2' type='onsubmit'>Submit</button>



           </form>
           <div  onClick={()=>this.navtoregister()} style={{textAlign:'center'}}>
               
{/* //<Link to="/login"> */}
               <h4>I Have Not Account <span style={{color:'blue'}}> Register</span>
               </h4>
               
               
               {/* </Link> */}
              

           </div>
            </>
        );
    }
    navtoregister=()=>
    {
        this.props.history.push('register')
    }
}

 
export default Login;