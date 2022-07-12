import * as Yup from 'yup';

const signUpValidation = () => {
  Yup.object().shape({
    companyEmail: Yup.string()
      .trim()
      .email('Whoops! This email is not a valid format. Please check your entry and try again.')
      .required('Whoops! Email is required. Please check your entry and try again.')
      .max(50),
    password: Yup.string()
      .required('Required')
      .matches(/^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/, 'Not match')
    ,
    confirmPassword: '',
  })
}

const Schema = {
  signUpValidation
}

export default Schema;