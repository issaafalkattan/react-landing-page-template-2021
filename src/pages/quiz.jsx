import React from "react"
import dynamic from "next/dynamic"



const SurveyComponent = dynamic(() => import("../components/SurveyComp"), {
    ssr: false,
  })
  
const Survey = () => {

    
        

       return(
            <div>
                <SurveyComponent />
            </div>
        )
    /*return (
        <h1>Hello!</h1>
    )*/
}

export default Survey;
