const boxEl = document.querySelector('.box');

console.log(boxEl.textContent);

boxEl.textContent = 'tonyhan18';
console.log(boxEl.textContent);


/////////////////////////////////////


// const boxEls = document.querySelectorAll('.box');

// boxEls.forEach(function(boxEl, index) {
// 	boxEl.classList.add(`order-${index + 1}`);
// 	console.log(index, boxEl);
// });


/////////////////////////////////////


// let boxEl = document.querySelector('.box');

// console.log(boxEl);

// boxEl.classList.add('active');
// let isContains = boxEl.classList.contains('active');
// console.log(isContains);

// boxEl.addEventListener('click',function(){
// 	console.log('click');
// 	boxEl.classList.add('active');
// 	console.log(
// 		boxEl.classList.contains('active')
// 	);
// 	boxEl.classList.remove('active');
// });