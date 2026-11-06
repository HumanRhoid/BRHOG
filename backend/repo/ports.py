from pathlib import Path


def write_post(title, body):

    path = Path("../post") / f"{title}.md"
    path.write_text(body, encoding="utf-8")
