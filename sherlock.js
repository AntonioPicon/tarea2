//Input Example

//_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------



entrada = _INPUT.split("\n");
num_rangos=0;

while(num_rangos < entrada[0]){

c=0;

rango = entrada[num_rangos+1].split(" ");

sqrta1=Math.sqrt(rango[0]-1)+0.5;
sqrta2=Math.sqrt(rango[1])-0.5;


limite_a1=Math.round(sqrta1);
limite_a2=Math.round(sqrta2);

if(limite_a1 > limite_a2){
	c=0;
} else if(limite_a1 == limite_a2){
		c=1;
	}
	else {
		for(i=limite_a1; i<=limite_a2; i++){
			
			for(y=rango[0]; y<=rango[1]; y++){
				z=i*i;
				if(y==z){
					c=1+c;
				}
			}
		}
	}

console.log(c);
num_rangos++;

}


