# 좋았어 이제 테스트를 해볼까!!!!!
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def test_root(tmp_path):
    for i in range(1, 1000 + 1):
        post = tmp_path / f"test{i}.md"
        post.write_text(f"{i} 글", encoding="utf-8")
        # post = open("../post/test_1.md", encoding="utf-8")
        # read_post = post.read()
        # assert read_post
        if i == 500:
            i = 0
        assert post.read_text(encoding="utf-8") == f"{i} 글"