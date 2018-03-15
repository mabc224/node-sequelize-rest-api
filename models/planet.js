module.exports = (sequelize, DataTypes) => {
  const Planet = sequelize.define('Planet', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    climate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    diameter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    films: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    gravity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    orbital_period: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    population: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    residents: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    rotation_period: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    surface_water: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    terrain: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Planet;
};

// {
// 				"climate" : "Arid", - "created" : "2014-12-09T13:50:49.641000Z",
// 				"diameter" : "10465",
// 				"edited" : "2014-12-15T13:48:16.167217Z",
// 				"films" : [
// 								"https://swapi.co/api/films/1/", ...
// 				],
// 				"gravity" : "1",
// 				"name" : "Tatooine",
// 				"orbital_period" : "304",
// 				"population" : "120000",
// 				"residents" : [
// 								"https://swapi.co/api/people/1/", ...
// 				],
// 				"rotation_period" : "23",
// 				"surface_water" : "1",
// 				"terrain" : "Dessert",
// 				"url" : "https://swapi.co/api/planets/1/"
// }
