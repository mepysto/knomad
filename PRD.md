📋 PRD: NomaKR 홈페이지
문서 버전: v1.0
작성일: 2025년 10월 14일
작성자: Product Manager
문서 범위: 홈페이지(Landing Page) 한정
상태: Draft

📑 목차

Executive Summary
문제 정의
타겟 사용자
제안 솔루션
목표 및 성공 지표
홈페이지 기능 명세
UI/UX 상세 설계
사용자 플로우
기술 요구사항
우선순위 및 일정


1. Executive Summary
🎯 프로젝트 개요
한국에서 디지털 노마드로 생활하려는 사람들을 위한 도시 정보 플랫폼 NomaKR의 홈페이지를 개발한다. 20개 한국 도시의 생활비, 인터넷 속도, 주거비, 교통 등 핵심 지표를 카드 형식으로 제공하고, 실거주자 리뷰를 통해 신뢰성 있는 정보를 제공한다.
핵심 가치 제안

한눈에 비교: 20개 도시를 카드 그리드로 시각화하여 즉시 비교 가능
실시간 데이터: 날씨, 미세먼지, 월세 등 최신 정보 실시간 반영
필터 & 정렬: 예산, 지역, 날씨 등 맞춤형 검색 기능
한국 특화: 전월세, 배달 문화, 24시간 카페 등 한국 노마드 생활에 필요한 정보

1차 목표

첫 달 MAU: 1,000명
재방문율: 30% 이상


2. 문제 정의
2.1 현재 상황
핵심 문제
한국에서 디지털 노마드로 생활하고 싶은 사람들에게 도시별 생활 조건을 체계적으로 정리한 정보를 제공하는 사이트가 존재하지 않는다.
2.2 구체적 Pain Points
정보 파편화
생활비 → 네이버 블로그 (주관적, 오래됨)
부동산 → 직방/다방 (산재, 비교 어려움)
날씨 → 기상청 (도시별 비교 불가)
인터넷 → 통신사별 확인 (번거로움)
커뮤니티 → 페이스북 그룹 (정보 검색 어려움)
→ 결과: 정보 수집에 평균 10-20시간 소요
신뢰성 부족

개인 블로그의 주관적 정보
부동산 중개인의 편향된 정보
관광 정보와 실거주 정보의 혼재

비교 불가능

도시 간 직접 비교 어려움
기준이 되는 통일된 지표 부재
우선순위에 따른 정렬/필터링 불가

한국 특수성 누락

글로벌 노마드 사이트(Nomad List)는 한국 도시 커버리지 부족
전월세, 보증금 시스템 미반영
배달 문화, 편의점 밀도 등 한국 생활 정보 없음

2.3 문제의 영향
사용자 관점

❌ 잘못된 도시 선택 → 재정착 비용 발생
❌ 정보 수집 시간 낭비 → 생산성 저하
❌ 불확실성 → 의사결정 지연

시장 관점

📉 한국 노마드 생태계 성장 저해
📉 지방 도시 인구 유입 기회 상실
📉 외국인 노마드의 한국 진입 장벽


3. 타겟 사용자
3.1 Primary Persona
👤 페르소나 #1: "글로벌 노마드 민수"
기본 정보

나이: 28-35세
직업: 프리랜서 개발자
거주지: 서울 → 지방 이동 고려 중
수입: 월 300-500만원

특징

💻 컴퓨터 활용 능숙 (개발, 디자인 도구 사용)
📱 SNS 활발 사용 (인스타그램, 링크드인)
🌏 원격 근무 가능한 직군 (소프트웨어 개발, 마케팅, 글쓰기)
🏠 업무 환경을 크게 가리지 않음 (카페, 코워킹, 집)

Pain Points

"서울은 너무 비싸고, 지방은 정보가 없어"
"제주 가고 싶은데 실제 생활비가 얼마나 들까?"
"인터넷 느린 곳은 싫은데 어디가 괜찮을까?"

Goals

생활비 30% 절감하면서 삶의 질 유지
빠른 인터넷과 카페 인프라 확보
같은 라이프스타일의 커뮤니티 형성

👤 페르소나 #2: "외국인 노마드 Sarah"
기본 정보

나이: 26-40세
직업: 콘텐츠 크리에이터 / 마케터
거주지: 해외 → 한국 진입 고려
수입: $2,000-4,000/month

특징

🌏 글로벌 노마드 경험 풍부 (태국, 발리, 포르투갈)
🗣️ 영어 위주 소통
📊 Nomad List 같은 플랫폼 사용 경험
🍜 새로운 문화 체험에 적극적

Pain Points

"한국 도시에 대한 영어 정보가 없어"
"전월세가 뭐야? 보증금은 또 뭐야?"
"외국인도 쉽게 살 수 있는 도시는?"

Goals

안전하고 외국인 친화적인 도시 찾기
합리적인 가격에 높은 삶의 질
빠른 인터넷과 영어 소통 가능한 환경

3.2 사용자 세그먼트
세그먼트비율특징우선순위🇰🇷 국내 노마드60%서울→지방 이동, 한국어 선호High🌏 외국인 노마드30%해외→한국 진입, 영어 필수Medium🎓 준비자10%노마드 준비 중, 정보 수집 단계Low
3.3 사용자 니즈 매트릭스
┌─────────────────────┬──────────┬──────────┬──────────┐
│ 니즈                 │ 중요도   │ 현재만족도│ 기회크기  │
├─────────────────────┼──────────┼──────────┼──────────┤
│ 생활비 정보          │ ⭐⭐⭐⭐⭐│ ⭐⭐     │ 🔥🔥🔥   │
│ 인터넷 속도          │ ⭐⭐⭐⭐⭐│ ⭐⭐     │ 🔥🔥🔥   │
│ 주거비 정보          │ ⭐⭐⭐⭐⭐│ ⭐       │ 🔥🔥🔥🔥 │
│ 도시 간 비교         │ ⭐⭐⭐⭐ │ ⭐       │ 🔥🔥🔥🔥 │
│ 실거주자 리뷰        │ ⭐⭐⭐⭐ │ ⭐⭐     │ 🔥🔥🔥   │
│ 날씨/공기질          │ ⭐⭐⭐   │ ⭐⭐⭐   │ 🔥🔥     │
│ 커뮤니티             │ ⭐⭐⭐   │ ⭐       │ 🔥🔥     │
└─────────────────────┴──────────┴──────────┴──────────┘

4. 제안 솔루션
4.1 솔루션 개요
한국 20개 도시의 생활 정보를 시각적 카드 그리드로 제공하고, 실거주자 평가와 실시간 데이터를 결합한 원스톱 플랫폼
4.2 핵심 차별화 요소
1️⃣ 시각적 도시 카드 그리드
✅ 한눈에 보이는 핵심 지표
✅ 도시 사진으로 직관적 이해
✅ 색상 코드로 장단점 구분 (🟢좋음, 🟡보통, 🔴주의)
2️⃣ 실시간 데이터 통합
✅ 현재 날씨 & 체감온도
✅ 실시간 미세먼지 농도
✅ 최신 월세 시세
✅ 인터넷 속도 (통신사 데이터)
3️⃣ 한국 특화 지표
✅ 전월세 구분 표시
✅ 카페 밀도 (24시간 카페 포함)
✅ 배달 서비스 품질
✅ 편의점 접근성
✅ 코워킹 스페이스 수
4️⃣ 스마트 필터링
✅ 예산별 필터 (₩500k ~ ₩5M)
✅ 지역별 필터 (수도권, 영남, 호남, 강원, 제주)
✅ 날씨 선호도 필터
✅ 교통 옵션 필터 (지하철, KTX)
5️⃣ 다중 정렬 옵션
✅ 추천순 (종합 평점)
✅ 가격 낮은순
✅ 인터넷 빠른순
✅ 공기질 좋은순
4.3 사용자 문제 → 솔루션 매핑
사용자 문제제공 솔루션구현 방법정보 파편화통합 플랫폼20개 도시 원스톱 제공비교 불가도시 카드 그리드동일 지표로 표준화신뢰성 부족실거주자 리뷰별점 + 텍스트 리뷰 시스템시간 낭비스마트 필터우선순위 기반 즉시 정렬최신성 부족실시간 데이터API 연동 (날씨, 공기질)한국 특수성맞춤형 지표전월세, 카페, 배달 등

