var a, b, c, h, w
h = 10
w = 100

for (b = 0; b < h; b++) {
    c = random(99, 101)
    if (w != c) {
        alert(w + "≠" + c)
    } else alert(w + "=" + c)
}