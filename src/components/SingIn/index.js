import React from 'react'
import { Container, Form, FormButton, FormContent,  FormWrap, Icon, Text ,FormH1, FormInput, FormLabel} from './SignInElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/"> dolla</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>SignIn to your account</FormH1>
                            <FormLabel htmlFor="for" required/>
                            <FormInput type="email" required></FormInput>
                            <FormLabel htmlFor='for' >Password</FormLabel>
                            <FormInput type="passsword" required></FormInput>
                            <FormButton type="submit">Continue</FormButton>
                            <Text>ForgotPassoword</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn;