5. 목표 및 성공 지표
5.1 비즈니스 목표
1차 목표 (첫 달)
🎯 MAU (월간 활성 사용자): 1,000명
🎯 재방문율: 30% 이상
2차 목표 (3개월)
📈 MAU: 3,000명
📈 재방문율: 40%
📈 도시당 평균 리뷰: 20개
5.2 핵심 성공 지표 (KPI)
Primary Metrics
지표목표측정 방법중요도MAU1,000명Google Analytics🔥🔥🔥재방문율30%GA Returning Users🔥🔥🔥평균 체류시간3분 이상GA Session Duration🔥🔥도시 카드 클릭률40%Event Tracking🔥🔥
Secondary Metrics
지표목표측정 방법페이지뷰5,000 PV/월GA회원가입율10%Conversion Funnel리뷰 작성 수50개/월DB Count필터 사용률60%Event Tracking정렬 기능 사용률50%Event Tracking
5.3 성공 기준
✅ 런칭 1개월 성공 조건
✓ MAU 1,000명 달성
✓ 재방문율 30% 이상
✓ 평균 체류시간 3분 이상
✓ 도시당 최소 5개 리뷰
✓ 크리티컬 버그 0건
⚠️ 위험 신호 (Red Flags)
✗ MAU 500명 미만
✗ 재방문율 15% 이하
✗ 평균 체류시간 1분 미만
✗ 이탈률 80% 이상
✗ 도시 카드 클릭률 20% 미만
5.4 데이터 트래킹 계획
Google Analytics 이벤트
javascript// 주요 추적 이벤트
1. city_card_click
   - city_name
   - position_in_grid
   
2. filter_applied
   - filter_type (budget/region/weather)
   - filter_value
   
3. sort_changed
   - sort_type (price/rating/internet)
   
4. review_written
   - city_name
   - rating
   
5. signup_completed
   - source (email/social)

6. 홈페이지 기능 명세
6.1 기능 개요
홈페이지는 5개 주요 섹션으로 구성된다:
1. Header (고정 네비게이션)
2. Hero Section (첫인상 & CTA)
3. Filter & Sort Bar (검색 컨트롤)
4. Main Content (Sidebar + City Grid)
5. Footer (부가 정보)

6.2 섹션별 상세 기능
6.2.1 Header
기능 요구사항
요소설명동작우선순위🏔️ 로고NomaKR 브랜드 로고클릭 시 홈으로 이동P0🔍 검색바도시명 검색자동완성, 엔터 시 결과 표시P0🌐 언어 선택KR/EN 토글클릭 시 언어 전환P1로그인 버튼회원 로그인모달 팝업P1회원가입 버튼신규 가입모달 팝업P1
UI 상세
╔════════════════════════════════════════════════════════════════╗
║  🏔️ NomaKR        [🔍 도시 검색...]    [🌐KR|EN] [로그인] [회원가입] ║
║  ┌──────────────────────────────────────────────────────────┐  ║
║  │ [🏠홈] [🗺️도시] [📊비교] [💬커뮤니티] [📚가이드] [💼프리미엄]│  ║
║  └──────────────────────────────────────────────────────────┘  ║
╚════════════════════════════════════════════════════════════════╝
반응형 동작

Desktop: 전체 메뉴 표시
Tablet: 아이콘 + 텍스트
Mobile: 햄버거 메뉴로 축소

인터랙션
검색바:
- 포커스 시 → 최근 검색어 표시
- 2글자 이상 입력 → 자동완성 드롭다운
- 엔터 또는 선택 → 도시 상세 페이지 이동

언어 토글:
- 클릭 시 → 즉시 언어 전환 (새로고침 없음)
- 현재 언어 하이라이트 표시

6.2.2 Hero Section
기능 요구사항
요소설명목적우선순위메인 헤드라인"🇰🇷 대한민국 노마드 가이드"명확한 가치 전달P0서브 카피"한국의 모든 도시를 노마드 관점으로"부가 설명P03가지 특징원격근무자/외국인/실거주자 평가차별화 포인트P0이메일 입력 CTA빠른 가입 유도전환율 향상P0Social Proof사용자 수, 리뷰 수, 도시 수신뢰도 구축P0
UI 상세
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║              ╔═══════════════════════════════════╗             ║
║              ║   🇰🇷 대한민국 노마드 가이드      ║             ║
║              ╚═══════════════════════════════════╝             ║
║                                                                ║
║        한국의 모든 도시를 노마드 관점으로 재발견하세요          ║
║                                                                ║
║      ┌─────────────────────────────────────────────────┐      ║
║      │ 💼 원격근무자부터 디지털 노마드까지             │      ║
║      │ 🌏 외국인과 한국인 모두를 위한                  │      ║
║      │ 📊 실제 거주자들의 생생한 평가                  │      ║
║      └─────────────────────────────────────────────────┘      ║
║                                                                ║
║      ┌────────────────────────────────────┐                   ║
║      │ 📧 이메일을 입력하세요              │ [시작하기 →]     ║
║      └────────────────────────────────────┘                   ║
║                                                                ║
║             이미 계정이 있으신가요? 로그인하기                  ║
║                                                                ║
║  ┌──────────────────────────────────────────────────────┐    ║
║  │ 👥 1,247명의 노마드 • 📝 3,891개의 리뷰 • 🏙️ 20개 도시│    ║
║  └──────────────────────────────────────────────────────┘    ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
인터랙션
javascript// 이메일 입력 동작
입력 시작 → 실시간 형식 검증
유효한 이메일 → 버튼 활성화 (색상 변경)
버튼 클릭 → 간단 회원가입 모달

// Social Proof 숫자
페이지 로드 → 카운트 업 애니메이션 (0 → 실제 숫자)
반응형

Desktop: 2열 레이아웃 (카피 + CTA)
Mobile: 1열, CTA 버튼 full-width


6.2.3 Filter & Sort Bar
기능 요구사항
필터 기능
필터 타입옵션동작우선순위💰 예산슬라이더 (₩500k~₩5M)범위 내 도시만 표시P0🗺️ 지역체크박스 (수도권/영남/호남/강원/제주)다중 선택 가능P0🌡️ 날씨슬라이더 (온도 범위)현재 또는 연평균P1🚇 교통토글 (지하철 유무, KTX 유무)AND 조건P1🏢 환경드롭다운 (카페 많음, 코워킹 많음)단일 선택P2
정렬 기능
정렬 옵션설명우선순위추천순 ⭐종합 평점 높은순 (기본값)P0가격 낮은순 💵월 생활비 오름차순P0인터넷 빠른순 📡Mbps 내림차순P0공기질 좋은순 💨PM2.5 낮은순P1인기순 👥리뷰 많은순P1
UI 상세
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  ┌────────────┐ ║
║ │💰예산▼│ │🗺️지역▼│ │🌡️날씨▼│ │🚇교통▼│ │🏢환경▼│  │정렬:추천순▼│ ║
║ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘  └────────────┘ ║
║                                                                ║
║ [🔍상세필터] [필터초기화]          [🗂️그리드] [🗺️지도] [📊차트]║
║                                                                ║
║ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║                                                                ║
║ ✓ 총 20개 도시 표시 중 · 최신 업데이트: 2분 전                 ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
필터 드롭다운 상세
예산 필터 예시
┌─────────────────────────────────┐
│ 💰 월 예산 범위                  │
├─────────────────────────────────┤
│                                 │
│  ₩500k ════●══════════ ₩5M     │
│                                 │
│  최소: ₩1,000,000               │
│  최대: ₩3,000,000               │
│                                 │
│  [초기화]          [적용하기]   │
└─────────────────────────────────┘
지역 필터 예시
┌─────────────────────────────────┐
│ 🗺️ 지역 선택                    │
├─────────────────────────────────┤
│ ☑ 수도권 (8개 도시)             │
│ ☐ 영남권 (4개 도시)             │
│ ☐ 호남권 (2개 도시)             │
│ ☐ 강원권 (3개 도시)             │
│ ☐ 제주권 (3개 도시)             │
│                                 │
│  [전체 선택]       [적용하기]   │
└─────────────────────────────────┘
인터랙션 로직
javascript// 필터 적용 플로우
1. 필터 드롭다운 클릭 → 모달 오픈
2. 옵션 선택 → 미리보기 숫자 표시 ("15개 도시")
3. [적용하기] 클릭 → 그리드 업데이트 + 애니메이션
4. 필터 뱃지 표시 → "💰 ₩1M-3M" [X]

// 복합 필터
- 필터 간 AND 조건
- 예: "수도권" AND "월₩2M 이하" → 5개 도시

// 정렬
- 정렬 변경 시 → 즉시 그리드 재정렬 (애니메이션)
- 현재 정렬 표시 → "정렬: 가격 낮은순 ▲"
상태 표시
적용된 필터가 있을 때:
┌─────────────────────────────────────────────┐
│ 적용된 필터: [💰₩1M-3M ✕] [🗺️수도권 ✕]     │
│              [전체 제거]                    │
└─────────────────────────────────────────────┘

필터 결과:
✓ 총 8개 도시 표시 중 (20개 중)

6.2.4 Main Content (Sidebar + City Grid)
레이아웃 구조
재시도천계속╔══════════════╦═════════════════════════════════════════════════╗
║              ║                                                 ║
║  SIDEBAR     ║   CITY GRID (Main Content)                     ║
║  (20% width) ║   (80% width)                                  ║
║              ║                                                 ║
╚══════════════╩═════════════════════════════════════════════════╝

