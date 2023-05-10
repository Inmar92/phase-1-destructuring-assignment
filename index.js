const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

let moo = 'cow', neigh = 'horse', baa = 'sheep', oink = 'pig', cluck = 'chicken';
console.log(moo, neigh, baa, oink, cluck);

let bessie = 'cow', dolly = 'sheep', babe = 'pig', little = 'chicken';
console.log(bessie, dolly, babe, little);

let blackAndWhite = 'cow', black = 'sheep', pink = 'pig';
console.log(blackAndWhite, black, pink);

let red = 'red', orange = 'orange', yellow = 'yellow', green = 'green', blue = 'blue', indigo = 'indigo', violet = 'violet';
console.log(red, orange, yellow, green, blue, indigo, violet)

let r = 'red', o = 'orange', y = 'yellow', g = 'green', b = 'blue', v = 'violet';
console.log(r, o, y, g, b, v);

let indg = 'indigo';
console.log(indg);

const {muppetName, color, song, job, partner} = muppet
console.log(muppetName, color, song, job, partner);

let song2 = 'Moving Right Along', song4 = 'I Hope That Something Better Comes Along',
nestedJob = 'Host of The Muppet Show', nestedPartner = 'Miss Piggy';
console.log(song2, song4, nestedJob, nestedPartner);