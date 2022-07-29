pm.test("Body is correct", function () { //Проверить, что в body приходит правильный string
    pm.response.to.have.body("This is the first responce from server!");
});

let jsonData = pm.response.json();
let name = jsonData.name;
let age = jsonData.age;
let salary = jsonData.salary;
pm.test("Check name_1", function () {
        pm.expect(name).to.eql("Kate");
});
pm.test("Check age_1", function () {
        pm.expect(age).to.eql("30");
});
pm.test("Check salary_1", function () {
        pm.expect(salary).to.eql(1500);
});

