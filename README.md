# 3주차 미션: React-Messenger

# 서론

안녕하세요. 21기 프론트엔드 **김영서**입니다😊.  
메신저를 구현했습니다.

**디자이너와의 협업 미션**

1. [Figma_Designer](https://www.figma.com/design/OEU69uJw5BbMHbVZefdUMO/CEOS_Week2_%EB%A9%94%EC%8B%A0%EC%A0%80_%EC%B5%9C%EC%98%88%EC%9D%80?node-id=35-6239&t=wYooyjsQc9JLResE-1)
2. [Figma_Copy_Front작업](<https://www.figma.com/design/pSkGA22wqJVELKlyP4HMCL/CEOS_Week2_%EB%A9%94%EC%8B%A0%EC%A0%80_%EC%B5%9C%EC%98%88%EC%9D%80-(Copy)?node-id=35-6239&t=XA3uyZjY4tK0vJQo-1>)

# 미션

## 미션 목표

- TypeScript를 사용해봅시다.

  ```
  npm create vite@latest .
  > TypeScript

  npm install
  npm i styled-components
  npm i @types/styled-system
  npm i react-router
  npm i vite-plugin-svgr
  ```

- useState로 컴포넌트의 상태를 관리합니다.
- useEffect와 useRef의 사용법을 이해합니다.
- ❌tailwindcss의 사용법에 익숙해집니다. -> STyledComponent 사용

## 필수 요구사항 검토

- ⭕️ 피그마를 보고 [결과화면](https://react-messenger-20th-jw.vercel.app/)과 같이 구현합니다.
- ⭕️ 디자인 시스템을 구축합니다.
- ❌tailwindcss 혹은 ⭕️styledComponent 스타일 라이브러리를 사용합니다.
- ⭕️채팅방 상단의 프로필을 클릭하면 사용자를 변경할 수 있습니다.
- ⭕️메세지를 보내면 채팅방 하단으로 스크롤을 이동시킵니다.
- ⭕️메세지에 유저 정보(프로필 사진, 이름)를 표시합니다.
- ⭕️user와 message 데이터를 json 파일에 저장합니다.
- ⭕️UI는 **반응형을 제외**하고 피그마파일을 따라서 진행합니다.

### 추가 구현 기능

- ❌더블 클릭 하면 감정표현을 추가합니다.

## 링크 및 참고자료

- [React docs - Hook](https://ko.reactjs.org/docs/hooks-intro.html)
- [React의 Hooks 완벽 정복하기](https://velog.io/@velopert/react-hooks#1-usestate)
- [useEffect 완벽 가이드](https://overreacted.io/ko/a-complete-guide-to-useeffect/)
- [코딩 컨벤션](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- [타입스크립트 핸드북](https://joshua1988.github.io/ts/intro.html)
- [리액트 프로젝트에서 타입스크립트 사용하기 (시리즈)](https://velog.io/@velopert/series/react-with-typescript)
- [디자인 시스템 구축기](https://yozm.wishket.com/magazine/detail/1830/)
- [[영상] : 컴포넌트에 대한 이해](https://www.youtube.com/watch?v=21eiJc90ggo)
- [Styled Component로 디자인 시스템 구축하기](https://zaat.dev/blog/building-a-design-system-in-react-with-styled-components/)
- [Tailwind CSS 장단점, 사용법](https://wonny.space/writing/dev/hello-tailwind-css)
- [ts 절대경로 설정하기](https://tesseractjh.tistory.com/232)
