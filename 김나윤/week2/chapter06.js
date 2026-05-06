//반복문으로 배열과 객체 순회하기
//순회 : 배열이나 객체의 요소들을 하나씩 방문하는 것

// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}
//모든 배열에는 length라는 프로퍼티가 있는데, 이 length는 배열의 요소 개수를 나타냄

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  //   console.log(arr2[i]);
}

// 1.2 for of 반복문
//오직 배열을 순회하기 위한 반복문
for (let item of arr) {
  //   console.log(item);
}


// 2. 객체 순회
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

// 2.1 Object.keys 사용(내장함수)
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for (let key of keys) {
  const value = person[key];
  //   console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for (let value of values) {
  //   console.log(value);
}

// 2.3 for in
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
//for in은 객체에만, for of는 배열에만 사용해야 하는 그런 반복문