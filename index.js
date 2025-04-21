const express = require('express');
const sequelize = require('./models').sequelize;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(require('./routes/schoolRoutes'))

sequelize.sync().then(async () => {
	app.listen(PORT, () => {
		console.log(`Server is running on http://localhost:${PORT}`);
	})
})