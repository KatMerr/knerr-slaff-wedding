export const getAllGuests = () => {
    return fetch (`/api/guest`, {
        method: 'GET'
    }).then((res) => {
        if (res.ok){
            return res.json()
        } else {
            throw new Error("Guest list couldn't be retrieved")
        }
    })
}

export const getGuest = (guest) => {
    return fetch(`/api/guest/${guest}`, {
        method: 'GET'
    }).then((res) => {
        if (res.ok){
            return res.json()
        } else {
            throw new Error("Couldn't get guest")
        }
    })
}

export const postGuest = (newGuest) => {
    return fetch(`/api/guest/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(newGuest)
    }).then((res) =>{
        if (res.ok){
            return res.json()
        } else {
            throw new Error("Error Posting Guest")
        }
    })
}