# 🐾 반려동물 산책 메이트 매칭 서비스앱 '산책가까?'
<div align='center'>

<img src="https://user-images.githubusercontent.com/54096506/181926408-e4c02559-e140-40c6-9257-6f421b518cab.jpg" />
	
</div>

<br><br>

## 📑 프로젝트 소개
- 배포 : https://pet-mate.vercel.app/
- Test ID : petmate@naver.com
- Test PW : petmate

<br>

- 🐿️ '산책가까?' 는 반려동물 산책 메이트를 구하는 SNS형 애플리케이션입니다.
- 🐻 '산책가까?' 프로젝트를 시작하게 된 이유는, 국내 반려동물 양육 가구가 1,500만을 돌파 하였지만 지역 내 반려동물을 위한 커뮤니티의 수가 적어 커뮤니티 진입 장벽이 높은 것을 확인할 수 있었습니다. 바쁜 현대사회에서 소중한 반려동물 소울 메이트를 쉽고 편하게 찾을 수 있는 커뮤니티가 필요해 보였습니다.
- 🐶 '산책가까?' 의 주요 기능 
	- 아이디 검색을 통해 다른 사용자를 검색하고 팔로우할 수 있습니다.
	- 산책 피드를 통해 반려동물의 소울 산책 메이트를 매칭할 수 있습니다.
	- Pet Story를 통해 반려동물의 일상을 공유할 수 있으며 팔로잉 사용자의 피드를 실시간으로 확인할 수 있습니다.

<br><br>

<div align='center'>
	
## 🐣 팀원 소개
**팀원 이름은 기여순이 아닌 가나다 순으로 정렬 하였습니다.**

