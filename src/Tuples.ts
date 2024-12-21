let a = ["masum", 33, { name: "shakib" }];

let b: [string, boolean, object] = ["name", true, {}];
b.push((b[1] = true));
