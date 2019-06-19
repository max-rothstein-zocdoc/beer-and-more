#!/usr/bin/env node
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

const beerAscii = `
             . .
       .. . *.
- -_ _-__-0oOo
 _-_ -__ -||||)
    ______||||______
~~~~~~~~~~'""'
`;

colors.setTheme({
    info: 'green',
    calm: 'cyan'
});

class BeerError extends Error {}

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

const promiseSerial = funcs =>
  funcs.reduce((promise, func) =>
    promise.then(result => func().then(Array.prototype.concat.bind(result))),
    Promise.resolve([]))

const print = (...args) => {
    console.log(...args);
};

const talk = (blurbs, isSlow) => {
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
};

const init = () => {
    // notify('Beer', 'activated');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'pomodoro> '
    });

    rl.on('close', () => process.exit(0));

    return rl;
};

const rl = init();

const q = message => {
    return new Promise(resolve => {
        rl.question(message, answer => {
            resolve(answer);
        });
    }).then(answer => {
        if (answer === 'zing') {
            throw new BeerError();
        }
        return answer;
    });
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
                    stdout && print(`${stdout}`);
                    if (error) {
                        throw error;
                    }
                    resolve();
                }
            );
        }).then(() => {
            prevtimestamp = null;
        });
    }
};

const run = async () => {
    let resp;
    try {
        await cmd.sleep(200);
        await cmd.cs();
        await talk([
            'Welcome friend.',
            'I hear that you are here for beer. Is that so [y/n]?',
        ]);
        resp = await q('>> ');
        if (resp.toLowerCase() === 'y') {
            print('Great, let\'s proceed.');
        } else {
            print('Sorry bud, you are getting beer anyways.');
        }
        await talk('How many members are in your party?');
        resp = await q('>> ');
        const numMembers = parseInt(resp);
        const numBeers = numMembers + 3;
        await cmd.pause();
        await cmd.cs();

        if (isNaN(numMembers)) {
            await talk([
                'Sorry, that\'s not a real number.',
                'Luckily...I\'m feeling generous today.',
                '...',
            ]);

            await cmd.pause();
            await cmd.pause();
            await cmd.pause();

            await talk([
                'I am going to equip you with enough beer for 8.',
                'If you run out or need more...',
                '...you\'ll have to get back in line.',
            ]);
        } else if (numMembers > 1000) {
            await talk([
                'Dear God, that\'s a lot.',
                'We\'re but a humble shop.',
                'I\'m sorry, but we won\'t be able to fulfill your order.',
                'You can always get back in line if you like.',
            ]);
            process.exit(0);
        } else {
            await talk([
                `Hmm, ${numMembers} did you say?`,
                'Now then, the lot of you sure look thirsty.',
                `Let's say I supply you enough for ${numBeers}.`,
                `I'd say you all have earned it after a hard days work.`
            ]);
        }

        await talk('Click enter once you\'re ready.');
        await q('>> ');

        cmd.cs();

        await talk([
            'Give me a few minutes while I prepare you order.',
            'By the look of you, I venture to say this is your first time here.',
            'We do things in a rather unique way. Our way, you might say.',
            '',
            '',
            'At most beer shops you pick to your heart\'s content.',
            'At this beer shop, we skip that step.',
            'It is a modern world after all, no sense in worrying over small things...',
            '... like whether or not the hazy boys get their hazies',
            '... or if the purists get their classically brewed ales.',
            '',
            '',
            'The truth is that I\'m not real and neither are you.',
            'Best we can do is have a few drinks and laughs and forget the...',
            '... harsh reality (or non-reality, if you don\'t mind me saying)',
            '... of our humble existence on this tiny planet.',
            '',
            '',
            'Now then, I have rambled long enough...',
            'Your order will be out in just a moment.',
            '.',
            '..',
            '...',
            'Order up!',
        ], true);

        await cmd.cs();
        await cmd.pause();
        await cmd.pause();

        for (let n=0; n<numBeers; n = n + 1) {
            console.log(beerAscii);
        }

        await cmd.woc();
        await cmd.pause();
    } catch (err) {
        if (err instanceof BeerError) {
            print('Forced exit. Starting over...');
            await cmd.pause();
            await run();
        } else {
            throw err;
        }
    }
    run();
};

run();

