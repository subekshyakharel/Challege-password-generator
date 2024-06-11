import React from "react";
const StrengthIndicator = ({password = ""}) =>{
    const getPasswordStrength = () =>{
     const passwordLength = password.length;
     if(passwordLength < 1){
        return "";
     }else if(passwordLength <4){
        return "Very Poor!";
     } else if(passwordLength < 6) {
        return "Poor!"
     } else if (passwordLength <10) {
        return "Medium";
     } else if(passwordLength < 15) {
        return "strong"
     } else if(passwordLength <20){
        return "Very Strong!"
     }
    }

    const passwordStrength = getPasswordStrength();

    if(!passwordStrength) return <React.Fragment/>

    return (
        <div className="password-strength">
            Strength : <span style={{fontSize: "bold", color:"white",}}>{passwordStrength}</span>
        </div>
    )
}
export default StrengthIndicator;