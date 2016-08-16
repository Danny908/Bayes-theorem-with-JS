$(document).ready(function(){
	//BOTON 'OK' EVENTO CLIC
	$("#ok").on('click', function(){
		//VARIABLES PARA LA OPERACION
		var A;
		var B;
		var C;
		var AA;
		var BB;
		var CC;
		 //TOMANDO EL DATOS DE SUS RESPECTIVOS <INPUT/>
		A = $("#A").val();
		B = $("#B").val();
		C = $("#C").val();
		AA = $("#AA").val();
		BB = $("#BB").val();
		CC = $("#CC").val();

		//A REALIZAR........
		//DIVIDIENDO VARIABLES ENTRE 100 PARA REALIZAR OPERACIONES EJEMPLO 50/100 = 0.5% -> Y ASÍ SUSESIVAMENTE
		//CODIGO AQUI ->

		porcentaje_A = A/100;
		porcentaje_B = B/100;
		porcentaje_C = C/100;

		error_AA = AA/100;
		error_BB = BB/100;
		error_CC = CC/100;

		//REALIZAR OPERACION DEL DIVISOR -> PARTE DE ABAJO DE LA FORMULA '(P(F) * P(H|F) + P(M) * P(H|M) + P(O) * P(O|H))'
		//CODIGO AQUI ->
		var divisor = ((porcentaje_A*error_AA)+(porcentaje_B*error_BB)+(porcentaje_C*error_CC));
	

		//OPERACIONES
		resultado1 = (porcentaje_A*error_AA)/(divisor);
		resultadoA = resultado1*100;

		resultado2 = (porcentaje_B*error_BB)/(divisor);
		resultadoB = resultado2*100;

		resultado3 = (porcentaje_C*error_CC)/(divisor);
		resultadoC = resultado3*100;

		//ASIGNANDO RESULTADO A SU RESPECTIVO <INPUT/> -> SEGUN LA CASILLA
		$("#resultA").val(resultadoA.toFixed(1)+"%");
		$("#resultB").val(resultadoB.toFixed(1)+"%");
		$("#resultC").val(resultadoC.toFixed(1)+"%");

	});
});