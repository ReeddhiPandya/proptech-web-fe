import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import PTButton from '../../components/PTButton'
import PTInput from '../../components/PTInput'

export default function EmailReset() {
  return (
    <div className="h-screen w-screen flex">
      <div className="h-full w-3/5 bg-orange-500" />
      <div className="h-full w-2/5 relative">
        <div className="absolute top-1/4 left-24 right-32 bottom-48 justify-start flex-col">
          <div className="not-italic font-semibold text-3xl leading-10 text-[#111D43] font-['Poppins']">Reset your password</div>
          <div className="mt-4 mb-10 not-italic font-normal text-base leading-6 text-[#70778E] font-['Poppins']">We’ll email you a secure link to change your password.</div>
          <PTInput placeholder="Email" label="Email" fullWidth className='' />
          <Link to="/emailcheck"><PTButton label='Send reset link' className="!mt-10 !normal-case !rounded-lg !font-semibold !text-base !not-italic" size='large' />
          </Link>
        </div>
        <div className="absolute left-28 bottom-12 not-italic font-normal text-sm leading-5 flex items-center font-['Poppins'] text-[#70778E]">
          Remembered your password?
        </div>
        <div className="absolute left-28 bottom-6 not-italic font-semibold text-base leading-4 flex items-center font-['Poppins'] text-[#111D43]">
          <NavLink to='/'>
            Back to login
          </NavLink>
        </div>
      </div>
    </div>)
}
