const School = require('../models').sequelize.model('School');

module.exports = {
	addSchool: async (req, res) => {
		let school;
		try {
			school = await School.build(req.body);
		} catch (error) {
			res.status(400).json({ message: `Failed to create user: ${error.message}` });
		}
		try {
			school.save();
			res.json(school);
		} catch (error) {
			res.status(500).json({ message: `Failed to create user: ${error.message}` });
		}
	},

	listSchools: async (req, res) => {
		let schools;
		try {
			schools = await School.findAll();
		}
		catch (err) {
			return res.status(500).send(`Error retreiving schools: ${err.message}`);
		}

		// Sort by distance if query parameters present
		if (req.query.latitude && req.query.longitude) {
			const lat = req.query.latitude;
			const long = req.query.longitude;
			schools.sort((schoolA, schoolB) => schoolA.calcDistanceSquare(lat, long) - schoolB.calcDistanceSquare(lat, long));
		}

		res.status(200).json(schools);
	},
}