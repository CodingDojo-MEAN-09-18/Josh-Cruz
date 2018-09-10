var _ = {
    map: function (arr, mult) {
        var newArr = [];
        arr.forEach(element => {
            newArr.push(element * mult);
        });
        return newArr;
    },
    reduce: function (arr) {
       var reduction = arr.reduce((total, amount)=> total + amount);
    },
    find: function (arr, a) {
        arr.forEach(element => {
            if (element === a){
                return element;
            };
        });
        return false;
    },
    filter: function (arr, a) {
        var newArr = [];
        arr.forEach(element => {
            if (element === a) {
               newArr.push(element);
            };
        });
        return newArr;
    },
    reject: function (arr, a) {
        var newArr = [];
        arr.forEach(element => {
            if (element !== a) {
                newArr.push(element);
            };
        });
        return newArr;
    }
};

const mynums = [1, 2, 3, 4]
console.log(mynums_.map(mynums, 2));