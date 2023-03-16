import {Link} from 'react-router-dom'

import {Component} from 'react' 
import Button from 'react-bootstrap/Button';

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }
  
  
  render(){
    
    return (
      
      <div className='bg-container image1 image2'>
            
            <form type="submit" className='form-container'>
                <div>
                <label htmlFor='USERNAME'>
                  USERNAME
                </label>
                <input id="USERNAME" type="text" placeholder="random"/>
                </div>
                <div>
                <label htmlFor='PASSWORD'>
                    PASSWORD
                </label>
                <input id="PASSWORD" type="text" placeholder="random"/>
                </div>
                
                
                
            </form>
            <ul>
            <Link to="RegistrationPage">
            <Button variant="primary" >LOGIN</Button>{' '}
            </Link>
            </ul>
            
           


    
  


        </div>
      
        
    )
  }
}

export default LoginForm