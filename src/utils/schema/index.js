import * as Yup from 'yup';

const signUpValidation = () => {
  console.log('-->>>>')
  Yup.object().shape({
    fullName: Yup.string()
      .required('Full name required'),
    companyName: Yup.string()
      .required('Company name required'),
    companyEmail: Yup.string()
      // .email('Whoops! This email is not a valid format. Please check your entry and try again.')
      // .max(50)
      .required('Whoops! Email is required. Please check your entry and try again.'),
    password: Yup.string()
      .required('Required')
      // .matches(/^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/, 'Not match')
    ,
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password dont match'),
  })
}

const Schema = {
  signUpValidation
}

export default Schema;