const p1 = new Promise(function (resolve, reject) {
    console.log("Promise1 begin")
    setTimeout(() => reject(new Error('fail')), 3000)
    console.log("Promise1 end")
})

const p2 = new Promise(function (resolve, reject) {
    console.log("Promise2 begin")
    setTimeout(() => resolve(p1), 1000)
    console.log("Promise2 begin")
})

p2.then(result => console.log(result))
    .catch(error => console.log(error));

let list = [1, 2, 3, 4, 5];
[a, b, ...rest] = list;
console.log("a:", a);
console.log("rest:", rest);

let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [4, 'three'],
    [3, 'four'],
]);

console.log("map.keys:", map.keys());
console.log("map.values:", map.values());
let mapFInd = map.find((item, index) => {
    console.log("map::find:", item);
    return index > 10;
});

let nFind = list.find((item) => {
    return item === 3;
});

console.log("find:", nFind);