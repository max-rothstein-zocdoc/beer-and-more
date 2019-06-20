const exec = require('child_process').exec;
const readline = require('readline');
const colors = require('colors');
const moment = require('moment');

const tab = `[-----]`;

let prevtimestamp;
require('log-timestamp')(() => {
    const timestamp = moment().format('HH:mm');
    if (prevtimestamp && prevtimestamp === timestamp) {
        return tab;
    }
    prevtimestamp = timestamp;
    return `[${timestamp}]`;
});

colors.setTheme({
    info: 'green',
    calm: 'cyan'
});

const execAsync = (cmd, verbose = true) => {
    verbose && console.log(`+ ${cmd}`);
    return new Promise((resolve, reject) => {
        exec(
            cmd,
            (error, stdout) => {
                verbose && stdout && console.log(`${stdout}`);
                if (error) {
                    reject(err);
                } else {
                    resolve();
                }
            }
        );
    });
};

const promiseSerial = funcs =>
  funcs.reduce((promise, func) =>
    promise.then(result => func().then(Array.prototype.concat.bind(result))),
    Promise.resolve([]))

const notify = (title, message, stopRecurse) => {
    const osaCommand = `display notification "${message}" with title "${title}"`;
    const command = `osascript -e '${osaCommand}'`;
    exec(
        command,
        (error, stdout) => {
            stdout && console.log(`${stdout}`);
            if (error) {
                if (!stopRecurse) {
                  notify('Beer', 'We are going down!', true);
                }
                throw error;
            }
        }
    );
};

const print = (...args) => {
    console.log(...args);
};

let rlInterface;
const rl = {
    init: () => {
        if (!rlInterface) {
            rlInterface = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
                prompt: 'pomodoro> '
            });
    
            rlInterface.on('close', () => process.exit(0));
        }
    },
    q: message => {
        return new Promise(resolve => {
            rlInterface.question(message, answer => {
                resolve(answer);
            });
        }).then(answer => {
            if (answer === 'zing') {
                throw new ZingError();
            }
            return answer;
        });
    }
};

const sleep = timeInMs => {
    return new Promise(resolve => {
        setTimeout(resolve, timeInMs);
    });
};

const cmd = {
    // Wait On Click
    woc: () => {
        return q('');
    },
    sleep,
    pause: () => {
        return sleep(800);
    },
    cs: async () => {
        return new Promise(resolve => {
            exec(
                'clear',
                (error, stdout) => {
                    stdout && console.log(`${stdout}`);
                    if (error) {
                        throw error;
                    }
                    resolve();
                }
            );
        }).then(() => {
            prevtimestamp = null;
        });
    },
    talk: (blurbs, isSlow) => {
        const doTalk = blurb => {
            console.log(blurb);
            if (isSlow) {
                return cmd.pause()
                    .then(cmd.pause)
                    .then(cmd.pause);
            }
            return cmd.pause();
        };
        if (typeof blurbs === 'string') {
            blurbs = [blurbs];
        }
        // console.log('blurbs!');
        const bits = blurbs.map(arg => {
            return () => doTalk(arg);
        });
        return promiseSerial(bits);
    },
};

class ZingError extends Error {}

module.exports = {
    cmd,
    notify,
    print,
    rl,
    ZingError,
    exec: execAsync,
};

