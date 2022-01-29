import React from 'react';
import SidebarRow from './SidebarRow';
import {
  ExpandMoreOutlined,
  History,
  Home,
  OndemandVideo,
  Subscriptions,
  ThumbUpAltOutlined,
  VideoLibrary,
  WatchLater,
  Whatshot,
} from '@mui/icons-material';
import '../css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarRow selected title='Home' Icon={Home} />
      <SidebarRow title='Trending' Icon={Whatshot} />
      <SidebarRow title='Subscription' Icon={Subscriptions} />
      <hr />
      <SidebarRow title='Library' Icon={VideoLibrary} />
      <SidebarRow title='History' Icon={History} />
      <SidebarRow title='Your videos' Icon={OndemandVideo} />
      <SidebarRow title='Watch Later' Icon={WatchLater} />
      <SidebarRow title='Liked videos' Icon={ThumbUpAltOutlined} />
      <SidebarRow title='Show more' Icon={ExpandMoreOutlined} />
      <hr />
    </div>
  );
};

export default Sidebar;
