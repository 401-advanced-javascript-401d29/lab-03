'use strict';

const fs = require('fs');
const faker = require('faker');

let fileToManipulate = `${__dirname}/files/test.txt`;

fs.readFile(fileToManipulate, (err, data) => {
  if( err ) { console.error(err); return; }
  console.log(data);
  let stuffToInsert = (faker.random.number()).toString();

  fs.writeFile(fileToManipulate, Buffer.from(stuffToInsert), (err, data) => {
    if( err ) {console.error(err); return; }

    fs.readFile(fileToManipulate, (err, data) => {
      if ( err ) { console.error(err); return; }
      console.log(data.toString);
    });
  });
});



