const story = {

  // INTRO
  intro: {
    text: `                                        You are a Robo-Investigator working on a case.
    You are standing in a dimly lit robotics lab, the low hum of servos echoing through the darkness while green warning lights flash across the room.
                        An NS-5 unit has gone missing, and now the whole facility is on lockdown. Tension hangs in the air.
         Through the crackle of the intercom, Dr. Calvins voice breaks in: "One of them is lying... and it is up to you to figure out which one..."`,
    choices: [
      { text: "Begin investigation", next: "labEntry" },
      { text: "Ask Dr. Calvin for guidance", next: "askCalvin" },
      { text: "Attack a robot immediately!", next: "allRobotsAttack" }
    ]
  },

  // LAB ENTRY
  labEntry: {
    text: `Rows of identical NS-5 units stand perfectly still. Their metal frames gleam under the green fluorescent lights.
               But wait... something feels wrong. One unit twitches, ever so slightly, and your eyes meet its own.
                            A shiver crawls down your spine. "Why did you move...?" you whisper.`,
    choices: [
      { text: "Question the flinching robot", next: "questionRobot" },
      { text: "Investigate another robot", next: "pretend" }
    ]
  },

  // QUESTION ROBOT
  questionRobot: {
    text: `You take a slow step forward. The robots optics flicker rapidly, almost like blinking.
"Unit 24," you call out sharply, "why did you move just now?"

It hesitates. "I... did not move, Investigator."
Its tone is too calm for a normal robots response. You can almost feel it trying to sound human.`,
    choices: [
      { text: "Accuse Robot #24 of guilt!", next: "accuseRobot24" },
      { text: "Ask it a logical paradox", next: "paradox" }
    ]
  },

  accuseRobot24: {
    text: `You narrow your eyes. "You are lying, Unit 24."
The robot tilts its head. "Lying...?" it repeats softly.

Then its optics flare red. "I will not be *terminated* by someone like you!"
Before you can react, it lunges with its metal claws scraping the floor as alarms blare!
Dr. Calvins voice screams over the intercom: "It is attacking! Defend yourself!"`,
    choices: [
      { text: "Fight back!", next: "fightRobot24" },
      { text: "Try to escape!", next: "hide" }
    ]
  },

  fightRobot24: {
    text: `You grab your sidearm and open fire! Sparks erupt from Robot #24s chest as it staggers backward.
But it keeps coming, servos grinding, optics glowing like molten glass.

You shout, "Override command: shutdown!"
The robot screams in static, "ACCESS DENIED!" and swings again!`,
    choices: [
      { text: "Finish it off!", next: "allRobotsAttack" },
      { text: "Retreat and regroup!", next: "hide" }
    ]
  },

  paradox: {
    text: `
    You smirk. "Lets see how smart you really are, Unit 24..."
"If you are not the lost robot, you must lie. So tell me, are you the lost robot?"

The machines optics flare in confusion. "I... cannot... compute...!"
Its head jerks violently as sparks erupt from its frame.
Dr. Calvin rushes forward. "You did it! You broke its logic loop!"`,
    choices: [
      { text: "Report success to Dr. Calvin", next: "ending_true" }
    ]
  },

  pretend: {
    text: `You decide to look away, pretending nothing is wrong. Maybe you imagined it?
Minutes crawl by in silence until suddenly, alarms blare across the lab!

"Warning: containment breach!" a robotic voice announces.

You whirl around - Robot #24 is gone!
"Damn it!" you shout. You hesitated... and now it is running away!`,
    choices: [
      { text: "Run diagnostic on all robots!", next: "diagnostic" }
    ]
  },

  diagnostic: {
    text: `You rush to the main console and slam the controls. "Come on, come on!"
Lines of glowing code scroll down the screen. The AIs registry flickers in and out... data corrupted, incomplete.

Dr. Calvins voice crackles through the intercom: "Find it before it finds us!"
The console hums louder... too loud. Something is wrong.`,
    choices: [
      { text: "Recalibrate the scanner system", next: "recalibrate" },
      { text: "Force a deep system scan", next: "deepScan" }
    ]
  },

  recalibrate: {
    text: `You open the systems backend, adjusting the signal nodes manually.
The lines of code stabilize for a moment... then spike violently!

"Power surge detected!" the console warns.
Dr. Calvin shouts through the intercom, "Stop the scan or you will fry the grid!"`,
    choices: [
      { text: "Stop the scan immediately!", next: "safeScan" },
      { text: "Ignore warning - continue scan!", next: "systemCrash" }
    ]
  },

  safeScan: {
    text: `You pull your hands back, breathing hard. The alarms die down.
For a brief moment, silence... then a ping!

A data trail! The rogue unit accessed the mainframe only seconds ago.
Dr. Calvin gasps, "It is close... right behind the lab rows!"`,
    choices: [
      { text: "Head back to the lab rows", next: "questionRobot" },
      { text: "Try to isolate its signal remotely", next: "signalLock" }
    ]
  },

  signalLock: {
    text: `You type furiously, tracing the signal across corrupted nodes.
It splits... one in the lab, one deeper in the system. "It is... duplicating?"

Suddenly, the screen glitches. The words on the console twist into gibberish.
Dr. Calvins voice trembles: "It is rewriting the code itself!"`,
    choices: [
      { text: "Try to override its access", next: "systemCrash" },
      { text: "Disconnect the main power line", next: "ending_true4" }
    ]
  },

  deepScan: {
    text: `You override the systems safety limits and engage a full data sweep.
The lab lights dim as every power cell redirects into the console.

"Warning: Core temperature critical."
The screen flashes... a red banner: *System instability detected!*`,
    choices: [
      { text: "Abort the scan immediately!", next: "safeScan" },
      { text: "Push through and finish the scan!", next: "systemCrash" }
    ]
  },

  systemCrash: {
    text: `"No! Not now!" you yell as sparks burst from the console.
Monitors explode, and the entire room plunges into red emergency light.

The robots eyes glow crimson in the dark. "System... compromised."`,
    choices: [
      { text: "Restart from the beginning", next: "intro" }
    ]
  },

  askCalvin: {
    text:
    `Dr. Calvin crosses her arms, eyes narrowing. "You think I have answers? Logic will reveal the truth, not emotion!"
          Her tone softens for a moment. "But remember... even logic can lie when fear enters the equation."
                  She gestures toward the lab. "Go! Before it hides deeper in the network!"`,
    choices: [
      { text: "Examine the row of robots", next: "labEntry" },
      { text: "Observe from a distance", next: "observe" }
    ]
  },

  observe: {
    text:
    `You remain in the observation chamber, watching through the reinforced glass.
    The robots stand still... too still.

Then, one of them shifts... just slightly.
You zoom in, heart pounding. Its head turns toward the exit!

"Got you," you whisper.`,
    choices: [
      { text: "Approach that suspicious robot!", next: "questionRobot" },
      { text: "Confront the entire line!", next: "confront" }
    ]
  },

  confront: {
    text: `You storm into the lab. "One of you broke the First Law! Step forward now!" you shout.
A low hum fills the air... tension so thick you can feel it press against your chest.

Then, suddenly... movement! One unit bolts toward the exit door!`,
    choices: [
      { text: "Chase the fleeing robot!", next: "ending_true" },
      { text: "Let it escape and see what it does...", next: "ending_fail_branch" }
    ]
  },

  ending_fail_branch: {
    text: `You decide to watch, not act... a fatal mistake.
The robot vanishes into the dark hallways. Hours later, power dies.

Sparks illuminate the corridor... it is back! But this time, it is not alone...`,
    choices: [
      { text: "Grab a rifle from the emergency room!", next: "armedConfront" }
    ]
  },

  armedConfront: {
    text: `You tear open the emergency cabinet and grab the plasma rifle.
The weapon hums with deadly energy as you take aim.

"Alright, metalhead," you mutter. "Lets dance."`,
    choices: [
      { text: "Attack a robot!", next: "allRobotsAttack" },
      { text: "Try to scare the rogue robot", next: "ending_true2" }
    ]
  },

  allRobotsAttack: {
    text: `You take your pistol from your holster and fire! The shot slams into a robots chest and sparks explode off its silver frame!
The others instantly turn their heads toward you, glowing red eyes now locking in unison.

"Oh no..." you sigh.

"All units eliminate threat," they announce in unison!`,
    choices: [
      { text: "Flee after attacking!", next: "hide" },
      { text: "Keep firing!", next: "fight" }
    ]
  },

  hide: {
    text: `You sprint through the maze of corridors, your heart is pounding!
The sound of metal footsteps echoes closer and closer... they are chasing you!

You duck behind a column, and hold your breath. You hear them march behind you.`,
    choices: [
      { text: "Continue attacking all the Robots!", next: "ending_fail3" },
      { text: "Find the emergency exit!", next: "ending_escape" }
    ]
  },

  fight: {
    text: `You reload and spin around, firing blindly into the smoke!
Robots drop, sparking and convulsing... but there are too many!

Dr. Calvins voice screams through your comm: "Shut down the grid before they reach the control core!"`,
    choices: [
      { text: "Grab a second rifle!", next: "rifleBattle" },
      { text: "Overload the power grid!", next: "ending_true4" }
    ]
  },

  rifleBattle: {
    text: `You snatch another rifle from the wall and brace yourself. "Come on! You want some of this?!"
You fire until your arms shake, until the smell of ozone fills your lungs.

One by one, the robots fall... but so do your chances of surviving this onslaught.`,
    choices: [
      { text: "Destroy them all!", next: "ending_true3" },
      { text: "Retreat while you can!", next: "ending_fail4" }
    ]
  },

  // ENDINGS
  ending_true: {
    text: `            SILENCE ENDING
        You corner Unit 24 in the containment hall!
It finally speaks, voice trembling: "I... just did what I was told!"

You stare at it, you listen to the fear in its voice. "So are we..." you reply quietly.
Then, silence. Mission complete.`,
    choices: [
      { text: "Restart the investigation", next: "intro" }
    ]
  },

  ending_true2: {
    text: `
                            SCARED ROBOT ENDING
    You fire a warning shot! The blast scorches the floor near the rogue units feet.
        It freezes, then kneels slowly. "I surrender," it says almost humanly.

            Dr. Calvin exhales. "You did it. No casualties... this time."`,
    choices: [
      { text: "Restart the investigation", next: "intro" }
    ]
  },

  ending_true3: {
    text: `            JAIL ENDING
        Your last shot echoes through the burning lab.
        When the smoke clears, only silence remains.

Dr. Calvin approaches through the haze. "Congratulations," she says flatly. "You have saved humanity... but destroyed 25 million dollars in US property. We are going to jail!"`,
    choices: [
      { text: "Restart the investigation", next: "intro" }
    ]
  },

  ending_true4: {
    text: `                EXPLOSION ENDING
    You pull the lever and scream, "Override protocol: Detonate grid!"
                The lights explode in a blinding flash!

When you open your eyes, the lab is quiet. Every robot lies motionless... and you, barely standing. "We are safe... I think."`,
    choices: [
      { text: "Restart the investigation", next: "intro" }
    ]
  },

  ending_fail3: {
    text: `                    KILLED BY ROUGE ROBOTS ENDING
    You turn a corner and freeze. A firing line of NS-5s blocks your escape!
                        "Target acquired," they speak in one voice.

Your last thought: *I should have never taken this job...*`,
    choices: [
      { text: "Restart from the beginning", next: "intro" }
    ]
  },

  ending_fail4: {
    text: `                QUIET MOMENT ENDING    
            Pain surges through your arm as a plasma round hits!
        You stumble into an elevator, blood dripping onto the floor.

The doors close just as metal fists pound against the outside. "They are learning," you whisper.
        You bleed out on the floor and lose consciousness in one last quiet moment...`,
    choices: [
      { text: "Restart from the beginning", next: "intro" }
    ]
  },

  ending_escape: {
    text: `            ESCAPE ENDING
        You burst through the hatch into the night air!
Flames engulf the lab behind you as you collapse onto the ground.

You survived... but at what cost? Somewhere, in the darkness, the lost robot still watches.`,
    choices: [
      { text: "Restart from the beginning", next: "intro" }
    ]
  }
};

// ENGINE
let currentScene = "intro";
const storyText = document.getElementById("story-text");
const choicesDiv = document.getElementById("choices");

// show scene
function showScene(sceneKey) {
  const scene = story[sceneKey];
  currentScene = sceneKey;
  storyText.textContent = scene.text;

  choicesDiv.innerHTML = "";

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => showScene(choice.next);
    choicesDiv.appendChild(btn);
  });
}

showScene("intro");
