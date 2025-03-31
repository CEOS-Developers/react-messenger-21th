# 3~4주차 미션: React-Messenger

# 서론

안녕하세요 🙌🏻 20기 프론트 운영진 **최지원**입니다. 이번 미션에서는 지난 미션을 확장하여 친구 목록, 채팅방 목록 등 부가 기능들을 추가하게 됩니다. 점점 더 완성도 높은 메신저 애플리케이션으로 발전해나가는 과정인 만큼, 기능 확장과 UI의 일관성을 고려하면서 진행해보세요!

이번 주도 디자이너와의 협업으로 진행되는 미션입니다. 디자이너분께서 리디자인한 새로운 화면을 참고하여, 여러분의 코드로 구현해 나가시면 됩니다. UI와 UX의 완성도를 높이기 위해 피그마 파일을 세심하게 분석하고 구현해 보세요.

또한, 지난주에 적용한 TypeScript와 TailwindCSS(또는 StyledComponent)를 활용하면서 부족했던 부분은 이번 기회에 리팩토링해보는 것도 추천드립니다.

특히 이번 미션의 주요 목표는 React Routing 기법에 익숙해지는 것입니다. **SPA(Single Page Application)**의 라우팅 특성을 이해하고, 다양한 페이지 전환을 React Router로 자연스럽게 구현해 보세요.

그럼 이번 미션도 파이팅입니다! 🎉

# 미션

## Key Questions

- React Router의 동적 라우팅(Dynamic Routing)이란 무엇이며, 언제 사용하나요?
- 네트워크 속도가 느린 환경에서 사용자 경험을 개선하기 위해 사용할 수 있는 UI/UX 디자인 전략과 기술적 최적화 방법은 무엇인가요?
- React에서 useState와 useReducer를 활용한 지역 상태 관리와 Context API 및 전역 상태 관리 라이브러리의 차이점을 설명하세요.

## 미션 목표

- TypeScript를 적극적으로 활용하여 코드의 타입 안정성을 확보합니다.
- React Router를 사용해 페이지 간 라우팅을 구현하고, 동적 경로와 URL 파라미터를 이해합니다.
- useState와 useReducer를 사용하여 컴포넌트의 로컬 상태를 관리하고, 상태 관리 로직을 최적화합니다.
- Tailwind CSS 혹은 Styled Components로 스타일링하여 일관된 디자인 시스템을 구축합니다.

## 기한

2025년 4월 26일 토요일

## 필수 구현 기능

- 피그마를 보고 [결과화면](https://react-messenger-20th-jw.vercel.app/)과 같이 구현합니다.
- 친구 목록 기능 구현
- React Router를 사용하여 친구 목록, 채팅방 목록, 채팅방 등의 페이지를 각각 구성합니다.
- 로컬스토리지에 채팅방 내용을 저장하여 새로고침 시에도 데이터가 유지되도록 합니다.
- 메세지에 유저 정보(프로필 사진, 이름)를 표시합니다.
- user와 message 데이터를 json 파일에 저장합니다.
- UI는 반응형을 제외하고 피그마파일을 따라서 진행합니다.

### 추가 구현 기능(선택 사항)

- 메세지 읽음/안읽음 표시 기능을 추가합니다.
- 채팅방 핀(Pin) 기능을 구현합니다.
- 채팅방에서 파일 및 이미지 전송이 가능하도록 합니다.
- 이외에도 추가하고 싶은 기능이 있다면 추가하셔도 좋습니다.🙂‍↕️

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
- [ts 절대경로 설정하기](https://tesseractjh.tistory.com/232)
