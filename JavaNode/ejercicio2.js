var personas = [
	{
		firstName: 'Diego',
		lastName: 'Alonzo',
		address:{
			country:{
				name:'Guatemala',
				code:502,
			},
			city:'Guatemala',
		},
		age: 15,
		height: 1.71


	},
		{
		firstName: 'Kenneth',
		lastName: 'Hernandez',
		address:{
			country:{
				name:'Guatemala',
				code:502,
			},
			city:'Guatemala',
		},
		age: 17,
		height: 1.40


	},
		{
		firstName: 'Erick',
		lastName: 'Castillo',
		address:{
			country:{
				name:'Guatemala',
				code:502,
			},
			city:'Guatemala',
		},
		age: 17,
		height: 1.70


	},
		{
		firstName: 'Roger',
		lastName: 'Douma',
		address:{
			country:{
				name:'Guatemala',
				code:502,
			},
			city:'Guatemala',
		},
		age: 17,
		height: 1.75


	},
		{
		firstName: 'Ricardo',
		lastName: 'Juarez',
		address:{
			country:{
				name:'Guatemala',
				code:502,
			},
			city:'Guatemala',
		},
		age: 18,
		height: 1.00


	},
		{
		firstName: 'Adrian',
		lastName: 'Lora',
		address:{
			country:{
				name:'Guatemala',
				code:502,
			},
			city:'Guatemala',
		},
		age: 17,
		height: 2.00


	},
		{
		firstName: 'Alex',
		lastName: 'Briceno',
		address:{
			country:{
				name:'Guatemala',
				code:502,
			},
			city:'Guatemala',
		},
		age: 17,
		height: 1.80


	},
		{
		firstName: 'Mariana',
		lastName: 'Garcia',
		address:{
			country:{
				name:'Guatemala',
				code:502,
			},
			city:'Guatemala',
		},
		age: 17,
		height: 3.00


	},
		{
		firstName: 'Jorge',
		lastName: 'Bucaro',
		address:{
			country:{
				name:'Guatemala',
				code:502,
			},
			city:'Guatemala',
		},
		age: 17,
		height: 1.69


	},
		{
		firstName: 'Sofia',
		lastName: 'Perdomo',
		address:{
			country:{
				name:'Guatemala',
				code:502,
			},
			city:'Guatemala',
		},
		age: 12,
		height: 1.25

	},
];

for (var i = 0; i < personas.length; i++) {
	for (var j = 0; j < personas.length - 1 ; j++) {
		if (personas[i].lastName < personas[j].lastName) {

			temporal = personas[i];
			personas[i] = personas[j];
			personas[j] = temporal;


		}

	}

	
}

for (var l = 0; l < personas.length;l++) {

	console.log("Nombre: ", personas[l].firstName);
	console.log("Apellido: ",  personas[l].lastName);
	console.log("Address: ",  personas[l].address.country.name); 
	console.log("Edad: ",  personas[l].age); 
	console.log("Altura: ",  personas[l].height);
	console.log("\n");
	console.log("\n");
}