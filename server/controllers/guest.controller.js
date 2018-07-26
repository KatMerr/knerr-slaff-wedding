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
    if (!req.body.guest.name || !req.body.guest.plus_one || !req.body.guest.email){
        res.status(403).send(err)
    }
    if (req.body.guest.plus_one && !req.body.guest.plus_one_name){
        res.status(403).send(err)
    }

    const newGuest = new Guest(req.body.guest)

    newGuest.name = req.body.guest.name
    newGuest.plus_one = req.body.guest.plus_one
    newGuest.plus_one_name = (newGuest.plus_one) ? req.body.guest.plus_one_name : ""
    newGuest.email = req.body.guest.email

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

        guest.name = req.body.guest.name || guest.name
        guest.plus_one = req.body.guest.plus_one || mewGuest.plus_one
        guest.plus_one_name = req.body.guest.plus_one_name || guest.plus_one_name
        guest.email = req.body.guest.email || guest.email

        guest.save((err, updatedGuest) => {
            if (err) {
                res.status(500).send(err)
            }
            res.json({ updatedGuest })
        })
        
    })
}