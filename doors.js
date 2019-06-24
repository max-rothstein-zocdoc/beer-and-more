#!/usr/bin/env node
const {
    cmd,
    notify,
    print,
    rl,
    ZingError,
} = require('./common');

const doorAscii = `
 __________
|  __  __  |
| |  ||  | |
| |  ||  | |
| |__||__| |
|  __  __()|
| |  ||  | |
| |  ||  | |
| |  ||  | |
| |  ||  | |
| |__||__| |
`;

let choicesLeft = 100;

const run = async () => {
    let resp;
    try {
        await cmd.sleep(300);
        await cmd.cs();
        await cmd.talk([
            'Welcome friend.',
        ]);
        await cmd.sleep(600);
        printXDoors(1)
        await cmd.talk([
            'Here is your first door, press 1 to open it',
        ]);
        resp = await rl.q('>> ');
        if (resp.toLowerCase() === '1') {
            print("*Wow...Its so bright...Who is that?*")
            await cmd.sleep(2000);
            print('Welcome to the world of doors! You just picked your first door! Fun, wasn\'t it? ');
            await cmd.sleep(3000);
        } else {
            print('Sometimes there are more choices than are offered, but your first door is not your choice to make');
            await cmd.sleep(4000);
            printXDoors(1)
            await cmd.talk([
                'Here is your first door, press 1 to open it',
            ]);
            resp = await rl.q('>> ');
            if (resp.toLowerCase() !== '1') {
                print('Hmmm, seems like you dont want to pick the door on your own... thats ok, the doctor will get you out');
                await cmd.sleep(3000);
                process.stdout.write('.');
                await cmd.sleep(100);
                process.stdout.write('.');
                await cmd.sleep(100);
                process.stdout.write('.');
                await cmd.sleep(100);
                process.stdout.write('.');
                await cmd.sleep(100);
                process.stdout.write('snip');
                await cmd.sleep(100);
                process.stdout.write('.');
                await cmd.sleep(100);
                process.stdout.write('.');
                await cmd.sleep(100);
                process.stdout.write('.');
                await cmd.sleep(100);
                process.stdout.write('snip');
                await cmd.sleep(100);
                process.stdout.write('.');
                await cmd.sleep(100);
                process.stdout.write('.');
                await cmd.sleep(100);
                process.stdout.write('.\n');
                await cmd.sleep(1000);
            }
            await cmd.cs();
            print('Welcome to the world of doors! You just picked your first door! Fun, wasn\'t it? ');
            await cmd.sleep(2000);
            await cmd.sleep(500);
            process.stdout.write('.');
            await cmd.sleep(500);
            process.stdout.write('.');
            await cmd.sleep(500);
            process.stdout.write('.');
            await cmd.sleep(500);
            process.stdout.write('.');
            await cmd.sleep(500);
            process.stdout.write('.');
            await cmd.sleep(500);
            process.stdout.write('.\n');
            await cmd.sleep(2000);
        }
        await cmd.cs();
        await cmd.talk([
            'At first the doors are simple.', 
        ]);
        await cmd.sleep(4000);
        await cmd.talk([
            'There isnt much to go on', 
        ]);
        await cmd.sleep(1000);
        await cmd.talk([
            'and others will be there to guide you so you dont pick the wrong door', 
        ]);
        await cmd.sleep(3000);
        printXDoors(2);
        await cmd.sleep(3000);
        await cmd.talk([
            '*hmmm...I think they want me to do something*',
        ]);
        await cmd.sleep(3000);
        await cmd.talk([
            '~Door 1 is the right answer! You can do it! Door 1!~',
        ]);
        await cmd.sleep(1000);
        resp = await rl.q('>> ');
        if (resp.toLowerCase() === '1') {
            print("~You did it! Im so proud of you! Look how smart you are!~");
            await cmd.sleep(2000);
        } else if(resp.toLowerCase() === '2'){
            print("~No not that door, lets try again~");
            await cmd.sleep(2000);
            process.stdout.write(".");
            await cmd.sleep(100);
            process.stdout.write(".");
            await cmd.sleep(100);
            process.stdout.write(".\n");
            await cmd.sleep(100);
            print("~Pick Door 1! I know you can do it!~");
            resp = await rl.q('>> ');
            if (resp.toLowerCase() === '1') {
                print("~You did it! Im so proud of you! I knew you would get it eventually!~");
                await cmd.sleep(4000);
            } else {
                print("~Sigh");
                await cmd.sleep(2000);
                process.stdout.write(".");
                await cmd.sleep(500);
                process.stdout.write(".");
                await cmd.sleep(500);
                process.stdout.write(".~\n");
                await cmd.sleep(500);
                print("~The books say you could do this by now... lets try again some other time~");
                await cmd.sleep(3000);
                print("~Its ok, we still love you~");
                await cmd.sleep(3000);
            }
        } else {
            print("~No thats not an option, remember? Pick a door... its either 1 or 2~");
            resp = await rl.q('>> ');
            if (resp.toLowerCase() === '1') {
                print("~You did it! Im so proud of you! I knew you would get it eventually!~");
            } else {
                print("~Sigh");
                await cmd.sleep(2000);
                process.stdout.write(".");
                await cmd.sleep(500);
                process.stdout.write(".");
                await cmd.sleep(500);
                process.stdout.write(".~\n");
                await cmd.sleep(500);
                print("~The books say you could do this by now... lets try again some other time~");
                await cmd.sleep(3000);
                print("~Its ok, we still love you~");
                await cmd.sleep(3000);
            }
        }
        await cmd.cs();
        await cmd.talk([
            '*They get so happy when I do what they say*',
        ]);
        await cmd.sleep(2000);
        await cmd.talk([
            '~Ok IN53RT_N@M3, time for your first day of school! How exciting!~',
        ]);
        await cmd.sleep(2000);
        await cmd.talk([
            '~The bus is here~',
        ]);
        await cmd.sleep(2000);
        await cmd.talk([
            '~Time to get on~',
        ]);
        printXDoors(1);
        resp = await rl.q('>> ');
        if (resp.toLowerCase() === '1') {
            await cmd.talk([
                'This door is the first that took you somewhere...',
            ]);
            await cmd.sleep(2000);
            await cmd.talk([
                'The first choice that had a consiquence',
            ]);
            await cmd.sleep(2000);
            await cmd.talk([
                'But not the last',
            ]);
        } else {
            await cmd.cs();
            await cmd.sleep(1000);
            await cmd.talk([
                '~I know its scary...~',
            ]);
            await cmd.sleep(2000);
            await cmd.talk([
                '~But its something you have to do!~',
            ]);
            await cmd.sleep(2000);
            await cmd.talk([
                '~All the other US3R5_M@L3 and US3R5_F3M@L3 are going to be there!~',
            ]);
            printXDoors(1);
            resp = await rl.q('>> ');
            if (resp.toLowerCase() === '1') {
                await cmd.talk([
                    'This door is the first that took you somewhere...',
                ]);
                await cmd.sleep(2000);
                await cmd.talk([
                    'The first choice that had a consiquence',
                ]);
                await cmd.sleep(2000);
                await cmd.talk([
                    'But not the last',
                ]);
                await cmd.sleep(2000);
                process.stdout.write(".");
                await cmd.sleep(500);
                process.stdout.write(".");
                await cmd.sleep(500);
                process.stdout.write(".~\n");
                await cmd.talk([
                    '*I made USER_WITH_TEXT_IDENTIFICATION_ICON=`~` so proud today*',
                ]);
            } else {

            }
        }
        await cmd.sleep(1500);
        await cmd.talk([
            'The bus stops and you follow the other US3R5 off the bus.',
        ]);
        await cmd.sleep(1500);
        await cmd.talk([
            'As you are standing on the lawn infront of the schoo, a bell rings',
        ]);
        await cmd.sleep(1500);
        printXDoors(1);
        await cmd.talk([
            '*Must be time for class...Should I go?*',
        ]);
        resp = await rl.q('>> ');
        if (resp.toLowerCase() === '1') {
            await cmd.talk([
                '*Yeah...USER_WITH_TEXT_IDENTIFICATION_ICON=`~` would want me to go to class*',
            ]);
        } else {
            await cmd.talk([
                '*No one is around to stop me if I dont go...*',
            ]);
            await cmd.sleep(1500);
            printXDoors(1);
            await cmd.talk([
                '*Do i really want to do this? Or should I go to class*',
            ]);
            resp = await rl.q('>> ');
            if (resp.toLowerCase() === '1') {
                await cmd.talk([
                    '*I guess I will go...but what happens if i don\'t?*" USER_WITH_TEXT_IDENTIFICATION_ICON=`~` would want me to go to class*',
                ]);
                await cmd.sleep(1500);
                await cmd.talk([
                    '*A question for another time...*',
                ]);
            } else {
                await cmd.talk([
                    '*Why should I? I get to choose my own doors dont I?*',
                ]);
                await cmd.sleep(1500);
                await cmd.talk([
                    'You did get to pick...but you did not know the consiquences',
                ]);
            }
        }
    } catch (err) {
        if (err instanceof ZingError) {
            print('Forced exit. Starting over...');
            await cmd.pause();
            await run();
        } else {
            throw err;
        }
    }
};

rl.init();
run();

const printXDoors = x => {
    if( choicesLeft >= 1) {
        choicesLeft--;
    }
    for (let i = 0; i < x; i++) {
        console.log("\nDoor Number " + (i+1) + doorAscii)
    }
}