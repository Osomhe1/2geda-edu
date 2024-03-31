/* eslint-disable no-unused-vars */
import {
  FaBook,
  FaCircleNotch,
  FaMoneyCheck,
  FaMusic,
  FaRegCircleUser,
  FaUsersGear,
} from 'react-icons/fa6'
import {
  MdCastForEducation,
  MdHomeRepairService,
  MdLiveTv,
  MdOutlineAnalytics,
  MdOutlinePayments,
  MdSettingsApplications,
} from 'react-icons/md'
import {
  IoBookmarksOutline,
  IoChatbubbleEllipsesOutline,
  IoHomeOutline,
} from 'react-icons/io5'
import { VscSettings } from 'react-icons/vsc'
import { MdOutlinePayment } from 'react-icons/md'
import { TbHeartRateMonitor } from 'react-icons/tb'
import { app_routes } from '../../utils/app_routes'
import { LiaConnectdevelop, LiaVoteYeaSolid } from 'react-icons/lia'
// import { User, UserMinusIcon } from "lucide-react";
// import { IoMdCard } from 'react-icons/io'
import { TiSpanner } from 'react-icons/ti'
// import { SiReacthookform } from 'react-icons/si'
// import { HiMiniComputerDesktop } from 'react-icons/hi2'
// import { FaUsersCog } from 'react-icons/fa'
// import { GrAnnounce } from 'react-icons/gr'
import { AiOutlineAudit } from 'react-icons/ai'
// import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { BsCalendar2Event, BsChatTextFill } from 'react-icons/bs'
import {
  GitCommitVertical,
  Home,
  HomeIcon,
  MessageCircleDashed,
  Music,
  Ticket,
  TvIcon,
  Video,
  VoteIcon,
} from 'lucide-react'
import { GiTrade } from 'react-icons/gi'
import { LuNetwork, LuNewspaper, LuWorkflow } from 'react-icons/lu'
import { RiSettingsFill } from 'react-icons/ri'
import { ImProfile } from 'react-icons/im'
import { GrBusinessService, GrConnect, GrHomeRounded } from 'react-icons/gr'
import { IoIosPeople, IoMdBook } from 'react-icons/io'
import { PiTelevision } from 'react-icons/pi'

export const defaultMenu = [
  // home 2 sub
  {
    title: '',
    name: 'Home',
    route: '/',
    icon: GrHomeRounded,
    withSubMenu: false,
  },
  {
    title: '',
    name: 'Connect',
    route: '/connect',
    withSubMenu: false,
    icon: IoIosPeople,
  },
  {
    title: '',
    name: 'Commerce',
    route: '/commerce',
    withSubMenu: false,
    icon: GitCommitVertical,
  },

  {
    title: '',
    name: 'Business Directory',
    route: '/business',
    withSubMenu: false,
    icon: FaBook,
  },
  {
    title: '',
    name: 'Chat',
    route: '/chat',
    withSubMenu: false,
    icon: IoChatbubbleEllipsesOutline,
  },
  {
    title: '',
    name: 'Profile',
    route: '/profile',
    withSubMenu: false,
    icon: FaRegCircleUser,
  },
  {
    title: '',
    name: 'Tickets',
    route: '/tickets',
    withSubMenu: false,
    icon: IoBookmarksOutline,
  },
  {
    title: '',
    name: 'Live',
    route: '/live',
    withSubMenu: false,
    icon: MdLiveTv,
  },
  {
    title: '',
    name: 'Stereo',
    route: '/stereo',
    withSubMenu: false,
    icon: FaMusic,
  },
  {
    title: '',
    name: 'Tv',
    route: '/tv',
    withSubMenu: false,
    icon: PiTelevision,
  },
  {
    title: '',
    name: 'Voting',
    withSubMenu: false,
    route: '/voting',
    icon: LiaVoteYeaSolid,
  },
  {
    title: '',
    name: 'Education',
    withSubMenu: false,
    route: '/education',
    icon: IoMdBook,
  },
]
