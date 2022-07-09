import axios from "axios"

const myForm = document.getElementById("form")
const input = document.getElementById("input")
const message = document.getElementById("message-box")

myForm.addEventListener("submit", (e) => {
	e.preventDefault()
	message.innerHTML = ""
	axios({
		method: "post",
		url: "http://localhost:5000/api/create",
		data: {
			url: input.value,
		},
	})
		.then((res) => {
			console.log(res)
			message.innerHTML = `http://localhost:5000/link/${res.data.data}`
		})
		.catch((err) => {
			console.log(err)
			message.innerHTML = err.message
		})
})
