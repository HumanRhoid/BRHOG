# BRHOG

멘토링을 바탕으로 웹 백엔드의 기본기를 직접 익히는 개인 학습 프로젝트입니다.
요청 하나를 처리하는 것부터 시작해, 기존 방식으로 풀기 어려운 문제를 만났을 때 다음 기술을 도입합니다.

## 실행

Python 3.13 이상과 uv가 필요합니다.

    cd backend
    uv run uvicorn main:app --reload

http://127.0.0.1:8000/ 에 접속하면 {"message":"Hello, BRHOG!"}를 반환합니다.
