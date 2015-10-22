function getPermutations(dicc) {

    var count = 0;

    var indices = dicc.map(function(value, index) {
        return {
            value: value,
            index: index,
            direction: -1
        };
    });

    var swap = function(index1, index2) {
        var offset = indices[index1];
        indices[index1] = indices[index2];
        indices[index2] = offset;
    };

    var getLargestMobileIndex = function() {
        var largestMobileIndex;

        indices.forEach(function(currentValue, index) {
            var compare = index + currentValue.direction;
            if (compare >= 0 && compare < indices.length) {
                if (currentValue.index > indices[compare].index) {
                    if (typeof largestMobileIndex !== 'number' || indices[largestMobileIndex].index < currentValue.index) {
                        largestMobileIndex = index;
                    }
                }
            }
        });
        return largestMobileIndex;
    };

    var instance = {
        next: function() {
            var largestMobileIndex = getLargestMobileIndex();

            if (typeof largestMobileIndex !== 'number') {
                return false;
            }

            var current = indices[largestMobileIndex];
            swap(largestMobileIndex, largestMobileIndex + indices[largestMobileIndex].direction);

            indices.forEach(function(value, index, array) {
                if (value.index > current.index) {
                    array[index].direction = 0 - value.direction;
                }
            });

            largestMobileIndex = getLargestMobileIndex();

            count = count + 1;

            return true;
        }
    };

    Object.defineProperty(instance, 'index', {
        get: function() {
            return count;
        }
    });

    Object.defineProperty(instance, 'value', {
        get: function() {
            return indices.map(function(e) {
                return e.value;
            });
        }
    });

    return instance;
}

exports.getPermutations = getPermutations;