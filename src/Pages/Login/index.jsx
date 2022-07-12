import PTInput from "../../components/PTInput";
import Checkbox from '@mui/material/Checkbox';
import PTButton from "../../components/PTButton";

function Login() {
    return (
        <div className="h-screen w-screen flex">
            <div className="h-full w-3/5 bg-orange-500" />
            <div className="h-full w-2/5 relative">
                <div className="absolute top-44 left-24 right-32 bottom-48 justify-start flex-col">
                    <div className="flex-none order-none font-semibold h-12 text-3xl not-italic w-24 font-['Poppins']">Log in</div>
                    <div className="h-16 mt-10 mb-7 bg-[#FCE7E7] items-center flex rounded-lg p-3">
                        <span className="not-italic font-normal text-xs leading-4 flex items-center text-red-700 font-['Poppins'] text-[#DE2828]">
                            There was a problem logging in. Check your email and password or create an account.
                        </span>
                    </div>
                    <PTInput placeholder="Email" label="Email" fullWidth className='' />
                    <PTInput placeholder="Password" label="Password" fullWidth className='!mt-7' />
                    <div className="w-full flex items-center mt-4 mb-4">
                        <Checkbox className="!pl-0" />
                        <div className="flex flex-grow justify-between">
                            <span className="font-semibold text-sm leading-3 not-italic font-['Poppins'] text-[#111D43]">Remember me</span>
                            <span className="font-semibold text-sm leading-3 text-right not-italic font-['Poppins'] text-[#111D43]">Forgot password?</span>
                        </div>
                         
                    </div>
                    <PTButton label='Log in' className="normal-case rounded-lg font-semibold text-base not-italic" size='large' />
                    <div className="flex mt-7 items-center font-normal text-sm leading-5 not-italic font-['Poppins'] text-[#70778E]">
                        Or log  in with
                    </div>
                </div>
                <div className="absolute left-28 bottom-6 flex items-center font-normal text-base leading-6 absolute not-italic font-['Poppins'] text-[#70778E]">
                    Not registered yet? <span className="ml-1 text-[#111D43] font-semibold"> Create an account</span>
                </div>
            </div>
        </div>

    );
}

export default Login;