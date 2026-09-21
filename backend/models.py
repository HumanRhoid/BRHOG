from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import String
from datetime import datetime
from sqlalchemy import DateTime, func


class Base(DeclarativeBase):
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)

    email: Mapped[str] = mapped_column(nullable=False, unique=True)

    nickname: Mapped[str] = mapped_column(String(20), nullable=False, unique=True)
