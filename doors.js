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

const windowAscii = `
o=(=(=(=(=(=(=)=)=)=)=o
!-'-'-'-/_\\-'-'-'-! 
! !  , /___\\\`  ! !!
!!! , /  |  \\\`  ! !
!!  ,|___|___|\`  !!!
!_,| |_______|\` \`_!
!-\`| |       | |,-!
!!!! |       | ! !!
!!!! |       | !!!!
!!!!_|_______|_!!!!
!!!!___________!!!! 
!!!!           !!!!   
!!!!           !!!!   
!!!!           !!!!   
!!!!           !!!! 
`;

let hasChoicesLeftVal = false;
let choicesLeft = 100;

let hasEducationVal = false;
let education = 0;

let hasFitnessVal = false;
let fitness = 0;

let name = 'IN53RT_N@M3';

let hasFamilyFavorVal = false;
let familyFavor = 0;
let hasFamily = true;

let hasKarmaVal = 0;
let karma = 0;

let hasLiarVal = false;
let isLiar = false;

let hasBraveryVal = false;
let isBrave = true;

let whyDidYouComeAllThisWay = 'No Reason';

let anythingYouWant = 'Nothing';

let firstConsiquence = true;

const run = async () => {
    let resp;
    try {
        await cmd.sleep(300);
        await cmd.cs();
        await cmd.talk([
            'Welcome friend.',
        ]);
        await cmd.sleep(600);
        printDoorsByName(['Door ' + 1])
        await cmd.talk([
            'Here is your first door, press 1 to open it',
        ]);
        resp = await rl.q('>> ');
        if (resp.toLowerCase() === '1') {
            print('*Wow...Its so bright...Who is that?*')
            await cmd.sleep(2000);
            print('Welcome to the world of doors! You just picked your first door! Fun, wasn\'t it? ');
            await cmd.sleep(3000);
        } else {
            print('Sometimes there are more choices than are offered, but your first door was not your choice to make');
            await cmd.sleep(4000);
            printDoorsByName(['Door ' +1])
            await cmd.talk([
                'You might not remember your first door, press 1 to open it',
            ]);
            resp = await rl.q('>> ');
            if (resp.toLowerCase() !== '1') {
                print('Hmmm, seems like you didn\'t want to pick the door on your own... thats ok, I guess the doctor got you out');
                await cmd.sleep(3000);
                await dramaitcPause();
                process.stdout.write('snip');
                await cmd.sleep(100);
                await dramaitcPause();
                process.stdout.write('snip');
                await dramaitcPause();
                await cmd.sleep(1000);
            }
            await cmd.cs();
            print('Welcome to the world of doors! You just picked your first door! Fun, wasn\'t it? ');
            await cmd.sleep(2000);
            await dramaitcPause();
            await cmd.sleep(2000);
        }
        await cmd.cs();
        await cmd.talk([
            'At first the doors were simple.', 
        ]);
        await cmd.sleep(4000);
        await cmd.talk([
            'There wasn\'t much to go on', 
        ]);
        await cmd.sleep(1000);
        await cmd.talk([
            'and others were there to guide you so you didn\'t pick the wrong door', 
        ]);
        await cmd.sleep(3000);
        printDoorsByName(['Door ' + 1,'Door ' + 2]);
        await cmd.sleep(1000);
        await cmd.talk([
            '*hmmm...I think they want me to do something*',
        ]);
        await cmd.sleep(1000);
        await cmd.talk([
            '~Door 1 is the right answer! You can do it! Door 1!~',
        ]);
        await cmd.sleep(500);
        resp = await rl.q('>> ');
        if (resp.toLowerCase() === '1') {
            print('~You did it! Im so proud of you! Look how smart you are!~');
            await cmd.sleep(3000);
        } else if(resp.toLowerCase() === '2'){
            print('~No not that door, lets try again~');
            await cmd.sleep(2000);
            await dramaitcPause();
            await cmd.sleep(100);
            printDoorsByName(['Door ' + 1,'Door ' + 2]);
            print('~Pick Door 1! I know you can do it!~');
            resp = await rl.q('>> ');
            if (resp.toLowerCase() === '1') {
                print('~You did it! Im so proud of you! I knew you would get it eventually!~');
                await cmd.sleep(4000);
            } else {
                print('~Sigh');
                await cmd.sleep(2000);
                await dramaitcPause();
                await cmd.sleep(500);
                print('~The books say you could do this by now... lets try again some other time~');
                await cmd.sleep(3000);
                print('~Its ok, we still love you~');
                await cmd.sleep(3000);
            }
        } else {
            printDoorsByName(['Door ' + 1,'Door ' + 2]);
            print('~No thats not an option, remember? Pick a door... its either 1 or 2~');
            resp = await rl.q('>> ');
            if (resp.toLowerCase() === '1') {
                print('~You did it! Im so proud of you! I knew you would get it eventually!~');
            } else {
                print('~Sigh');
                await cmd.sleep(2000);
                await dramaitcPause();
                await cmd.sleep(500);
                print('~The books say you could do this by now... lets try again some other time~');
                await cmd.sleep(3000);
                print('~Its ok, we still love you~');
                await cmd.sleep(3000);
            }
        }
        await cmd.cs();
        await cmd.talk([
            '*They get so happy when I do what they say*',
        ]);
        await cmd.sleep(2000);
        await cmd.talk([
            '~Ok ' +name+ ', time for your first day of school! How exciting!~',
        ]);
        await cmd.sleep(2000);
        await cmd.talk([
            '~The bus is here~',
        ]);
        await cmd.sleep(2000);
        await cmd.talk([
            '~Time to get on~',
        ]);
        printDoorsByName(['Door To Bus']);
        resp = await rl.q('>> ');
        if (resp.toLowerCase() === '1' || resp.toLowerCase() === 'to bus' ||resp.toLowerCase() === 'bus') {
            //no op
        } else {
            await cmd.cs();
            await cmd.sleep(1000);
            await cmd.talk([
                '~I know its scary '+name+'...~',
            ]);
            await cmd.sleep(2000);
            await cmd.talk([
                '~But its something you have to do!~',
            ]);
            await cmd.sleep(2000);
            await cmd.talk([
                '~All the other US3R5_M@L3 and US3R5_F3M@L3 are going to be there!~',
            ]);
            printDoorsByName(['Door To Bus']);
            resp = await rl.q('>> ');
            if (resp.toLowerCase() === '1' || resp.toLowerCase() === 'to bus' ||resp.toLowerCase() === 'bus') {
                await cmd.talk([
                    '*I made USER_WITH_TEXT_IDENTIFICATION_ICON=`~` so proud today*',
                ]);
                await cmd.talk([
                    '~I love you '+name+'! Have a great first day~',
                ]);
                hasFamilyFavorVal = true;
                familyFavor ++;
            } else {
                await cmd.talk([
                    '~ugh fine, you can stay home...but just this once~',
                ]);
                await cmd.sleep(2000);
                hasEducationVal = true;
                education--;
                await maybeFirstConsiquence()
            }
        }
        await cmd.sleep(1500);
        await cmd.talk([
            'The bus stopped and you followed the other US3R5 off the bus.',
        ]);
        await cmd.sleep(1500);
        await cmd.talk([
            'As you were standing on the lawn infront of the school, a bell rang',
        ]);
        await cmd.sleep(1500);
        printDoorsByName(['Door To School']);
        await cmd.talk([
            '*Must be time for class...*',
        ]);
        resp = await rl.q('>> ');
        if (resp.toLowerCase() === '1') {
            await cmd.talk([
                '*Yeah...USER_WITH_TEXT_IDENTIFICATION_ICON=`~` would want me to go to class*',
            ]);
            await maybeFirstConsiquence();
            hasEducationVal = true;
            education++;
        } else {
            await cmd.talk([
                '*No one is around to stop me if I dont go...*',
            ]);
            await cmd.sleep(1500);
            await cmd.talk([
                '*Do I really want to do this? USER_WITH_TEXT_IDENTIFICATION_ICON=`~` wouldn\'t like it.*',
            ]);
            printDoorsByName(['Door To School']);
            resp = await rl.q('>> ');
            if (resp.toLowerCase() === '1') {
                await cmd.talk([
                    '*I guess I will go...but what happens if i don\'t?*',
                ]);
                await cmd.sleep(1500);
                await cmd.talk([
                    '*A question for another time...*',
                ]);
                await maybeFirstConsiquence();
                hasEducationVal = true;
                education++;
            } else {
                await cmd.talk([
                    '*Why should I? I get to choose my own doors dont I?*',
                ]);
                await cmd.sleep(1500);
                await maybeFirstConsiquence();
                hasEducationVal = true;
                education--;
                await cmd.talk([
                    'What did you do instead?',
                ]);
                printDoorsByName(['Door To Home'],['Door To Playground']);
                resp = await rl.q('>> ');
                if (resp.toLowerCase() === '1' || resp.toLowerCase() === 'to home' ||resp.toLowerCase() === 'home') {
                    await cmd.talk([
                        'Interesting, why did you come all this way only to go back?',
                    ]);
                    await cmd.sleep(1500);
                    resp = await rl.q('>> ');
                    whyDidYouComeAllThisWay = resp
                    await cmd.sleep(200);
                    await cmd.talk([
                        'Facinating...I will remember that.',
                    ]);
                    await cmd.sleep(1500);
                    await cmd.talk([
                        'Ok so you walked home...what did you do then?',
                    ]);
                    printDoorsByName(['Door To Play In Basement'],['Door To Room']);
                    resp = await rl.q('>> ');
                    if (resp.toLowerCase() === '1' || resp.toLowerCase() === 'to play in basement' ||resp.toLowerCase() === 'play in basement') {
                        await cmd.talk([
                            '*I\'m gonna play with my toys...This is gonna be great*',
                        ]);
                        await cmd.sleep(1500);
                        await cmd.talk([
                            'You played for a few hours until you heard footsteps in the basement',
                        ]);
                        await cmd.sleep(1500);
                        await cmd.talk([
                            '~'+name+'? Is that you down there?~',
                        ]);
                        await cmd.sleep(1500);
                        await cmd.talk([
                            'She caught you, and she wasn\'t happy',
                        ]);
                        await maybeFirstConsiquence();
                        hasFamilyFavorVal = true;
                        familyFavor--;
                        await cmd.sleep(1500);
                    } else if (resp.toLowerCase() === '2' || resp.toLowerCase() === 'to room' ||resp.toLowerCase() === 'room') {
                        await cmd.talk([
                            '*I\'m gonna go to my room, but I might get caught by USER_WITH_TEXT_IDENTIFICATION_ICON=`~` if I use the front door*',
                        ]);
                        await cmd.talk([
                            'you climbed to the window of your room...what would happend next was not up to you or anyone',
                        ]);
                        await cmd.sleep(1500);
                        await cmd.talk([
                            'Rolling Dice...',
                        ]);
                        await cmd.sleep(1500);
                        if (isSuccessfulWithOneInXOdds(2)) {
                            await cmd.talk([
                                'you opened the window and made it into your room',
                            ]);
                            await cmd.sleep(1500);
                            await cmd.talk([
                                '*Wow! What should I do first? I can do anything I want',
                            ]);
                            resp = await rl.q('>> ');
                            if (resp === '') {
                                await cmd.sleep(500);
                                await cmd.talk([
                                    'You chose to do nothing?',
                                ]);
                                await cmd.sleep(1500);
                                await cmd.talk([
                                    'Interesting',
                                ]);
                                await dramaitcPause()
                                anythingYouWant = "Nothing";

                            } else {
                                anythingYouWant = resp;
                                await cmd.sleep(1500);
                                await cmd.talk([
                                    'But you never got a chance...',
                                ]);
                            }
                            await cmd.sleep(1500);
                            await cmd.talk([
                                'You heard glass shatter in the hallway',
                            ]);
                            await cmd.sleep(1500);
                            await cmd.talk([
                                'You heard glass shatter in the hallway and two people yelling',
                            ]);
                            await cmd.sleep(1500);
                            await cmd.talk([
                                '*What was that?*',
                            ]);
                            await cmd.sleep(1500);
                            await cmd.talk([
                                'Were you scared?',
                            ]);
                            let answer = false 
                            while (!answer) {
                                resp = await rl.q('>> ');
                                printDoorsByName(['Door for Yes'], ['Door for No'])
                                if (resp === '1' || resp === 'for yes' || resp === 'yes') {
                                    hasLiarVal = true;
                                    isLiar = false;
                                }
                                else if (resp === '2' || resp === 'for no' || resp === 'no') {
                                    hasLiarVal = true;
                                    isLiar = false;
                                }
                                else {
                                    await cmd.talk([
                                        'Sometimes there really are only two choices...',
                                    ]);
                                }
                            }
                            printDoorsByName(['Door toward the noise'], ['Door to hide in the closet']);
                            resp = await rl.q('>> ');
                            if (resp === '1' || resp === 'toward the noise' || resp === 'noise') {
                                hasBraveryVal = true;
                                isBrave = true;
                                await cmd.talk([
                                    'You opened the door to the hallway',
                                ]);
                                await cmd.sleep(1500);
                                await cmd.talk([
                                    'And what you saw haunted you',
                                ]);
                                await cmd.sleep(1500);
                                await cmd.talk([
                                    'USER_UNKOWN_TEXT_IDENTIFICATION_ICON, who you would never see again and who you would never forgive...',
                                ]);
                                await cmd.talk([
                                    'And USER_WITH_TEXT_IDENTIFICATION_ICON=`~`',
                                ]);
                                await dramaitcPause();
                                await cmd.sleep(500);
                                await process.stdout.write("crying");
                                await cmd.sleep(1500);
                                hasFamily = false;
                            } else if (resp === '2' || resp === 'hide in the closet' || resp === 'hide in closet' || resp === 'closet') {
                                hasBraveryVal = true;
                                isBrave = false;
                                await cmd.talk([
                                    'Eventually the noises faded',
                                ]);
                            } else {
                                await cmd.talk([
                                    'Eventually the noises faded',
                                ]);
                            }
                        } else {
                            await cmd.talk([
                                'You fell from your house and died...what a shame',
                            ]);
                        }
                    }
                    await cmd.sleep(1500); 
                } else if (resp.toLowerCase() === '2' || resp.toLowerCase() === 'to playground' ||resp.toLowerCase() === 'playground') {
                    await cmd.talk([
                        'You made your way around the school and opened the door to the playground',
                    ]);                    
                    await cmd.sleep(1500);
                    await cmd.talk([
                        'You saw a INSERT_DESIRED_TOY in the sandbox and picked it up',
                    ]);
                    await cmd.sleep(1500);
                    await cmd.talk([
                        '*Wow! I have always wanted INSERT_DESIRED_TOY...',
                    ]);
                    await cmd.sleep(1500);
                    await cmd.talk([
                        '*USER_WITH_TEXT_IDENTIFICATION_ICON=`~` said we couldnt afford one...I\'m so happy I found one!',
                    ]);
                    await cmd.sleep(1500);
                    await cmd.talk([
                        'But shortly after UNKNOWN_CHILD came running out from the school...',
                    ]);
                    await cmd.sleep(1500);
                    await cmd.talk([
                        'You saw him coming and hid INSERT_DESIRED_TOY behind your back',
                    ]);
                    await cmd.sleep(1500);
                    await cmd.talk([
                        'He began looking for his INSERT_DESIRED_TOY',
                    ]);
                    await cmd.talk([
                        'What did you do?',
                    ]);
                    let answer2 = false;
                    while (answer2) {
                        printDoorsByName['Door To Return INSERT_DESIRED_TOY', 'Door To Keep INSERT_DESIRED_TOY']
                        resp = await rl.q('>> ');
                        if (resp === '1' || resp === 'return' || resp === 'return toy' || resp === 'return insert_desired_toy') {
                            karma--;
                        } else if (resp === '2' || resp === 'keep' || resp === 'keep toy' || resp === 'keep insert_desired_toy') {
                            karma++;
                        } else {
                            await cmd.talk([
                                'Sometimes there really are only two choices...',
                            ]);
                        }
                    }
                    await cmd.talk([
                        'The UNKNOWN_CHILD ran back to class',
                    ]);
                    await cmd.sleep(1500);
                    await cmd.talk([
                        'But a teacher saw you outside, and ushered you to class',
                    ]);
                    hasEducationVal = true;
                    education++;
                } else {
                    await cmd.talk([
                        'As you were deciding what you wanted to do... a teacher saw you outside, and ushered you to class',
                    ]);
                    hasEducationVal = true;
                    education++;
                }
            }
        }
        await cmd.talk([
            'Some Time Passes',
        ]);
        await dramaitcPause();
        await cmd.talk([
            'You were at school...',
        ]);
        await cmd.sleep(1500);
        await cmd.talk([
            'A different school...One for older kids',
        ]);
        await cmd.sleep(1500);
        await cmd.talk([
            'It was a week until Midterms',
        ]);
        await cmd.sleep(1500);
        await cmd.talk([
            'You had another choice to make...',
        ]);
        printStats(['Door to tryout for INSERT_SPORTS_TEAM','Door to study for the INSERT_HARD_CLASS exam'])
        resp = await rl.q('>> ');
        if(resp === '1' || resp === 'tryout' || resp === 'tryout for insert_sports_team') {
            hasFitnessVal = true;
            fitnessVal++;
            await cmd.talk([
                '*I\'ve always wanted to be a pro INSERT_SPORTS_TEAM player...*',
            ]);
            //fight on field
        } else if(resp === '2' || resp === 'study' || resp === 'study for insert_hard_class') {
            hasEducationVal = true;
            education++;
            await cmd.talk([
                '*That exam has me worred...best focus on my studies*',
            ]);
            //bully
        } else {
            await cmd.talk([
                '*Eh...I\'ll do my own thing*',
            ]);
            await cmd.talk([
                'Interesting... you didn\'t fit either mold...'
            ]);
            ///more
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

const printDoorsByName = doorNameArray => {
    if( choicesLeft >= 1) {
        choicesLeft--;
    }
    doorNameArray.forEach((doorName) => {
        if(doorName.includes('Window')) {
            console.log('\n' + (doorName) + windowAscii)
        } else if (doorName.includes('Door')) {
            console.log('\n' + (doorName) + doorAscii)
        }
    })
    printStats();
}

const printStats = () => {
    if (hasEducationVal || hasChoicesLeftVal || hasFitnessVal || !hasFamily|| hasFamilyFavorVal|| hasLiarVal || hasBraveryVal || hasKarmaVal ) {
        console.log('--------'+name+'-ST@T5-------')
    }
    if (hasEducationVal) {
        console.log('Education: ' + education);
    }
    if (hasChoicesLeftVal) {
        console.log('Choices Left: ' + choicesLeft);
    }
    if (hasFitnessVal) {
        console.log('Fitness: ' + fitness);
    }
    if (hasFamily === false) {
        console.log('Has Family: ' + hasFamily);
    } else if (hasFamilyFavorVal){
        console.log('Family Favor: ' + familyFavor);
    }
    if (hasLiarVal) {
        console.log('Is Liar: ' + isLiar);
    }
    if (hasBraveryVal) {
        console.log('Is Brave: ' + isBrave);
    }
    if (hasKarmaVal) {
        console.log('Karma: ' + karma);
    }
    if (hasEducationVal || hasChoicesLeftVal || hasFitnessVal || !hasFamily|| hasFamilyFavorVal|| hasLiarVal || hasBraveryVal || hasKarmaVal ) {
        console.log('-----------------------------')
    }
}

const maybeFirstConsiquence = async () => {
    firstConsiquence = false;
    await cmd.sleep(2000);
    await cmd.talk([
        'That was the first choice that had a consiquence',
    ]);
    await cmd.sleep(2000);
    await cmd.talk([
        'But not the last',
    ]);
    await cmd.sleep(2000);
    await dramaitcPause();
}

const isSuccessfulWithOneInXOdds = (denominatorOfOdds) => {
    const randNum = Math.random() * 100;
    if (randNum <= 100/denominatorOfOdds) {
        return true;
    } else {
        return false;
    }
}

const dramaitcPause = async () => {
    process.stdout.write('.');
    await cmd.sleep(500);
    process.stdout.write('.');
    await cmd.sleep(500);
    process.stdout.write('.\n');
    await cmd.sleep(500);
}