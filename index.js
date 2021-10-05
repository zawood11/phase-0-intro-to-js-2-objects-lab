// Write your solution in this file!
const employee = {
    name: "Zach",
    streetAddress: "123 Flatirons Blvd."
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const updatedEmployee = { ...obj};

    updatedEmployee[key] = value;

    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(obj, key, value){
    const updatedEmployee = { ...obj};

    delete updatedEmployee[key];

    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];

    return employee;
}