import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Start from '../template/main/Start'
import Main from '../template/main/Main'
import { AxiosVerifyToken, getTokenVerifyStatus } from '../reducers/verifyTokenSlice'
import { useDispatch,useSelector } from 'react-redux'

export default function InitPage() {

  const VerifyToken = useSelector(getTokenVerifyStatus).status;
  const [loading, setLoding] = useState('false'); //token상태에 따른 리다이렉팅페이지 관리
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // 랜더링 될때 slash화면 로딩
  useEffect(() => {
    setLoding('true');
    const LodingTimer = setTimeout(() => {
      setLoding('false');
    }, 1000);
    return () => clearTimeout(LodingTimer);
  }, []);


  useEffect(() => {
    if(VerifyToken==='idle'){
      const URL = "https://mandarin.api.weniv.co.kr";
      dispatch(AxiosVerifyToken( URL+'/user/checktoken'))
    }

    console.log(VerifyToken);
    //토큰값검증
    if ( VerifyToken===true ) { 
      navigate('/homepage');
    }
    //토큰값이 없거나, 유효하지않을경우
    else if ((VerifyToken==='fail') || (VerifyToken===false)){  // 토큰
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("accountname");
      navigate('/login');
    }
  
  }, [dispatch,VerifyToken])
  return (
    <>
      <Start loading={loading} />
      <Main loading={loading} />
    </>
  );
}
