const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	root: (req, res) => {
		res.render('products', {
			products,
			thousandGenerator: toThousand
		});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let pdtoID = req.params.productId;
		let productFind = products.find(pdto => pdto.id == pdtoID);
	
		res.render('detail', {
			productFind,
			thousandGenerator: toThousand
		});
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form.ejs');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		req.body.price = Number(req.body.price);
		req.body.discount = Number(req.body.discount);
		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			image: 'default-image.png'
		};
		let finalProducts = [...products, newProduct];
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	},

	// Update - Form to edit
	edit: (req, res) => {
		let pdtoID = req.params.productId;
		let productToEdit = products.find(product => product.id == pdtoID)

		res.render('product-edit-form', {productToEdit});
	},
	// Update - Method to update
	update: (req, res) => {
		let pdtoID = req.params.productId;
		let productToEdit = products.find(product => product.id == pdtoID);

		req.body.price = Number(req.body.price);
		req.body.discount = Number(req.body.discount);
		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: productToEdit.image,
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let productId = req.params.productId;
		let finalProducts = products.filter(pdto => pdto.id != productId);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	}
};

module.exports = controller;