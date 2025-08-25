function filterLongNames(arr){
    let eles = arr.filter(n => n.length > 5);
    console.log(eles);
}

arr = ["vaibhav", "madhav", "jatin", "hello"];
filterLongNames(arr)

