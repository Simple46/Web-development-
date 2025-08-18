'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Simple Success',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  pin: 1111,

  movementsDates: [
    '2025-02-10T13:15:33.035Z',
    '2025-02-18T09:48:16.867Z',
    '2025-02-25T06:04:23.907Z',
    '2025-03-15T14:18:46.235Z',
    '2025-03-21T16:33:06.386Z',
    '2025-03-26T14:43:26.374Z',
    '2025-03-30T18:49:59.371Z',
    '2025-03-31T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US', // de-DE
};

const account2 = {
  owner: 'Hissa Simple',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  pin: 2222,

  movementsDates: [
    '2025-02-10T13:15:33.035Z',
    '2025-02-18T09:48:16.867Z',
    '2025-02-25T06:04:23.907Z',
    '2025-03-15T14:18:46.235Z',
    '2025-03-21T16:33:06.386Z',
    '2025-03-26T14:43:26.374Z',
    '2025-03-30T18:49:59.371Z',
    '2025-03-31T12:01:20.894Z',
  ],
  currency: 'NGN',
  locale: 'en-NG',
};
const account3 = {
  owner: 'Khalid Ibra',
  movements: [7000, 3500, -200, -900, -3310, -2000, 10500, -300],
  pin: 3333,

  movementsDates: [
    '2025-02-10T13:15:33.035Z',
    '2025-02-18T09:48:16.867Z',
    '2025-02-25T06:04:23.907Z',
    '2025-03-15T14:18:46.235Z',
    '2025-03-21T16:33:06.386Z',
    '2025-03-26T14:43:26.374Z',
    '2025-03-30T18:49:59.371Z',
    '2025-03-31T12:01:20.894Z',
  ],
  currency: 'NGN',
  locale: 'en-NG',
};

const account4 = {
  owner: 'Sobur Xhaka',
  movements: [10000, 3000, -2000, -900, -3210, -4000, 12500, -800],
  pin: 4444,

  movementsDates: [
    '2025-02-10T13:15:33.035Z',
    '2025-02-18T09:48:16.867Z',
    '2025-02-25T06:04:23.907Z',
    '2025-03-15T14:18:46.235Z',
    '2025-03-21T16:33:06.386Z',
    '2025-03-26T14:43:26.374Z',
    '2025-03-30T18:49:59.371Z',
    '2025-03-31T12:01:20.894Z',
  ],
  currency: 'NGN',
  locale: 'en-NG',
};

const account5 = {
  owner: 'Muhammad Medo',
  movements: [16000, 9000, -2000, -9000, -3010, -5000, 15500, -8000],
  pin: 5555,

  movementsDates: [
    '2025-02-10T13:15:33.035Z',
    '2025-02-18T09:48:16.867Z',
    '2025-02-25T06:04:23.907Z',
    '2025-03-15T14:18:46.235Z',
    '2025-03-21T16:33:06.386Z',
    '2025-03-26T14:43:26.374Z',
    '2025-03-30T18:49:59.371Z',
    '2025-03-31T12:01:20.894Z',
  ],
  currency: 'NGN',
  locale: 'en-NG',
};

const account6 = {
  owner: "Mujeeb Sub-sobur",
  movements: [16000, 8000, -6500, -7000, -310, -5000, 10500, -3000],
  pin: 6666,

  movementsDates: [
    "2025-02-10T13:15:33.035Z",
    "2025-02-18T09:48:16.867Z",
    "2025-02-25T06:04:23.907Z",
    "2025-03-15T14:18:46.235Z",
    "2025-04-21T16:33:06.386Z",
    "2025-04-26T14:43:26.374Z",
    "2025-04-30T18:49:59.371Z",
    "2025-05-31T12:01:20.894Z",
  ],
  currency: "NGN",
  locale: "en-NG",
};

const account7 = {
  owner: "Mustakeem Adigun",
  movements: [20000, 8000, -15000, -5000, -3010, -5000, 14500, -8000],
  pin: 7777,

  movementsDates: [
    "2025-03-10T13:15:33.035Z",
    "2025-03-18T09:48:16.867Z",
    "2025-03-25T06:04:23.907Z",
    "2025-04-15T14:18:46.235Z",
    "2025-05-21T16:33:06.386Z",
    "2025-05-26T14:43:26.374Z",
    "2025-05-30T18:49:59.371Z",
    "2025-06-31T12:01:20.894Z",
  ],
  currency: "NGN",
  locale: "en-NG",
};

