from praiai_optimizer import optimize_code

def test_optimize():
    assert optimize_code("var x == 1") == "let x === 1"
