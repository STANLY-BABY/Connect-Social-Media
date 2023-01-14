import React from "react";
import "./suggestion.css";

const user = [
  {
    name: "User_name1",
    email:'username@gm..',
    img: "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg",
  },
  {
    name: "User_name2",
    email:'username@gm..',
    img: "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg",
  },
  {
    name: "User_name3",
    email:'username@gm..',
    img: "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg",
  },
  {
    name: "User_name4",
    email:'username@gm..',
    img: "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg",
  },
];

function Suggestion() {
    // console.log(user)
  return (
    <div className="Suggestion">
      <div className="search flex mt-10 mb-8">
        <input
          className="shadow border-blue-200 appearance-none border rounded-full h-14 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline font-medium"
          id="search"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex">
        <p className="font-medium mr-12">Suggestions For You </p>
        <a className="text-sky-500" href="#">
          See All
        </a>
      </div>
        {user.map((data) => {
            {console.log(data.name)}
          return <div className="flex ">
          <div className="flex w-12">
            <img
              src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
              alt="..."
              className=" shadow rounded-full border-2 border-pink-400 max-w-full h-auto mt-5 m mr-2 "
            />
            <div>
            <p className="mt-1">{data.name}</p>
            <p className="text-sm ml-2 text-slate-400">{data.email}</p>
            </div>
            <button
              type="button"
              className="  bg-[#a974ff] text-white font-medium py-1 px-2 w-20 border ml-5 border-white rounded"
            >
              Follow
            </button>
          </div>
        </div>
        })}

        <hr className="w-72 ml-12 mt-3"/>
        <div className="onlineFriends">
            <p className="ml-16 mt-5">Online</p>
            {user.map((data) => {
            {console.log(data.name)}
          return <div className="flex ">
          <div className="flex w-12 relative">
            <img
              src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
              alt="..."
              className=" shadow rounded-full border-2 border-pink-400 max-w-full h-auto mt-5 m mr-2 "
            />
            <div className="online w-3 h-3 bg-lime-500 rounded-full absolute top-4 right-24"></div>
            <div>
            <p className="mt-1">{data.name}</p>
            <p className="text-sm ml-2 text-slate-400">{data.email}</p>
            </div>
          </div>
        </div>
        })}
        </div>
    </div>
  );
}

export default Suggestion;
