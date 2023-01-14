import React from "react";
import './signupRight.css'

function SignupRight() {
  return (
    <div className="LoginRight rounded-xl w-[31rem] bg-white  m-5 flex flex-col ">
      <p className="Heading text-4xl my-10">CONNECT</p>
      <div class="w-full max-w-[340px]">
        <form>
          <div class="mb-4">
            <p className="text-start font-medium text-base">User Name</p>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-medium"
              id="username"
              type="text"
              placeholder="User_name"
            />
          </div>
          <div class="mb-4">
            <p className="text-start font-medium text-base">Email</p>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-medium"
              id="email"
              type="text"
              placeholder="abcexample@gmail.com"
            />
          </div>
          <div class="mb-4">
            <p className="text-start font-medium text-base">Phone Number</p>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-medium"
              id="phoneNumber"
              type="number"
              placeholder="(123)456789"
            />
          </div>
          
            <div class="mb-4">
              <p className="text-start font-medium text-base">Gender</p>
              <input type="radio" id="male" name="gender" />
              <label for="male" className="mr-2">Male</label>
              <input type="radio" id="female" name="gender"/>
  <label for="female">Female</label>
           
            <div class="mb-4">
              <p className="text-start font-medium text-base">Date of Birth</p>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-medium"
                id="dateOfBirth"
                type="date"
                placeholder=""
              />
            </div>
          </div>

          <div class="mb-6">
            <p className="text-start font-medium text-base">Password</p>
            <input
              class="font-medium shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your Password"
            />
            <button
              type="button"
              className=" text-lg bg-gradient-to-r from-l-pink to-l-blue text-white font-medium py-2 px-4 w-80 border border-white rounded"
            >
              Signup
            </button>
            <p className="my-1">OR</p>
            <button
              type="button"
              className="flex  w-80 p-1 border-2 rounded-[10px] border-gray-200"
            >
              <img
                class="w-8 mr-1"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/157px-Google_%22G%22_Logo.svg.png"
                alt="Google Logo"
              />
              <p class="">Sign in with Google</p>
            </button>
            <p className="mt-3">Already have an account ? </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupRight;
