const ObjectId = require("mongodb").ObjectId
const db = require("./dbConnect")

const postController = async (req, res, next) => {
	let { url } = req.body

	try {
		url = new URL(url)
		if (url.protocol === "http:" || url.protocol === "https:") {
			const { insertedId } = await db
				.collection("links")
				.insertOne({ url: url })
			res.send({ status: "OK", data: insertedId })
		} else res.status(400).send("Please provide valid URL")
	} catch (err) {
		res.status(400).send(err)
		return
	}
}
const getController = async (req, res, next) => {
	const { id } = req.params
	try {
		const { url } = await db.collection("links").findOne({ _id: ObjectId(id) })
		res.redirect(url.href)
	} catch (err) {
		res.status(200).send("Something went wrong")
	}
}
module.exports = { postController, getController }
