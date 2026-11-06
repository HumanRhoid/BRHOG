from fastapi import FastAPI
from fastapi import Form
from pathlib import Path
from repo.ports import write_post

app = FastAPI()

path = "../post/test1.md"


@app.get("/")
def root():
    post = open(path, encoding="utf-8")
    read_post = post.read()
    post_name = Path(path).stem
    return {post_name: read_post}


@app.post("/")
def save_post(title: str = Form(), body: str = Form()):
    write_post(title, body)
    return {"받은제목": title, "받은본문": body}
