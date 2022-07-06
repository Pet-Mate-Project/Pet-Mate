import React, { useEffect ,useState} from 'react'
import { useNavigate ,Router } from 'react-router-dom';
import Start from './main/Start'
import Main from './main/Main'
import TempPage from './TempPage'

export default function SetLogin() {
  const [visible,setvisible] = useState('true');
  const [loading,setLoding] = useState ('false');
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
      setvisible('false')
      navigate('/temppage');
    }
    else{
      return
    }
  },[navigate])

  console.log("👁",visible);

  return (
    <>
      <Start loading={loading} />
      <Main loading={loading} visible={visible} />
    </>
  );
}
