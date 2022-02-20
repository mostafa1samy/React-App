
import {Route,Redirect} from 'react-router-dom'
import authentiction from './authentiction';

const ProtectedRoute = ({component:Component, ...rest}) => {
    return (  
       <Route {...rest} render={(props)=> {
           if(authentiction.isAuthed()){
              return <Component {...props}/>
           }
           else{
               return <Redirect to={
                   {
                    pathname:'/login',
                    state:{
                        from:props.location 
                    }
                   }
               }/>
           }
       }}/>
    );
}
 
export default ProtectedRoute;