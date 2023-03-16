import {React,Component} from 'react' ;
import Button from 'react-bootstrap/Button';
import RegistrationDetails from '../RegistrationDetails';
import './index.css'  

class RegistrationPage extends Component{
  state={
    firstName:"",
    lastName:"",
    company:"",
    email:"",
    areaCode:"",
    phoneNumber:"",
    subjects:"",
    existence:"YES",
    registrationDetailsList:[],
    click:false
  }
  onChangeFirstName=(event)=>{
    this.setState({firstName:event.target.value})
  }
  onChangeLastName=(event)=>{
    this.setState({lastName:event.target.value})
  }
  onChangeCompany=(event)=>{
    this.setState({company:event.target.value})
  }
  onChangeEmail=(event)=>{
    this.setState({email:event.target.value})
  }
  onChangeAreaCode=(event)=>{
    this.setState({areaCode:event.target.value})
  }
  onChangePhoneNumber=(event)=>{
    this.setState({phoneNumber:event.target.value})
  }
  onChangeSubject=(event)=>{
    this.setState({subjects:event.target.value})
  }
  onChangeYes=(event)=>{
    this.setState({existence:event.target.value})
  }
  onChangeNo=(event)=>{
    this.setState({existence:event.target.value})
  }
  
  submitForm=(event)=>{
    event.preventDefault()
    const {firstName,lastName,company,email,areaCode,phoneNumber,subjects,existence}=this.state
    this.setState({registrationDetailsList:[
      {firstName:firstName},
    {lastName:lastName},
    {company:company},
    {email:email},
    {areaCode:areaCode},
    {phoneNumber:phoneNumber},
    {subjects:subjects},
    {existence:existence}
    ],click:true})
    
  }
    render(){
      const {
      registrationDetailsList,click}=this.state
        return(
            
          click ?
            <RegistrationDetails registrationDetailsList={registrationDetailsList}/>
           :
            <>
            <h1>Event Registration Form</h1>
            <form>
            <div >
              <span>Name</span> 
            <div className='name-container'>
                <div>
                    <input type="text" id="name" onChange={this.onChangeFirstName}/>
                    <label htmlFor="name">First Name</label>
                </div>
                <div>
                  <input type="text" id="lastName" onChange={this.onChangeLastName}/>
                  <label htmlFor="lastName">Last Name</label>
                </div>
              
            </div>
            </div> 

            <div>
              <span>Company</span>
              <input type="text" onChange={this.onChangeCompany}/>
            </div>
            
            <div>
              <span>Email</span>
              <input type="text" placeholder='example@email.com' onChange={this.onChangeEmail}/>
            </div>


            <div >
              <span>Phone</span> 
            <div className='name-container'>
                <div>
                    <input type="text" id="Area Code" onChange={this.onChangeAreaCode}/>
                    <label htmlFor="Area Code">Area Code</label>
                </div>
                <div>
                  <input type="text" id="Phone Number" onChange={this.onChangePhoneNumber}/>
                  <label htmlFor="Phone Number">Phone Number</label>
                </div>
              
            </div>
            </div> 
            <div>
              <span>Subject</span>
              <select id="status" onChange={this.onChangeSubject} >
                <option value="Arts">Arts</option>
                <option value="Social interaction">Social interaction</option>
                <option value="Astronomy">Astronomy</option>
              </select>
            </div>
            <div>
            <p>
              Are you an exisiting customer?
            </p>
            <div>
            <input type="radio"  id="YES" value="YES" checked name="true" onChange={this.onChangeYes}/>
            <label htmlFor="YES">YES</label>
            </div>
            <div>
            <input type="radio"  id="NO" value="NO" name="true" onChange={this.onChangeNo}/>
            <label htmlFor="NO">NO</label>
            </div>
            
            </div>  
            
            <Button variant="primary" onClick={this.submitForm}>REGISTER</Button>{' '}
            </form>
            </>
    )}
            
            
        
    }
    
  

export default RegistrationPage
