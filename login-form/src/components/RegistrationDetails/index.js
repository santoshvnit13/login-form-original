const RegistrationDetails=(props)=>{
      const {registrationDetailsList} =props 
      
      return (
        <>
        <p>firstName: {registrationDetailsList[0].firstName}</p>
        <hr></hr>
        <p>lastName: {registrationDetailsList[1].lastName}</p>
        <hr></hr>
        <p>company: {registrationDetailsList[2].company}</p>
        <hr></hr>
        <p>email: {registrationDetailsList[3].email}</p>
        <hr></hr>
        <p>areaCode: {registrationDetailsList[4].areaCode}</p>
        <hr></hr>
        <p>phoneNumber: {registrationDetailsList[5].phoneNumber}</p>
        <hr></hr>
        <p>subjects: {registrationDetailsList[6].subjects}</p>
        <hr></hr>
        <p>existence: {registrationDetailsList[7].existence}</p>
        <hr></hr>
        
       
       

        </>
      )
}
export default RegistrationDetails