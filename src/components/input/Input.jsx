import React from "react";
// import styled from "styled-components";
import { LabelStyle, InputStyle, SearchInput } from './inputStyle';

export function UserName() {
  return (
    <>
      <LabelStyle>사용자 이름
        <InputStyle
          placeholder='7-10자 이내여야 합니다.'
          type="text"
          name="userName"
        // value={userName}
        />
      </LabelStyle>
    </>
  )
}

export function UserEmail() {
  return (
    <>
      <LabelStyle>이메일
        <InputStyle
          placeholder='이메일 주소를 입력해주세요.'
          type="email"
          name="userEmail"
        // value={userEmail}
        />
      </LabelStyle>
    </>)
}

export function UserId() {
  return (
    <>
      <LabelStyle>계정 ID
        <InputStyle
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
          type="text"
          name="userId"
        // value={userId}
        />
      </LabelStyle>
    </>
  )
}

export function UserIntro() {
  return (
    <>
      <LabelStyle>소개
        <InputStyle
          placeholder='자신과 반려동물에 대해 소개해 주세요!'
          type="text"
          name="userIntro"
        // value={userIntro}
        />
      </LabelStyle>
    </>
  )
}

export function EmailInput() {
  return (
    <LabelStyle>이메일
      <InputStyle
        placeholder='이메일 주소를 입력해주세요.'
        type="email"
        name="userEmail"
      // value={userEmail}
      />
    </LabelStyle>
  );
}

export function PasswordInput() {
  return (
    <LabelStyle>비밀번호
      <InputStyle
        placeholder='비밀번호를 설정해주세요.'
        type="password"
        name="userPassword"
      // value={userPassword}
      />
    </LabelStyle>
  );
}


export function Input() {
  // const [userEmail] = useState("");
  // const [userPassword] = useState("");
  // const [userName] = useState("");
  // const [userId] = useState("");
  // const [userIntro] = useState("");
  // const [postTitle] = useState("");
  // const [postPetInfo] = useState("");
  // const [postMeetTime] = useState("");
  // const [postIntro] = useState("");
  // const [search] = useState("");

  return (
    <>
      <LabelStyle>제목
        <InputStyle
          placeholder='2-15자 이내여야 합니다.'
          type="text"
          name="postTitle"
        // value={postTitle}
        />
      </LabelStyle>


      <LabelStyle>반려동물 정보
        <InputStyle
          placeholder='종류 / 나이 / 성별'
          type="text"
          name="postPetInfo"
        // value={postPetInfo}
        />
      </LabelStyle>


      <LabelStyle>희망 시간
        <InputStyle
          placeholder='자신과 반려동물에 대해 소개해 주세요!'
          type="datetime-local"
          name="postMeetTime"
        // value={postMeetTime}
        />
      </LabelStyle>


      <LabelStyle>한마디
        <InputStyle
          placeholder='주의사항이나 남기고싶은 말을 입력해주세요!'
          type="text"
          name="postIntro"
        // value={postIntro}
        />
      </LabelStyle>

      <SearchInput
        placeholder='검색'
        type="search"
        name="search"
      // value={search}
      />



    </>
  );
}