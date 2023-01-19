import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'

import {
  RegisterContainer,
  RegisterSubContainer,
  RegisterImage,
  FormContainer,
  Heading,
  RegisterForm,
  CustomLabel,
  CustomInput,
  Select,
  Option,
  RegisterNowButton,
  ErrorMsg,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      const submitRegistration = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        const topicId = event.target.value
        const filterTopic = topicsList.filter(
          eachItem => eachItem.id === topicId,
        )
        changeTopic(filterTopic[0].displayText)

        /* changeTopic(event.target.value) */
      }

      return (
        <>
          <Header />
          <RegisterContainer>
            <RegisterSubContainer>
              <RegisterImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <FormContainer>
                <Heading>Let Us Join</Heading>
                <RegisterForm onSubmit={submitRegistration}>
                  <CustomLabel htmlFor="name">NAME</CustomLabel>
                  <CustomInput onChange={onChangeName} id="name" value={name} />
                  <CustomLabel htmlFor="topic">TOPICS</CustomLabel>
                  <Select id="topic" value={topic} onChange={onChangeTopic}>
                    {topicsList.map(eachItem => (
                      <Option value={eachItem.id} key={eachItem.id}>
                        {eachItem.displayText}
                      </Option>
                    ))}
                  </Select>
                  <RegisterNowButton type="submit">
                    Register Now
                  </RegisterNowButton>
                  {showError && <ErrorMsg>Please enter your name</ErrorMsg>}
                </RegisterForm>
              </FormContainer>
            </RegisterSubContainer>
          </RegisterContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
