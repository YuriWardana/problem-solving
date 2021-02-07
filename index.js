let a = 'tono'
let b = 'anton'
let c = 'budi'
let counter = 0

for (let i = 7; i <= 31; i++) {
    if (i === 7) {
        console.log(`tanggal ${i} : ${a}, ${b}, ${c}`);
    } else if(i % 5 === 0) {
        console.log(`tanggal ${i} : Tempat Fitness Tutup`);
    } else if(counter % 5 === 0 && counter % 4 === 0 && counter % 2 === 0 ){
        console.log(`tanggal ${i} : ${a}, ${b},${c}`);
    } else if(counter % 5 === 0 && counter % 2 === 0){
        console.log(`tanggal ${i} : ${a}, ${c}`);
    } else if(counter % 5 === 0){
        console.log(`tanggal ${i} : ${c}`);
    } else if(counter % 4 === 0 && counter % 2 === 0){
        console.log(`tanggal ${i} : ${a}, ${b}`);
    } else if(counter % 2 === 0){
        console.log(`tanggal ${i} : ${a}`);
    } else if(counter % 1 === 0){
        console.log(`tanggal ${i} : - `);
    }
   counter++ 
}

/**
 * pseudo
 * SET VARIABLE a WITH Tono as value
 * SET VARIABLE a WITH Tono as value
 * SET VARIABLE a WITH Tono as value
 * SET VARIABLE counter with 0 as value
 * FOR i Equal to 7 and i LESS THAN EQUAL 31
 *  IF i equal to 7
 *      DISPLAY `a , b, c`
 *  ELSE IF i MODULUS 5 EQUAL 0
 *      DISPLAY `Tempat Fitness Tutup`
 *  ESLE IF counter MODULUS 5 EQUAL 0 AND counter MODULUS 4 EQUAL 0 AND counter MODULUS 2 EQUAL 0 
 *      DISPLAY `Tanggal ${i} : ${a}, ${b}, ${c}`
 *  ELSE IF counter MODULUS 5 EQUAL 0 AND counter MODULUS 2 EQUAL 0 
 *      DISPLAY `Tanggal ${i} : ${a}, ${c}
 *  ELSE IF counter MODULUS 5 EQUAL 0 
 *      DISPLAY `Tanggal ${i} : ${c}`
 *  ELSE IF counter MODULUS 4 EQUAL 0 AND counter MODULUS 2 EQUAL 0 
 *      DISPLAY `Tanggal ${i} : ${a}, ${b}`
 *  ELSE IF counter MODULUS 2 EQUAL 0 
 *      DISPLAY `Tanggal ${i} : ${a}`
 *  ELSE IF counter MODULUS 1 EQUAL 0 
 *      DISPLAY `Tanggal ${i} : `
 *  END IF
 *  counter INCREAMENT
 * END FOR
 */
 