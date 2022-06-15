import Reacts from 'react';
import { Link } from 'react-router-dom';
import './home.css'

import {Formik, Form} from 'formik';
import { TextInput } from './FormLib';
import { colors, Copyright, ExtraText, StyledButton, StyledTextLink } from '../global-components/styledcomponents';

import {FiMail, FiLock} from 'react-icons/fi';
import * as Yup from 'yup';
import { ThreeCircles } from 'react-loader-spinner';

const Home = () => {
    
    return (
        <div className="joinOuterContainer">
            <div className="formArea">
            <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            validationSchema={
                Yup.object({
                    email: Yup.string().email("Invalid email address")
                    .required("Required"),
                    password: Yup.string()
                    .min(8, "Password is too short")
                    .max(30, "Password is too long")
                    .required("Required")
                })
            }
            onSubmit={(values, {setSubmitting}) => {
                console.log(values)
            }} 
            >
                {({isSubmitting}) => (
                    <Form className="joinInnerContainer">
                          <h1 className="heading">Login</h1>
                          <TextInput 
                          name="email"
                          type="text"
                          label="Email"
                          placeholder="kobimens@gmail.com"
                          icon={<FiMail />}
                          />
                          <TextInput 
                          name="password"
                          type="password"
                          label="Password"
                          placeholder="********" 
                          icon={<FiLock />} 
                          />
                          <div className="button-wrap">
                          {!isSubmitting && (
                          <Link className="home-link" to={`#`}>
                            <StyledButton type="submit">Login</StyledButton>
                          </Link>
                          )}
                          {isSubmitting && (
                          <ThreeCircles                           
                            color={colors.red}
                            width={100}
                            height={40}
                          />
                          )}
                         </div>
                    </Form>
                )}
            </Formik>
            
            <ExtraText>
              Create Account.<StyledTextLink to='/sign-up'> Signup </StyledTextLink>
            </ExtraText>          
            </div>
            <Copyright>All rights reserved &copy;2022</Copyright>
        </div>
    )
}
 
export default Home 