6.2.4.1 Sidebar 기능
기능 요구사항
위젯설명동작우선순위🔥 인기순위Top 5 도시클릭 시 해당 도시로 스크롤P0🎯 추천 도시테마별 추천클릭 시 필터 자동 적용P1📍 지역별지역 필터 퀵링크체크박스 형식P1💡 최근 본 도시열람 히스토리최대 3개 표시P2📢 공지사항운영 공지링크 클릭 시 모달P2
UI 상세
╔══════════════╗
║              ║
║ 🔥 인기순위  ║
║              ║
║ #1 서울(강남)║
║    ⭐ 4.8   ║
║              ║
║ #2 제주      ║
║    ⭐ 4.9   ║
║              ║
║ #3 부산      ║
║    ⭐ 4.7   ║
║              ║
║ #4 강릉      ║
║    ⭐ 4.6   ║
║              ║
║ #5 전주      ║
║    ⭐ 4.5   ║
║              ║
║──────────────║
║              ║
║ 🎯 추천 도시 ║
║              ║
║ • 저렴한 곳  ║
║ • 조용한 곳  ║
║ • 해변 도시  ║
║ • 산악 도시  ║
║              ║
║──────────────║
║              ║
║ 📍 지역별    ║
║              ║
║ □ 수도권     ║
║ □ 영남권     ║
║ □ 호남권     ║
║ □ 강원권     ║
║ □ 제주권     ║
║              ║
║──────────────║
║              ║
║ 💡 최근 본   ║
║              ║
║ • 서울(강남) ║
║ • 제주       ║
║              ║
║──────────────║
║              ║
║ 📢 공지사항  ║
║              ║
║ • 신규 도시  ║
║   추가!      ║
║ • 리뷰 이벤트║
║              ║
╚══════════════╝
인터랙션
javascript// 인기순위 클릭
클릭 → Smooth scroll to 해당 도시 카드
      + 카드 하이라이트 애니메이션 (깜빡임)

// 추천 도시 클릭
"저렴한 곳" 클릭 → 자동 필터 적용 (생활비 ₩1.5M 이하)
                  + 정렬 "가격 낮은순"

// 지역별 체크박스
체크/해제 → 실시간 그리드 필터링
          + URL 쿼리 파라미터 업데이트

6.2.4.2 City Grid 기능
그리드 레이아웃
데스크톱: 4열 그리드 (4 cards per row)
태블릿:   3열 그리드 (3 cards per row)
모바일:   1열 리스트 (1 card per row)
도시 카드 구조
┌──────────────────────────────────────┐
│                                      │
│  ╔════════════════════════════════╗  │
│  ║     [도시 대표 이미지]         ║  │
│  ║     (16:9 비율)                ║  │
│  ╚════════════════════════════════╝  │
│                                      │
├──────────────────────────────────────┤
│  🏙️ 서울 (강남구)          #1       │
│  🇰🇷 대한민국 · 수도권              │
│                                      │
│  ⭐⭐⭐⭐⭐ 4.8 (324 리뷰)          │
├──────────────────────────────────────┤
│                                      │
│  💵 ₩2,500,000 / 월                 │
│  📡 1,000 Mbps                       │
│  👍 추천 92%                         │
│                                      │
├──────────────────────────────────────┤
│  🌤️ 15°C 쾌적                       │
│  💨 PM 25㎍/㎥ 보통                  │
│  🚇 9개 노선                         │
│                                      │
├──────────────────────────────────────┤
│                                      │
│  [자세히 보기]         [❤️ 찜하기]   │
│                                      │
└──────────────────────────────────────┘
카드 컴포넌트 상세 스펙
요소데이터 타입표시 형식조건부 표시도시 이미지URL16:9, lazy load항상도시명Stringh2, 굵게항상국가/지역String작게, 회색항상랭킹 번호Integer#1~#20항상종합 평점Float⭐ 0.0~5.0리뷰 1개 이상리뷰 수Integer(N개 리뷰)리뷰 1개 이상월 생활비Integer₩ 형식항상인터넷 속도IntegerMbps데이터 있을 때추천률Percentage%리뷰 3개 이상현재 날씨Object🌤️ + 온도실시간 API미세먼지IntegerPM ㎍/㎥실시간 API교통 정보String요약데이터 있을 때
카드 상태 (States)
css/* Default State */
border: 1px solid #E0E0E0;
box-shadow: 0 2px 8px rgba(0,0,0,0.1);

/* Hover State */
box-shadow: 0 4px 16px rgba(0,0,0,0.15);
transform: translateY(-4px);
transition: all 0.3s ease;

/* Active/Clicked State */
border: 2px solid #0047AB;
box-shadow: 0 6px 20px rgba(0,71,171,0.2);

/* Favorited State */
❤️ 아이콘: 빈 하트 → 꽉찬 하트 (빨강)
인터랙션
javascript// 카드 클릭
카드 전체 영역 클릭 → 도시 상세 페이지 이동
(단, 버튼은 별도 동작)

// 찜하기 버튼
❤️ 클릭 → 로그인 상태 확인
         → 로그인 시: 찜 목록 추가 + 토스트 "제주를 찜했습니다"
         → 미로그인 시: 로그인 모달

// 이미지 로딩
- Lazy loading (Intersection Observer)
- Skeleton UI 표시 (로딩 중)
- 에러 시 placeholder 이미지

// 실시간 데이터 업데이트
- 날씨/미세먼지: 5분마다 자동 갱신
- 업데이트 시 fade 애니메이션

6.2.4.3 그리드 동작 로직
초기 로드
javascript// 페이지 진입 시
1. 서버에서 20개 도시 데이터 fetch
2. Skeleton UI 8개 표시 (첫 화면)
3. 데이터 도착 → Fade-in 애니메이션
4. 나머지 12개는 스크롤 시 로드 (Lazy loading)
필터/정렬 적용
javascript// 필터 변경 시
1. 필터 적용 버튼 클릭
2. 그리드 Fade-out (0.2s)
3. 필터링된 도시만 남김
4. 새 순서로 재정렬
5. Fade-in + Stagger 애니메이션 (0.1s 간격)
6. "총 N개 도시 표시 중" 업데이트

// 정렬 변경 시
1. 드롭다운에서 정렬 선택
2. 카드들이 새 위치로 이동 (0.5s ease-in-out)
3. Position 애니메이션 (CSS transform)
무한 스크롤 (선택사항, P2)
javascript// 스크롤 하단 도달 시
1. "더 보기" 버튼 표시
2. 클릭 시 다음 20개 도시 로드
3. 기존 그리드 하단에 추가
4. Smooth scroll 약간 위로 (새 컨텐츠 인지)
빈 상태 (Empty State)
필터 결과가 0개일 때:

┌─────────────────────────────────────┐
│                                     │
│         🔍                          │
│                                     │
│    조건에 맞는 도시가 없습니다       │
│                                     │
│  필터를 조정해보시겠어요?            │
│                                     │
│     [필터 초기화]                   │
│                                     │
└─────────────────────────────────────┘

6.2.5 Footer
기능 요구사항
섹션내용우선순위서비스 정보소개, 가이드, FAQP1법적 정보이용약관, 개인정보처리방침P0소셜 미디어인스타그램, 트위터, 유튜브P1뉴스레터이메일 구독P2저작권© 2025 NomaKRP0
UI 상세
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║  ┌──────────────┬──────────────┬──────────────┬─────────────┐ ║
║  │ 서비스       │ 고객지원     │ 법적정보     │ 팔로우      │ ║
║  ├──────────────┼──────────────┼──────────────┼─────────────┤ ║
║  │ 소개         │ FAQ          │ 이용약관     │ 📷 Instagram│ ║
║  │ 가이드       │ 문의하기     │ 개인정보     │ 🐦 Twitter  │ ║
║  │ 프리미엄     │ 파트너십     │ 쿠키정책     │ 📺 YouTube  │ ║
║  │ 블로그       │              │              │ 💬 카카오톡 │ ║
║  └──────────────┴──────────────┴──────────────┴─────────────┘ ║
║                                                                ║
║  ┌──────────────────────────────────────────────────────────┐ ║
║  │ 📧 뉴스레터 구독하고 최신 노마드 정보 받아보세요         │ ║
║  │ [이메일 입력...]                      [구독하기]         │ ║
║  └──────────────────────────────────────────────────────────┘ ║
║                                                                ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ║
║                                                                ║
║  🏔️ NomaKR  |  한국 디지털 노마드의 모든 것                  ║
║  © 2025 NomaKR. All rights reserved.                          ║
║  Made with ❤️ in Seoul, Korea                                 ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝

