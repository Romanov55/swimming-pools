let slider = document.getElementById('form-range');
let output = document.getElementById('output');

const finishValue = (value) => {
    let result = ''
    switch (value) {
        case '0':
            result = '6x3 м'
            break
        case '1':
            result = '7x3 м'
            break
        case '2':
            result = '8x3 м'
            break
        case '3':
            result = '8x4 м'
            break
        case '4':
            result = '9x4 м'
            break
        case '5':
            result = '10x4 м'
            break
    }
    return result;
}

output.innerHTML = finishValue(slider.value);

slider.oninput = function() {
    output.innerHTML = finishValue(slider.value);
}
