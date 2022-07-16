import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Start from '../template/main/Start'
import Main from '../template/main/Main'

export default function InitPage() {
  const [loading, setLoding] = useState('false'); //token상태에 따른 리다이렉팅페이지 관리
  const navigate = useNavigate();

  // 랜더링 될때 slash화면 로딩
  useEffect(() => {
    setLoding('true');
    const LodingTimer = setTimeout(() => {
      setLoding('false');
    }, 1000);
    return () => clearTimeout(LodingTimer);
  }, []);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("token"))) {
      navigate('/homepage');
    }

  }, [navigate])
  return (
    <>
      <Start loading={loading} />
      <Main loading={loading} />

    </>
  );
}
