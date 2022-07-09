const express = require("express")
const app = express()
const cors = require("cors")
const router = require("./router")
const { getController } = require("./controllers")

app.get("/link/:id", getController)
app.use(express.json())
app.use(cors())
app.use("/api", router)

app.listen(5000)
