import { Router } from 'express'
import { getGuest, addGuest, updateGuest } from '../controllers/guest.controller'

const router = new Router()

router.route('/guest:email')
      .get(getGuest)
      .put(updateGuest)

router.route('/guest')
      .get((req, res) => {
          res.send("All Guests")
      })
      .post('/guest', addGuest)

router.put('/guest:email')

export default router