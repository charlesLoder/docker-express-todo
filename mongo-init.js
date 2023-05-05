require("dotenv").config();

console.log(`Initialize databse with ${process.env.MONGODB_USER}`);
db.createUser({
	user: `${process.env.MONGODB_USER}`,
	pwd: `${process.env.MONGODB_PASSWORD}`,
	roles: [
		{
			role: "readWrite",
			db: "db",
		},
	],
});
