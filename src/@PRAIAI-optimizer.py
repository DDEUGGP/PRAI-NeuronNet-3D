def optimize_code(code: str) -> str:
    return code.replace("var", "let").replace("==", "===")
