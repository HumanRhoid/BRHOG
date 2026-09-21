import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

load_dotenv(dotenv_path="../.env")

DATABASE_URL = os.environ["DATABASE_URL"]
engine = create_engine(DATABASE_URL, echo=True)


SessionLocal = sessionmaker(bind=engine)
