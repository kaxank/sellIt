


console.log("Thats OK");



var categ = {
	categName: {
		liveKits: [],
		petProducts: [],
		forHumans: []
	}
};



//WILL also list products based on their cathegories
//
var productList = [];


var whichCateg = Object.keys(categ.categName).length;//number of category types;
//Constructor object
var Product = function(Name,cathegory,desc) {
	this.Name=Name;
	this.cathegory = cathegory;
	this.desc = desc;



	//adds newly created objects to the "categ" object based on their "categName";
		
	 function addToCateg () {

		for(var i=0;i<whichCateg;i++){
			if(cathegory == Object.getOwnPropertyNames(categ.categName)[i])
				{console.log("this is working BUT");
					console.log("cathegory " + cathegory);
					// BUT CANT AUTOMATED////////
					Object.keys(categ.categName[cathegory].push(Name));	
				}
		}
	

	
	}
	//must run to add newly created objects to categ object
	addToCateg();
};

//EXAMPLES TO CREATE PRODUCTS
var	categories = ["liveKits", "petProducts","forHumans"];
//WILL be created automated with form elements.Just examples
var createProduct = new Product("Sihirli Balık",categories[0],"nice Product");
var createProduct2 = new Product("Yaşayan Fosil",categories[1],"nice one too");
	productList.push(createProduct);
	productList.push(createProduct2);
	console.log(productList);
	//console.log(Object.getOwnPropertyNames(categ.categName)[0]);

	
//For view of Products that we have 
var existingProducts = document.getElementById('existingProductsList');
//Wrıtes html our products name. It uses 'productList' for that
for(var i=0;i<productList.length;i++){
	var listItem = document.createElement('li');
	listItem.appendChild(document.createTextNode(productList[i].Name));
	existingProducts.appendChild(listItem);
}

//textbox that takes new product name attempt to create
var productName = document.getElementById('productNameField');

//add category preferences automated with 'categ.categName';
var getCategOptions= document.getElementById('cathegoryOption');

//add category options in our settings.html;
function addCategContent(){
	for(var i=0;i<Object.keys(categ.categName).length;i++){
		var option = document.createElement('option');
		option.value=i+1;
		option.text=Object.getOwnPropertyNames(categ.categName)[i];
		getCategOptions.add(option);	
	}
}
addCategContent();
function removeCategContent(){
var categRemove= getCategOptions.options[getCategOptions.selectedIndex].text;



for(var i=0;i<whichCateg;i++){
			if(categRemove == Object.getOwnPropertyNames(categ.categName)[i])
				{
					console.log("will delete BUT");
					
					//delete Object.keys(categ.categName[categRemove]);
					delete categ.categName[categRemove];
					//delete from category option in html;
					$("#cathegoryOption option:selected").remove();
					//and make default choice option(empty); 
					$("#cathegoryOption option[value='select']:selected");
					
	console.log(categ.categName.liveKits);
	console.log(categ.categName.petProducts);
	console.log(categ.categName.forHumans);	
				}
		}	
}
//add new product to your inventory
var addProduct = function(){
	
	var chosenCathegory = getCategOptions.options[getCategOptions.selectedIndex].text;
	console.log("chosenCathegory" + chosenCathegory);
	var createProduct3 = new Product(productName.value,chosenCathegory,"not bad");
	productList.push(createProduct3);
	var productLi = document.createElement('li');
	
	productLi.appendChild(document.createTextNode(createProduct3.Name));
	existingProducts.appendChild(productLi);

	console.log(categ.categName.liveKits);
	console.log(categ.categName.petProducts);
	console.log(categ.categName.forHumans);
	console.log("---------");
	console.log(productList);
};


	
