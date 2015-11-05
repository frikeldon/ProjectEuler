var exec = require('child_process').exec;
var fs = require('fs');
var results = require('./results');

var colors = {
    green: '\033[92m',
    red: '\033[91m',
    white: '\033[97m',
};

function printUsage() {
    console.log('Usage:');
    console.log('    node index all              - Execute all problems');
    console.log('    node index [problem number] - Execute single problem');
    console.log('               [problem number] must be a number');
}

function leftPadding(str, length, char) {
    str = str.toString();
    while (str.length < length) str = char + str;
    return str;
}

function waterfall(promises) {
    return promises.reduce(function(current, next) {
        return current.then(next);
    }, Promise.resolve());
}

function executeProblem(path) {
    return function() {
        return new Promise(function(fulfill, reject) {
            var start = (new Date()).getTime();

            require('child_process').exec('node ' + path, function(error, stdout, stderr) {
                if (error !== null) {
                    return reject(error);
                } else {
                    var end = (new Date()).getTime();
                    console.log('Result: ' + stdout.substring(0, stdout.lastIndexOf('\n')));
                    console.log('Time elapsed: ' + ((end - start) / 1000) + 's');
                    fulfill();
                }
            });
        });
    };
}

function testProblem(path) {
    return function() {
        return new Promise(function(fulfill, reject) {
            var start = (new Date()).getTime();
            var problemNumber = parseInt(path.match(/problems\/p(\d+)\.js/)[1], 10);

            require('child_process').exec('node ' + path, function(error, stdout, stderr) {
                if (error !== null) {
                    return reject(error);
                } else {
                    var end = (new Date()).getTime();
                    var elapsed = (end - start) / 1000;
                    var msgTime = (elapsed > 60 ? colors.red : colors.green) + leftPadding(Math.round(elapsed), 5, ' ') + 's' + colors.white;
                    var result = stdout.substring(0, stdout.lastIndexOf('\n'));
                    result = (result === results[problemNumber] ? colors.green : colors.red) + leftPadding(result, 15, ' ') + colors.white;
                    
                    console.log(colors.white + 'Problem ' + leftPadding(problemNumber, 3, ' ') + ' [' + msgTime + '] - ' + result);

                    fulfill();
                }
            });
        });
    };
}

if (process.argv.length !== 3) {
    printUsage();
} else {
    var problemNumber = parseInt(process.argv[2], 10);

    if (process.argv[2] === 'all') {

        fs.readdir('./problems', function(err, files) {
            if (err) {
                console.log('Error readding problems:');
                console.log(err);
                return;
            }

            var problems = files.filter(function(file) {
                return /p(\d+)\.js/.test(file);
            }).map(function(file) {
                return testProblem('./problems/' + file);
            });

            waterfall(problems).then(function() {
                console.log('  - End -');
            });
        });

    } else if (!isNaN(problemNumber)) {

        var filePath = './problems/p' + leftPadding(problemNumber, 3, '0') + '.js';
        fs.exists(filePath, function(exists) {
            if (!exists) {
                console.log('Problem [' + problemNumber + '] not found.');
            } else {
                executeProblem(filePath)();
            }
        });

    } else {

        printUsage();

    }
}
