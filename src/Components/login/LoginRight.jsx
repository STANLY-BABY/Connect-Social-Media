import React from "react";
import './loginright.css';
function LoginRight() {
  return (
    <div className="  w-[31rem] rounded-r-lg bg-[#ffffffe8] h-[34.64rem]  flex flex-col LoginRight ">
      <p className="Heading text-4xl mb-10">CONNECT</p>
      <div class="w-full max-w-[340px]">
  <form>
    <div class="mb-4">
      <p className="text-start font-medium text-base">Email</p>
      <input type='email' className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-medium" id="username" placeholder="Email"/>
    </div>
    <div class="mb-6">
    <p className="text-start font-medium text-base">Password</p>
      <input class="font-medium shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your Password"/>
      <p className="mb-1 text-end">Forgot password ?</p>
      <button
        type="button"
        className=" text-lg bg-gradient-to-r from-l-pink to-l-blue text-white font-medium py-2 px-4 w-80 border border-white rounded"
      >
        Signin
      </button>
      <p className="my-1">OR</p>
      <button type="button" className="flex  w-80 p-1 border-2 rounded-[10px] border-gray-200">
      <img class="w-8 mr-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/157px-Google_%22G%22_Logo.svg.png" alt="Google Logo"/>
      <p class="">Sign in with Google</p>
    </button>
    <p className="mt-3">Don't have an account ? <a className="text-blue-700" href="/signup">Signup</a> </p>
    </div>
  
  </form>
</div>
    </div>
  );
}

export default LoginRight;
