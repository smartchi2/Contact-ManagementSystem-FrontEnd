import {useState} from 'react'
import SubAddContacts from './SubAddContacts';
import { StepperContext } from '../contexts/StepperContext';
import AddContactsControlls from './AddContactsControlls';
import FirstNames from '../steps/FirstNames';
import LastName from '../steps/LastName';
import PhoneNumber from '../steps/PhoneNumber';
import Email from '../steps/Email';
import ContactUserName from '../steps/ContactUserName';
import Add from '../steps/Add';



const AddContacts = () => {
   const [currentStep, setCurrentStep] = useState(1);
   const [userData, setUserData] = useState('');
   const [addData, setAddData] = useState([]);
   const steps = [
      "First Name",
      "Last Name",
      "Contact User Name",
      "Email",
      "Phone Number",
      "Add Now"
   ]

   const displayStep = (step)=>{
      switch(step){
         case 1:
            return <FirstNames />
         case 2:
            return  <LastName />
         case 3:
            return  <ContactUserName />
         case 4:
            return <Email />
         case 5:
            return <PhoneNumber />
         case 6:
            return <Add />
         default:                
      }
   }

   const handleClick = (direction) =>{
      let newStep = currentStep;

      direction === "Next" ? newStep++ : newStep--;

      // check if steps are within bounds
      newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);

   }
    
   return(
    <div className='md: w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
     {/* { Stepper   } */}
     <div className='container horizontal mt-5'>
     <SubAddContacts 
      steps = {steps}
      currentStep = {currentStep}
     />
     
     {/* { Display Components } */}
     <div className='my-10 p-10'>
     <StepperContext.Provider value={{
      userData,
      setUserData,
      addData,
      setAddData,

     }}>
      {displayStep(currentStep)}
     </StepperContext.Provider>
     </div>

     </div>
     {/* { Navigation  controls} */}
     {currentStep !== steps.length && 
     <AddContactsControlls
      handleClick = {handleClick}
      currentStep = {currentStep}
      steps = {steps}
     />
}
    </div>
   )
}
export default AddContacts;