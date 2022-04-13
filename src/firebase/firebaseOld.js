import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, update, remove, get, child, onValue, push } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBdjWoJkPIkMZgt1Nd8bDtKt4V3tsMbNmg",
    authDomain: "expensify-1dd88.firebaseapp.com",
    databaseURL: "https://expensify-1dd88-default-rtdb.firebaseio.com",
    projectId: "expensify-1dd88",
    storageBucket: "expensify-1dd88.appspot.com",
    messagingSenderId: "733803213920",
    appId: "1:733803213920:web:c91e6d947cfdd2e0363f05",
    measurementId: "G-HRH6PXCXQS"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export { firebase, database as default }

// const dbRef = ref(db);

// const expenses = [{
//     description: 'Item One',
//     note: 'This is the first item',
//     amount: 4500,
//     createdAt: 0
// }, {
//     description: 'Item Two',
//     note: 'This is the second item',
//     amount: 8000,
//     createdAt: 0
// }, {
//     description: 'Item Three',
//     note: 'This is the third item',
//     amount: 10500,
//     createdAt: 0
// }]
 
// expenses.forEach((expense) => push(ref(db, 'expenses'), expense));



// get(child(dbRef, `expenses`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });

// const expensesRef = ref(db, 'expenses');

// onValue(expensesRef, (snapshot) => {
//     if (snapshot.exists()) {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//       } else {
//         console.log("No data available");
//       }
// }).onChildRemoved

// set(ref(db), {
//     name: 'Hrugved Pawar',
//     age: 25,
//     isEmployed: true,
//     location: {
//         city: 'San Jose',
//         state: 'California'
//     }
// }).then(() => {
//     console.log('data is saved')
// }).catch((e) => {
//     console.log('Error: ',e)
// })

// const dbRef = ref(db);

// onValue(dbRef, (snapshot) => {
//   const data = snapshot.val();
//   console.log(data)
// })

// update(ref(db), {
//     age: 24,
//     'location/city': 'Cupertino'
// }).then(() => {
//     console.log('data is updated')
// }).catch(() => {
//     console.log('Error: ',e)
// })

// update(ref(db, 'location'), {
//     country: 'United States'
// }).then(() => {
//     console.log('data is updated')
// }).catch(() => {
//     console.log('Error: ',e)
// })

// remove(ref(db, 'isEmployed')).then(() => {
//     console.log('data is deleted')
// }).catch(() => {
//     console.log('Error: ',e)
// })

// get(dbRef).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });

// get(child(dbRef, `location`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });