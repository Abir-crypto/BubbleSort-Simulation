var values = [];
var width = 800;
var height = 600;

function setup() {
    // frameRate(60)
    createCanvas(800, 600);
    for (var i = 0; i < width; i++) {
        values[i] = random(0, height);
    }
    // sort(values);
}

var i = 0,
    j = 0;
// for (i = 0; i < width - 1; i++) {
//     for (j = 0; j < width - i - 1; j++) {
//         if (values[j] > values[j + 1]) {
//             var temp = values[j];
//             values[j] = values[j + 1];
//             values[j + 1] = temp;
//         }
//     }
// }

function draw() {

    if (i < width - 1) {
        for (j = 0; j < width - i - 1; j++) {
            if (values[j] > values[j + 1]) {
                var temp = values[j];
                values[j] = values[j + 1];
                values[j + 1] = temp;
            }
        }
    } else {
        noLoop();
    }
    i++;

    clear();
    // if (values[j] > values[j + 1]) {
    //     [values[j], values[j + 1]] = [values[j + 1], values[j]]
    // }
    // if (i < width - 1) {
    //     j++;
    //     if (j < width - i - 1) {
    //         j = 0;
    //         i++;
    //     }


    // } else {
    //     noLoop();
    // }
    stroke(0)
    fill(100);
    for (var x = 0; x < width; x = x + 10) {
        rect(x, height, 10, -values[x]);
    }

    // rect(10, 10, 50, 50);
}