7. UI/UX 상세 설계 {#7-uiux-상세-설계}
7.1 전체 페이지 레이아웃 (완전판)
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  HEADER (고정, z-index: 100)                                  ┃
┃  🏔️ NomaKR  [🔍검색]  [🌐KR|EN]  [로그인]  [회원가입]         ┃
┃  [🏠홈] [🗺️도시] [📊비교] [💬커뮤니티] [📚가이드] [💼프리미엄]   ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                                               ┃
┃  HERO SECTION                                                 ┃
┃  ╔═══════════════════════════════════════════════════════╗   ┃
┃  ║       🇰🇷 대한민국 노마드 가이드                      ║   ┃
┃  ║   한국의 모든 도시를 노마드 관점으로 재발견하세요      ║   ┃
┃  ║                                                       ║   ┃
┃  ║   [📧 이메일 입력...]          [시작하기 →]          ║   ┃
┃  ║                                                       ║   ┃
┃  ║   👥 1,247명 • 📝 3,891개 리뷰 • 🏙️ 20개 도시       ║   ┃
┃  ╚═══════════════════════════════════════════════════════╝   ┃
┃                                                               ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  SOCIAL PROOF                                                 ┃
┃  [조선일보] [한경비즈] [매경이코노미] [테크크런치] [노컷뉴스]  ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                                               ┃
┃  FILTER & SORT BAR                                            ┃
┃  [💰예산▼] [🗺️지역▼] [🌡️날씨▼] [🚇교통▼]    [정렬:추천순▼]  ┃
┃  ✓ 총 20개 도시 표시 중                                        ┃
┃                                                               ┃
┣━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃           ┃                                                   ┃
┃ SIDEBAR   ┃   CITY GRID                                       ┃
┃           ┃                                                   ┃
┃ 🔥인기순위 ┃   ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐           ┃
┃ #1 서울   ┃   │ 서울 │ │ 제주 │ │ 부산 │ │ 강릉 │           ┃
┃ #2 제주   ┃   │ #1   │ │ #2   │ │ #3   │ │ #4   │           ┃
┃ #3 부산   ┃   │ 4.8⭐│ │ 4.9⭐│ │ 4.7⭐│ │ 4.6⭐│           ┃
┃           ┃   │₩2.5M │ │₩1.8M │ │₩1.6M │ │₩1.4M │           ┃
┃ 🎯추천    ┃   └──────┘ └──────┘ └──────┘ └──────┘           ┃
┃ • 저렴한곳┃                                                   ┃
┃ • 조용한곳┃   ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐           ┃
┃           ┃   │ 전주 │ │ 춘천 │ │ 속초 │ │ 여수 │           ┃
┃ 📍지역별  ┃   │ #5   │ │ #6   │ │ #7   │ │ #8   │           ┃
┃ □ 수도권  ┃   │ 4.5⭐│ │ 4.4⭐│ │ 4.3⭐│ │ 4.6⭐│           ┃
┃ □ 영남권  ┃   │₩1.2M │ │₩1.3M │ │₩1.1M │ │₩1.5M │           ┃
┃           ┃   └──────┘ └──────┘ └──────┘ └──────┘           ┃
┃           ┃                                                   ┃
┃           ┃   [더 보기...]                                    ┃
┃           ┃                                                   ┃
┣━━━━━━━━━━━┻━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  FOOTER                                                       ┃
┃  [서비스] [고객지원] [법적정보] [팔로우]                       ┃
┃  © 2025 NomaKR. Made with ❤️ in Seoul                        ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
7.2 디자인 시스템
색상 팔레트
css/* Primary Colors */
--primary-blue: #0047AB;      /* 한복 남색 - 주요 CTA */
--primary-red: #E63946;       /* 단청 빨강 - 강조 */
--primary-green: #06A77D;     /* 옥색 - 긍정/성공 */

/* Neutral Colors */
--white: #FFFFFF;
--bg-light: #FAF9F6;          /* 한지 백색 - 배경 */
--gray-100: #F5F5F5;
--gray-300: #D1D1D1;
--gray-500: #808080;
--gray-700: #4A4A4A;
--black: #2D3142;             /* 먹색 - 본문 텍스트 */

/* Semantic Colors */
--success: #06A77D;           /* 좋음 🟢 */
--warning: #FFA500;           /* 보통 🟡 */
--danger: #E63946;            /* 나쁨 🔴 */

/* Gradients */
--gradient-hero: linear-gradient(135deg, #0047AB 0%, #06A77D 100%);
--gradient-card: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%);
타이포그래피
css/* Font Family */
--font-primary: 'Pretendard', -apple-system, sans-serif;
--font-en: 'Inter', sans-serif;

/* Font Sizes */
--text-xs: 12px;      /* 캡션 */
--text-sm: 14px;      /* 보조 텍스트 */
--text-base: 16px;    /* 본문 */
--text-lg: 18px;      /* 강조 */
--text-xl: 20px;      /* 소제목 */
--text-2xl: 24px;     /* 제목 */
--text-3xl: 32px;     /* 대제목 */
--text-4xl: 48px;     /* Hero */

/* Font Weights */
--weight-regular: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;

/* Line Heights */
--leading-tight: 1.2;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
간격 시스템 (Spacing)
css/* Spacing Scale (8px base) */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
그림자 (Shadows)
css--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 8px rgba(0,0,0,0.1);
--shadow-lg: 0 8px 16px rgba(0,0,0,0.15);
--shadow-xl: 0 12px 24px rgba(0,0,0,0.2);
--shadow-card: 0 2px 8px rgba(0,0,0,0.1);
--shadow-card-hover: 0 8px 24px rgba(0,0,0,0.15);
Border Radius
css--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;  /* 원형 */
7.3 반응형 브레이크포인트
css/* Mobile First Approach */
--breakpoint-sm: 640px;   /* 작은 태블릿 */
--breakpoint-md: 768px;   /* 태블릿 */
--breakpoint-lg: 1024px;  /* 작은 데스크톱 */
--breakpoint-xl: 1280px;  /* 데스크톱 */
--breakpoint-2xl: 1536px; /* 큰 데스크톱 */
레이아웃 변화
디바이스그리드 열SidebarHeader폰트 크기Mobile (<640px)1열숨김간소화-2pxTablet (640-1024px)2-3열숨김/토글전체기본Desktop (>1024px)4열항상 표시전체기본
7.4 애니메이션
css/* Transitions */
--transition-fast: 150ms ease-in-out;
--transition-base: 300ms ease-in-out;
--transition-slow: 500ms ease-in-out;

/* 주요 애니메이션 */

/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Stagger Animation (카드 그리드) */
.city-card {
  animation: slideUp 0.5s ease-out;
  animation-fill-mode: backwards;
}
.city-card:nth-child(1) { animation-delay: 0.1s; }
.city-card:nth-child(2) { animation-delay: 0.2s; }
.city-card:nth-child(3) { animation-delay: 0.3s; }
.city-card:nth-child(4) { animation-delay: 0.4s; }

8. 사용자 플로우 {#8-사용자-플로우}
8.1 핵심 사용자 여정
Flow 1: 첫 방문자 → 도시 탐색
1. 홈페이지 진입
   ↓
2. Hero Section에서 가치 인지
   "한국 도시를 노마드 관점으로"
   ↓
3. 스크롤 다운
   ↓
4. City Grid 확인
   - 서울, 제주, 부산 등 카드 확인
   - 생활비, 평점 빠르게 스캔
   ↓
5. 관심 도시 카드 클릭
   ↓
6. 도시 상세 페이지 이동
   (홈페이지 범위 밖)
예상 소요 시간: 2-3분
전환 목표: 도시 카드 클릭률 40%

Flow 2: 목적 방문자 → 필터 사용
1. "제주 생활비" 검색 유입
   ↓
2. Hero Section 스킵 (빠른 스크롤)
   ↓
3. Filter Bar 즉시 사용
   - 예산: ₩1M - ₩2M
   - 지역: 제주권
   ↓
4. 필터 결과 확인 (3개 도시)
   ↓
5. 제주 카드 클릭
   ↓
6. 상세 정보 확인 후 리뷰 작성 고려
예상 소요 시간: 1-2분
전환 목표: 필터 사용률 60%, 회원가입 10%

Flow 3: 비교 검토자 → 여러 도시 탐색
1. 홈페이지 진입
   ↓
2. Sidebar "추천 도시" 클릭
   - "저렴한 곳" 선택
   ↓
3. 필터 자동 적용 (생활비 ₩1.5M 이하)재시도천계속   ↓
4. 5개 도시 결과 확인
   - 전주, 춘천, 속초, 포항, 경주
   ↓
5. 각 도시 카드 비교
   - 생활비, 인터넷 속도, 교통 확인
   ↓
6. 관심 도시 2-3개 ❤️ 찜하기
   (로그인 유도)
   ↓
7. 간편 회원가입 완료
   ↓
8. 찜한 도시 목록 확인
예상 소요 시간: 5-7분
전환 목표: 찜하기 클릭 30%, 회원가입 15%

Flow 4: 외국인 방문자 → 영어 전환
1. 홈페이지 진입 (기본 한국어)
   ↓
2. Header에서 [EN] 클릭
   ↓
3. 페이지 즉시 영어로 전환
   (새로고침 없음)
   ↓
4. Filter 사용
   - Budget: ₩1M - ₩3M
   - Region: All
   - Sort: English Friendly
   ↓
5. 외국인 친화적 도시 확인
   - 서울(강남), 제주, 부산
   ↓
6. "English Friendly" 뱃지 확인
   ↓
7. 도시 클릭 → 상세 페이지
예상 소요 시간: 3-4분
전환 목표: 언어 전환율 80% (외국인 중), 도시 클릭 50%

8.2 에러/엣지 케이스 플로우
Case 1: 필터 결과 0개
1. 과도한 필터 적용
   - 예산: ₩500k - ₩1M
   - 지역: 수도권
   - 교통: 지하철 필수
   ↓
2. Empty State 표시
   ╔════════════════════════════════╗
   ║    🔍                          ║
   ║  조건에 맞는 도시가 없습니다    ║
   ║  필터를 조정해보시겠어요?       ║
   ║    [필터 초기화]               ║
   ╚════════════════════════════════╝
   ↓
3. [필터 초기화] 클릭
   ↓
4. 전체 20개 도시 다시 표시

Case 2: 느린 네트워크
1. 홈페이지 진입 (3G 환경)
   ↓
2. Header 즉시 표시 (CSS inline)
   ↓
3. Hero Section 즉시 표시
   ↓
4. City Grid Skeleton UI 표시
   ┌─────────┐ ┌─────────┐
   │░░░░░░░░░│ │░░░░░░░░░│
   │░░░░░░░░░│ │░░░░░░░░░│
   │░░░  ░░░░│ │░░░  ░░░░│
   └─────────┘ └─────────┘
   ↓
5. 데이터 도착 (2-3초)
   ↓
6. Skeleton → 실제 카드 Fade-in
목표: 3초 내 First Contentful Paint

Case 3: 로그인 없이 찜하기 시도
1. 도시 카드에서 ❤️ 클릭
   ↓
2. 로그인 모달 팝업
   ╔═══════════════════════════╗
   ║  🔒 로그인이 필요합니다    ║
   ║                           ║
   ║  찜 기능을 사용하려면      ║
   ║  로그인이 필요해요         ║
   ║                           ║
   ║  [이메일로 로그인]         ║
   ║  [Google로 계속]          ║
   ║  [나중에 하기]             ║
   ╚═══════════════════════════╝
   ↓
3-A. 로그인 완료
     → 찜 목록에 추가
     → 토스트: "제주를 찜했습니다 ❤️"
     
3-B. 나중에 하기
     → 모달 닫힘
     → 하트 아이콘 원래 상태 유지

8.3 플로우 다이어그램 (메인)
                    [홈페이지 진입]
                           |
                  ┌────────┴────────┐
                  ↓                 ↓
           [Hero Section]    [직접 스크롤]
                  |                 |
                  ↓                 ↓
           [이메일 입력]      [City Grid]
                  |                 |
            [시작하기]               |
                  |         ┌───────┴────────┐
                  ↓         ↓                ↓
          [회원가입]    [필터 사용]    [도시 클릭]
                          |                 |
                          ↓                 ↓
                  [결과 확인]        [상세 페이지]
                          |                 |
                    [비교/찜하기]            |
                          |                 |
                    [로그인 유도]            |
                          |                 |
                    [회원가입/로그인] ───────┘
                          |
                    [재방문/리뷰 작성]

9. 기술 요구사항 {#9-기술-요구사항}
9.1 기술 스택
Frontend
레이어기술버전선택 이유FrameworkNext.js14.xSSR/SSG, SEO 최적화LanguageTypeScript5.x타입 안정성StylingTailwind CSS3.x빠른 UI 개발StateZustand4.x가벼운 상태관리Data FetchingReact Query5.x서버 상태 관리FormsReact Hook Form7.x폼 검증AnimationFramer Motion11.x고급 애니메이션
Backend (API)
레이어기술선택 이유APINext.js API Routes통합 개발 환경DatabasePostgreSQL관계형 데이터, 확장성ORMPrisma타입 안전 쿼리CacheRedis실시간 데이터 캐싱File StorageAWS S3이미지 저장
Infrastructure
항목서비스목적HostingVercelNext.js 최적화, 자동 배포CDNCloudflare이미지/정적 파일 캐싱AnalyticsGoogle Analytics 4사용자 행동 분석MonitoringSentry에러 트래킹
외부 API
API용도업데이트 주기기상청 API날씨 데이터1시간한국환경공단 API미세먼지1시간국토교통부 실거래가 API월세/전세1일카카오 지도 API장소 검색실시간

9.2 데이터베이스 스키마
핵심 테이블
sql-- 도시 (Cities)
CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  name_kr VARCHAR(50) NOT NULL,
  name_en VARCHAR(50) NOT NULL,
  slug VARCHAR(50) UNIQUE NOT NULL,
  region VARCHAR(20) NOT NULL,
  
  -- 위치
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  
  -- 기본 정보
  population INTEGER,
  area_km2 DECIMAL(10, 2),
  
  -- 평균 지표
  avg_monthly_cost INTEGER,
  avg_internet_speed INTEGER,
  avg_rent INTEGER,
  has_subway BOOLEAN DEFAULT false,
  has_ktx BOOLEAN DEFAULT false,
  
  -- 메타
  image_url TEXT,
  ranking INTEGER,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 리뷰 (Reviews)
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  city_id INTEGER REFERENCES cities(id),
  user_id INTEGER REFERENCES users(id),
  
  -- 평점 (1-5)
  rating_overall DECIMAL(2,1),
  rating_cost DECIMAL(2,1),
  rating_internet DECIMAL(2,1),
  rating_workspace DECIMAL(2,1),
  rating_transport DECIMAL(2,1),
  rating_food DECIMAL(2,1),
  rating_safety DECIMAL(2,1),
  rating_culture DECIMAL(2,1),
  rating_expat_friendly DECIMAL(2,1),
  rating_air_quality DECIMAL(2,1),
  
  -- 텍스트
  title VARCHAR(100),
  content TEXT,
  pros TEXT,
  cons TEXT,
  
  -- 거주 정보
  stay_duration VARCHAR(20),
  stay_purpose VARCHAR(50),
  monthly_cost INTEGER,
  
  -- 메타
  helpful_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 사용자 (Users)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  name VARCHAR(50),
  
  -- 프로필
  avatar_url TEXT,
  bio TEXT,
  occupation VARCHAR(50),
  
  -- 설정
  language VARCHAR(2) DEFAULT 'kr',
  currency VARCHAR(3) DEFAULT 'KRW',
  
  -- 메타
  created_at TIMESTAMP DEFAULT NOW(),
  last_login_at TIMESTAMP
);

-- 찜 목록 (Favorites)
CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  city_id INTEGER REFERENCES cities(id),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, city_id)
);

