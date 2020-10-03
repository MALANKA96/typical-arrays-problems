exports.min = function min(array) {
    if (Array.isArray(array) && array.length != 0) {
        let min_el = array[0];
        for (var i = 0; i < array.length; i++) {
            if (min_el > array[i]) {
                min_el = array[i];
            }
        }
        return min_el;
    }
    return 0;
};

exports.max = function max(array) {
    if (Array.isArray(array) && array.length != 0) {
        let max_el = array[0];
        for (var i = 0; i < array.length; i++) {
            if (max_el < array[i]) {
                max_el = array[i];
            }
        }
        return max_el;
    }
    return 0;
};

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length != 0) {
        let sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    } else {
        return 0;
    }
};
