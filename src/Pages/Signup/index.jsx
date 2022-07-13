import { TextField } from '@mui/material'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PTButton from '../../components/PTButton'
import PTInput from '../../components/PTInput'
import Schema from '../../utils/schema'

export default function Signup() {
  const [initialState, setInitialState] = useState({
    fullName: '',
    companyName: '',
    companyEmail: '',
    password: '',
    confirmPassword: '',
  })

  const handleSignup = (form) => {
    console.log(form)
  }

  return (
    <div>
      <div className='flex flex-row my-7'>
        <div className='w-3/5' />
        <div className='w-2/5 mt-16'>
          <Formik
            initialValues={initialState}
            validationSchema={Schema.signUpValidation}
            onSubmit={(form) => console.log(form)}
          // validateOnChange={(val) => console.log(val)}
          >
            {({ handleSubmit, handleChange, errors, values, touched }) => (
              <>
                <form onSubmit={handleSubmit} noValidate>
                  <div className='flex flex-col w-80'>
                    <h2 className='font-bold text-2xl mb-5'>Sign up</h2>
                    <p>We take security seriously. We'll verify your details once completed, and be in contact via email, ASAP.</p>
                    <div className='my-8'>
                      <div className='my-7'>
                        <PTInput id="fullName" label='Full name' className='w-80' value={values.fullName} handleOnChangeEvent={handleChange} />
                      </div>
                      <div className='my-7'>
                        <PTInput id="companyName" label='Company name' className='w-80' value={values.companyName} handleOnChangeEvent={(e) => handleChange(e)} />
                      </div>
                      <div className='my-7'>
                        <PTInput id="companyEmail" error={!!errors.companyEmail} helperText={errors.companyEmail} label='Company email' className='w-80' value={values.companyEmail} handleOnChangeEvent={(e) => handleChange(e)} />
                      </div>
                      <div className='my-7'>
                        <PTInput id="password" label='Password' className='w-80' type='password' value={values.password} handleOnChangeEvent={(e) => handleChange(e)} />
                      </div>
                      <p>Password must contain at least:
                        <li>1 uppercase letter</li>
                        <li>1 number</li>
                        <li>1 special character</li>
                      </p>
                      <div className='my-7'>
                        <PTInput id="confirmPassword" label='Confirm password' className='w-80' type='password' value={values.confirmPassword} handleOnChangeEvent={(e) => handleChange(e)} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <PTButton label='Sign up' type="submit" />
                    <div className='mt-8'>
                      <span>Already got an account?
                        <span className='font-bold'>
                          <NavLink to='/'>
                            Log in
                          </NavLink>
                        </span></span>
                    </div>
                  </div>
                </form>
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
