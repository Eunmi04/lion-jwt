# 멋쟁이사자처럼 14기 JWT 발급 실습용 코드

JSONPlaceholder 사용자 API 기반 JWT 발급 과제

기본 코드 저장소

https://github.com/tjwls11/likelion-jwt

## 실습 목표

- 외부 API 사용자 조회
- 로그인 사용자 검색
- JWT Payload 구성
- HS256 기반 토큰 발급
- 만료시간 설정
- 토큰 내 정보 선별
- 예외 상황 처리

## 실습 흐름

```text
username 입력
→ JSONPlaceholder 사용자 요청
→ 사용자 검색
→ Payload 구성
→ JWT 발급
→ 응답 반환
```

## 기본 코드 구성

```text
likelion-14th-jwt-practice
├─ src
│  ├─ auth.js
│  └─ server.js
├─ .gitignore
├─ package.json
└─ README.md
```

## 실행 환경

- Node.js 18 이상
- VSCode 권장
- npm 사용

## 실행 준비

```bash
npm install
```

무작위 비밀키 생성

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

프로젝트 루트에 `.env` 파일 직접 생성

```env
JWT_SECRET=생성한_64자리_문자열
PORT=3000
```

## 구현 위치

`src/auth.js`의 `issueToken` 함수

구현 대상 코드

- `username` 기반 사용자 검색
- JWT Payload 구성
- `jwt.sign()` 기반 토큰 발급

## 구현 조건

1. 대소문자 구분 기반 `username` 검색
2. 사용자 미발견 시 `사용자 없음` 오류
3. `sub`에 사용자 `id` 사용
4. `username`, `name`, `email` Claim 포함
5. `process.env.JWT_SECRET` 기반 서명
6. 토큰 유효시간 10분 설정
7. `phone`, `address` Claim 제외

## 서버 실행

```bash
npm run dev
```

기본 접속 주소

```text
http://localhost:3000
```

## 로그인 요청

정상 사용자 요청

```http
POST http://localhost:3000/login
Content-Type: application/json

{
  "username": "Bret"
}
```

존재하지 않는 사용자 요청

```http
POST http://localhost:3000/login
Content-Type: application/json

{
  "username": "unknown"
}
```

## 제출물

- 제출 형식 PDF
- 제출 마감 10월 5일 23시 59분
- 제출 파일명 `[14기][JWT실습][이름].pdf`

PDF 포함 항목

- 과제 GitHub 주소
- 구현 과정
- JWT Payload 화면
- 트러블슈팅 과정

## 참고 자료

- [JSONPlaceholder Users API](https://jsonplaceholder.typicode.com/users)
- [JWT.io Debugger](https://jwt.io/)