-- 실시간 데이터 캐시 (Real-time Data)
CREATE TABLE city_realtime_data (
  id SERIAL PRIMARY KEY,
  city_id INTEGER REFERENCES cities(id),
  
  -- 날씨
  temperature DECIMAL(4,1),
  feels_like DECIMAL(4,1),
  weather_condition VARCHAR(20),
  
  -- 공기질
  pm25 INTEGER,
  pm10 INTEGER,
  aqi INTEGER,
  
  -- 타임스탬프
  fetched_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP
);

9.3 API 엔드포인트 명세
도시 관련
GET /api/cities
- 설명: 전체 도시 목록 조회
- 쿼리 파라미터:
  - region: string (optional)
  - minCost: number (optional)
  - maxCost: number (optional)
  - sortBy: string (optional)
  - limit: number (default: 20)
  - offset: number (default: 0)
- 응답:
  {
    "data": [
      {
        "id": 1,
        "name": "서울 (강남)",
        "slug": "seoul-gangnam",
        "ranking": 1,
        "avgRating": 4.8,
        "avgMonthlyCost": 2500000,
        "imageUrl": "https://...",
        "reviewCount": 324
      },
      ...
    ],
    "total": 20,
    "hasMore": false
  }

GET /api/cities/:slug
- 설명: 특정 도시 상세 정보
- 응답:
  {
    "id": 1,
    "name": "서울 (강남)",
    "description": "...",
    "stats": { ... },
    "realtimeData": { ... }
  }

GET /api/cities/:slug/reviews
- 설명: 도시 리뷰 목록
- 쿼리 파라미터:
  - sortBy: string (newest/highest/helpful)
  - limit: number
- 응답:
  {
    "reviews": [ ... ],
    "avgRatings": { ... }
  }
리뷰 관련
POST /api/reviews
- 설명: 리뷰 작성
- 인증: Required
- Body:
  {
    "cityId": 1,
    "ratings": { ... },
    "title": "...",
    "content": "...",
    "stayDuration": "1-3개월"
  }
- 응답: 201 Created

PUT /api/reviews/:id
- 설명: 리뷰 수정
- 인증: Required (본인만)

DELETE /api/reviews/:id
- 설명: 리뷰 삭제
- 인증: Required (본인만)
찜 관련
POST /api/favorites
- 설명: 도시 찜하기
- 인증: Required
- Body: { "cityId": 1 }
- 응답: 201 Created

