import React, { Component } from 'react';
import authentiction from './authentiction';
class Out extends Component {
    state = {  } 
    render() { 
      
      let{history}=this.props
      console.log(history)
        return (
            <div className="jumbotron">
  <h1 className="display-4">Out Section</h1>
  <button onClick={
       authentiction.logout(()=>{
        console.log(authentiction.isAuthenticed)
        history.push('/login')

       
       }
    
     )
    } className='btn btn-danger'>mm</button>
  
</div>

        );
        
    }
}
 
export default Out;