#!/usr/bin/env node
const {
    cmd,
    notify,
    print,
    rl,
    ZingError,
} = require('./common');

const beerAscii = `
             . .
       .. . *.
- -_ _-__-0oOo
 _-_ -__ -||||)
    ______||||______
~~~~~~~~~~'""'
`;

const run = async () => {
    let resp;
    try {
        await cmd.sleep(200);
        await cmd.cs();
        await cmd.talk([
            'Welcome friend.',
            'I hear that you are here for beer. Is that so [y/n]?',
        ]);
        resp = await rl.q('>> ');
        if (resp.toLowerCase() === 'y') {
            print('Great, let\'s proceed.');
        } else {
            print('Sorry bud, you are getting beer anyways.');
        }
        await cmd.talk('How many members are in your party?');
        resp = await rl.q('>> ');
        const numMembers = parseInt(resp);
        const numBeers = numMembers + 3;
        await cmd.pause();
        await cmd.cs();

        if (isNaN(numMembers)) {
            await cmd.talk([
                'Sorry, that\'s not a real number.',
                'Luckily...I\'m feeling generous today.',
                '...',
            ]);

            await cmd.pause();
            await cmd.pause();
            await cmd.pause();

            await cmd.talk([
                'I am going to equip you with enough beer for 8.',
                'If you run out or need more...',
                '...you\'ll have to get back in line.',
            ]);
        } else if (numMembers > 1000) {
            await cmd.talk([
                'Dear God, that\'s a lot.',
                'We\'re but a humble shop.',
                'I\'m sorry, but we won\'t be able to fulfill your order.',
                'You can always get back in line if you like.',
            ]);
            process.exit(0);
        } else {
            await cmd.talk([
                `Hmm, ${numMembers} did you say?`,
                'Now then, the lot of you sure look thirsty.',
                `Let's say I supply you enough for ${numBeers}.`,
                `I'd say you all have earned it after a hard days work.`
            ]);
        }

        await cmd.talk('Click enter once you\'re ready.');
        await rl.q('>> ');

        cmd.cs();

        await cmd.talk([
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
        if (err instanceof ZingError) {
            print('Forced exit. Starting over...');
            await cmd.pause();
            await run();
        } else {
            throw err;
        }
    }
    run();
};

rl.init();
run();