DELETE /api/favorites/:cityId
- 설명: 찜 취소
- 인증: Required

GET /api/favorites
- 설명: 내 찜 목록
- 인증: Required

9.4 성능 요구사항
로딩 속도
지표목표측정 도구First Contentful Paint (FCP)< 1.5sLighthouseLargest Contentful Paint (LCP)< 2.5sLighthouseTime to Interactive (TTI)< 3.5sLighthouseCumulative Layout Shift (CLS)< 0.1Lighthouse페이지 전체 로드< 3sGA4
최적화 전략
javascript// 1. 이미지 최적화
- Next.js Image 컴포넌트 사용
- WebP 포맷 (fallback: JPEG)
- Lazy loading (Intersection Observer)
- Blur placeholder

// 2. 코드 스플리팅
- 라우트 기반 자동 스플리팅
- Dynamic import for 모달/드롭다운

// 3. 캐싱
- 정적 데이터: 24시간 캐싱
- 실시간 데이터: 5분 캐싱
- Redis로 API 응답 캐싱

// 4. CDN
- 이미지: Cloudflare CDN
- 정적 파일: Vercel Edge Network
API 응답 시간
엔드포인트목표전략GET /api/cities< 200msDB 인덱싱, 캐싱GET /api/cities/:slug< 300ms조인 최적화POST /api/reviews< 500ms비동기 처리

9.5 보안 요구사항
인증/인가
javascript// JWT 기반 인증
- Access Token: 1시간 유효
- Refresh Token: 7일 유효
- HttpOnly 쿠키 저장

// 비밀번호
- bcrypt 해싱 (salt rounds: 12)
- 최소 8자, 영문+숫자+특수문자 조합

// Rate Limiting
- 로그인 시도: 5회/10분
- API 요청: 100회/분/IP
- 리뷰 작성: 3개/일/사용자
데이터 보호
- HTTPS 강제 (HSTS)
- SQL Injection 방지 (Prisma ORM)
- XSS 방지 (React 자동 이스케이핑)
- CSRF 방지 (CSRF 토큰)
- 개인정보 암호화 (AES-256)

9.6 SEO 요구사항
메타 태그
html<!-- 홈페이지 -->
<title>NomaKR - 한국 디지털 노마드 가이드</title>
<meta name="description" content="한국 20개 도시의 생활비, 인터넷 속도, 주거비를 비교하고 실거주자 리뷰를 확인하세요. 디지털 노마드를 위한 완벽한 한국 도시 가이드." />
<meta name="keywords" content="디지털노마드, 한국, 생활비, 원격근무, 제주, 부산, 서울" />

