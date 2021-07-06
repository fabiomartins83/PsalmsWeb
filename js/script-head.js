/* 	
	*** Modelo de arquivo de código Javascript
	*** para inclusão no elemento HEAD da página HTML.
	*** Desenvolvido por Fábio de Almeida Martins.
*/

/*
var nome = prompt("Digite o seu nome: ");
console.log("nome = " + nome);
if (nome != null && nome != "") 
	alert("Olá, " + nome + "! \nBem vindo à minha página Web!");
*/

$(function () { 
	$("#mudaEstilo").click(function () { 
		var atual = $("#css-light").attr("href"); 
		if (atual === "") { 
			$("#css-light").attr("href", $("#css-light").data("href")); 
			$(this).text('Voltar estilo'); 
		} else { 
			$("#css-light").attr("href", ""); 
			$(this).text('Alterar estilo'); 
		} 
	}); 
}); 

function exibir(seletor, tipo) {
	elemento.style.visibility = "visible";
}

function ocultar(seletor, tipo) {
	if (seletor == null) {
		elemento = document.getElementByTag("img");
	} else {
		elemento = document.getElementByTag("h1"); //alterar esta parte do código (inserir tratamentos)
	}
	elemento.style.visibility = "hidden";
}

function alteraTexto(idioma) {
	var versiculo01la = "<span id='letra01' class='primletra'>Q</span id='linha01'>ui habitat in adjutorio Altissimi, in protectione Dei caeli commorabitur.</span>";
	var versiculo01en = "<span id='letra01' class='primletra'>L</span id='linha01'>ord, thou hast been our dwelling place in all generations.</span>";
	var versiculo02la = "<span id='letra02' class='primletra'>D</span id='linha02'>icet Domino: Susceptor meus es tu, et refugium meum; Deus meus, sperabo in eum.</span>";
	var versiculo02en = "<span id='letra02' class='primletra'>B</span id='linha02'>efore the mountains were brought forth, or ever thou hasdst formed the earth and the world, even from everlasting to everlasting, thou art God.</span>";
	var versiculo03la = "<span id='letra03' class='primletra'>Q</span id='linha03'>uoniam ipse liberavit me de laqueo venantium, et a verbo aspero. </span>";
	var versiculo03en = "<span id='letra03' class='primletra'>T</span id='linha03'>hou turnest man to destruction; and sayest, Return, ye children of men.</span>";
	var versiculo04la = "<span id='letra04' class='primletra'>S</span id='linha04'>capulis suis obumbrabit tibi, et sub pennis ejus sperabis.</span>";
	var versiculo04en = "<span id='letra04' class='primletra'>F</span id='linha04'>or a thousand years in thy sight are but as yesterday when it is past, and as a watch in the night.</span>";
	var versiculo05la = "<span id='letra05' class='primletra'>S</span id='linha05'>cuto circumdabit te veritas ejus: non timebis a timore nocturno;</span>";
	var versiculo05en = "<span id='letra05' class='primletra'>T</span id='linha05'>hou carriest them away as with a flood; they are as a sleep: in the morning they are like grass which groweth up.</span>";
	var versiculo06la = "<span id='letra06' class='primletra'>A</span id='linha06'> sagitta volante in die, a negotio perambulante in tenebris, ab incursu, et daemonio meridiano.</span>";
	var versiculo06en = "<span id='letra06' class='primletra'>I</span id='linha06'>n the morning it flourisheth, and groweth up; in the evening it is cut down, and withereth.</span>";
	var versiculo07la = "<span id='letra07' class='primletra'>C</span id='linha07'>adent a latere tuo mille, et decem millia a dextris tuis; ad te autem non appropinquabit.</span>";
	var versiculo07en = "<span id='letra07' class='primletra'>F</span id='linha07'>or we are consumed by thine anger, and by thy wrath are we troubled.</span>";
	var versiculo08la = "<span id='letra08' class='primletra'>V</span id='linha08'>erumtamen oculis tuis considerabis, et retributionem peccatorum videbis.</span>";
	var versiculo08en = "<span id='letra08' class='primletra'>T</span id='linha08'>hou hast set our iniquities before thee, our secret sins in the light of thy countenance.</span>";
	var versiculo09la = "<span id='letra09' class='primletra'>Q</span id='linha09'>uoniam tu es, Domine, spes mea; Altissimum posuisti refugium tuum.</span>";
	var versiculo09en = "<span id='letra09' class='primletra'>F</span id='linha09'>or all our days are passed away in thy wrath: we spent our years as a tale that is tols.</span>";
	var versiculo10la = "<span id='letra10' class='primletra'>N</span id='linha10'>on accedet ad te malum, et flagellum non appropinquabit tabernaculo tuo.</span>";
	var versiculo10en = "<span id='letra10' class='primletra'>T</span id='linha10'>he days of our years are threescore years and ten; and if by reason of strength they be fourscore years, yet is their strenght labour and sorrow; for it is soon cut off, and we fly away.</span>";
	var versiculo11la = "<span id='letra11' class='primletra'>Q</span id='linha11'>uoniam angelis suis mandavit de te, ut custodiant te in omnibus viis tuis.</span>";
	var versiculo11en = "<span id='letra11' class='primletra'>W</span id='linha11'>ho knoweth the power of thine anger? even according to thy fear, so is thy wrath.</span>";
	var versiculo12la = "<span id='letra12' class='primletra'>I</span id='linha12'>n manibus portabunt te, ne forte offendas ad lapidem pedem tuum.</span>";
	var versiculo12en = "<span id='letra12' class='primletra'>S</span id='linha12'>o teach us to number our days, that we may apply our hearts unto wisdom.</span>";
	var versiculo13la = "<span id='letra13' class='primletra'>S</span id='linha13'>uper aspidem et basiliscum ambulabis, et conculcabis leonem et draconem.</span>";
	var versiculo13en = "<span id='letra13' class='primletra'>R</span id='linha13'>eturn, O Lord, how long? and let it repent thee concerning thy servants.</span>";
	var versiculo14la = "<span id='letra14' class='primletra'>Q</span id='linha14'>uoniam in me speravit, liberabo eum; protegam eum, quoniam cognovit nomen meum.</span>";
	var versiculo14en = "<span id='letra14' class='primletra'>O</span id='linha14'> satisfy us early with thy mercy; that we may rejoice and be glad all our days.</span>";
	var versiculo15la = "<span id='letra15' class='primletra'>C</span id='linha15'>lamabit ad me, et ego exaudiam eum; cum ipso sum in tribulatione: eripiam eum, et glorificabo eum.</span>";
	var versiculo15en = "<span id='letra15' class='primletra'>M</span id='linha15'>ake us glad acconrdin to the days wherein thou thast afflicted us, and the years wherein we have seen evil.</span>";
	var versiculo16la = "<span id='letra16' class='primletra'>L</span id='linha16'>ongitudine dierum replebo eum, et ostendam illi salutare meum.</span>";
	var versiculo16en = "<span id='letra16' class='primletra'>L</span id='linha16'>et thy work appear unto thy servants, and thy glory unto their children. </span>";
	var versiculo17la = "<span id='letra17' class='primletra'></span id='linha17'>";
	var versiculo17en = "<span id='letra17' class='primletra'>A</span id='linha17'>And let the beauty of the Lord our God be uppon us: and establish thou the work of our hands upon us; yeah, the work of our hands established thou it.</span>";
	switch(idioma) {
		case "ingles":
			document.getElementById("linha01").innerHTML = versiculo01en;
			document.getElementById("linha02").innerHTML = versiculo02en;
			document.getElementById("linha03").innerHTML = versiculo03en;
			document.getElementById("linha04").innerHTML = versiculo04en;
			document.getElementById("linha05").innerHTML = versiculo05en;
			document.getElementById("linha06").innerHTML = versiculo06en;
			document.getElementById("linha07").innerHTML = versiculo07en;
			document.getElementById("linha08").innerHTML = versiculo08en;
			document.getElementById("linha09").innerHTML = versiculo09en;
			document.getElementById("linha10").innerHTML = versiculo10en;
			document.getElementById("linha11").innerHTML = versiculo11en;
			document.getElementById("linha12").innerHTML = versiculo12en;
			document.getElementById("linha13").innerHTML = versiculo13en;
			document.getElementById("linha14").innerHTML = versiculo14en;
			document.getElementById("linha15").innerHTML = versiculo15en;
			document.getElementById("linha16").innerHTML = versiculo16en;
			document.getElementById("linha17").innerHTML = versiculo17en;
			document.getElementById("linha17").visibility = "visible";
			break;
		case "latim":
			document.getElementById("linha01").innerHTML = versiculo01la;
			document.getElementById("linha02").innerHTML = versiculo02la;
			document.getElementById("linha03").innerHTML = versiculo03la;
			document.getElementById("linha04").innerHTML = versiculo04la;
			document.getElementById("linha05").innerHTML = versiculo05la;
			document.getElementById("linha06").innerHTML = versiculo06la;
			document.getElementById("linha07").innerHTML = versiculo07la;
			document.getElementById("linha08").innerHTML = versiculo08la;
			document.getElementById("linha09").innerHTML = versiculo09la;
			document.getElementById("linha10").innerHTML = versiculo10la;
			document.getElementById("linha11").innerHTML = versiculo11la;
			document.getElementById("linha12").innerHTML = versiculo12la;
			document.getElementById("linha13").innerHTML = versiculo13la;
			document.getElementById("linha14").innerHTML = versiculo14la;
			document.getElementById("linha15").innerHTML = versiculo15la;
			document.getElementById("linha16").innerHTML = versiculo16la;
			document.getElementById("linha17").innerHTML = versiculo17la;
			document.getElementById("linha17").visibility = "hidden";
	}
}

/*               ***CONTINUAR DEPOIS***
function ocultarExibir(seletor, tipo) {
	if (seletor == null) {
		elemento = document.getElementByTag("img");
	} else {
		if (seletor == "tag") {
			elemento = document.getElementByTag(tipo); //alterar esta parte do código (inserir tratamentos)
		} else {
			elemento =  
		}
	}

} */