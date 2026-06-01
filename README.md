# 할일 관리 앱 (Todo App)

바이브코딩 워크플로우 연습을 위한 첫 번째 프로젝트입니다.

## 기능

- 할일 추가
- 할일 완료 표시 (체크박스)
- 할일 삭제
- 새로고침 후에도 데이터 유지 (localStorage)

## 기술 스택

- React
- Vite
- localStorage

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

## 프로젝트 구조

```
src/
├── components/
│   ├── Header.jsx      # 앱 제목
│   ├── TodoInput.jsx   # 입력창 + 추가 버튼
│   ├── TodoList.jsx    # 할일 목록
│   └── TodoItem.jsx    # 할일 항목 (체크박스 + 삭제)
├── App.jsx             # 상태 관리 및 로직
└── main.jsx
```

## 진행 상태

- [x] Phase 1 — 프로젝트 세팅
- [x] Phase 2 — 컴포넌트 뼈대
- [x] Phase 3 — 핵심 기능 (추가 / 완료 / 삭제)
- [x] Phase 4 — localStorage 연동
- [ ] Phase 5 — 필터 & 마무리
