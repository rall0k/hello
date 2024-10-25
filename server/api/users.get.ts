export default defineEventHandler(async (event) => {
	const db = hubDatabase()
	const data = await db.prepare('SELECT * FROM "users"').all()
	console.log(data)

	// let data = [
	// 	"Lukas",
	// 	"Dominika",
	// ]
  	return data
})
