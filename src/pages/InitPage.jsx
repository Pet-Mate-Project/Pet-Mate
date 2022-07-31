import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AxiosVerifyToken, getTokenVerifyStatus } from '../reducers/verifyTokenSlice'
import Start from '../template/main/Start'
import Main from '../template/main/Main'

export default function InitPage() {
  const VerifyToken = useSelector(getTokenVerifyStatus).status;
  const [loading, setLoding] = useState('false'); //token상태에 따른 리다이렉팅페이지 관리
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    setLoding('true');
    const LodingTimer = setTimeout(() => {
      setLoding('false');
    }, 1000);
    return () => clearTimeout(LodingTimer);
  }, []);

  useEffect(() => {
    if (VerifyToken === 'idle') {
      const URL = 'https://mandarin.api.weniv.co.kr';
      dispatch(AxiosVerifyToken(URL + '/user/checktoken'));
    }

    if (VerifyToken === true) {
      navigate('/homepage');
    }
    else if ((VerifyToken === 'fail') || (VerifyToken === false)) {  
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('accountname');
      navigate('/login');
    }
  }, [dispatch, VerifyToken])
  
  return (
    <>
      <Start loading={loading} />
      <Main loading={loading} />
    </>
  );
}
