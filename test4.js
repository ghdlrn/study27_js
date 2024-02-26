//롤백함수
let f = function() {
    console.log("1번");
};

setTimeout(
    f, 3000
);
console.log("-------------")