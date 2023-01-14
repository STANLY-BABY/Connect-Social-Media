import "./sidebar.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link } from "react-router-dom";
function Sidebar() {
  return (

      <div className="Sidebar">
        <div className="container">
          <div className="menu mt-10">
            <Link to="/profile/id" style={{ textDecoration: "none" }}>
              <div className="user">
                <p className="text-2xl font-[mich]">CONNECT</p>
              </div>
            </Link>
            <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
              <div className="item">
                <HomeOutlinedIcon className="" />
                <span>Feed</span>
              </div>
            </Link>
            <Link
              to="/friends"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="item">
                <GroupOutlinedIcon />
                <span>Friends</span>
              </div>
            </Link>
            <Link
              to="/messages"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="item">
                <MessageOutlinedIcon />
                <span>Messages</span>
              </div>
            </Link>
            <Link
              to="/notifications"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="item">
                <NotificationsOutlinedIcon />
                <span>Notifiactions</span>
              </div>
            </Link>
            <Link
              to="/profile/:id"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="item">
                <PermIdentityOutlinedIcon />
                <span>Profile</span>
              </div>
            </Link>
            <Link
              to="/setting"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="item">
                <SettingsOutlinedIcon />
                <span>Setting</span>
              </div>
            </Link>
          </div>
          <div>
          <p className="my-7 font-semibold">Account</p>
          <div className="">
          <div className="flex justify-start ">
  <div className="flex w-12">
    <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto border-none " />
    <p className="ml-2">User_name</p>
  </div>
</div>

          </div>
          
          </div>
        </div>
      </div>
  );
}

export default Sidebar;
