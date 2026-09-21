from fastapi import FastAPI
from pydantic import BaseModel, Field, EmailStr
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
from db import engine, SessionLocal


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["POST", "GET"],  # "OPTIONS"는 CORS 미들웨어가 자동처리
    allow_headers=["Content-Type"],
)


class SignupRequest(BaseModel):
    email: EmailStr = Field(..., description="사용자의 이메일 주소")
    name: str = Field(
        ..., min_length=2, max_length=100, pattern=r"^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z]+$"
    )


class SignupResponse(BaseModel):
    message: str


@app.get("/health")
def health():
    with SessionLocal() as session:
        session.execute(text("SELECT 1"))
    return {"status": "ok", "database": "ok"}


@app.post("/signup")
def signup(signup_request: SignupRequest):
    """
    회원가입 API 엔드포인트
    - **email**: 사용자의 이메일 주소
    - **name**: 사용자의 이름
    """
    email: EmailStr = signup_request.email
    name: str = signup_request.name
    # 회원가입 로직을 여기에 구현합니다.
    return SignupResponse(message="회원가입이 성공적으로 완료되었습니다.")

