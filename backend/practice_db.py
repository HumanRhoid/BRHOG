from time import perf_counter

started = perf_counter()
print("파이썬 실행 시작", flush=True)

from db import SessionLocal
from models import User

print("1. import 완료:", perf_counter() - started, flush=True)

with SessionLocal() as session:
    print("2. Session 생성:", perf_counter() - started, flush=True)

    user = User(
        email="practice@example.com",
        nickname="연습회원",
    )
    session.add(user)
    print("3. add 완료:", perf_counter() - started, flush=True)

    session.connection()
    print("4. DB 연결 완료:", perf_counter() - started, flush=True)

    session.flush()
    print("5. flush 완료:", perf_counter() - started, flush=True)

    print(user.id, user.nickname, user.created_at)

    session.rollback()
    print("6. rollback 완료:", perf_counter() - started, flush=True)

print("7. Session 종료:", perf_counter() - started, flush=True)