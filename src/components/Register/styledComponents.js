import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
`
export const RegisterSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const RegisterImage = styled.img`
  height: 400px;
  width: 400px;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const Heading = styled.h1`
  font-size: 35px;
  font-weight: 600;
  font-family: 'Roboto';
`
export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 200px;
`
export const CustomLabel = styled.label`
  font-size: 15px;
  font-weight: 600;
  font-family: 'Roboto';
  color: #64748b;
  margin-bottom: 5px;
`
export const CustomInput = styled.input`
  height: 35px;
  padding-left: 15px;
  font-size: 17px;
  font-weight: 500;
  width: 350px;
  font-family: 'Roboto';
  color: #475569;
  margin-bottom: 20px;
  outline: none;
`
export const Select = styled.select`
  font-family: 'Roboto';
  padding-left: 15px;
  font-size: 15px;
  font-weight: 500;
  height: 35px;
  width: 350px;
  border-radius: 3px;
  outline: none;
`
export const Option = styled.option`
  padding-left: 15px;
  font-size: 17px;
  font-weight: 500;
`
export const RegisterNowButton = styled.button`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffffff;
  background-color: #3b82f6;
  outline: none;
  border: none;
  border-radius: 7px;
  padding: 6px;
  height: 35px;
  cursor: pointer;
  margin-top: 25px;
  width: 150px;
`
export const ErrorMsg = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ff0b37;
`
