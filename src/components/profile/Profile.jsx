import React, { useRef, useState } from 'react'
import { Wrapper, FileUploader, ProfileImg, FileInput } from './profileStyle'

export function Profile() {
  const [userImg, setImg] = useState('https://raw.githubusercontent.com/Pet-Mate-Project/Pet-Mate/9a1dd2c1758e84421b72fed7d132f5c12e66dc46/src/assets/basic-profile.png');
  const fileInput = useRef(null)

  const onChange = (e) => {
    if (e.target.files[0]) {
      setImg(e.target.files[0])
    } else { //업로드 취소할 시
      setImg("https://raw.githubusercontent.com/Pet-Mate-Project/Pet-Mate/9a1dd2c1758e84421b72fed7d132f5c12e66dc46/src/assets/basic-profile.png")
      return
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }


  return (
    <>
      <Wrapper>
        <ProfileImg
          src={userImg} alt='user-img'
          onClick={() => { fileInput.current.click() }}
        />
        <FileUploader
          for="input-file">
          <FileInput
            id="input-file"
            type="file"
            accept='image/jpg,impge/png,image/jpeg'
            name='profileImg'
            onChange={onChange}
            ref={fileInput}
          />
        </FileUploader>
      </Wrapper>
    </>
  )
}

export default Profile