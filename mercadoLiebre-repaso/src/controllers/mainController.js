const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const pdtosInSale = products.filter(pdto => pdto.category == 'in-sale');
const pdtosVisited = products.filter(pdto => pdto.category == 'visited');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	root: (req, res) => {
		res.render('index', {
			pdtosInSale,
			pdtosVisited,
			thousandGenerator: toThousand
		});
	},
	search: (req, res) => {
		let word = req.query.keywords;
		let productsByWord = products.filter(pdto => pdto.name.toLowerCase().includes(word) ? pdto : null);	
		res.render('results', { 
			products: productsByWord, 
			keyword:  word,
			thousandGenerator: toThousand,
		});
	},
};

module.exports = controller;