const account8 = {
  owner: "Abdulsalam Apalando",
  movements: [20000, 10000, -17000, -8080, -3010, -5000, 13500, -8900],
  pin: 7777,

  movementsDates: [
    "2025-03-10T13:15:33.035Z",
    "2025-03-18T09:48:16.867Z",
    "2025-04-25T06:04:23.907Z",
    "2025-04-15T14:18:46.235Z",
    "2025-05-21T16:33:06.386Z",
    "2025-05-26T14:43:26.374Z",
    "2025-05-30T18:49:59.371Z",
    "2025-06-31T12:01:20.894Z",
  ],
  currency: "NGN",
  locale: "en-NG",
};
const accounts = [account1, account2, account3, account4, account5, account6, account7];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const loginBody = document.querySelector('.login')
const closeModalBtn = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const hint = document.querySelector('.hint')

/////////////////////////////////////////////////
// Functions

 

const daysFormated = function(date, locale){

  const calcDays = (date1,date2) =>Math.round(Math.abs(date2 - date1)/(1000 *60 *60 *24))
  const daysPassed = calcDays(new Date() , date)
  console.log(daysPassed);
  if(daysPassed===0) return `Today`
  if(daysPassed===1) return `yesterday`
  if(daysPassed <= 7) return `${daysPassed} days Ago`;
  // else{
  //   const day = `${date.getDate()}`.padStart(2, 0);
  //   const month = `${date.getMonth() + 1}`.padStart(2, 0);
  //   const year = date.getFullYear();
  
    
  //   return  `${day}/${month}/${year}`;
  // }

  return new Intl.DateTimeFormat(locale).format(date)
}
const formatCur = function(value, locale, currency){
  return new Intl.NumberFormat(locale, {
    style:'currency',
    currency:currency
  }).format(value)
}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

     const formatedMov = formatCur(mov, acc.locale, acc.currency )

    const date = new Date(acc.movementsDates[i]);
    const displayDate = daysFormated(date, acc.locale)

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date"> ${displayDate} </div>
        <div class="movements__value">${formatedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function(){
  let time = 700;
  const tick =function(){
    const min = String(Math.trunc(time/60)).padStart(2, 0)
    const sec = String(time%60).padStart(2, 0)
     // display timer to screen 

     labelTimer.textContent = `${min}:${sec}`
     
    

     // logout when time reaches 0

     if(time ===0 ){
      clearInterval(timer)
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
     }
      // decrease time each seconds
       time--;
    

   }
  // set the time interval 
   const timer = setInterval(tick, 1000)

}

const showModal = function () {
  modal.style.top = '10%'
  overlay.style.display = 'flex'
}

const closeModal = function () {
  modal.style.top = '-130%';
  overlay.style.display = 'none'
}
///////////////////////////////////////
// Event handlers
let currentAccount;

// fake always log in

// currentAccount = account1
// updateUI(currentAccount)
// containerApp.style.opacity = 100
// experimenting
const now = new Date();
const option = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long'


}
const locale = navigator.language
labelDate.textContent = new Intl.DateTimeFormat(locale, option).format(now)

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    
    // display dates
    const now = new Date();
    
    const option = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long'
      
     

}
const locale = currentAccount.locale
labelDate.textContent = new Intl.DateTimeFormat(locale, option).format(now)
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    startLogOutTimer()

    // Update UI
    updateUI(currentAccount);
    loginBody.style.display = 'none'
    hint.style.display= 'none' 
  }
  else {
    showModal()

    inputLoginUsername.value = inputLoginPin.value = '';
 }

});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if(currentAccount.currency === 'USD' && receiverAcc.currency === 'NGN'){
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount * 1500);
    
    currentAccount.movementsDates.push(new Date().toISOString())
    receiverAcc.movementsDates.push(new Date().toISOString())

    // Update UI
    updateUI(currentAccount);
  }

  else if(currentAccount.currency === 'NGN' && receiverAcc.currency === 'USD'){
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount/1500);
    
    currentAccount.movementsDates.push(new Date().toISOString())
    receiverAcc.movementsDates.push(new Date().toISOString())

    // Update UI
    updateUI(currentAccount);

  }
  
  else if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // transfer dates
    currentAccount.movementsDates.push(new Date().toISOString())
    receiverAcc.movementsDates.push(new Date().toISOString())

    // Update UI
    updateUI(currentAccount);
  }
  

});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement

    setTimeout( function(){ currentAccount.movements.push(amount);

    // loan dates
    currentAccount.movementsDates.push(new Date().toISOString())
    

    // Update UI
    updateUI(currentAccount);
  }, 3000)
}
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
  
    // .indexOf(23)

    

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
  loginBody.style.display = 'flex'
  labelWelcome.textContent = `Log in to get started`;
  hint.style.display = 'block';
});

closeModalBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)
 hint.addEventListener('click', showModal)