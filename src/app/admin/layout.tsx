"use client"
import { useAppSelector } from '@/redux/hooks';
import { useSession } from 'next-auth/react';
import React from 'react'
import Login from '../../components/admin-panel/Login';
import Loader from '@/components/admin-panel/Loader';
import SideBar from '@/components/admin-panel/SideBar';

const Layout = ({children}:{children:React.ReactNode}) => {
  

 const isloading = useAppSelector(store => store.LoadingReducer)
 const {data: session}= useSession();
 if(!session?.user) {
    return <Login />
 }   
  
  
    return <div className='flex'>
        <SideBar />
    <div className='w-full h-full'>
      {/* <navbvar/> */}
      <div className='bg-gray-200 p-4 h-[calc(100vh-64px)]'>{children}</div>
    </div>
    {isloading &&<Loader />}
</div >
  
};

export default Layout;