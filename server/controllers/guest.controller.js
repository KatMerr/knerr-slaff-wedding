import Guest from '../models/guest'

export function getGuest(req, res) {
    Guest.findOne({
        email: req.params.email
    }).exec((err, guest) => {
        if (err) {
            return res.status(500).send(err)
        }
        res.json({guest})
    })
}

export function addGuest(req, res) {
    const {name, email, plus_one, plus_one_name, staying_at_hotel} = req.body
    console.log(JSON.stringify(req.body))
    if (!name || !email || typeof plus_one === 'undefined' || typeof staying_at_hotel === 'undefined'){
        return res.status(403).send("Required Fields: name, plus_one, email, staying_at_hotel")
    }
    if (plus_one && !plus_one_name){
        return res.status(403).send("Missing Fields: plus_one_name")
    }

    const newGuest = new Guest()

    newGuest.name = name
    newGuest.plus_one = plus_one
    newGuest.plus_one_name = (newGuest.plus_one) ? plus_one_name : ""
    newGuest.email = email
    newGuest.staying_at_hotel = staying_at_hotel

    newGuest.save((err, saved) => {
        if (err){
            console.log(err)
            return res.status(500).send(err)
        }
        res.json({ guest: saved })
    })
}

export function updateGuest(req, res) {
    Guest.findOne({
        email: req.params.email
    }, (err, guest) => {
        if (err) {
            res.status(500).send(err)
        }

        guest.name = req.body.name || guest.name
        guest.plus_one = req.body.plus_one || guest.plus_one
        guest.plus_one_name = req.body.plus_one_name || guest.plus_one_name
        guest.email = req.body.email || guest.email
        guest.staying_at_hotel = req.body.staying_at_hotel || guest.staying_at_hotel

        guest.save((err, updatedGuest) => {
            if (err) {
                res.status(500).send(err)
            }
            res.json({ updatedGuest })
        })
        
    })
}