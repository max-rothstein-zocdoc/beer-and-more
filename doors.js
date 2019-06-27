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

const congrats= `
*    *
*         '       *       .  *   '     .           * *
                                                            '
    *                *'          *          *        '
.           *               |               /
            '.         |    |      '       |   '     *
              \\*        \\   \\             /
    '          \     '* |    |  *        |*                *  *
         *      \`.       \\   |     *     /    *      '
.                  \      |   \          /               *
  *'  *     '      \\      \\   '.       |
     -._            \`                  /         *
' '      \`\`._   *                           '          .      '
*           *\*          * .   .      *
*  '        *    \`-._                       .         _..:='        *
          .  '      *       *    *   .       _.:--'
       *           .     .     *         .-'         *
.               '             . '   *           *         .
*       ___.-=--..-._     *                '               '
                               *       *
             *        _.'  .'       \`.        '  *             *
  *              *_.-'   .'            \`.               *
                .'                       \`._             *  '
'       '                        .       .  \`.     .
    .                      *                  \`
            *        '             '                          .
  .                          *        .           *  *
          *        .                                    '`

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

let knowsAge = false;
let age = 1;

let whyDidYouComeAllThisWay = 'No Reason';

let anythingYouWant = 'Nothing';

let firstConsiquence = true;

const run = async () => {
    let resp;
    try {
        await cmd.sleep(300);
        await cmd.cs();
        await say('Welcome friend.');
        await cmd.sleep(600);
        printDoorsByName(['Door ' + 1])
        await say('Here is your first door, press 1 to open it');
        resp = await rl.q('>> ');
        if (resp.toLowerCase() === '1') {
            await say('*Wow...Its so bright...Who is that?*')
            await cmd.sleep(2000);
            await cmd.sleep(3000);
        } else {
            await say('Sometimes there are more choices than are offered, but your first door was not your choice to make');
            await cmd.sleep(4000);
            printDoorsByName(['Door ' +1])
            await say('You might not remember your first door, press 1 to open it');
            resp = await rl.q('>> ');
            if (resp.toLowerCase() !== '1') {
                await say('Hmmm, seems like you didn\'t want to pick the door on your own... thats ok, I guess the doctor got you out');
                await cmd.sleep(3000);
                await dramaticPauseWithText();
                process.stdout.write('snip');
                await cmd.sleep(100);
                await dramaticPauseWithText();
                process.stdout.write('snip');
                await dramaticPauseWithText();
                await cmd.sleep(1000);
            }
            await cmd.cs();
            await cmd.sleep(2000);
            await dramaticPauseWithText();
            await cmd.sleep(2000);
        }
        await cmd.cs();
        await say('Welcome to the world of doors! You just picked your first door! Fun, wasn\'t it? ');
        await cmd.sleep(3000);
        await say('Doors could be opened by typing the number or name of the door...remember?');
        await cmd.sleep(3000);
        await say('if you were too lazy to type the door name in full,');
        await cmd.sleep(3000);
        await say('the doors can be opened by using the number coorosponding to the order in which they appeared');
        await cmd.sleep(3000);
        await cmd.cs();
        await say('At first the doors were simple.');
        await cmd.sleep(4000);
        await say('There wasn\'t much to go on');
        await cmd.sleep(1000);
        await say('and others were there to guide you so you didn\'t pick the wrong door');
        await cmd.sleep(3000);
        await say(['Door ' + 1,'Door ' + 2]);
        await cmd.sleep(1000);
        await say('*hmmm...I think they want me to do something*');
        await cmd.sleep(1000);
        await say('~Door 1 is the right answer! You can do it! Door 1!~');
        await cmd.sleep(500);
        resp = await rl.q('>> ');
        if (resp.toLowerCase() === '1') {
            await say('~You did it! Im so proud of you! Look how smart you are!~');
            await cmd.sleep(3000);
        } else if(resp.toLowerCase() === '2'){
            await say('~No not that door, lets try again. You\'re 2 years old already! You can do this!~');
            await cmd.sleep(2000);
            await say('*Hmmm...They said my age...I guess I\'m 2*');
            await cmd.sleep(2000);
            await dramaticPauseWithText();
            await cmd.sleep(100);
            knowsAge = true;
            age = 2;
            printDoorsByName(['Door ' + 1,'Door ' + 2]);
            await say('~Pick Door 1! I know you can do it!~');
            resp = await rl.q('>> ');
            if (resp.toLowerCase() === '1') {
                await say('~You did it! Im so proud of you! I knew you would get it eventually!~');
                await cmd.sleep(4000);
            } else {
                await say('~Sigh');
                await cmd.sleep(2000);
                await dramaticPauseWithText();
                await cmd.sleep(500);
                await say('~The books await say you could do this by now... Lets try again some other time~');
                await cmd.sleep(3000);
                await say('~Its ok, we still love you~');
                await cmd.sleep(3000);

            }
        } else {
            printDoorsByName(['Door ' + 1,'Door ' + 2]);
            await say('~No thats not an option, remember? Pick a door... its either 1 or 2~');
            resp = await rl.q('>> ');
            if (resp.toLowerCase() === '1') {
                await say('~You did it! Im so proud of you! I knew you would get it eventually!~');
            } else {
                await say('~Sigh');
                await cmd.sleep(2000);
                await dramaticPauseWithText();
                await cmd.sleep(500);
                await say('~The books await say you could do this by now... lets try again some other time~');
                await cmd.sleep(3000);
                await say('~Its ok, we still love you~');
                await cmd.sleep(3000);
            }
        }
        await cmd.cs();
        await say('*They get so happy when I do what they await say*');
        await cmd.sleep(2000);
        await say(
            '~Ok ' +name+ ', time for your first day of school! How exciting! I cant beleive you are already 6~',
       );
        knowsAge = true;
        age = 6;
        await cmd.sleep(2000);
        await say('~The bus is here~');
        await cmd.sleep(2000);
        await say('~Time to get on~');
        printDoorsByName(['Door To Bus']);
        resp = await rl.q('>> ');
        if (resp.toLowerCase() === '1' || resp.toLowerCase() === 'to bus' ||resp.toLowerCase() === 'bus') {
            //no op
        } else {
            await cmd.cs();
            await cmd.sleep(1000);
            await say('~I know its scary '+name+'...~');
            await cmd.sleep(2000);
            await say('~But its something you have to do!~');
            await cmd.sleep(2000);
            await say('~All the other US3R5_M@L3 and US3R5_F3M@L3 are going to be there!~');
            printDoorsByName(['Door To Bus']);
            resp = await rl.q('>> ');
            if (resp.toLowerCase() === '1' || resp.toLowerCase() === 'to bus' ||resp.toLowerCase() === 'bus') {
                await say(
                    '*I made USER_WITH_TEXT_IDENTIFICATION_ICON=`~` so proud today*',
               );
                await say(
                    '~I love you '+name+'! Have a great first day~',
               );
                hasFamilyFavorVal = true;
                familyFavor ++;
            } else {
                await say(
                    '~ugh fine, you can stay home...but just this once~',
               );
                await cmd.sleep(2000);
                hasEducationVal = true;
                education--;
                await maybeFirstConsiquence()
            }
        }
        await cmd.sleep(1500);
        await cdm.cs();
        await dramaticPauseWithText(
            'You ride the bus to school',
       );
        await cmd.sleep(1500);
        await say(
            'The bus stopped and you followed the other US3R5 off the bus.',
       );
        await cmd.sleep(1500);
        await say(
            'As you were standing on the lawn infront of the school, a bell rang',
       );
        await cmd.sleep(1500);
        printDoorsByName(['Door To School']);
        await say(
            '*Must be time for class...*',
       );
        resp = await rl.q('>> ');
        if (resp.toLowerCase() === '1') {
            await say(
                '*Yeah...USER_WITH_TEXT_IDENTIFICATION_ICON=`~` would want me to go to class*',
           );
            await maybeFirstConsiquence();
            hasEducationVal = true;
            education++;
        } else {
            await say(
                '*No one is around to stop me if I dont go...*',
           );
            await cmd.sleep(1500);
            await say(
                '*Do I really want to do this? USER_WITH_TEXT_IDENTIFICATION_ICON=`~` wouldn\'t like it.*',
           );
            printDoorsByName(['Door To School']);
            resp = await rl.q('>> ');
            if (resp.toLowerCase() === '1') {
                await say(
                    '*I guess I will go...but what happens if i don\'t?*',
               );
                await cmd.sleep(1500);
                await say('*A question for another time...*');
                await maybeFirstConsiquence();
                hasEducationVal = true;
                education++;
            } else {
                await say(
                    '*Why should I? I get to choose my own doors dont I?*',
               );
                await cmd.sleep(1500);
                await maybeFirstConsiquence();
                hasEducationVal = true;
                education--;
                await say(
                    'What did you do instead?',
               );
                printDoorsByName(['Door To Home'],['Door To Playground']);
                resp = await rl.q('>> ');
                if (resp.toLowerCase() === '1' || resp.toLowerCase() === 'to home' ||resp.toLowerCase() === 'home') {
                    await say(
                        'Interesting, why did you come all this way only to go back?',
                   );
                    await cmd.sleep(1500);
                    resp = await rl.q('>> ');
                    whyDidYouComeAllThisWay = resp
                    await cmd.sleep(200);
                    await say(
                        'Facinating...I will remember that.',
                   );
                    await cmd.sleep(1500);
                    await say(
                        'Ok so you walked home and stood outside your house...what did you do then?',
                   );
                    printDoorsByName(['Door To Play In Basement'],['Window To Room']);
                    resp = await rl.q('>> ');
                    if (resp.toLowerCase() === '1' || resp.toLowerCase() === 'to play in basement' ||resp.toLowerCase() === 'play in basement') {
                        await say(
                            '*I\'m gonna play with my toys...This is gonna be great*',
                       );
                        await cmd.sleep(1500);
                        await say(
                            'You played for a few hours until you heard footsteps in the basement',
                       );
                        await cmd.sleep(1500);
                        await say( '~'+name+'? Is that you down there?~');
                        await cmd.sleep(1500);
                        await say('She caught you, and she wasn\'t happy');
                        await maybeFirstConsiquence();
                        hasFamilyFavorVal = true;
                        familyFavor--;
                        await cmd.sleep(1500);
                    } else if (resp.toLowerCase() === '2' || resp.toLowerCase() === 'window to room' ||resp.toLowerCase() === 'room') {
                        await say('*I\'m gonna go to my room, but I might get caught by USER_WITH_TEXT_IDENTIFICATION_ICON=`~` if I use the front door*');
                        await say('you climbed to the window of your room...what would happend next was not up to you or anyone');
                        await cmd.sleep(1500);
                        await say('Rolling Dice...');
                        await cmd.sleep(1500);
                        if (isSuccessfulWithOneInXOdds(2)) {
                            await say('you opened the window and made it into your room');
                            await cmd.sleep(1500);
                            await say('*Wow! What should I do first? I can do anything I want*');
                            resp = await rl.q('>> ');
                            if (resp === '') {
                                await cmd.sleep(500);
                                await say('You chose to do nothing?');
                                await cmd.sleep(1500);
                                await say('Interesting',);
                                await dramaticPauseWithText()
                                anythingYouWant = "Nothing";

                            } else {
                                anythingYouWant = resp;
                                await cmd.sleep(1500);
                                await say('But you never got a chance...');
                            }
                            await cmd.sleep(1500);
                            await say('You heard glass shatter in the hallway');
                            await cmd.sleep(1500);
                            await say(
                                'You heard glass shatter in the hallway and two people yelling',
                            );
                            await cmd.sleep(1500);
                            await say('*What was that?*');
                            await cmd.sleep(1500);
                            await say(
                                'Were you scared?',
                            );
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
                                    await say(
                                        'Sometimes there really are only two choices...',
                                    );
                                }
                            }
                            printDoorsByName(['Door toward the noise'], ['Door to hide in the closet']);
                            resp = await rl.q('>> ');
                            if (resp === '1' || resp === 'toward the noise' || resp === 'noise') {
                                hasBraveryVal = true;
                                isBrave = true;
                                await say(
                                    'You opened the door to the hallway',
                                );
                                await cmd.sleep(1500);
                                await say(
                                    'And what you saw haunted you');
                                await cmd.sleep(1500);
                                await say('USER_UNKOWN_TEXT_IDENTIFICATION_ICON, who you would never see again and who you would never forgive...');
                                await say('And USER_WITH_TEXT_IDENTIFICATION_ICON=`~`');
                                await dramaticPauseWithText();
                                await cmd.sleep(500);
                                await process.stdout.write("crying");
                                await cmd.sleep(1500);
                                hasFamily = false;
                            } else if (resp === '2' || resp === 'hide in the closet' || resp === 'hide in closet' || resp === 'closet') {
                                hasBraveryVal = true;
                                isBrave = false;
                                await say('Eventually the noises faded');
                            } else {
                                await say('Eventually the noises faded');
                            }
                        } else {
                            await say('You fell from your house and died...what a shame');
                        }
                    } else {
                        await endOfWorld();
                    }
                    await cmd.sleep(1500); 
                } else if (resp.toLowerCase() === '2' || resp.toLowerCase() === 'to playground' ||resp.toLowerCase() === 'playground') {
                    await say('You made your way around the school and opened the door to the playground');                    
                    await cmd.sleep(1500);
                    await say('You saw a INSERT_DESIRED_TOY in the sandbox and picked it up');
                    await cmd.sleep(1500);
                    await say('*Wow! I have always wanted INSERT_DESIRED_TOY...');
                    await cmd.sleep(1500);
                    await say('*USER_WITH_TEXT_IDENTIFICATION_ICON=`~` said we couldnt afford one...I\'m so happy I found one!');
                    await cmd.sleep(1500);
                    await say('But shortly after UNKNOWN_CHILD came running out from the school...');
                    await cmd.sleep(1500);
                    await say('You saw him coming and hid INSERT_DESIRED_TOY behind your back');
                    await cmd.sleep(1500);
                    await say('He began looking for his INSERT_DESIRED_TOY');
                    await say('What did you do?');
                    let answer2 = false;
                    while (answer2) {
                        printDoorsByName['Door To Return INSERT_DESIRED_TOY', 'Door To Keep INSERT_DESIRED_TOY']
                        resp = await rl.q('>> ');
                        if (resp === '1' || resp === 'return' || resp === 'return toy' || resp === 'return insert_desired_toy') {
                            karma--;
                        } else if (resp === '2' || resp === 'keep' || resp === 'keep toy' || resp === 'keep insert_desired_toy') {
                            karma++;
                        } else {
                            await say('Sometimes there really are only two choices...');
                        }
                    }
                    await say('The UNKNOWN_CHILD ran back to class');
                    await cmd.sleep(1500);
                    await say('But a teacher saw you outside, and ushered you to class');
                    hasEducationVal = true;
                    education++;
                } else {
                    await say('As you were deciding what you wanted to do... a teacher saw you outside, and ushered you to class');
                    hasEducationVal = true;
                    education++;
                }
            }
        }
        await say('Some Time Passes...you grow older');
        await dramaticPauseWithText();
        cmd.sleep(3000);
        await say('You were at school...');
        await cmd.sleep(1500);
        await say('A different school...One for older kids');
        await cmd.sleep(1500);
        await say('It was a week until Midterms');
        await cmd.sleep(1500);
        await say('You had another choice to make...');
        printStats(['Door to tryout for INSERT_SPORTS_TEAM','Door to study for the INSERT_HARD_CLASS exam'])
        resp = await rl.q('>> ');
        if(resp === '1' || resp === 'tryout' || resp === 'tryout for insert_sports_team') {
            hasFitnessVal = true;
            fitnessVal++;
            await say('*I\'ve always wanted to be a pro INSERT_SPORTS_TEAM player...*');
            //fight on field
            await endOfWorld();
        } else if(resp === '2' || resp === 'study' || resp === 'study for insert_hard_class') {
            hasEducationVal = true;
            education++;
            await say('*That exam has me worred...best focus on my studies*');
            //bully
            await endOfWorld();
        } else {
            await say('*Eh...I\'ll do my own thing*',);
            await say('Interesting... you didn\'t fit either mold...');
            ///more
            await endOfWorld();
        }
        await endOfWorld();
    } catch (err) {
        await say('You broke my world...');
        await cmd.sleep(1500);
        await dramaticPauseWithText('It was meant to be broken');
        await cmd.sleep(4000);
        await say(congrats)
        await say("You Win!")
        await cmd.sleep(1500);
        await say(err);
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
    if (hasEducationVal || hasChoicesLeftVal || hasFitnessVal || !hasFamily|| hasFamilyFavorVal|| hasLiarVal || hasBraveryVal || hasKarmaVal || knowsAge ) {
        console.log('------'+name+'-ST@T5------')
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
    if (knowsAge) {
        console.log('Age: ' + age);
    }
    if (hasEducationVal || hasChoicesLeftVal || hasFitnessVal || !hasFamily|| hasFamilyFavorVal|| hasLiarVal || hasBraveryVal || hasKarmaVal || knowsAge) {
        console.log('-----------------------------')
    }
}

const maybeFirstConsiquence = async () => {
    if(firstConsiquence) {
        firstConsiquence = false;
        await cmd.sleep(2000);
        await say('That was the first choice that had a consiquence');
        await cmd.sleep(2000);
        await say('But not the last');
        await cmd.sleep(2000);
        await dramaticPauseWithText();
    } else {
        await cmd.sleep(2000);
        await say('Another fork in the road')
        await dramaticPauseWithText();
        await cmd.sleep(2000);
        await say(
            'What was on the other path?',
       );
        await cmd.sleep(2000);
    }
}

const isSuccessfulWithOneInXOdds = (denominatorOfOdds) => {
    const randNum = Math.random() * 100;
    if (randNum <= 100/denominatorOfOdds) {
        return true;
    } else {
        return false;
    }
}

const dramaticPauseWithText = async (text) => {
    if(text) {
        process.stdout.write(text);
    }
    await cmd.sleep(500);
    process.stdout.write('.');
    await cmd.sleep(500);
    process.stdout.write('.');
    await cmd.sleep(500);
    process.stdout.write('.\n');
    await cmd.sleep(500);
}

const endOfWorld = async () => {
    cmd.cs();
    await process.stdout.write(congrats);
    await say(
        'YOU FOUND THE ENDGE OF THE WOLRD...congrats?',
   );
}

const say = async (input) => {
    return await cmd.talk([input]);
}