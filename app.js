const file =
document.querySelector("#file");


const btn =
document.querySelector("#import");


const content =
document.querySelector("#content");



btn.onclick=()=>{

file.click();

};



file.onchange=e=>{


let f=e.target.files[0];


if(!f)return;



let reader=new FileReader();



reader.onload=function(e){


content.innerHTML=

`

<h2>${f.name}</h2>

<p>
${e.target.result}
</p>

`;


saveBook(f.name);


};



reader.readAsText(f);



};





function saveBook(name){


let books=

JSON.parse(

localStorage.books||"[]"

);



books.push(name);


localStorage.books=

JSON.stringify(books);



}



document.querySelector("#dark")
.onclick=()=>{


document.body.classList.toggle(
"dark"
);


};
