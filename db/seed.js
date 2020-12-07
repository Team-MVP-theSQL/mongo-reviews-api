const db = require('./index.js');
const Review = require('./Reviews.js');
const faker = require('faker');
const fs = require('fs');
const csv = require('fast-csv');

let seedFunc = async () => {

  let seedObjects = [];
  let numSeeded = 0;

  for (let i = 0; i < 10000000; i++) {

    let randomImages = [];

    let randomNumberOfImages = Math.floor(Math.random() * 3);
    for (let j = 0; j < randomNumberOfImages; j++) {
      randomImages.push(`https://loremflickr.com/640/480/shoelaces?random=${j}`);
    }

    let pros = [];

    let randomNumberOfPros = Math.floor(Math.random() * 5);
    for (let j = 0; j < randomNumberOfPros; j++) {
      pros.push(faker.lorem.word());
    }

    let cons = [];
    let randomNumberOfCons = Math.floor(Math.random() * 3);
    for (let j = 0; j < randomNumberOfCons; j++) {
      cons.push(faker.lorem.word());
    }

    let randomShoeId = Math.floor(Math.random() * 2000000);

    let seedObject = {
      shoeId: randomShoeId,
      nickname: faker.name.findName(),
      location: faker.address.city(),
      title: faker.lorem.words(),
      body: faker.lorem.paragraph(),
      photos: randomImages,
      pros: pros,
      cons: cons,
      recommended: faker.random.boolean(),
      overallRating: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      qualityRating: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      valueRating: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      timeCreated: faker.date.past(),
    };

    seedObjects.push(seedObject);

    if (i % 20000 === 0) {
      numSeeded += 20000;
      console.log(`${numSeeded} reviews added to array.`);
    }
  }

  console.log('writing to csv');
  let ws = fs.createWriteStream('seed.csv');
  csv.write(seedObjects, {headers: true})
    .pipe(ws);

};

seedFunc();

// const runSeed = async () => {
//   await seedFunc();
//   //mongoose.connection.close();
// }

// runSeed();