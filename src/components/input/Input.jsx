import React, { useState } from "react";
// import styled from "styled-components";
import { LabelStyle, InputStyle, SearchStyle } from './inputStyle';

//회원가입, login input 
export function NameInput({ userName, setName }) {
  return (
    <>
      <LabelStyle>사용자 이름
        <InputStyle
          placeholder='7-10자 이내여야 합니다.'
          type="text"
          name="userName"
          value={userName}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
      </LabelStyle>
    </>
  )
}


export function IdInput({ userId, setId, IdCheck }) {
  return (
    <>
      <LabelStyle>계정 ID
        <InputStyle
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
          type="text"
          name="userId"
          value={userId}
          onChange={(e) => setId(e.target.value)}
          onBlur={IdCheck}
        />
      </LabelStyle>
    </>
  )
}

export function IntroInput({ userIntro, setIntro }) {
  return (
    <>
      <LabelStyle>소개
        <InputStyle
          placeholder='자신과 반려동물에 대해 소개해 주세요!'
          type="text"
          name="userIntro"
          value={userIntro}
          onChange={(e) => setIntro(e.target.value)}
        />
      </LabelStyle>
    </>
  )
}

export function EmailInput({ userEmail, setEmail, emailCheck }) {
  return (
    <LabelStyle>이메일
      <InputStyle
        placeholder='이메일 주소를 입력해주세요.'
        type="email"
        name="userEmail"
        value={userEmail}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={emailCheck}
        autoFocus
      />
    </LabelStyle>
  );
}

export function PasswordInput({ userPassword, setPassword }) {
  return (
    <LabelStyle>비밀번호
      <InputStyle
        placeholder='비밀번호를 설정해주세요.'
        type="password"
        name="userPassword"
        value={userPassword}
        onChange={(e) => setPassword(e.target.value)}
      />
    </LabelStyle>
  );
}

// post에 필요한 input
export function TitleInput() {
  return (
    <LabelStyle>제목
      <InputStyle
        placeholder='2-15자 이내여야 합니다.'
        type="text"
        name="postTitle"
      // value={postTitle}
      />
    </LabelStyle>
  );
}


export function PetInfoInput() {
  return (
    <LabelStyle>반려동물 정보
      <InputStyle
        placeholder='종류 / 나이 / 성별'
        type="text"
        name="postPetInfo"
      // value={postPetInfo}
      />
    </LabelStyle>
  );
}


export function PostMeetTimeInput() {
  return (
    <LabelStyle>희망 시간
      <InputStyle
        placeholder='자신과 반려동물에 대해 소개해 주세요!'
        type="datetime-local"
        name="postMeetTime"
      // value={postMeetTime}
      />
    </LabelStyle>
  );
}

export function PostIntroInput() {
  return (
    <LabelStyle>한마디
      <InputStyle
        placeholder='주의사항이나 남기고싶은 말을 입력해주세요!'
        type="text"
        name="postIntro"
      // value={postIntro}
      />
    </LabelStyle>
  );
}

export function SearchInput() {
  return (
    <SearchStyle
      placeholder='검색'
      type="search"
      name="search"
    // value={search}
    />
  );
}