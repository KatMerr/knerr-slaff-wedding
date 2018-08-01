import Guest from '../models/guest'

export function getGuest(req, res) {
    Guest.findOne({
        email: req.params.email
    }).exec((err, guest) => {
        if (err) {
            res.status(500).send(err)
        }
        res.json({guest})
    })
}

export function addGuest(req, res) {
    console.log(req.body)
    const {name, plus_one, plus_one_name, email, staying_at_hotel} = req.body
    if (!name || !plus_one || !email || !staying_at_hotel){
        res.status(403).send("Required Fields: name, plus_one, email, staying_at_hotel")
    }
    console.log(plus_one)
    if (plus_one === true && !plus_one_name){
        res.status(403).send("Missing Fields: plus_one_name")
    }

    const newGuest = new Guest()

    newGuest.name = name
    newGuest.plus_one = plus_one
    newGuest.plus_one_name = (newGuest.plus_one) ? plus_one_name : ""
    newGuest.email = email
    newGuest.staying_at_hotel = staying_at_hotel

    newGuest.save((err, saved) => {
        if (err){
            res.status(500).send(err)
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