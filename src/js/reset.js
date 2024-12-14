
export const reset = (data) => {
    data.subcategory_id = null
    data.nameCategory = ""
    data.description = ""
    data.namesubCategory = ""
    data.especification = [""]
    return data
}