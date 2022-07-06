import React, { useEffect ,useState} from 'react'
import { useNavigate  } from 'react-router-dom';

import Start from './main/Start'
import Main from './main/Main'
import TempPage from './TempPage'

export default function SetLogin() {
  const [loading,setLoding] = useState ('false'); //token상태에 따른 리다이렉팅페이지 관리
  const navigate = useNavigate();

  // 랜더링 될때 slash화면 로딩
  useEffect(()=>{
    setLoding('true'); 
    const LodingTimer =  setTimeout(()=>{
      setLoding('false');   
    },1000);
    return ()=>clearTimeout(LodingTimer);
  },[]);
  
  useEffect(()=>{
    if(JSON.parse(localStorage.getItem("userinfo"))?.user?.token){
      navigate('/temppage');
    }

  },[navigate])
  return (
    <>
      <Start loading={loading} />
      <Main loading={loading}  />
    
    </>
  );
}
