'use strict';

const fs = require('fs');
const faker = require('faker');

let fileToManipulate = `${__dirname}/files/test.txt`;
/**
 * This reads a file, console logs the data that is read.
 */
fs.readFile(fileToManipulate, (err, data) => {
  if( err ) { console.error(err); return; }
  console.log(data);
  let stuffToInsert = (faker.random.number()).toString();
  /**
   * This writes a random number to a the defined file as a buffer.
   */
  fs.writeFile(fileToManipulate, Buffer.from(stuffToInsert), (err, data) => {
    if( err ) {console.error(err); return; }
    /**
     * This reads the file again while converting the returned data back to a string.
     */
    fs.readFile(fileToManipulate, (err, data) => {
      if ( err ) { console.error(err); return; }
      console.log(data.toString);
    });
  });
});



