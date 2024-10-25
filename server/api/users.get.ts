export default defineEventHandler(async (event) => {
	const db = hubDatabase()
	const { data } = await db.prepare('SELECT * FROM users').all()

	// let data = [
	// 	"Lukas",
	// 	"Dominika",
	// ]
  	return data
})
