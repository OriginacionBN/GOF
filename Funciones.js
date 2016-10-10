var TEALTC = 0.3401;
var TEAPCCT = 0.2362;
var TEAPC = 0.2362;
var TEAPA = 0.2133;
var TEAPPLibre = 0.2556;
var TEAPPVehicular = 0.1048;
var TEAPPHipotecario = 0.0894;
var TEATC = 0.4650;


function AbrirMensaje(id,Principal){
	document.getElementById(id).style.display = "block";
	document.getElementById(Principal).style.display = "none";
	if(id == "mensaje"){
		document.getElementById('header').scrollIntoView()
	}
}
function CerrarMensaje(id,Principal){
	document.getElementById(id).style.display = "none";
	document.getElementById(Principal).style.display = "block";
	document.getElementById('btn_Abrir').scrollIntoView();
}
function AgregarProducto(){
	var table = document.getElementById("tablaProductos");
	var idx = table.rows.length-1;
	var row = table.insertRow(idx);
		
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    cell1.innerHTML = '<input class="form-control" id = "Prod'+idx+'"/>';
    cell2.innerHTML = '<input class="form-control" id="unidades_vendidas_'+idx+'" onkeyup=";validarNumero(id);calcular_ingresos_comercio();"/>';
	cell3.innerHTML = '<select class="form-control" id="unidades_x_presentacion_'+idx+'">'+
							'<option value="0"></option>'+
							'<option value="Galones">Galones</option>'+
							'<option value="Kilos">Kilos</option>'+
							'<option value="Litros">Litros</option>'+
							'<option value="Metros">Metros</option>'+
							'<option value="Pies">Pies</option>'+
							'<option value="Rollos">Rollos</option>'+
							'<option value="Sacos">Sacos</option>'+
							'<option value="Otros">Otros</option>'+
						'</select>';
	cell4.innerHTML = '<input class="form-control" id="pcompra_'+idx+'" onkeyup="validarNumero(id);calcular_ingresos_comercio();"/>';
    cell5.innerHTML = '<input class="form-control" id="pventa_'+idx+'" onkeyup="validarNumero(id);calcular_ingresos_comercio();"/>';
    cell6.innerHTML = '<div id="util_bruta_'+idx+'">';
	cell7.innerHTML = '<div id="ventas_x_prod_'+idx+'">';
}
function EliminarProducto(){
	var table = document.getElementById("tablaProductos")
	var idx = table.rows.length -2
	if(table.rows.length>3){
		table.deleteRow(idx);
		calcular_ingresos_comercio();
	}
}
function AgregarPatrimonio1(){
	
	var table = document.getElementById("tablaPatrimonioInmueble");
	var idx = table.rows.length-1;
	var row = table.insertRow(idx);
		
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
    cell1.innerHTML = '<input class="form-control" id = "Ubic_'+idx+'"/>';
    cell2.innerHTML = '<input class="form-control" id="Propietario_'+idx+'"/>';
	cell3.innerHTML = '<input class="form-control" id="Uso_'+idx+'"/>';
	cell4.innerHTML = '<select class="form-control" id="Realizable_'+idx+'" onchange="calcular_valor_evaluado_Total();">'+
							'<option value="0"></option>'+
							'<option value="Si">Si</option>'+
							'<option value="No">No</option>'+
						'</select>';
						//calcular_util_bruta('+"'"+idx+"'"+');
	cell5.innerHTML = '<input class="form-control" id="Metraje_'+idx+'" onkeyup="validarNumero(id);calcular_valor_declarado_Total();"/>';
    cell6.innerHTML = '<input class="form-control" id="Precio_'+idx+'" onkeyup="validarNumero(id);calcular_valor_declarado_Total();"/>';
    cell7.innerHTML = '<div id="Val_Inm_Dec_'+idx+'">';
	cell8.innerHTML = '<div id="Val_Inm_Eva_'+idx+'">';
}
function EliminarPatrimonio1(){
	var table = document.getElementById("tablaPatrimonioInmueble")
	var idx = table.rows.length -2
	if(table.rows.length>3){
		table.deleteRow(idx);
		calcular_valor_declarado_Total();
	}
}
function AgregarPatrimonio2(){
	
	var table = document.getElementById("tablaPatrimonioVehiculos");
	var idx = table.rows.length-1;
	var row = table.insertRow(idx);
		
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
    cell1.innerHTML = '<select class="form-control" id="Veh_Maq_'+idx+'" onchange="Calcular_Valor_Bien_Total();">'+
							'<option value="0"></option>'+
							'<option value="Vehiculo">Vehiculo</option>'+
							'<option value="Maquinaria">Maquinaria</option>'+
						'</select>';
						//calcular_util_bruta('+"'"+idx+"'"+');
	cell2.innerHTML = '<input class="form-control" id="Placa_'+idx+'"/>';
    cell3.innerHTML = '<input class="form-control" id="Valor_Nuevo_'+idx+'" onkeyup="validarNumero(id);Calcular_Valor_Bien_Total();"/>';
	cell4.innerHTML = '<input class="form-control" id="Antiguedad_'+idx+'" onkeyup="validarNumero(id);Calcular_Valor_Bien_Total();"/>';
	cell5.innerHTML = '<div id="Valor_Bien_'+idx+'">';
}
function EliminarPatrimonio2(){
	var table = document.getElementById("tablaPatrimonioVehiculos")
	var idx = table.rows.length -2
	if(table.rows.length>3){
		table.deleteRow(idx);
	}
}
function Limpiar(){
	/*var table = document.getElementById("tablaProductos").DataTable();
	table.clear();*/
	alert("Función Deshabilitada")
}
function convNro(nroComas) {
	var arreglo = String(nroComas).split(",");
	var sinComas = arreglo.join("");
	if(isNaN(sinComas)){
		return 0;
	}
	return Number(sinComas);
}
function validarNumero(id) {
	if (document.getElementById(id).value != "") {
		var conComas = document.getElementById(id).value;
		
		var texto = conComas.split(",");
		var sinComas = texto.join("");
		var n = sinComas.indexOf(".");
		var siguiente = "";
		if(Number(n)!=-1){
			siguiente = sinComas.charAt(n+1);
		}
		if (sinComas.length > 15) {
			alert("Excedio la cantidad permitida de dígitos");
			document.getElementById(id).value = "";
		} else {
			if (isNaN(sinComas)) {
				alert("Ingrese un número válido");
				document.getElementById(id).value = "";
			} else {
				var nuevo =  Number(sinComas).toLocaleString('en');
				//alert(nuevo);
				if(Number(n)==-1){
					document.getElementById(id).value = nuevo;
					document.getElementById(id).setAttribute('value',nuevo);
				}else{
					if(siguiente==""){
						document.getElementById(id).value = nuevo+".";
						document.getElementById(id).setAttribute('value',nuevo+".");
					}else{
						document.getElementById(id).value = nuevo;
						document.getElementById(id).setAttribute('value',nuevo);
					}
					
				}
			}
		}
	}
}
function calcular_ventas_prod(idx){
	var unidades_vendidas = convNro(document.getElementById("unidades_vendidas_"+idx).value);
	var pventa = convNro(document.getElementById("pventa_"+idx).value);
	var ventas_x_prod = pventa * unidades_vendidas;
	document.getElementById("ventas_x_prod_"+idx).innerHTML = Number(ventas_x_prod).toLocaleString('en');
	document.getElementById("ventas_x_prod_"+idx).value = ventas_x_prod;
	calcular_ventas_prod_Total();
}
function calcular_ventas_prod_Total(){
	var table = document.getElementById("tablaProductos");
	var filas = table.rows.length-1;
	var ventas_x_prod_Total = 0;
	for (var idx=1;idx<filas;idx++){
		var unidades_vendidas = convNro(document.getElementById("unidades_vendidas_"+idx).value);
		var pventa = convNro(document.getElementById("pventa_"+idx).value);
		var ventas_x_prod = pventa * unidades_vendidas;
		// var ventas_x_prod = convNro(document.getElementById("ventas_x_prod_"+idx).value);
		// if(!isNaN(ventas_x_prod)){
		ventas_x_prod_Total += ventas_x_prod;
		// }
	}
	document.getElementById("vtas_comercio_base").innerHTML = Number(ventas_x_prod_Total).toLocaleString('en');
	document.getElementById("vtas_comercio_base").value = ventas_x_prod_Total;
	document.getElementById("ventas_x_prod_Total").innerHTML = Number(ventas_x_prod_Total).toLocaleString('en');
	document.getElementById("ventas_x_prod_Total").value = ventas_x_prod_Total;
}
function calcular_util_bruta(idx){
	var pcompra = convNro(document.getElementById("pcompra_"+idx).value);
	var pventa = convNro(document.getElementById("pventa_"+idx).value);
	var util_bruta = 0;
	if(pventa !=0){
		util_bruta = 1-pcompra/pventa;
	}
	document.getElementById("util_bruta_"+idx).innerHTML = Number(util_bruta).toLocaleString('en');
	document.getElementById("util_bruta_"+idx).value = util_bruta;
	calcular_util_bruta_Total();
}
function calcular_util_bruta_Total(){
	var table = document.getElementById("tablaProductos");
	var filas = table.rows.length-1;
	var util_bruta_Total = 0;
	for (var idx=1;idx<filas;idx++){
		var pcompra = convNro(document.getElementById("pcompra_"+idx).value);
		var pventa = convNro(document.getElementById("pventa_"+idx).value);
		var util_bruta = 0;
		if(pventa !=0){
			util_bruta = 1-pcompra/pventa;
		}
		util_bruta_Total += util_bruta;
	}
	document.getElementById("util_bruta_Total").innerHTML = Number(util_bruta_Total).toLocaleString('en');
	document.getElementById("util_bruta_Total").value = util_bruta_Total;
}
function calcular_informalidad(){
	var declarado = convNro(document.getElementById("declarado").value);
	var real = convNro(document.getElementById("vtas_comercio_base").value);
	if (real > 0) {
		var informalidad = Number((1 - declarado / real) * 100).toFixed();
		document.getElementById("informalidad").innerHTML = informalidad + "%";
		document.getElementById("informalidad").value = informalidad;
	} else {
		document.getElementById("informalidad").innerHTML = "";
	}
}
function calcular_Margen_Utilidad_Bruta(){
	var table = document.getElementById("tablaProductos");
	var filas = table.rows.length-1;
	var margen_utilidad_bruta = 0
	for (var idx=1;idx<filas;idx++){
		var pcompra = convNro(document.getElementById("pcompra_"+idx).value);
		var unidades_vendidas = convNro(document.getElementById("unidades_vendidas_"+idx).value);
		margen_utilidad_bruta += pcompra * unidades_vendidas;
	}
	var vtas_comercio_base = convNro(document.getElementById("vtas_comercio_base").value);
	if(vtas_comercio_base != 0){
		margen_utilidad_bruta = (1 - (convNro(margen_utilidad_bruta)/vtas_comercio_base))*100;
		document.getElementById("margen_bruto").innerHTML = Number(margen_utilidad_bruta).toFixed() + "%";
		document.getElementById("margen_bruto").value = Number(margen_utilidad_bruta).toFixed();
	}
}
function calcular_ingresos_comercio(){
	var table = document.getElementById("tablaProductos");
	var filas = table.rows.length-1;
	for (var idx=1;idx<filas;idx++){
		calcular_util_bruta(idx);
		calcular_ventas_prod(idx)
	}
	
	calcular_informalidad();
	calcular_Margen_Utilidad_Bruta();
}
function calcular_planilla_comercio() {
	var num = convNro(document.getElementById("num_planilla_comercio").value);
	var sueldo = convNro(document.getElementById("sueldo_planilla_comercio").value);
	if (num > 0 && sueldo > 0) {
		document.getElementById("total_planilla_comercio").innerHTML = Number(num * sueldo).toLocaleString('en');
		document.getElementById("total_planilla_comercio").value = Number(num * sueldo);
		document.getElementById("gastop_comercio_1").innerHTML = Number(num * sueldo).toLocaleString('en');
		document.getElementById("gastop_comercio_1").value = Number(num * sueldo);
	} else {
		document.getElementById("total_planilla_comercio").innerHTML = "";
		document.getElementById("total_planilla_comercio").value = 0;
		document.getElementById("gastop_comercio_1").innerHTML = "";
		document.getElementById("gastop_comercio_1").value = 0;
	}
}
function calcular_gastop_comercio() {
	calcular_planilla_comercio();
	var gastop1 = convNro(document.getElementById("gastop_comercio_1").value);
	var gastop2 = convNro(document.getElementById("gastop_comercio_2").value);
	var gastop3 = convNro(document.getElementById("gastop_comercio_3").value);
	var gastop4 = convNro(document.getElementById("gastop_comercio_4").value);
	var gastop5 = convNro(document.getElementById("gastop_comercio_5").value);
	document.getElementById("total_gastop_comercio").innerHTML = Number(gastop1 + gastop2 + gastop3 + gastop4 + gastop5).toLocaleString('en');
	document.getElementById("total_gastop_comercio").value = Number(gastop1 + gastop2 + gastop3 + gastop4 + gastop5);
}
function calcular_gastopersonal() {
	var gasto1 = convNro(document.getElementById("miembros").value) * 360;
	var gasto2 = convNro(document.getElementById("alquiler").value);
	var gasto3 = convNro(document.getElementById("deuda_personal").value);
	var gasto4 = convNro(document.getElementById("otros_personal").value);

	document.getElementById("gastos_implicitos").innerHTML = Number(gasto1).toLocaleString('en');
	document.getElementById("total_gastpersonal").innerHTML = Number(gasto1 + gasto2 + gasto3 + gasto4).toLocaleString('en');
	document.getElementById("gastos_implicitos").value = Number(gasto1);
	document.getElementById("total_gastpersonal").value = Number(gasto1 + gasto2 + gasto3 + gasto4);
}
function calcular_valor_declarado(idx){
	var Metraje = convNro(document.getElementById("Metraje_"+idx).value);
	var Precio = convNro(document.getElementById("Precio_"+idx).value);
	var Val_Inm_Dec = Metraje * Precio;
	document.getElementById("Val_Inm_Dec_"+idx).innerHTML = Number(Val_Inm_Dec).toLocaleString('en');
	document.getElementById("Val_Inm_Dec_"+idx).value = Val_Inm_Dec;
	return convNro(Val_Inm_Dec);
}
function calcular_valor_declarado_Total(){
	var table = document.getElementById("tablaPatrimonioInmueble");
	var filas = table.rows.length-1;
	var Val_Inm_Dec_Total = 0;
	for (var idx=1;idx<filas;idx++){
		Val_Inm_Dec_Total += calcular_valor_declarado(idx);
	}
	document.getElementById("Val_Inm_Dec_Total").innerHTML = Number(Val_Inm_Dec_Total).toLocaleString('en');
	document.getElementById("Val_Inm_Dec_Total").value = Val_Inm_Dec_Total;
	calcular_valor_evaluado_Total();
}
function calcular_valor_evaluado(idx){
	var Realizable = document.getElementById("Realizable_"+idx).value
	var factor = 0;
	if(Realizable == "Si"){
		factor = 0.75;
	}else if(Realizable == "No"){
		factor = 0.5;
	}
	var Val_Inm_Dec = convNro(document.getElementById("Val_Inm_Dec_"+idx).value);
	var Val_Inm_Eva = Val_Inm_Dec * factor;
	document.getElementById("Val_Inm_Eva_"+idx).innerHTML = Number(Val_Inm_Eva).toLocaleString('en');
	document.getElementById("Val_Inm_Eva_"+idx).value = Val_Inm_Eva;
	if(factor == 0){
			document.getElementById("Val_Inm_Eva_"+idx).innerHTML = Number(Val_Inm_Eva).toLocaleString('en');
			document.getElementById("Val_Inm_Eva_"+idx).value = Val_Inm_Eva;
	}
	return convNro(Val_Inm_Eva);
}
function calcular_valor_evaluado_Total(){
	var table = document.getElementById("tablaPatrimonioInmueble");
	var filas = table.rows.length-1;
	var Val_Inm_Eva_Total = 0;
	for (var idx=1;idx<filas;idx++){
		Val_Inm_Eva_Total += calcular_valor_evaluado(idx);
	}
	document.getElementById("Val_Inm_Eva_Total").innerHTML = Number(Val_Inm_Eva_Total).toLocaleString('en');
	document.getElementById("Val_Inm_Eva_Total").value = Val_Inm_Eva_Total;
}
function Agregar_Financimiento_LP(){
	var idx = Number(document.getElementById("cant_finan_LP").value);
	idx += 1;
	var financiamiento = '<div class="col-xs-12" id = "Largo_Plazo_'+idx+'" style="height:547px;">'+
							'<h1>Largo Plazo</h1>'+
							'<h3>('+idx+'° Financiamiento)</h3>'+
							'<table class="table table-hover">'+
							'	<tr><th colspan="3" class="cabezera">Propuesta de financiamiento Largo Plazo</th></tr>'+
							'	<tr>'+
							'		<td>Tipo de producto</td>'+
							'		<td colspan="2">'+
							'			<select class="form-control" id="Tipo_Prod_LP_'+idx+'" onchange="Calcular_Propuestas_LP();">'+
							'				<option value="0"></option>'+
							'				<option value="Leasing Mobiliario">Leasing Mobiliario</option>'+
							'				<option value="Leasing Inmobiliario">Leasing Inmobiliario</option>'+
							'				<option value="Préstamo para adquisición de inmueble">Préstamo para adquisición de inmueble</option>'+
							'				<option value="Préstamo para adquisición de bienes muebles">Préstamo para adquisición de bienes muebles</option>'+
							'				<option value="Subrogación de deuda">Subrogación de deuda</option>'+
							'				<option value="Otro">Otro</option>'+
							'			</select>'+
							'		</td>'+
							'	</tr>'+
							'	<tr>'+
							'		<td>Precio Venta</td>'+
							'		<td><input min="0"  class="form-control" id="Precio_Venta_'+idx+'" onkeyup="validarNumero(id);Calcular_Propuestas_LP();"/></td>'+
							'		<td>100%</td>'+
							'	</tr>'+
							'	<tr>'+
							'		<td style="width:40%;">Importe de Financiamiento</td>'+
							'		<td><input  min="0"  class="form-control" id="Finan_LP_'+idx+'" onkeyup="validarNumero(id);Calcular_Propuestas_LP();" /></td>'+
							'		<td><div id="Porc_LP_1_1"></div></td>'+
							'	</tr>'+
							'	<tr>'+
							'		<td>Cuota Inicial</td><td><div id="Cuota_Inicial_LP_'+idx+'"></div></td><td><div id="Porc_LP_1_2"></div></td>'+
							'	</tr>'+
							'	<tr>'+
							'		<td>Tasa anual</td><td><div><input style = "width:24.5%; display:inline"  min="0"  id="TEA_LP_'+idx+'" class="form-control" onkeyup="validarNumero(id);Calcular_Propuestas_LP();"/><b>&nbsp;%</b></div></td><td></td>'+
							'	</tr>'+
							'	<tr>'+
							'		<td>Tasa mensual</td><td><div id="TEM_LP_'+idx+'"></div></td><td></td>'+
							'	</tr>'+
							'	<tr>'+
							'		<td>Cuota</td><td><div id="Cuota_LP_'+idx+'"></div></td><td></td>'+
							'	</tr>'+
							'	<tr>'+
							'		<td>Plazo (Meses)</td><td><input  min="0"  class="form-control" id="Plazo_LP_'+idx+'" onkeyup="validarNumero(id);calcular_cuota_lp_1();"/></td><td></td>'+
							'	</tr>'+
							'	<tr>'+
							'		<td>Gtia para Prop:</td><td><input  min="0"  class="form-control" id="GTIA_LP_'+idx+'" onkeyup="validarNumero(id);calcular_cuota_lp_1();"/></td><td></td>'+
							'	</tr>'+
							'</table>'+
							'<input type="hidden" id="Cuota_LP_'+idx+'_hidden" name="Cuota_LP_'+idx+'_hidden">'+
						'</div>';
                    
	
	
	document.getElementById("Financimiento_LP").innerHTML += financiamiento;
	document.getElementById("cant_finan_LP").value = idx;
}
function Agregar_Financimiento_CP(){
	var idx = Number(document.getElementById("cant_finan_CP").value);
	idx += 1;
	var financiamiento = '<div class="col-xs-12" id = "Corto_Plazo_'+idx+'" style="height:547px;">'+
'							<h1>Corto Plazo</h1>'+
'							<h3>('+idx+'° Financiamiento)</h3>'+
'							<table class="table table-hover">'+
'								<tr><th colspan="2" class="cabezera">Propuesta de financiamiento Corto Plazo</th></tr>'+
'								<tr>'+
'									<td>Tipo de producto</td>'+
'									<td>'+
'										<select class="form-control" id="Tipo_Prod_CP_'+idx+'">'+
'											<option value=""></option>'+
'											<option value="Financiamiento de Importación">Financiamiento de Importación</option>'+
'											<option value="Financiamiento de Exportación">Financiamiento de Exportación</option>'+
'											<option value="Préstamo para capital de trabajo">Préstamo para capital de trabajo</option>'+
'											<option value="Tarjeta capital de trabajo">Tarjeta capital de trabajo</option>'+
'											<option value="Descuento de letra/factura negociable">Descuento de letra/factura negociable</option>'+
'											<option value="Tarjeta Empresarial">Tarjeta empresarial</option>'+
'											<option value="Préstamo para adquisición de bienes muebles pequeños">Préstamo para adquisición de bienes muebles pequeños</option>'+
'											<option value="Subrogación de deuda">Subrogación de deuda</option>'+
'											<option value="Incremento de línea de TKT">Incremento de línea de TKT</option>'+
'											<option value="Incremento de línea de T/C">Incremento de línea de T/C empresarial</option>'+
'											<option value="Otro">Otro</option>'+
'										</select>'+
'									</td>'+
'								</tr>'+
'								<tr>'+
'									<td style="width:40%;">Importe de Financiamiento</td>'+
'									<td><input  min="0"  id="Finan_CP_'+idx+'" class="form-control" onkeyup="validarNumero(id);calcular_cuota_cp_1();calcular_gastfin_cp_1();calcular_balance();"/></td>'+
'								</tr>'+
'								<tr>'+
'									<td>Tasa anual</td>'+
'									<td><div><input style="width:20%; display:inline;"  min="0"  id="TEA_CP_'+idx+'" class="form-control" onkeyup="validarNumero(id);calcular_tasa_mensual_cp_1();calcular_cuota_cp_1();calcular_gastfin_cp_1();"/> <b>%</b></div></td>'+
'								</tr>'+
'								<tr>'+
'									<td>Tasa mensual</td>'+
'									<td><div id="TEM_CP_'+idx+'"></div></td>'+
'								</tr>'+
'								<tr>'+
'									<td>Cuota</td>'+
'									<td><div id="Cuota_CP_'+idx+'"></div></td>'+
'								</tr>'+
'								<tr>'+
'									<td>Plazo (Meses)</td>'+
'									<td><input  min="0"  id="Plazo_CP_'+idx+'" class="form-control" onkeyup="validarNumero(id);calcular_cuota_cp_1()"/></td>'+
'								</tr>'+
'								<tr>'+
'									<td>Gastos finan. 1°cuota</td>'+
'									<td><div id="GastFin_CP_'+idx+'"></div></td>'+
'								</tr>'+
'							</table>'+
'							<input type="hidden" id="GastFin_CP_'+idx+'_hidden" name="GastFin_CP_'+idx+'_hidden"/>'+
'						</div>'
					
                    
	
	
	document.getElementById("Financimiento_CP").innerHTML += financiamiento;
	document.getElementById("cant_finan_CP").value = idx;
}
function Eliminar_Financimiento_LP(){
	var idx = document.getElementById("cant_finan_LP").value;
	if(idx>0){
		var padre = document.getElementById("Financimiento_LP");
		var hijo = document.getElementById("Largo_Plazo_"+idx);
		var oldChild = padre.removeChild(hijo);
		document.getElementById("cant_finan_LP").value = idx-1;
	}
}
function Eliminar_Financimiento_CP(){
	var idx = document.getElementById("cant_finan_CP").value;
	if(idx>0){
		var padre = document.getElementById("Financimiento_CP");
		var hijo = document.getElementById("Corto_Plazo_"+idx);
		var oldChild = padre.removeChild(hijo);
		document.getElementById("cant_finan_CP").value = idx-1;
	}
}
function Calcular_Propuestas_LP(){
	var idx = document.getElementById("cant_finan_LP").value;
	var Tipo_Prod = document.getElementById("Tipo_Prod_LP_"+idx).value;
	document.getElementById("Tipo_Prod_LP_"+idx).setAttribute('value',Tipo_Prod);
	var vIndex = document.getElementById("Tipo_Prod_LP_"+idx).selectedIndex;    
	document.getElementById("Tipo_Prod_LP_"+idx).setAttribute('selectedIndex',vIndex);
	for (var i = 1; i <= idx;i++){
		Calcular_Cuota_Inicial_LP(i);
		Calcular_Porcentajes_LP(i);
		Calcular_Tasa_Mensual_LP(i);
		Calcular_Cuota_LP(i);
	}
}
function Calcular_Cuota_Inicial_LP(idx) {
	var Tipo_Prod = document.getElementById("Tipo_Prod_LP_"+idx).value;
	if(Tipo_Prod !="Subrogación de deuda"){
		var Precio_Venta = convNro(document.getElementById("Precio_Venta_"+idx).value);
		var Finan_LP = convNro(document.getElementById("Finan_LP_"+idx).value);
		var Cuota_Inicial = Precio_Venta - Finan_LP;
		if (Precio_Venta > Finan_LP) {
			document.getElementById("Cuota_Inicial_LP_"+idx).innerHTML = Number(Cuota_Inicial).toLocaleString('en');
			document.getElementById("Cuota_Inicial_LP_"+idx).value = Cuota_Inicial;
		} else {
			document.getElementById("Cuota_Inicial_LP_"+idx).innerHTML = "";
			document.getElementById("Cuota_Inicial_LP_"+idx).value = 0;
		}
	}else{
		document.getElementById("Cuota_Inicial_LP_"+idx).innerHTML = "";
		document.getElementById("Cuota_Inicial_LP_"+idx).value = 0;	
	}
}
function Calcular_Porcentajes_LP(idx) {
	var Precio_Venta = convNro(document.getElementById("Precio_Venta_"+idx).value);
	var Finan_LP = convNro(document.getElementById("Finan_LP_"+idx).value);
	var Cuota_Inicial = convNro(document.getElementById("Cuota_Inicial_LP_"+idx).value);
	var Porc_Finan = Finan_LP / Precio_Venta * 100;
	var Porc_Cuota = Cuota_Inicial / Precio_Venta * 100;
	
	if (Precio_Venta > Finan_LP) {
		document.getElementById("Porc_LP_1_1").innerHTML = Number(Porc_Finan).toFixed(0) + "%";
		document.getElementById("Porc_LP_1_1").value = Porc_Finan;
		
		document.getElementById("Porc_LP_1_2").innerHTML = Number(Porc_Cuota).toFixed(0) + "%";
		document.getElementById("Porc_LP_1_2").value = Porc_Cuota;
	} else {
		document.getElementById("Porc_LP_1_1").innerHTML = "";
		document.getElementById("Porc_LP_1_1").value = 0;
		document.getElementById("Porc_LP_1_2").innerHTML = "";
		document.getElementById("Porc_LP_1_2").value = 0;
	}
}
function Calcular_Tasa_Mensual_LP(idx) {
	var TEA_LP = convNro(document.getElementById("TEA_LP_"+idx).value);
	
	if ( TEA_LP > 0) {
		var TEM_LP = ((Math.pow(1 + TEA_LP / 100, 1 / 12) - 1) * 100);
	
		document.getElementById("TEM_LP_"+idx).innerHTML = Number(TEM_LP).toFixed(2) + "%";
		document.getElementById("TEM_LP_"+idx).value = Number(TEM_LP).toFixed(2) + "%";
	} else {
		document.getElementById("TEM_LP_"+idx).innerHTML = "";
	}
}
function Calcular_Cuota_LP(idx) {
	var Plazo_LP = convNro(document.getElementById("Plazo_LP_"+idx).value);
	var Finan_LP = convNro(document.getElementById("Finan_LP_"+idx).value);
	var TEA_LP = convNro(document.getElementById("TEA_LP_"+idx).value);
	
	if (Plazo_LP > 0 && Finan_LP > 0 && TEA_LP > 0) {

		var TEM_LP = Math.pow(1 + TEA_LP / 100, 1 / 12) - 1;
		document.getElementById("Cuota_LP_"+idx).innerHTML = Number((Finan_LP / ((1 - Math.pow(1 + TEM_LP, -Plazo_LP)) / (TEM_LP))).toFixed()).toLocaleString('en');
		document.getElementById("Cuota_LP_"+idx).value = Number((Finan_LP / ((1 - Math.pow(1 + TEM_LP, -Plazo_LP)) / (TEM_LP))).toFixed());
		document.getElementById("Cuota_LP_"+idx+"_hidden").value = Finan_LP / ((1 - Math.pow(1 + TEM_LP, -Plazo_LP)) / (TEM_LP));
		document.getElementById("Cuota_LP_"+idx+"_hidden").setAttribute('value',(Finan_LP / ((1 - Math.pow(1 + TEM_LP, -Plazo_LP)) / (TEM_LP))));
	} else {
		document.getElementById("Cuota_LP_"+idx).innerHTML = "";
	}
}
function Calcular_Propuestas_CP(){
	var idx = document.getElementById("cant_finan_CP").value;
	var Tipo_Prod = document.getElementById("Tipo_Prod_CP_"+idx).value;
	document.getElementById("Tipo_Prod_CP_"+idx).setAttribute('value',Tipo_Prod);
	var vIndex = document.getElementById("Tipo_Prod_CP_"+idx).selectedIndex;    
	document.getElementById("Tipo_Prod_CP_"+idx).setAttribute('selectedIndex',vIndex);
	for (var i = 1; i <= idx;i++){
		Calcular_Tasa_Mensual_CP(i);
		Calcular_Cuota_CP(i);
		Calcular_GastFin_CP(idx);
	}
}
function Calcular_Tasa_Mensual_CP(idx) {
	var TEA_CP = convNro(document.getElementById("TEA_CP_"+idx).value);
	if ( TEA_CP > 0) {
		var TEM_CP = ((Math.pow(1 + TEA_CP / 100, 1 / 12) - 1) * 100);
		document.getElementById("TEM_CP_"+idx).innerHTML = Number(TEM_CP).toFixed(2) + "%";
		document.getElementById("TEM_CP_"+idx).value = Number(TEM_CP).toFixed(2) + "%";
	} else {
		document.getElementById("TEM_CP_"+idx).innerHTML = "";
	}
}
function Calcular_Cuota_CP(idx) {
	var Plazo_CP = convNro(document.getElementById("Plazo_CP_"+idx).value);
	var Finan_CP = convNro(document.getElementById("Finan_CP_"+idx).value);
	var TEA_CP = convNro(document.getElementById("TEA_CP_"+idx).value);
	
	if (Plazo_CP > 0 && Finan_CP > 0 && TEA_CP > 0) {

		var TEM_CP = Math.pow(1 + TEA_CP / 100, 1 / 12) - 1;
		document.getElementById("Cuota_CP_"+idx).innerHTML = Number((Finan_CP / ((1 - Math.pow(1 + TEM_CP, -Plazo_CP)) / (TEM_CP))).toFixed()).toLocaleString('en');
		document.getElementById("Cuota_CP_"+idx).value = Number((Finan_CP / ((1 - Math.pow(1 + TEM_CP, -Plazo_CP)) / (TEM_CP))).toFixed());
		document.getElementById("Cuota_CP_"+idx+"_hidden").value = Finan_CP / ((1 - Math.pow(1 + TEM_CP, -Plazo_CP)) / (TEM_CP));
		document.getElementById("Cuota_CP_"+idx+"_hidden").setAttribute('value',(Finan_CP / ((1 - Math.pow(1 + TEM_CP, -Plazo_CP)) / (TEM_CP))));
	} else {
		document.getElementById("Cuota_CP_"+idx).innerHTML = "";
		document.getElementById("Cuota_CP_"+idx+"_hidden").setAttribute('value','');
	}
}
function Calcular_GastFin_CP(idx) {
	var Finan_CP = convNro(document.getElementById("Finan_CP_"+idx).value);
	var TEA_CP = convNro(document.getElementById("TEA_CP_"+idx).value);
	if (Finan_CP > 0 && TEA_CP > 0) {
		
		var GastFin_CP = Finan_CP * (Math.pow(1 + TEA_CP / 100, 1 / 12) - 1);
		
		document.getElementById("GastFin_CP_"+idx).innerHTML = Number(GastFin_CP.toFixed()).toLocaleString('en');
		document.getElementById("GastFin_CP_"+idx).value = GastFin_CP.toFixed();
		
		document.getElementById("GastFin_CP_"+idx+"_hidden").value = GastFin_CP;
		document.getElementById("GastFin_CP_"+idx+"_hidden").setAttribute('value',GastFin_CP);
	} else {
		document.getElementById("GastFin_CP_"+idx).innerHTML = "";
		document.getElementById("GastFin_CP_"+idx+"_hidden").value = 0;
		document.getElementById("GastFin_CP_"+idx+"_hidden").setAttribute('value','');
	}
}
function Calcular_Valor_Bien(idx){
	var Veh_Maq = document.getElementById("Veh_Maq_"+idx).value;
	var Valor_Nuevo = convNro(document.getElementById("Valor_Nuevo_"+idx).value);
	var Antiguedad = convNro(document.getElementById("Antiguedad_"+idx).value);
	var Factor = 0;
	var Valor_Bien = 0;
	if(Veh_Maq!=0 && Valor_Nuevo>0 && Antiguedad >0){
		if(Veh_Maq == "Vehiculo"){
			switch (true){
				case (0<Antiguedad && Antiguedad<3):
					Factor = 1;
					alert(1);
					break;
				case (2<Antiguedad && Antiguedad<5):
					Factor = 0.8;
					alert(2);
					break;
				case (4<Antiguedad && Antiguedad<7):
					Factor = 0.6;
					alert(3);
					break;
				case (6<Antiguedad && Antiguedad<9):
					Factor = 0.4;
					alert(4);
					break;
				case (8<Antiguedad):
					Factor = 0.2;
					alert(5);
					break;
			}
		}else if(Veh_Maq == "Maquinaria"){
			switch (true){
				case (0<Antiguedad<5):
					Factor = 1;
					break;
				case (4<Antiguedad<10):
					Factor = 0.7;
					break;
				case (9<Antiguedad<15):
					Factor = 0.5;
					break;
				case (14<Antiguedad):
					Factor = 0.3;
					break;
			}		
		}
		Valor_Bien = Valor_Nuevo * Factor;
		document.getElementById("Valor_Bien_"+idx).innerHTML = Valor_Bien;
		document.getElementById("Valor_Bien_"+idx).value = Valor_Bien;
	}else{
		document.getElementById("Valor_Bien_"+idx).innerHTML = '';
		document.getElementById("Valor_Bien_"+idx).value = '';
	}
	return Valor_Bien;
}
function Calcular_Valor_Bien_Total(){
	var table = document.getElementById("tablaPatrimonioVehiculos");
	var filas = table.rows.length-1;
	var Valor_Bien_Total = 0;
	for (var idx=1;idx<filas;idx++){
		Valor_Bien_Total += Calcular_Valor_Bien(idx);
	}
	
	document.getElementById("Valor_Bien_Total").innerHTML = Number(Valor_Bien_Total).toLocaleString('en');
	document.getElementById("Valor_Bien_Total").value = Valor_Bien_Total;
}
function AgregarLineaTarjeta(){
	var table = document.getElementById("tablaLineaTarjetaCapital");
	var idx = table.rows.length;
	var row = table.insertRow(idx);
	idx = idx-1
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    cell1.innerHTML = '<div><input class="form-control" type="text" id="LTC_Banco_'+idx+'"/></div>';
    cell2.innerHTML = '<div><input class="form-control" type="text" id="LTC_Linea_Utilizada_'+idx+'"/></div>';
	cell3.innerHTML = '<div><input class="form-control" type="text" id="LTC_Linea_Total_'+idx+'"/></div>';
	cell4.innerHTML = '<div id="LTC_TEA_'+idx+'">'+TEALTC*100+'%</div>';
    cell5.innerHTML = '<div id="LTC_TEM_'+idx+'">'+retornarTEM(TEALTC)+'</div>';
    cell6.innerHTML = '<div id="LTC_Costo_Financiero_'+idx+'"></div>';
	cell7.innerHTML = '<div id="LTC_Costo_Aprox_Pagar_'+idx+'"></div>';
}
function Calcular_Linea_Tarjeta(idx){
	var LTC_Linea_Utilizada = convNro(document.getElementById("LTC_Linea_Utilizada_"+idx).value);
	var LTC_Linea_Total = convNro(document.getElementById("LTC_Linea_Total_"+idx).value);
	
	var LTC_Costo_Financiero = LTC_Linea_Total * TEALTC;
	var LTC_Costo_Aprox_Pagar 
	
	document.getElementById("ventas_x_prod_"+idx).innerHTML = Number(ventas_x_prod).toLocaleString('en');
	document.getElementById("ventas_x_prod_"+idx).value = ventas_x_prod;
}
function Calcular_Linea_Tarjeta_Total(){
	var table = document.getElementById("tablaLineaTarjetaCapital");
	var filas = table.rows.length-1;
	var ventas_x_prod_Total = 0;
	for (var idx=1;idx<filas;idx++){
		var unidades_vendidas = convNro(document.getElementById("unidades_vendidas_"+idx).value);
		var pventa = convNro(document.getElementById("pventa_"+idx).value);
		var ventas_x_prod = pventa * unidades_vendidas;
		// var ventas_x_prod = convNro(document.getElementById("ventas_x_prod_"+idx).value);
		// if(!isNaN(ventas_x_prod)){
		ventas_x_prod_Total += ventas_x_prod;
		// }
	}
}
function EliminarLineaTarjeta(){
	var table = document.getElementById("tablaLineaTarjetaCapital")
	var idx = table.rows.length-1
	if(table.rows.length>2){
		table.deleteRow(idx);
	}
}
function retornarTEM(TEA){
	var TEA = Math.pow((1+TEA),(1/12))-1+0.0015;
	return Number(TEA*100).toFixed(2) +'%';
}
function completarInfo(lista){
	var analistas = lista[0];
	var oficinas = lista[1];
	document.getElementById("analista").options[0]=new Option("");
	document.getElementById("oficinas").options[0]=new Option("");
	for(i=0;i<analistas.length;i++){
		document.getElementById("analista").options[i+1]=new Option(analistas[i], i);
	}
	for(i=0;i<oficinas.length;i++){
		document.getElementById("oficinas").options[i+1]=new Option(oficinas[i], i);
	}
}
function seccionDatosCliente(){
	return [
	document.getElementById("regimen").value,
	document.getElementById("rvgl").value,
	document.getElementById("analista").value,
	document.getElementById("fechaVisita").value,
	document.getElementById("oficinas").value,
	document.getElementById("tipoCliente").value,
	document.getElementById("razonSocial").value,
	document.getElementById("ruc").value,
	document.getElementById("ubicacion").value,
	document.getElementById("aExperiencia").value,
	document.getElementById("nroPtosVta").value,
	document.getElementById("nroAlmacenes").value,
	document.getElementById("actividad").value,
	document.getElementById("actEspecifica").value,
	document.getElementById("buro").value,
	document.getElementById("nroEntidades").value,
	document.getElementById("edadRL").value,
	]
}
function seccionFinanciamiento(){
	var LP = [];
	var CP = [];
	var cant_finan_LP = document.getElementById("cant_finan_LP").value;
	for(var i = 0; i<cant_finan_LP; i++){
		LP.push(FinanLP(i+1));
	}
	var cant_finan_CP = document.getElementById("cant_finan_CP").value;
	for(var i = 0; i<cant_finan_CP; i++){
		CP.push(FinanCP(i+1));
	}
	return [LP,CP]
}
function FinanLP(idx){
	return [
	document.getElementById("Tipo_Prod_LP_"+idx).value,
	document.getElementById("Precio_Venta_"+idx).value,
	document.getElementById("Finan_LP_"+idx).value,
	document.getElementById("Cuota_Inicial_LP_"+idx).value,
	document.getElementById("Porc_LP_1_"+idx).value,
	document.getElementById("TEA_LP_"+idx).value,
	document.getElementById("TEM_LP_"+idx).value,
	document.getElementById("Cuota_LP_"+idx).value,
	document.getElementById("Plazo_LP_"+idx).value,
	document.getElementById("GTIA_LP_"+idx).value
	]
}
function FinanCP(idx){
	return [
	document.getElementById("Tipo_Prod_CP_"+idx).value,
	document.getElementById("Finan_CP_"+idx).value,
	document.getElementById("TEA_CP_"+idx).value,
	document.getElementById("TEM_CP_"+idx).value,
	document.getElementById("Cuota_CP_"+idx).value,
	document.getElementById("Plazo_CP_"+idx).value,
	document.getElementById("GastFin_CP_"+idx).value
	]
}
function seccionIngresos(){
	var idx = table.rows.length-1;
	var ingresos = [];
	for(var i = 0, i<idx, i++){
		ingresos.push(RecuperarProd(i+1));
	}
	var util_bruta_Total = document.getElementById("util_bruta_Total").value;
	var ventas_x_prod_Total = document.getElementById("ventas_x_prod_Total").value;
	var vtas_comercio_base = document.getElementById("vtas_comercio_base").value;
	var margen_bruto = document.getElementById("margen_bruto").value;
	var margen_bruto_referencial = document.getElementById("margen_bruto_referencial").value;
	var declarado = document.getElementById("declarado").value;
	var informalidad = document.getElementById("informalidad").value;
	
	ingresos.push(util_bruta_Total);
	ingresos.push(ventas_x_prod_Total);
	ingresos.push(vtas_comercio_base);
	ingresos.push(margen_bruto);
	ingresos.push(margen_bruto_referencial);
	ingresos.push(declarado);
	ingresos.push(informalidad);
	
}
function RecuperarProd(idx){
	return [
	document.getElementById("Prod"+idx).value,
	document.getElementById("unidades_vendidas_"+idx).value,
	document.getElementById("unidades_x_presentacion_"+idx).value,
	document.getElementById("pcompra_"+idx).value,
	document.getElementById("pventa_"+idx).value,
	document.getElementById("util_bruta_"+idx).value,
	document.getElementById("ventas_x_prod_"+idx).value
	]
}
function recuperarInformacion(){
	var DC = seccionDatosCliente();
	var F = seccionFinanciamiento();
	var I = seccionIngresos();
	return [DC,F,I]
}