var messages = [
  "Are you still there?",
  "Tar git lost.",
  "Momentum, a function of mass and velocity, is conserved between portals.",
  "Tar git acquired.",
  "There you are!",
  "Sentry mode activated.",
  "Is anyone there?",
  "I don't blame you.",
  "I don't hate you.",
  "Nap time.",
  "The cake is a lie.",
  "Now your thinking with portals.",
  "At the end of the experiment, you will be baked. And then there will be cake.",
  "Let's be honest. Neither one of us knows what that thing does. Just put it in the corner and I'll deal with it later.",
  "Congratulations! The test is now over.",
  "Hey, put me down.",
  "This was a triumph! I'm making a note here. Huge. Success.",
  "I feel fantastic, and I'm still alive!"
];

messages.random = function() { return this[Math.floor( Math.random() * this.length )]; };
