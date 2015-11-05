var exec = require('child_process').exec;

function leftPadding(str, length, char) {
    str = str.toString();
    while (str.length < length) str = char + str;
    return str;
}

if (process.argv.length !== 3) {
    console.log('Usage: node index [problem number]');
} else {
    var problemNumber = parseInt(process.argv[2], 10);

    if (isNaN(problemNumber)) {
        console.log('Usage: node index [problem number]');
        console.log('[problem number] must be a number');
    } else {
        var filePath = './problems/p' + leftPadding(problemNumber, 3, '0') + '.js';
        require('fs').exists(filePath, function(exists) {

            if (!exists) {
                console.log('Problem [' + problemNumber + '] not found.');
            } else {

                var start = (new Date()).getTime();

                require('child_process').exec('node ' + filePath, function(error, stdout, stderr) {
                    if (error !== null) {
                        console.log('exec error: ' + error);
                        console.log('stderr: ' + stderr);
                    } else {
                        var end = (new Date()).getTime();
                        console.log('Result: ' + stdout.substring(0, stdout.lastIndexOf('\n')));
                        console.log('Time elapsed: ' + ((end - start) / 1000) + 's');
                    }
                });

            }

        });

    }
}
