module.exports = {
    validate
}

function validate(user) {
    return Boolean(user.username && user.password);
}