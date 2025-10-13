# NomaKR - 대한민국 노마드 가이드

한국의 모든 도시를 노마드 관점으로 재발견하세요.

## 프로젝트 개요

NomaKR은 한국에서 디지털 노마드로 생활하려는 사람들을 위한 도시 정보 플랫폼입니다. 20개 한국 도시의 생활비, 인터넷 속도, 주거비, 교통 등 핵심 지표를 제공합니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React

## 주요 기능

### 구현된 UI 컴포넌트

- ✅ **Header**: 고정 네비게이션, 검색바, 언어 선택, 로그인/회원가입
- ✅ **Hero Section**: 메인 헤드라인, CTA, Social Proof
- ✅ **Filter & Sort Bar**: 예산, 지역, 날씨, 교통 필터 및 정렬 옵션
- ✅ **Sidebar**: 인기순위, 추천 도시, 지역별 필터, 최근 본 도시, 공지사항
- ✅ **City Card**: 도시 이미지, 평점, 생활비, 인터넷 속도, 날씨, 교통 정보
- ✅ **City Grid**: 반응형 그리드 레이아웃 (1-4열)
- ✅ **Footer**: 서비스 정보, 법적 정보, 소셜 미디어, 뉴스레터

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈페이지
│   └── globals.css        # 전역 스타일
├── components/            # React 컴포넌트
│   ├── Header.tsx         # 헤더
│   ├── HeroSection.tsx    # 히어로 섹션
│   ├── FilterSortBar.tsx  # 필터 & 정렬 바
│   ├── Sidebar.tsx        # 사이드바
│   ├── CityCard.tsx       # 도시 카드
│   ├── CityGrid.tsx       # 도시 그리드
│   ├── Footer.tsx         # 푸터
│   └── ui/                # Shadcn UI 컴포넌트
├── data/                  # 데이터
│   └── cities.ts          # 도시 더미 데이터 (20개)
└── lib/                   # 유틸리티
    ├── types.ts           # TypeScript 타입 정의
    └── utils.ts           # 유틸리티 함수
```

## 더미 데이터

20개 한국 도시의 더미 데이터가 포함되어 있습니다:
- 서울(강남), 제주, 부산, 강릉, 전주, 춘천, 속초, 여수, 대전, 광주
- 인천, 수원, 대구, 포항, 경주, 통영, 안동, 평창, 제주(서귀포), 제주(애월)

각 도시는 다음 정보를 포함합니다:
- 평점 및 리뷰 수
- 월 생활비 및 임대료
- 인터넷 속도
- 교통 정보 (지하철, KTX)
- 날씨 및 미세먼지
- 카페 및 코워킹 스페이스 수
- 태그 및 영어 친화도

## 반응형 디자인

- **Desktop (>1024px)**: 4열 그리드 + 사이드바
- **Tablet (640-1024px)**: 2-3열 그리드, 사이드바 숨김
- **Mobile (<640px)**: 1열 리스트, 간소화된 헤더

## 주의사항

현재 버전은 **UI만 구현**되어 있으며, 다음 기능은 미구현 상태입니다:
- 필터링 기능
- 정렬 기능
- 검색 기능
- 로그인/회원가입
- API 연동
- 실시간 데이터 업데이트

## 라이센스

이 프로젝트는 개인 사용 목적으로 제작되었습니다.

---

Made with ❤️ in Seoul, Korea
