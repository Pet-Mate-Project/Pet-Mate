# 🐾 반려동물 산책 메이트 매칭 서비스앱 '산책가까?'
<div align='center'>

<img src="https://velog.velcdn.com/images/nu11/post/f07e7351-3e7b-4ee9-b83f-4185e3b96bfe/image.png" height=600 width=600 />
	
</div>

<br><br>

## 📑 프로젝트 소개
- 🐿️ '산책가까?' 는 반려동물 산책 메이트를 구하는 SNS형 애플리케이션입니다.
- 🐻 '산책가까?' 프로젝트를 시작하게 된 이유는, 국내 반려동물 양육 가구가 1,500만을 돌파 하였지만, 지역 내 반려동물을 위한 커뮤니티의 수가 적어 커뮤니티 진입 장벽이 높은 것을 확인할 수 있었습니다. 바쁜 현대사회에서 소중한 반려동물 소울 메이트를 쉽고 편하게 찾을 수 있는 커뮤니티가 필요해 보였습니다.
- 🐶 '산책가까?' 의 주요 기능 
	- 아이디 검색을 통해 다른 사용자를 검색하고 팔로우할 수 있습니다.
	- 산책 피드를 통해 반려동물의 소울 산책 메이트를 매칭할 수 있습니다.
	- Pet Story를 통해 반려동물의 일상을 공유할 수 있으며 팔로잉 사용자의 피드를 실시간으로 확인할 수 있습니다.

```
- 도메인 : 배포전
- 테스트 계정
	- ID : 
	- PW :
```

<br><br>


<div align='center'>
	
## 🐣 팀원 소개
**팀원 이름은 기여순이 아닌 가나다순으로 정렬하였습니다.**

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
- styled component
- react-hook-form

### 개발 환경
- 브랜치 전략 : git-flow
- 이슈 관리 : github-Issues
- 아토믹 디자인 패턴
- ESLint
- Prettier

<br><br>

## 🐥 역할 분담
**팀원 이름은 기여순이 아닌 가나다순으로 정렬하였습니다.**

### 페어 프로그래밍
- Input, Button 컴포넌트화
- 메인페이지 UI 구현

### 팀원 김성훈 (기록, 문서, 계획)
- A 기능
- B 기능
- C 기능

### 팀원 김희진 (개발, 디자인)
- A 기능
- B 기능
- C 기능

### 팀원 문민주 (개발, 디자인)
- A 기능
- B 기능
- C 기능

### 팀원 이세영 (기록, 문서, 계획)
- A 기능
- B 기능
- C 기능

<br><br>

<div align='center'>

## 🐱 기능 구현

|Splash|로그인|회원가입|
|:---:|:---:|:---:|
|구현이미지|구현이미지|구현이미지|

<br>

|홈페이지|SNS|프로필|
|:---:|:---:|:---:|
|구현이미지|구현이미지|구현이미지|

<br>

|팔로우|||
|:---:|:---:|:---:|
|구현이미지|구현이미지|구현이미지|

<br>

|업로드|채팅|404페이지|
|:---:|:---:|:---:|
|구현이미지|구현이미지|구현이미지|
	
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
    │  ├─📂deleteAlert
    │  ├─📂errorMessage
    │  ├─📂followCompo
    │  ├─📂iconButton
    │  ├─📂imgUploadBox
    │  ├─📂input
    │  ├─📂navBack
    │  ├─📂postModal
    │  ├─📂profile
    │  ├─📂profileIcon
    │  ├─📂speechBubble
    │  ├─📂tabMenu
    │  └─📂user
    ├─📂pages
    ├─📂reducers
    ├─📂style
    └─📂template
        ├─📂chat
        ├─📂follow
        ├─📂login
        ├─📂main
        ├─📂post
        ├─📂profile
        ├─📂profileModify
        ├─📂profilePost
        ├─📂search
        ├─📂signUp
        ├─📂snsFeed
        ├─📂snsPost
        └─📂walkingFeed
```