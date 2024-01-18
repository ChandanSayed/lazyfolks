'use client';

import { useImmer } from 'use-immer';
import { IoEyeOutline } from 'react-icons/io5';
import { IoEyeOffOutline } from 'react-icons/io5';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useImmer({
    phone: '',
    email: '',
    password: '',
    privacyAccepted: false
  });

  const { phone, email, password, privacyAccepted } = userDetails;
  // Handle form submit
  const handleSignup = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!emailRegex.test(email)) {
      console.log('Invalid Email');
      return;
    }

    if (!phoneRegex.test(phoneNumber)) {
      console.log('Invalid Phone');
      return;
    }

    const res = await axios.post('https://dev-api.lazyfolks.in/accounts/signup/', { phone, email, password });
    console.log(res.data);
    console.log(userDetails);
    if (res.data.status === 200) {
      Swal.fire({
        title: 'Good job!',
        text: 'Sign Up Successful!',
        icon: 'success'
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      });
    }
    setUserDetails({
      phone: '',
      email: '',
      password: '',
      privacyAccepted: false
    });
  };

  // event handler to store value to the state
  const handleState = e => {
    const { name, value, checked } = e.target;
    setUserDetails(draft => {
      draft[name] = name === 'privacyAccepted' ? checked : value;
    });
  };

  // function to check all the fields are filled with the values
  const isSignupDisabled = () => {
    return !(phone.trim() && email.trim() && password && privacyAccepted);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg-color px-4">
      <form className="max-w-[600px] w-full rounded-lg bg-white p-4 md:p-8">
        <div className="text-text-color mb-6">
          <h2 className="text-3xl">Sign Up</h2>
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1.5 md:mb-3 text-base">
            Phone
          </label>
          <input type="text" id="phone" name="phone" value={phone} onChange={handleState} className="w-full text-base font-normal border border-border-color rounded-lg py-2 px-4 md:py-3 focus:border-text-color" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1.5 md:mb-3 text-base">
            E-Mail
          </label>
          <input type="email" name="email" id="email" value={email} onChange={handleState} className="w-full text-base font-normal border border-border-color rounded-lg py-2 px-4 md:py-3 focus:border-text-color" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1.5 md:mb-3 text-base">
            Password
          </label>
          <div className="relative">
            <input type={showPassword ? 'text' : 'password'} name="password" id="password" value={password} onChange={handleState} className="w-full text-base font-normal border border-border-color rounded-lg py-2 px-4 md:py-3 focus:border-text-color" />
            {password ? !showPassword ? <IoEyeOutline className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2" onClick={() => setShowPassword(true)} aria-label={'Show Password'} /> : <IoEyeOffOutline className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2" onClick={() => setShowPassword(false)} aria-label={'Hide Password'} /> : null}
          </div>
        </div>
        <div className="mt-8 mb-4">
          <div className="flex sm:items-center justify-center">
            <input type="checkbox" id="privacy" name="privacyAccepted" checked={privacyAccepted} onChange={handleState} className="mr-2 accent-text-color" />
            <span className="text-sm">I’ve read the privacy policy and terms of use</span>
          </div>
        </div>
        <button type="button" onClick={handleSignup} className={`w-32 text-center block mx-auto text-base font-semibold leading-none py-3 text-white rounded-md ${isSignupDisabled() ? 'bg-button-disabled cursor-not-allowed' : 'bg-button-color hover:bg-opacity-80'}`} disabled={isSignupDisabled()}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
