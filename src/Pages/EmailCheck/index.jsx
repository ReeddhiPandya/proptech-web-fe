import React from 'react'
import { Link } from 'react-router-dom'
import PTButton from '../../components/PTButton'

export default function EmailCheck() {
  return (
    <div className="h-screen w-screen flex">
      <div className="h-full w-3/5 bg-orange-500" />
      <div className="h-full w-2/5 relative">
        <div className="absolute top-1/3 left-24 right-32 justify-start flex-col">
          <div className="not-italic font-semibold text-3xl text-[#111D43] font-['Poppins']">Check your email</div>
          <div className="mt-4 mb-10 not-italic font-normal text-base leading-6 text-[#70778E] font-['Poppins']">If we have an account for this email address, you’ll receive an email with a reset link soon.</div>
          <Link to="/"><PTButton label='Back to login' className="!normal-case !rounded-lg !font-semibold !text-base !not-italic" size='large' />       </Link>
        </div>
        <div className="absolute left-28 bottom-12 not-italic font-normal text-base leading-6 flex items-center font-['Poppins'] text-[#70778E]">
          Need a hand? Email our support team at
        </div>
        <div className="absolute left-28 bottom-6 not-italic font-semibold text-base leading-4 flex items-center font-['Poppins'] text-[#111D43]">
          mailto:support@theproptechconnection.com
        </div>
      </div>
    </div>)
}
