import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import Sidebar from '../../Components/user/Sidebar'
import Suggestion from '../../Components/user/Suggestion';


function UserHome() {
  let obj =[
    {name:'Feed',linkTo:'/home',icon:<HomeOutlinedIcon/>},
    {name:'Search',linkTO:'/search',icon:<SearchIcon/>},
    {name:'Message',linkTo:'/message',icon:<MessageOutlinedIcon/>},
    {name:'Notification',linkTo:'/notification',icon:<NotificationsActiveOutlinedIcon/>},
    {name:'Profile',linkTo:'/profile',icon:<AccountCircleOutlinedIcon/>},
  ]
  return (
    <div className='bg-[#f2f7ff]'>
      <div style={{display:'flex'}} >
      <Sidebar title='CONNECT' tab={obj}/>
      <div style={{flex:7}}>
        <h6>home</h6>
      </div>
      <Suggestion />
      </div>
    </div>
  )
}

export default UserHome
