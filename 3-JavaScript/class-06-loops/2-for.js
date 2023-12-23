for (let count = 1; count <= 10; count++) {
    if (count >= 4 && count <= 6) {
        continue;
    }

    if (count == 9) {
        break;
    }

    if (count % 2 == 0) {
        console.log(count);
    }
}