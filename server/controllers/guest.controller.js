import Guest from '../models/guest'

export function allGuests(req, res){
    Guest.find().exec((err, guests) => {
        if (err) {
            return res.status(500).send(err)
        }
        res.json(guests)
    })
}

export function getGuest(req, res) {
    Guest.findOne({
        names: req.params.names
    }).exec((err, guest) => {
        if (err) {
            return res.status(500).send(err)
        }
        res.json({guest})
    })
}

export function addGuest(req, res) {
    const {names, number_attending, not_attending} = req.body
    console.log(JSON.stringify(req.body))
    if (!names && (number_attending || not_attending)){
        return res.status(403).send("Invalid data")
    }

    const newGuest = new Guest()

    newGuest.names = names
    newGuest.number_attending = number_attending
    newGuest.not_attending = not_attending

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
        names: req.params.names
    }, (err, guest) => {
        if (err) {
            res.status(500).send(err)
        }

        guest.names = req.body.names || guest.names
        guest.number_attending = req.body.number_attending || guest.number_attending
        guest.not_attending = req.body.not_attending || guest.not_attending

        guest.save((err, updatedGuest) => {
            if (err) {
                res.status(500).send(err)
            }
            res.json({ updatedGuest })
        })
        
    })
}