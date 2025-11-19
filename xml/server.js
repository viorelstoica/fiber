import express from 'express';
import { getTrack, getGates } from './read.js';
import cors from 'cors'

const app = express();
app.use(cors())

app.get('/', async (req, res, next) => {
    res.status(200).send('Hello world')
})

app.get('/track/:file', async (req, res, next) => {
    const file = req.params.file
    var data = await getTrack(file)
    res.status(200).send(data)
})

/*
num_gates
"gate" : [
      {
         "id" : "0",
         "name" : "ai_gate_track_000",
         "normal" : {
            "x" : "-0.281564",
            "y" : "-0.0268261",
            "z" : "-0.959167"
         },
         "position" : {
            "x" : "448.304",
            "y" : "-42.2929",
            "z" : "179.654"
         },
         "waypoints" : {
            "num_waypoints" : "9",
            "waypoint" : [
               {
                  "id" : "0",
                  "length" : "-2.90629",
                  "type" : "left_racing_limit"
               },
                  "type" : "left_racing_limit"
                  "type" : "left_run_off"
                  "type" : "left_track_limit"
                  "type" : "left_white_line"
                  "type" : "racing_line"
                  "type" : "right_racing_limit"
                  "type" : "right_run_off"
                  "type" : "right_track_limit"
                  "type" : "right_white_line"
*/

app.get('/gates/:file', async (req, res, next) => {
    const file = req.params.file
    var data = await getGates(file)
    res.status(200).send(data)
})

const port = process.env.PORT || 3000
const server = app.listen(port, async () => {
    console.log(`server started on port: ${port}`)
})