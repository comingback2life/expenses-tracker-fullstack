import React,{useEffect} from 'react'
import { MainLayout } from '../components/Layout/MainLayout';
import { useNavigate } from 'react-router-dom';
export const Dashboard = () => {
  const navigate =useNavigate();
  useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem('user'));
    if(user?._id){
      navigate('/');
    }
  },[])
  return (
    <MainLayout>Dashboard</MainLayout>
  )
}
