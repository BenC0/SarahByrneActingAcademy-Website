export const validateTextField = field => {
    if (!!field.value.match(/[a-z]/gi)) {
        field.classList.add("valid")
        field.classList.remove("invalid")
        return true
    } else {
        field.classList.add("invalid")
        field.classList.remove("valid")
    }
    return false
}

export const validateSelectField = field => {
    if (!!field.value.match(/[a-z]|[0-9]/gi)) {
        field.classList.add("valid")
        field.classList.remove("invalid")
        return true
    } else {
        field.classList.add("invalid")
        field.classList.remove("valid")
    }
    return false
}