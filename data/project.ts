export const projects = [
  {
    id: 1,
    projectName: 'Image-site',
    skill: ['React', 'TS', 'Redux', 'Styled-components'],
    period: '2022/12/19 ~',
    demo: 'https://sukyung-image-site.vercel.app/',
    repo: 'https://github.com/sukyungdev/image-site',
    description: 'React,Redux를 이용해서 제작한 이미지 검색 사이트',
    feature: ['이미지 검색', '이미지 저장'],
    point: [
      '이미지 렌더링 최적화(적용 예정)',
      'redux를 이용한 상태관리',
      '페이지네이션 인터페이스',
      'localStorage를 이용한 저장 기능',
    ],
    img: '/ImageSite.png',
  },
  {
    id: 2,
    projectName: 'Portfolio',
    skill: ['NextJS', 'Typescript', 'TailwindCSS'],
    period: '2022/11/28 ~ ',
    demo: 'https://sukyungdev-portfolio.vercel.app/',
    repo: 'https://github.com/sukyungdev/portfolio',
    description: 'NextJS를 이용해서 제작한 포트폴리오 사이트',
    feature: [
      'SSR, SSG를 이용해서 포트폴리오 사이트 구현',
      'NextJS를 이용한 API server 생성',
      'Dynamic API 구현',
      'DarkMode 기능',
    ],
    point: [''],
    img: '/portfolio.png',
  },
  {
    id: 3,
    projectName: 'Nanum Movie',
    skill: ['React', 'Javascript', 'React-router', 'MUI'],
    period: '2022/10/03 ~ 2022/11/13',
    demo: 'https://movie-app-geckos-18.netlify.app/',
    repo: 'https://github.com/chingu-voyages/v41-geckos-team-18',
    description: 'React로 제작한 영화 웹 서비스(5인)',
    feature: ['영화 검색 기능', 'Trending', '상세페이지', '분위기에 따른 추천', '비슷한 영화 추천'],
    point: [
      '디자이너 1명 , 개발자 4명으로 제작한 5인 프로젝트',
      '검색, 좋아요, 슬라이드 배너, 모달, 포스터 이미지 렌더, 로딩 스피너 구현 ',
      'MUI를 이용한 스타일링',
    ],
    // img: 'https://user-images.githubusercontent.com/96860670/206892393-1ab049df-3e5d-4416-830b-da47be1739e9.png',
    img: '/NanumMovie.png',
  },
  {
    id: 4,
    projectName: 'Weather-Glass',
    skill: ['React', 'Javascript', 'Styled-component'],
    period: '2022/09/09 ~ 2022/09/27',
    demo: 'https://weather-glass.netlify.app/',
    repo: 'https://github.com/sukyungdev/Weather',
    description: 'React로 제작한 날씨 예보 웹 서비스',
    feature: [
      '현재 지역 확인 및 현재 날씨 예보',
      '다음날 날씨 예보',
      '도시 검색 기능 및 도시에 따른 날씨 예보',
    ],
    point: [''],
    // img: 'https://user-images.githubusercontent.com/96860670/206892439-ddd34820-f73d-464c-8520-923377c25714.png',
    img: '/WeatherGlass.png',
  },
  {
    id: 5,
    projectName: 'Note me',
    skill: ['Javascript', 'Vite'],
    period: '2022/08/01 ~ 2022/09/12',
    demo: 'https://chingu-project-noteme.vercel.app/',
    repo: 'https://github.com/chingu-voyages/v40-toucans-team-10',
    description: 'Javascript로 제작한 메모 웹 서비스(3인)',
    feature: ['메모 CRUD', 'Markdown 인식', '테마 변경'],
    point: [
      'Javascript와 vite로 제작한 MPA 웹 서비스',
      '노트 Delete, Update, Add 구현',
      '테마 레이아웃 및 색상 변경기능 구현',
    ],
    // img: 'https://user-images.githubusercontent.com/96860670/206892547-19921e04-98b7-40a8-9be8-3b276712f5d0.png',
    img: '/Noteme.png',
  },
  {
    id: 6,
    projectName: 'ProjectCollection',
    skill: ['HTML', 'CSS'],
    period: '2022/03/24 ~ 2022/9/19',
    demo: 'https://sudev-cssproject.netlify.app/',
    repo: 'https://github.com/sukyungdev/ProjectCollection_CSS',
    description: 'HTML/CSS로 구현한 웹사이트 모음집',
    feature: [''],
    point: [''],
    // img: 'https://user-images.githubusercontent.com/96860670/206892553-72a090b8-ccd9-49b9-9110-21ff512524db.png',
    img: '/ProjectCSS.png',
  },
];
