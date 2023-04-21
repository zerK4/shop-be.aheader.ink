// Notification.tsx
import React, { useState } from 'react';
import { AiFillWarning, AiOutlineInfo } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';
import { motion } from 'framer-motion';
import globalStore from '@/store/globalStore';
import axios from 'axios';
import { useUser } from '@auth0/nextjs-auth0/client';

interface NotificationProps {
  level: 'error' | 'warn' | 'info';
  title: string;
  message: string;
  style?: string;
  position?: string;
  onClose?: () => void;
  shouldInput?: boolean;
}

export const notifyVariant = {
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      delay: 0.1,
    },
  },
};

const Notify = ({ title, level, style, shouldInput }: NotificationProps) => {
  const errorStyle = 'shadow-md shadow-red-500';
  const infoStyle = 'shadow-md shadow-blue-500';
  const warnStyle = 'shadow-md shadow-orange-500';
  const defaultStyle = !style ? 'bg-[#F8F8FF] border-2 rounded-md' : style;

  const { apiResponse } = globalStore();
  const { user } = useUser();

  const [email, setEmail] = useState('');

  const icon =
    level === 'warn' ? (
      <AiFillWarning className="text-xl" />
    ) : level === 'error' ? (
      <BiErrorCircle className="text-xl" />
    ) : (
      <AiOutlineInfo className="text-xl" />
    );

  const updateEmail = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: 'POST',
        url: '/api/users',
        data: {
          email: email,
          sid: user?.sub,
        },
      });
      globalStore.setState({
        apiResponse: { message: data.message, data: data.data },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.div
      variants={notifyVariant}
      initial="hidden"
      animate={apiResponse.message ? 'visible' : 'hidden'}
      className={`${defaultStyle} ${
        level === 'error'
          ? errorStyle
          : level === 'warn'
          ? warnStyle
          : infoStyle
      } min-w-[15rem] overflow-hidden absolute z-50 bottom-4 right-4 shadow-md shadow-gray-400 flex flex-col`}
    >
      <div className="p-2 w-full flex justify-between items-center border-b border-neutral-300">
        {icon}
        {title}
      </div>
      <div className="p-2 w-full">{apiResponse.message}</div>
      <div className="px-2 pb-2 w-full">
        {shouldInput && (
          <div className="flex items-center justify-between gap-2">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="p-2 w-full bg-gray-300 border border-neutral-400 outline-none rounded-md"
            />
            <button
              onClick={(e) => updateEmail(e)}
              className="bg-gray-300 p-2 border border-neutral-400 rounded-md hover:bg-gray-400 ease-in-out duration-300"
            >
              Add
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Notify;