<!-- Open Graph -->
<meta property="og:title" content="NomaKR - 한국 디지털 노마드 가이드" />
<meta property="og:description" content="한국의 모든 도시를 노마드 관점으로 재발견하세요" />
<meta property="og:image" content="https://nomakr.com/og-image.jpg" />
<meta property="og:url" content="https://nomakr.com" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="NomaKR" />
<meta name="twitter:description" content="..." />
구조화 데이터 (JSON-LD)
json{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "NomaKR",
  "url": "https://nomakr.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://nomakr.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
sitemap.xml
xml<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://nomakr.com/</loc>
    <priority>1.0</priority>
    <changefreq>daily</changefreq>
  </url>
  <url>
    <loc>https://nomakr.com/seoul-gangnam</loc>
    <priority>0.9</priority>
    <changefreq>weekly</changefreq>
  </url>
  ...
</urlset>

10. 우선순위 및 일정 {#10-우선순위-및-일정}
10.1 기능 우선순위
P0 (Must Have - MVP)
✅ Header (로고, 검색, 언어 전환)
✅ Hero Section (CTA, Social Proof)
✅ Filter Bar (예산, 지역 필터)
✅ Sort (추천순, 가격순, 인터넷 속도순)
✅ City Grid (4열 그리드, 12개 핵심 지표)
✅ City Card (이미지, 평점, 생활비, 리뷰 수)
✅ Sidebar (인기순위, 지역별 필터)
✅ Footer (기본 정보, 법적 문서)
✅ 반응형 디자인 (Mobile/Tablet/Desktop)
✅ 실시간 날씨/미세먼지 데이터
✅ 기본 회원가입/로그인
P1 (Should Have - 1차 업데이트)
⭕ 추가 필터 (날씨, 교통, 환경)
⭕ 찜하기 기능
⭕ 도시 비교 기능 (최대 3개)
⭕ 리뷰 작성/수정/삭제
⭕ 사용자 프로필
⭕ 최근 본 도시 히스토리
⭕ 뉴스레터 구독
⭕ 소셜 로그인 (Google, Kakao)
P2 (Nice to Have - 2차 업데이트)
🔵 무한 스크롤/Pagination
🔵 지도 뷰
🔵 차트 뷰
🔵 AI 추천 시스템
🔵 상세 필터 (50+ 옵션)
🔵 다크 모드
🔵 프리미엄 멤버십

10.2 개발 일정
Phase 1: 설계 & 환경 구축 (1주)
Week 1
─────────────────────────────────
Day 1-2: PRD 검토 & 피드백
Day 3-4: 디자인 시스템 구축
        - Figma 목업
        - 컴포넌트 라이브러리
Day 5: 개발 환경 세팅
        - Next.js + TypeScript
        - Tailwind CSS
        - Prisma + PostgreSQL
        - 배포 파이프라인 (Vercel)
Phase 2: 핵심 기능 개발 (3주)
Week 2: Frontend 기본 구조
─────────────────────────────────
✓ Header 컴포넌트
✓ Hero Section
✓ Filter Bar (예산, 지역만)
✓ City Card 컴포넌트
✓ City Grid 레이아웃
✓ Sidebar (인기순위만)
✓ Footer

Week 3: 데이터 & API
─────────────────────────────────
✓ DB 스키마 설계
✓ Seed 데이터 (20개 도시)
✓ GET /api/cities
✓ GET /api/cities/:slug
✓ 실시간 데이터 연동 (날씨/미세먼지)
✓ 필터링 로직
✓ 정렬 로직

Week 4: 인터랙션 & 최적화
─────────────────────────────────
✓ 필터 적용 애니메이션
✓ 카드 호버 효과
✓ 모바일 반응형
✓ 이미지 최적화
✓ 로딩 상태 (Skeleton UI)
✓ 에러 핸들링
Phase 3: 테스트 & 런칭 (1주)
Week 5
─────────────────────────────────
Day 1-2: QA 테스트
        - 크로스 브라우저
        - 모바일 디바이스
        - 성능 측정
Day 3: 버그 수정
Day 4: SEO 최적화
        - 메타 태그
        - sitemap.xml
        - robots.txt
Day 5: 소프트 런칭
        - 베타 사용자 초대 (50명)
        - 피드백 수집
Phase 4: 개선 & 성장 (지속)
Week 6-8: 1차 개선
─────────────────────────────────
✓ 사용자 피드백 반영
✓ 추가 필터 기능 (P1)
✓ 찜하기 기능
✓ 리뷰 시스템
✓ 소셜 로그인

Week 9-12: 2차 확장
─────────────────────────────────
✓ 도시 비교 기능
✓ 지도/차트 뷰
✓ AI 추천
✓ 추가 도시 (20 → 50개)

10.3 마일스톤
마일스톤날짜목표성공 기준M1: 환경 구축 완료Week 1개발 준비첫 페이지 렌더링 성공M2: MVP 개발 완료Week 4핵심 기능20개 도시 표시, 필터/정렬 작동M3: 베타 런칭Week 5소프트 런칭50명 베타 테스터 확보M4: 정식 런칭Week 6공개 출시MAU 1,000명 목표 시작M5: 첫 목표 달성Week 10지표 달성MAU 1,000명, 재방문율 30%

10.4 리소스 계획
필요 인력
역할인원주요 업무Product Manager1명PRD 작성, 우선순위 관리, QAFrontend Developer2명React/Next.js 개발Backend Developer1명API, DB, 외부 API 연동Designer1명UI/UX 디자인, 디자인 시스템Total5명-
예산 (초기 3개월)
항목월 비용3개월 총액인건비 (5명 × ₩500만)₩2,500만₩7,500만서버/인프라 (Vercel Pro)₩5만₩15만Database (AWS RDS)₩10만₩30만API (기상청, 환경공단)무료₩0도메인/SSL₩3만₩3만 (1회)디자인 도구 (Figma Pro)₩2만₩6만합계₩2,520만₩7,554만

11. 부록 {#부록}
11.1 용어 정의
용어정의디지털 노마드원격으로 일하며 자유롭게 이동하는 사람들MAUMonthly Active Users (월간 활성 사용자 수)전월세한국 부동산 계약 방식 (전세/월세)PM2.5미세먼지 입자 크기 2.5㎛ 이하Mbps초당 메가비트 (인터넷 속도 단위)코워킹공유 사무 공간
11.2 참고 자료

Nomads.com (구 Nomad List): https://nomads.com
기상청 API 문서: https://data.kma.go.kr
환경공단 에어코리아: https://airkorea.or.kr
국토교통부 실거래가 공개시스템: https://rt.molit.go.kr

11.3 변경 이력
버전날짜변경 내용작성자v1.02025-10-14초안 작성PM Team

✅ 최종 체크리스트
개발 전 확인사항
□ PRD 전체 팀 검토 완료
□ 디자인 목업 승인 완료
□ 기술 스택 최종 확정
□ 개발 환경 세팅 완료
□ Git 저장소 생성
□ 프로젝트 관리 도구 설정 (Jira/Notion)
□ API 키 발급 완료 (기상청, 환경공단)
□ 도메인 구매 (nomakr.com)재시도천계속□ SSL 인증서 설정 (Let's Encrypt)
□ 분석 도구 설정 (GA4, Sentry)
□ 베타 테스터 모집 계획 수립
□ 마케팅 채널 준비 (SNS, 커뮤니티)
런칭 전 확인사항
□ 20개 도시 데이터 입력 완료
□ 각 도시당 최소 3개 샘플 리뷰 작성
□ 모든 P0 기능 작동 확인
□ 크로스 브라우저 테스트 (Chrome, Safari, Firefox, Edge)
□ 모바일 테스트 (iOS, Android)
□ 성능 테스트 (Lighthouse 80점 이상)
□ 보안 점검 (OWASP Top 10)
□ SEO 최적화 확인
□ 개인정보처리방침 작성
□ 이용약관 작성
□ 404/500 에러 페이지 디자인
□ 파비콘 및 앱 아이콘 제작
□ 소셜 미디어 OG 이미지 제작
□ 베타 테스트 완료 (최소 50명)
□ 피드백 반영 완료
□ 런칭 공지 콘텐츠 준비
□ 프레스킷 준비

12. 성공을 위한 핵심 전략
12.1 데이터 품질 전략
초기 데이터 확보 (Cold Start Problem 해결)
Week 1-2: 기본 데이터 수집
─────────────────────────────────
✓ 공공 API로 객관적 지표 수집
  - 날씨, 미세먼지, 인구, 면적
  
✓ 온라인 리서치
  - 월세 시세: 직방/다방 크롤링
  - 카페 수: 네이버 플레이스 검색
  - 교통: 각 도시 교통공사 데이터
  
✓ 전문가 인터뷰 (각 도시 5명)
  - 실제 노마드
  - 지역 코워킹 스페이스 운영자
  - 지역 주민

Week 3-4: 샘플 리뷰 작성
─────────────────────────────────
✓ 팀원들이 직접 방문/거주 경험 작성
✓ 각 도시당 3-5개 리뷰 (총 60-100개)
✓ 다양한 관점 반영
  - 1개월 단기 체류
  - 3개월 중기 체류
  - 현지 거주자
데이터 신뢰성 확보
javascript// 리뷰 검증 시스템
1. 이메일 인증 필수
2. 거주 증명 요청 (선택)
   - 숙소 예약 확인서
   - 장기 체류 비자
3. 허위 리뷰 탐지
   - 중복 IP 체크
   - 스팸 키워드 필터
   - 신고 시스템
4. 검증된 리뷰 뱃지
   "✓ 실거주 인증"

12.2 초기 트래픽 확보 전략
런칭 전 (Week -2 ~ 0)
1. 사전 예약 페이지
   ┌─────────────────────────────┐
   │  🚀 곧 오픈합니다!           │
   │                             │
   │  NomaKR에서 당신의 도시를    │
   │  찾아보세요                  │
   │                             │
   │  [이메일 입력] [알림받기]    │
   │                             │
   │  ✓ 800명이 대기 중입니다     │
   └─────────────────────────────┘

2. 티저 콘텐츠 발행
   - 인스타그램: "서울 vs 제주 생활비 비교"
   - 브런치: "디지털 노마드가 사는 한국 도시 Top 5"
   - 유튜브: "한 달 살기 실험 - 전주편"

3. 커뮤니티 참여
   - 디지털노마드 코리아 (Facebook)
   - 원격근무자 모임 (오픈채팅)
   - 리디노마드 커뮤니티
런칭 Day 1-7
Day 1 (D-Day)
─────────────
- Product Hunt 런칭
- 사전 예약자 800명에게 이메일 발송
- SNS 동시 공지 (인스타/트위터/링크드인)
- 디지털노마드 커뮤니티 5곳에 소개글

Day 2-3
─────────────
- 인플루언서 협업 (노마드/여행 크리에이터 5명)
- 프레스 릴리즈 발송 (테크 미디어 10곳)
- 베타 사용자 피드백 수집 → 개선

Day 4-7
─────────────
- 첫 주 사용 통계 공유
  "런칭 3일, 2,000명이 방문했습니다!"
- 사용자 스토리 수집 및 공유
- 버그 수정 및 긴급 패치
런칭 후 1개월
Week 2-4: 콘텐츠 마케팅
─────────────────────────
✓ 블로그 포스팅 (주 2회)
  - "월 150만원으로 살 수 있는 한국 도시"
  - "노마드를 위한 전주 완벽 가이드"
  - "한국에서 외국인이 살기 좋은 도시 Top 3"

✓ SEO 최적화
  - 목표 키워드 랭킹
    * "디지털 노마드 한국" → Top 3
    * "제주 생활비" → Top 5
    * "한국 원격근무" → Top 10

✓ 커뮤니티 활동
  - Reddit r/digitalnomad 참여
  - 한국 관련 스레드에 NomaKR 소개
  - AMA (Ask Me Anything) 세션

✓ 파트너십
  - 코워킹 스페이스 (10곳)
  - 부동산 중개업체 (5곳)
  - 원격 근무 기업 (5곳)

12.3 재방문율 30% 달성 전략
사용자 리텐션 메커니즘
javascript// 1. 이메일 리마인더
사용자 행동            → 발송 타이밍        → 콘텐츠
─────────────────────────────────────────────────────
도시 조회만 함         → 3일 후            → "제주에 대해 더 알아보세요"
찜만 하고 리뷰 안씀    → 1주일 후          → "제주 리뷰 작성하고 포인트 받기"
한 달 전 가입          → 30일 후           → "이번 달 인기 도시 Top 5"
리뷰 작성함            → 리뷰 후 7일       → "다른 사람들이 당신의 리뷰를 좋아해요!"

// 2. 푸시 알림 (선택 가입)
- 찜한 도시 정보 업데이트
  "제주 월세가 5% 내렸어요"
- 새 리뷰 알림
  "제주에 새 리뷰 3개가 올라왔어요"
- 주간 다이제스트
  "이번 주 가장 많이 조회된 도시는?"

// 3. 개인화 추천
- 최근 본 도시와 유사한 도시 추천
  "강릉을 보셨다면 속초도 관심 있으실 거예요"
- 예산 기반 추천
  "월 200만원 예산? 이 도시들을 확인해보세요"
콘텐츠 업데이트 전략
Weekly Update (매주 월요일)
─────────────────────────────────
- 실시간 데이터 자동 갱신
  - 날씨, 미세먼지 (API)
  - 월세 시세 (크롤링)
  
- "이번 주 인기 도시" 배너
  ┌─────────────────────────────┐
  │ 🔥 이번 주 가장 핫한 도시    │
  │ 1. 속초 (+23% ↑)            │
  │ 2. 여수 (+18% ↑)            │
  │ 3. 경주 (+15% ↑)            │
  └─────────────────────────────┘

Monthly Update (매월 1일)
─────────────────────────────────
- 월간 리포트 발행
  "2025년 10월 NomaKR 트렌드 리포트"
  - 가장 많이 조회된 도시
  - 평균 생활비 변화
  - 신규 리뷰 하이라이트
  
- 시즌별 추천
  - 11월: "따뜻한 남부 도시 추천"
  - 2월: "겨울 축제 도시 Top 5"
  - 5월: "봄 여행 최적지"
커뮤니티 활성화
1. 배지 시스템
┌────────────────────────────────┐
│ 🏆 달성 가능한 배지             │
├────────────────────────────────┤
│ 🥉 첫 리뷰 작성자               │
│ 🥈 5개 도시 방문자              │
│ 🥇 파워 리뷰어 (리뷰 10개+)    │
│ 🌟 도시 전문가 (한 도시 5개+)  │
│ 👑 노마드 레전드 (50개 리뷰+)  │
└────────────────────────────────┘

2. 리더보드
"이번 달 최고 기여자"
1. @nomad_kim (리뷰 15개)
2. @digital_lee (리뷰 12개)
3. @remote_park (리뷰 10개)

3. 포인트 시스템
- 리뷰 작성: 100P
- 사진 업로드: 50P
- 유용한 리뷰 추천받기: 10P
- 1,000P 적립 시 → 스타벅스 기프티콘

12.4 지표 모니터링 대시보드
실시간 모니터링 (Daily)
┌─────────────────────────────────────────────┐
│  NomaKR Analytics Dashboard                 │
├─────────────────────────────────────────────┤
│                                             │
│  📊 오늘의 지표 (2025-10-14)                │
│  ─────────────────────────────────────────  │
│  👥 DAU: 327명        (+15% vs 어제)        │
│  📄 페이지뷰: 1,843   (+8%)                 │
│  ⏱️ 평균 체류: 3:42   (+12%)                │
│  🖱️ 도시 클릭: 412    (클릭률 42%)          │
│  💌 회원가입: 23명    (전환율 7%)           │
│  ⭐ 리뷰 작성: 8개                          │
│                                             │
│  🔥 실시간 트렌딩                            │
│  ─────────────────────────────────────────  │
│  1. 제주 (89 조회)                          │
│  2. 부산 (67 조회)                          │
│  3. 강릉 (54 조회)                          │
│                                             │
│  ⚠️ 알림                                     │
│  ─────────────────────────────────────────  │
│  • API 응답 속도 느림 (500ms → 800ms)       │
│  • 제주 페이지 이탈률 높음 (65%)            │
│                                             │
└─────────────────────────────────────────────┘
주간 리포트 (Weekly)
Week 1 Performance (10/8 - 10/14)
════════════════════════════════════════

✅ 목표 대비 달성률
─────────────────────────────────────
MAU 목표:        1,000명
현재:            327명 (33% 달성)
필요 속도:       95명/일 → 실제 47명/일 ⚠️

재방문율 목표:   30%
현재:            18%
개선 필요:       +12%p

평균 체류시간:   3:25 (목표 3분 이상 ✓)
도시 클릭률:     38% (목표 40% 근접)

📈 Growth Insights
─────────────────────────────────────
- 가장 효과적인 유입 채널: 
  1. 오가닉 검색 (42%)
  2. SNS (28%)
  3. 직접 입력 (18%)

- 가장 인기 있는 페이지:
  1. 제주 (823 조회)
  2. 부산 (654 조회)
  3. 서울 강남 (587 조회)

- 이탈이 높은 페이지:
  1. 속초 (72% 이탈률) → 콘텐츠 부족
  2. 포항 (68% 이탈률) → 이미지 깨짐

🎯 다음 주 Action Items
─────────────────────────────────────
1. 속초 페이지 콘텐츠 보강
2. 포항 이미지 교체
3. 페이스북 광고 시작 ($300 예산)
4. 인플루언서 협업 콘텐츠 발행 (2개)
5. 이메일 캠페인 발송 (비활성 사용자 대상)

12.5 위기 대응 시나리오
Scenario 1: 목표 미달성 (MAU < 500 at Day 30)
🚨 긴급 대응 플랜
════════════════════════════════════════

Phase 1: 원인 분석 (1-2일)
─────────────────────────────────────
□ 트래픽 소스 분석
  - SEO 순위 확인
  - 광고 성과 확인
  - 바이럴 콘텐츠 분석

□ 사용자 행동 분석
  - 이탈률이 높은 페이지
  - 전환율이 낮은 funnel
  - 에러 로그 확인

Phase 2: 즉각 개선 (3-5일)
─────────────────────────────────────
□ 성능 최적화
  - 로딩 속도 개선
  - 크리티컬 버그 수정

□ 콘텐츠 강화
  - 상위 3개 도시 상세 정보 추가
  - 샘플 리뷰 20개 추가 작성

□ UX 개선
  - CTA 버튼 위치 변경
  - 온보딩 플로우 간소화

Phase 3: 마케팅 부스트 (1주)
─────────────────────────────────────
□ 유료 광고 집행
  - 페이스북: $500
  - 구글 애즈: $300
  - 인스타그램: $200

□ 파트너십 가속
  - 코워킹 스페이스 크로스 프로모션
  - 인플루언서 유료 협업

□ 바이럴 캠페인
  - "NomaKR 챌린지" 이벤트
  - 추천 이벤트 (친구 초대 시 리워드)
Scenario 2: 서버 다운
🔥 긴급 복구 절차
════════════════════════════════════════

1. 즉시 (0-5분)
   □ 모니터링 알림 확인 (Sentry)
   □ 에러 원인 파악
   □ 긴급 공지 발행 (SNS)
     "현재 일시적 장애 발생, 복구 중"

2. 단기 (5-30분)
   □ 트래픽 급증 시 → 스케일업
   □ DB 과부하 시 → 쿼리 최적화
   □ API 장애 시 → 캐시 데이터로 임시 대응

3. 복구 후 (30분~)
   □ 복구 완료 공지
   □ 사과 이메일 발송
   □ 보상 제공 (프리미엄 1주 무료)
   □ 재발 방지 대책 수립
Scenario 3: 악성 리뷰/스팸
🛡️ 콘텐츠 관리 프로토콜
════════════════════════════════════════

탐지
─────────────────────────────────────
- 자동 필터링
  - 욕설, 비방, 광고성 키워드
  - 동일 IP에서 연속 리뷰
  - 복사-붙여넣기 의심 리뷰

- 사용자 신고
  - 리뷰마다 [신고하기] 버튼
  - 신고 사유 선택

검토
─────────────────────────────────────
- PM/운영자 검토 (24시간 내)
- 커뮤니티 가이드라인 위반 여부 판단

조치
─────────────────────────────────────
- 경고 → 리뷰 삭제 → 계정 정지 → 영구 차단
- 삭제 시 사용자에게 알림 + 사유 설명

13. 런칭 후 6개월 로드맵
Month 1-2: 안정화 & 최적화
목표: MAU 1,000명, 재방문율 30%
─────────────────────────────────────
Week 1-2
✓ 사용자 피드백 수집 및 긴급 개선
✓ 성능 모니터링 및 최적화
✓ SEO 순위 확인 및 개선

Week 3-4
✓ 찜하기 기능 추가
✓ 간단한 사용자 프로필
✓ 리뷰 작성 기능 추가
Month 3-4: 기능 확장
목표: MAU 3,000명, 리뷰 500개
─────────────────────────────────────
✓ 도시 비교 기능 (최대 3개)
✓ 소셜 로그인 (Google, Kakao)
✓ 추가 필터 (10개 → 20개)
✓ 모바일 앱 Beta (선택)
✓ 커뮤니티 포럼 추가
Month 5-6: 수익화 시작
목표: MAU 5,000명, 프리미엄 100명
─────────────────────────────────────
✓ 프리미엄 멤버십 런칭
  - ₩9,900/월
  - 무제한 필터
  - AI 추천
  - 광고 제거
  
✓ B2B 파트너십
  - 코워킹 스페이스 프로모션
  - 부동산 중개 수수료
  
✓ 콘텐츠 마케팅 강화
  - 블로그 주 3회
  - 유튜브 채널 시작
  - 팟캐스트 고려

14. 결론 및 다음 단계
14.1 핵심 요약
NomaKR 홈페이지는 한국의 모든 도시를 디지털 노마드 관점으로 재구성한 플랫폼입니다.
핵심 가치

정보의 집약: 20개 도시의 생활비, 인터넷, 주거비 등을 한 곳에
비교의 용이성: 카드 그리드와 필터로 즉시 비교
신뢰성: 실거주자 리뷰와 실시간 데이터
한국 특화: 전월세, 카페 문화, 배달 등 한국만의 특수성

1차 목표

첫 달 MAU 1,000명
재방문율 30% 이상

14.2 즉시 시작할 액션 아이템
□ 1. PRD 전체 팀 리뷰 및 피드백 (2일)
□ 2. Figma 디자인 시작 (3일)
□ 3. 개발 환경 세팅 (1일)
□ 4. Sprint 1 시작 (1주)
     - Header + Hero Section 개발
□ 5. 20개 도시 데이터 수집 시작 (병렬 진행)
14.3 성공을 위한 핵심 요소
✅ 1. 데이터 품질
   → 정확하고 최신의 정보만이 신뢰를 만듭니다

✅ 2. 사용자 경험
   → 3초 안에 원하는 정보를 찾을 수 있어야 합니다

✅ 3. 커뮤니티
   → 리뷰와 소통이 플랫폼의 생명력입니다

✅ 4. 지속적 개선
   → 매주 데이터를 보고, 매주 개선합니다

✅ 5. 마케팅
   → 좋은 제품도 알려져야 사용됩니다

📞 문의 및 협업
Product Manager: [이메일]
프로젝트 저장소: [GitHub URL]
디자인 파일: [Figma URL]
프로젝트 관리: [Notion/Jira URL]

이 PRD는 살아있는 문서입니다.
팀의 피드백과 사용자 데이터를 바탕으로 지속적으로 업데이트됩니다.
Last Updated: 2025-10-14
Next Review: 2025-10-21 (Sprint 1 완료 후)

🎉 Let's Build NomaKR!
한국에서 노마드로 살고 싶은 모든 사람들에게
완벽한 도시를 찾아주는 그 날까지,
우리는 멈추지 않습니다.

END OF DOCUMENT