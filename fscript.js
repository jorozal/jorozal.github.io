	var inp = document.getElementById("inp");
	var witgif = document.getElementById("witgif");
	var ul_list = document.getElementById("ul_list");
	var div_list = document.getElementById("div_list");
	var clo = document.getElementById("clo");
	var obj = search_terms = [];
	fetch('https://jorozal.github.io/data.json')
		.then((response) => response.json())
		.then((json) => search_terms = Object.keys(obj = json));

	function srch(valu){
	clo.style.height='100vh';
	if(valu!==""){
	witgif.src = obj[inp.value=valu];
	ul_list.innerHTML="";
	witgif.style.display='block';
	}else{
	  witgif.style.display='none';
	}
	}

	inp.addEventListener("input",function(){
	  if(inp.value==="")ul_list.innerHTML="";
	  let list = '';var limt_c=10;
	  let terms = autocompleteMatch(inp.value.toLowerCase());
	  if(terms.length<10)limt_c=terms.length;
	  for (i=0; i<limt_c; i++) {
		list += '<li onclick="srch(this.textContent)">' + terms[i] + '</li>';
	  }
	  ul_list.innerHTML =list;
	});

	inp.addEventListener("click",function(){
	  ul_list.style.display='block';
	  srch(inp.value);
	  event.stopPropagation();
	});

	function autocompleteMatch(input) {
	  if (input == '') {
		return [];
	  }
	  var reg = new RegExp(input)
	  return search_terms.filter(function(term) {
		  if (term.match(reg)) {
		  return term;
		  }
	  });
	}