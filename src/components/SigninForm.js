import { AiFillFacebook } from 'react-icons/ai';
import { Link,useHistory } from 'react-router-dom';
import {useAuth} from "../context/AuthContext";
import {useState,useRef} from "react"

import {
  AuthContainer,
  AuthForm,
  AuthError,
  LogoContainer,
  Logo,
  Divider,
  Text,
  Line,
  SocialLoginContainer,
  SocialLoginText,
  ForgotPassword,
} from '../styles/authForm';
import logo from '../images/logo.svg';

import InputField from './InputField';
import Button from './Button';




function SignIn() {
  const [loading, setLoading] = useState(false);
const [error, setError] = useState('');
const emailRef = useRef();
const passwordRef = useRef();
const { signin } = useAuth();
const history = useHistory();

  const handleSignin = (e) => {
  e.preventDefault();
  setError('');
  setLoading(true);
  const email = emailRef.current.value;
  const password = passwordRef.current.value;
  signin(email, password)
    .then((ref) => {
      setLoading(false);
      history.push('/');
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });
};
  return (
    <AuthContainer>
      <LogoContainer>
        <Logo src={logo} alt="logo" />
      </LogoContainer>

      <AuthForm onSubmit={(e) => handleSignin(e)}>
        <InputField
          inputPlaceholder="Mobile Number or Email"
          inputType="email"
          labelText="Mobile Number or Email"
          inputRequired={true}
          inputRef={emailRef}
        />

        <InputField
          inputPlaceholder="Password"
          inputType="password"
          labelText="Password"
          inputRequired={true}
          inputRef={passwordRef}
        />

        <Button 
        disabled={loading}
        type="submit" 
        color="#0095F6" 
        text="Log In" 
        />
        {error && <AuthError>{error}</AuthError>}
      </AuthForm>

      <Divider>
        <Line />
        <Text>OR</Text>
        <Line />
      </Divider>

      <SocialLoginContainer>
        <AiFillFacebook fontSize="1.3rem" color="#385185" />
        <SocialLoginText>Log in with Facebook</SocialLoginText>
      </SocialLoginContainer>

      <ForgotPassword>
        <Link to="/accounts/password/reset">Forgot password?</Link>
      </ForgotPassword>
    </AuthContainer>
  );
}


export default SignIn;
