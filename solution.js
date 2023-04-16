// const url = "https://platform.openai.com/account/usage";

// const newArr = url.split('/')

// newArr.forEach((word)=>{
//     console.log(word.length);
// })

// const nums = [90, 23, 65, 23, 678, 21, 34, 69];
// nums.forEach((number)=>{
//    if (number % 2 > 0) {
//        console.log(`${number} is not divisible`);
//    } else {
//        console.log(`${number} is  divisible`);
//    }
// })



// const people = [
//     { name: "Emma", age: 10 },
//     { name: "Noah", age: 11 },
//     { name: "Olivia", age: 12 },
//     { name: "Liam", age: 13 },
//     { name: "Ava", age: 14 },
//     { name: "William", age: 15 },
//     { name: "Sophia", age: 16 },
//     { name: "Mason", age: 17 },
//     { name: "Isabella", age: 18 },
//     { name: "James", age: 19 },
//     { name: "Mia", age: 20 },
//     { name: "Benjamin", age: 21 },
//     { name: "Charlotte", age: 22 },
//     { name: "Elijah", age: 23 },
//     { name: "Amelia", age: 24 },
//     { name: "Lucas", age: 25 },
//     { name: "Harper", age: 26 },
//     { name: "Alexander", age: 27 },
//     { name: "Evelyn", age: 28 },
//   ];

//  people.forEach((individual)=>{
//      if (individual.age >=13 && individual.age <=18) {
//         console.log(`${individual.name} , this is your RSVP`); 
        
//      }if (individual.age < 13) {
//          console.log(`${individual.name} , you are underage`);
         
//      }if (individual.age >18) {
//         console.log(`${individual.name} , you are overage`);

//      }
//  })

// function user() {
//     console.log('the username must be at least 6 chars long');
// }
// function pass() {
//     console.log('the password must be at least 8 chars long');
// }

// function samePass() {
//     console.log('the passwords must be the same');
// }

// function signup(username,password,confirmPassword) {
//   const check ={
//       username,
//       password,
//       confirmPassword, 
//   };
//      if (check.username.length < 6) {
//        user();
//        return;
//      }if (check.password.length < 8) {
//         pass() 
//         return;
//      }if (check.confirmPassword != check.password) {
//          samePass()
//          return;
//      }
// }



// signup('adanne','golden','golden')



// function number(num) {
   
//     if (num % 2 == 0) {
//         console.log(true);
//         return;
//     }if (num % 2 !== 0) {
//         console.log(false);
//         return;
//     }
//     if (typeof num !== 'number') {
//         console.log('argument must be a number');
//     }return;
// }

// number('9' )