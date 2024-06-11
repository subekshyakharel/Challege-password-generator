import { useState } from "react";

const Passwordgenerator = () =>{
const [password, setpassword] = useState("");
const [error, setError] = useState("");

const generator = (checkbox, length) =>{
    let charset = "";
    let generatepassword = "";

    const selectedOption = checkbox.filter((item) => item.state)

    if(selectedOption.length === 0) {
        setError("Select at least one")
        setpassword = " ";
        return
    }

    selectedOption.forEach((option) => {
    switch(option.title) {
        case "Include Uppercase Letters" :
            charset += "QWERTYUIOPASDFGHJKLZXCVBNM"
            break;

            case "Include Lowercase Letters" :
                charset += "qwertyuiopasdfghjklzxcvbnm"
                break;

                case "Include Numbers" :
                    charset += "1234567890"
                    break;

                    case "Include symbols" :
                        charset += "!@#$%^&*~?/"
                        break;

                        default :
                        break;
    }
    })

    for(let i=0; i<length; i++){
        const randomId = Math.floor(Math.random() * charset.length);
        generatepassword += charset[randomId];
    }
    setpassword(generatepassword)
    setError("")
};

return {password, error, generator}

}
export default Passwordgenerator;
