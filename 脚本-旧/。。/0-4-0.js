var a, b, c
a = 0, b = 4, c = 0

function 零到四() {
    for (a; a < b; a++) {
        alert(a)//alert----警告框
    }
}

function 四到零() {
    for (a; a > c; a--) {
        alert(a)
    }
}
while (1 == 1) {
    if (a < b) {
        零到四()
    } else {
        四到零()
    }
}