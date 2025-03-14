import React,  {useEffect, useState, useRef} from 'react'

const SubAddContacts = ({steps, currentStep}) => {
    
    const [newStep, setNewStep] = useState([]);
    const stepRef = useRef();

    const updateStep = (stepNumber, steps) =>{
        const newSteps = [...steps]
        let count = 0;

        while(count < newSteps.length){
        //  current step
            if(count === stepNumber){
                newSteps[count] ={
                   ...newSteps[count],
                   highlighted: true,
                   selected: true,
                   completed: true,
                   
                }
                count++;
            }
        // step completed
        else if(count < stepNumber){
            newSteps[count] ={
                ...newSteps[count],
                highlighted: false,
                selected: true,
                completed: true,
                
             }
             count++;

        }
        // step pending
        else{
            newSteps[count] ={
                ...newSteps[count],
                highlighted: false,
                selected: false,
                completed: false,
                
             }
             count++;

        }

        }
        return newSteps;

        // 

    };
        
    useEffect(()=>{
        // create object

        const stepsState = steps.map((step, index)=>
            
        Object.assign(index, {
            description: step,
            completed: false,
            highlighted: index === 0 ? true : felse,
            selected: index === 0 ? true : false,

        })    
        );

        stepRef.current = stepsState;
        const current = updateStep(currentStep -1, stepRef.current );
        setNewStep(current);

    }, [steps, currentStep]);
    const displaySteps =  newStep.map((step, index) => {
        return(
            <div key={index} 
            className={
                index === newStep.length -1 ?  'w-full flex items-center' : "flex items-center"}>
            <div className='relative flex flex-col items-center text-black-600'>
                
                <div className={`rounded-full transition duration-500 ease-in-out border-2 
                border-orange-300 h-12 w-12 flex items-center justify-center py-3
                 ${steps.selected ? "bg-orange-600 text-white font-bold border border-orange-600 " 
                 : ""
                 }`}
                 >

                    {/* { Display Number } */}
                    {step.completed ? (
                        <span className='text-white font-bold text-xl'>&#10003;
                        </span>
                    ):(
                        index +1
                        )}
                    </div>
                <div className={`absolute top-0 text-center mt-16 w-32 text-xs
                     font-medium upperCase ${step.highlighted ? "text-black-900" :
                      "text-black-400"}`}>
                    {/* { Display descrption } */} 
                    {step.description}
                    </div>
                </div>
                <div className={`flex-auto border-t-2 transition duration-500 
                ease-in-out ${step.completed ? "border-orange-600" : "border-orange-300"} `}>
                    {/* { Display line} */}
                    </div>
        </div>
    
     );
    });

    return(
        <div className='mx-4 p-4 flex justify-between items-center '>
            {displaySteps}
        </div>
    )
}
export default SubAddContacts