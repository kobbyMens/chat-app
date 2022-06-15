import { ErrorMessage, useField } from "formik";
import { StyledIcon, StyledLabel, StyledTextInput, ErrorMsg } from '../global-components/styledcomponents';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
export const TextInput = ({icon, ...props}) => {
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false)

    return (
        <div style={ {position: "relative"} }>
        <StyledLabel htmlFor={props.name}>
            {props.label}
        </StyledLabel>
        {
            props.type !== 'password' && 
            <StyledTextInput
             {...field} {...props} 
            />
        }
        <StyledIcon>{icon}</StyledIcon>

        {
            props.type === 'password' && 
            <StyledTextInput
             {...field} {...props}
             type={show ? "text" : "password"}
            />
        }
        {
            props.type === "password" &&
            <StyledIcon onClick={() => setShow(!show)} right >
                {show && <FiEye />}
                {!show && <FiEyeOff/>}
            </StyledIcon>
        }

        {meta.touched && meta.error ? (
            <ErrorMsg>{meta.error}</ErrorMsg>
        )
            : 
              (<ErrorMessage style={{visibilty: "hidden" }}>.</ErrorMessage>)  
        }
        </div>       
    )
}