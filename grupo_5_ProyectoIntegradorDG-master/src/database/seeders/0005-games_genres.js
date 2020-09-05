'use strict';

const { genres } = require("../../controllers/productsController");

const dandoGeneros=[];
for(let i = 1; i <=24 ;i++){
  //let cantidadAleatoria = (Math.floor(Math.random() * 3) + 1);
  
    let generos = [];
    let genero1 = (Math.floor(Math.random() * 13) + 1);
    
    let genero2 = (Math.floor(Math.random() * 13) + 1);
    while(genero2 == genero1){
      genero2 = (Math.floor(Math.random() * 13) + 1);
    };
  
    let genero3 = (Math.floor(Math.random() * 13) + 1);
    while(genero3 == genero2 || genero3 == genero1 ){
      genero3 = (Math.floor(Math.random() * 13) + 1);
    };

    let genero4 = (Math.floor(Math.random() * 13) + 1);
    while(genero4 == genero3 || genero4 == genero2 || genero4 == genero1 ){
      genero4 = (Math.floor(Math.random() * 13) + 1);
    };
    let genero5 = (Math.floor(Math.random() * 13) + 1);
    while(genero5 == genero4 || genero5 == genero3 || genero5 == genero2 || genero5 == genero1){
      genero5 = (Math.floor(Math.random() * 13) + 1);
    };
    generos.push(genero1);
    generos.push(genero2);
    generos.push(genero3);
    generos.push(genero4);
    generos.push(genero5);
  
      for(let j = 0; j< generos.length; j++){
        dandoGeneros.push({
            id_game: i,
            id_genre: generos[j],
            createdAt: new Date(),
            updatedAt: new Date()
        });
  
      }
  };

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('games_genres',dandoGeneros,{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('games_genres',null,{});
  }
};
