const obj = {
    name: "ahmed",
    namePrint: function () {
        console.log(`Hello ${this.name}`);
    }
}

obj.namePrint()