|FE. 김성훈|FE. 김희진|FE. 문민주|FE. 이세영|
|:---:|:---:|:---:|:---:|
|<img src="https://avatars.githubusercontent.com/u/100080663?v=4" height=200 width=200 />|<img src="https://avatars.githubusercontent.com/u/54096506?v=4" height=200 width=200 />|<img src="https://avatars.githubusercontent.com/u/83548784?v=4" height=200 width=200 />|<img src="https://avatars.githubusercontent.com/u/97039896?v=4" height=200 width=200 />|
|**github:** [tada-js](https://github.com/tada-js)|**github:** [heejin-k](https://github.com/heejin-k)|**github:** [mandelina](https://github.com/mandelina)|**github:** [sweeeeetpotato](https://github.com/sweeeeetpotato)|


</div>
	
	
<br><br>

## 🛠️기술 및 개발 환경

### 사용한 기술
- React
- redux-toolkit
- redux-thunk
- styled components
- react-hook-form
- pigma

### 개발 환경
- 아토믹 디자인 패턴
- ESLint
- Prettier
- 브랜치 전략 : git-flow
- 이슈 관리 : github-Issues
- Coding Convention : [⚙️함께 정한 '산책가까?' 컨벤션](https://www.notion.so/2bf216fe9516485ca465839ce20f3bef)
- Conference : [💬 함께 진행한 회의록](https://www.notion.so/32f2390c945346b790b90fde711ee733)

<br><br>

## 🐥 역할 분담
**팀원 이름은 기여순이 아닌 가나다 순으로 정렬 하였습니다.**

### 페어프로그래밍
- Input, Button 컴포넌트화
- 메인페이지 UI 구현

### 공통 담당
- 컴포넌트 및 페이지 UI 제작
- 깃허브 이슈 관리 및 코드리뷰 

### 팀원 김성훈 (문서 & 계획 리더)
- 회의록 기록 및 문서 정리
- 로그인 유효성 검사(react-hook-form)
- 검색 기능 구현
- 회원 가입 비밀번호 확인 기능 추가 구현
- 프로젝트 배포(Vercel)

### 팀원 김희진 (디자인 & 개발 리더)
- 전체적인 프로젝트 UI 피그마 디자인
- GitHub Project 활용한 진행 상황 관리
- 회원 가입 기능 구현
- 프로필 수정 기능 구현
- My프로필,User프로필 페이지 구현 및 게시글 랜더링
- Home피드 및 SNS피드 페이지 구현 및  팔로워 게시글 랜더링
- 좋아요 / 좋아요 취소 기능 구현

### 팀원 문민주 (디자인 & 개발 리더)
- 전체적인 프로젝트 UI 피그마 디자인
- 로그인 기능 구현
- 댓글기능
- 게시글 랜더링 , 수정 , 삭제 , 생성 기능
- `Redux-toolkit` 및 `Redux-thunk` 를 이용한 전역 상태 관리 
- Token 관리 및 인증에 따른 페이지 라우팅
- 웹접근성 개선

### 팀원 이세영 (문서 & 계획 리더)
- 회의록 기록 및 문서 정리
- 회원가입 유효성 검사 (react-hook-form)
- 팔로워 & 팔로잉 리스트 페이지 UI 구현 및 팔로우 기능 구현
- 채팅리스트 페이지 UI & 채팅룸 페이지 UI
- Home포스트 및 SNS포스트 상세페이지 UI 구현 및 게시글 랜더링

<br><br>

<div align='center'>

## 🐱 기능 구현
|Splash|회원가입|로그인|
|:---:|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/54096506/181924923-f69bb8c4-7223-42cb-ac15-d699e6e0089f.gif" width=250 />|<img src="https://user-images.githubusercontent.com/54096506/181925184-5b8edd37-c817-46df-bd89-87466019079a.gif" width=250 />|<img src="https://user-images.githubusercontent.com/54096506/181925215-8567a921-825a-4ee0-bd4a-aff121529d33.gif" width=250 /> 

<br>

|홈페이지|SNS페이지|내프로필&수정|
|:---:|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/54096506/181925355-e94dfa0f-74f5-4e81-95ea-e18d580ed551.gif" width=250 />|<img src="https://user-images.githubusercontent.com/54096506/181925398-1a66c960-2daf-4d2a-8d6a-b0701988f945.gif" width=250 />|<img src="https://user-images.githubusercontent.com/54096506/181925430-b9622dcc-9f53-48f7-8fea-0bb3e669d849.gif" width=250 /> 


<br>

|매칭 게시글 등록|SNS 게시글 등록|사용자 프로필|
|:---:|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/54096506/181925600-83cd9fa1-7ac7-41f8-b0f8-10464393aa06.gif" width=250 />|<img src="https://user-images.githubusercontent.com/54096506/181925612-63d61455-3adc-4d4b-b2e2-fffdaa33673d.gif" width=250 />|<img src="https://user-images.githubusercontent.com/54096506/181925631-d58c9755-087a-4f52-8ca1-e6d10b562632.gif" width=250 /> 

<br>

|매칭 게시글 수정|SNS 게시글 수정| 매칭 & SNS 게시글 삭제|
|:---:|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/54096506/181933950-b12e53d6-ea16-4120-983a-e0ae82350fd6.gif" width=250 />|<img src="https://user-images.githubusercontent.com/54096506/181926317-46e79c35-7995-4480-b992-a9c203f355de.gif" width=250 />|<img src="https://user-images.githubusercontent.com/54096506/181925841-59d34376-5fcc-4b93-b546-575170435dd4.gif" width=250 />

<br>

|팔로우 기능|좋아요 기능|댓글 기능|
|:---:|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/54096506/181925674-daa9e6eb-1765-458e-a765-213d0f1a5de0.gif" width=250 />|<img src="https://user-images.githubusercontent.com/54096506/181925692-d119787b-8373-4533-bc80-160667a50c3f.gif" width=250 />|<img src="https://user-images.githubusercontent.com/54096506/181925713-6a31e328-f5f0-40eb-bbe8-6259dda85f8d.gif" width=250 /> 

<br>

|검색 기능|채팅 UI & 404|로그아웃|
|:---:|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/54096506/181925970-0331fcbe-015f-4f32-b162-0f3c56e61fa6.gif" width=250 />|<img src="https://user-images.githubusercontent.com/54096506/181933993-1c07ac6b-aa35-463b-990a-adead26aeca5.gif" width=250 />|<img src="https://user-images.githubusercontent.com/54096506/181925942-cb724fb1-fe01-4c6f-b707-8a5afc8096ce.gif" width=250 /> 
	
</div>

<br><br>

## 🦮프로젝트 실행
```
npm install
npm start
```

<br><br>

## 📂 폴더 구조
```
assets : 이미지 파일 집합
components : 재사용 가능한 컴포넌트 집합
template : 페이지를 만들 수 있도록 컴포넌트/레이아웃 주입
pages : 유저가 보는 실제 콘텐츠
style : 공통 스타일드 컴포넌트, reset.css, 프로젝트 컬러 상수화
				
📦Pet-Mate
├─📂public
└─📂src
    ├─📂assets
    ├─📂components
    │  ├─📂animalBox
    │  ├─📂button
    │  ├─📂comment
    │  ├─📂commentList
    │  ├─📂deleteAlert
    │  ├─📂errorMessage
    │  ├─📂followCompo
    │  ├─📂iconButton
    │  ├─📂imgUploadBox
    │  ├─📂input
    │  ├─📂navBack
    │  ├─📂post
    │  ├─📂postModal
    │  ├─📂profile
    │  ├─📂profileIcon
    │  ├─📂speechBubble
    │  ├─📂tabMenu
    │  └─📂user
    ├─📂pages
    ├─📂reducers
    ├─📂style
    │  └─📂fonts
    └─📂template
        ├─📂chat
        ├─📂follow
        ├─📂homePost
        ├─📂login
        ├─📂main
        ├─📂postDetail
        ├─📂postModify
        ├─📂profile
        ├─📂profileModify
        ├─📂profilePost
        ├─📂search
        ├─📂signUp
        ├─📂snsFeed
        ├─📂snsPost
        ├─📂snsPostModify
        └─📂walkingFeed
				
```
