const url = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json";
const imgurl = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json";
async function getBdata(k){
	const responsedata = await fetch(url);
	const beerdata = await responsedata.json(); 
	const responseimg = await fetch(imgurl);
	const beerimg = await responseimg.json();
	var id = beerdata[k].id;
	var name = beerdata[k].name;
	var style = beerdata[k].style;
	var ounces = beerdata[k].ounces;
	var abv = beerdata[k].abv;
	var t = document.createElement('ul');
	var lid = document.createElement('li');
	var tid = document.createTextNode('ID: '+id);
	lid.appendChild(tid);
	t.appendChild(lid);

	var lname = document.createElement('li');
	var tname = document.createTextNode('Name: '+name);
	lname.appendChild(tname);
	t.appendChild(lname);

	var lstyle = document.createElement('li');
	var tstyle = document.createTextNode('Style: '+style);
	lstyle.appendChild(tstyle);
	t.appendChild(lstyle);

	var lounces = document.createElement('li');
	var tounces = document.createTextNode('Ounces: '+ounces);
	lounces.appendChild(tounces);
	t.appendChild(lounces);
	document.getElementById(k).appendChild(t);
	var imgdiv = document.createElement('img');
	imgdiv.setAttribute('height','125');
	imgdiv.setAttribute('width','125');
	imgdiv.src = beerimg[(k%5)].image;
	document.getElementById(k).appendChild(imgdiv);
}
for(let i = 0 ;i<1000 ;i++){
	var workdiv = document.createElement('div');
	workdiv.setAttribute('id',i);
	workdiv.setAttribute('class','beerbox');
	document.getElementById('wrapper').appendChild(workdiv);
	getBdata(i);
}