import React from "react";
// import styled from "styled-components";
import { LabelStyle, InputStyle, SearchStyle } from './inputStyle';

//회원가입, login input 
export function NameInput({ userName, setName, register }) {
  return (
    <>
      <LabelStyle>사용자 이름
        <InputStyle
          placeholder='2-10자 이내여야 합니다.'
          type="text"
          name="userName"
          value={userName}
          {...register("userName", {
            required: "*이름은 필수 입력사항입니다.",
            minLength: {
              value: 2,
              message: "*이름은 2-10자 이내여야 합니다."
            },
            maxLength: {
              value: 10,
              message: "*이름은 2-10자 이내여야 합니다."
            },
            onChange: (e) => setName(e.target.value),
          })}
          maxLength='10'
          autoFocus
        />
      </LabelStyle>
    </>
  )
}

export function IdInput({ userId, setId, IdCheck, register }) {
  return (
    <>
      <LabelStyle>계정 ID
        <InputStyle
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
          type="text"
          name="userId"
          value={userId}
          {...register("userId", {
            required: "*계정 ID는 필수 입력사항입니다.",
            pattern: {
              value: /^[_A-Za-z0-9.]*$/,
              message: "*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다."
            },
            onChange: (e) => setId(e.target.value),
            onBlur: IdCheck
          })}
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
          autoComplete="off"
        />
      </LabelStyle>
    </>
  )
}

export function EmailInput({ userEmail, setEmail, emailCheck, register }) {
  return (
    <LabelStyle>이메일
      <InputStyle
        placeholder='이메일 주소를 입력해주세요.'
        type="email"
        name="userEmail"
        value={userEmail}
        {...register("email", {
          required: "*이메일은 필수 입력사항입니다.",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "*올바르지 않은 이메일 형식입니다."
          },
          onChange: (e) => setEmail(e.target.value),
          onBlur: emailCheck
        })}
        autoFocus
      />
    </LabelStyle>
  );
}

export function PasswordInput({ userPassword, setPassword, register }) {
  return (
    <LabelStyle>비밀번호
      <InputStyle
        placeholder='비밀번호를 설정해주세요.'
        type="password"
        name="userPassword"
        value={userPassword}
        {...register("password", {
          required: "*비밀번호는 필수 입력사항입니다.",
          minLength: {
            value: 6,
            message: "*비밀번호는 6자 이상이어야 합니다."
          },
          onChange: (e) => setPassword(e.target.value)
        })}
      />
    </LabelStyle>
  );
}

// post에 필요한 input
export function TitleInput({Title,setTitle}) {
  return (
    <LabelStyle>제목
      <InputStyle
        placeholder='2-15자 이내여야 합니다.'
        type="text"
        name="Title"
        value={Title}
        minLength="2"
        maxLength = "15"
        onChange={(e)=>{setTitle(e.target.value)}}
      />
    </LabelStyle>
  );
}


export function PetInfoInput({petInfo,setPetInfo}) {
  return (
    <LabelStyle>반려동물 정보
      <InputStyle
        placeholder='종류 / 나이 / 성별 / 주의사항을 작성해주세요.'
        type="text"
        name="petInfo"
        value={petInfo}
        onChange={(e)=>{setPetInfo(e.target.value)}}
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

export function PostIntroInput({postIntro,setPostIntro}) {
  return (
    <LabelStyle>한마디
      <InputStyle
        placeholder='주의사항이나 남기고싶은 말을 입력해주세요!'
        type="text"
        name="wanttoSay"
        value={postIntro}
        onChange={(e)=>{
          setPostIntro(e.target.value)
        }}
      />
    </LabelStyle>
  );
}

export function SearchInput(props) {
  return (
    <SearchStyle
      placeholder='검색'
      type="search"
      name="search"
      right={props}
    // value={search}
    />
  );
}