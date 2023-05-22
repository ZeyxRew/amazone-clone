const bar = document.querySelector(".bar");
const div = document.querySelector(".menu");
const main = document.querySelector("body")
const lis = document.querySelectorAll(".categorie");
const barCategories = document.querySelector(".barCategories");

// div.addEventListener("click",()=> {
//     bar.classList.toggle("visible");
// })

// main.addEventListener("click",()=> {
//     bar.classList.toggle("visible");
// })

const addEvents = ()=> {
    lis.forEach(li =>li.addEventListener("click", () =>{
        const cat = li.dataset.categorie; 
        console.log(cat)
        switch(cat){
            case "book":
                    showCategories();
                break;
        }

    }));
}
addEvents();


const showCategories = () => {
    barCategories.innerHTML =`
                        <ul>
                        <li><div class="mainMenu">Hauptmenü</div></li>
                        <li><div class="heading">Bücher</div></li>
                        <li class="categorie"><a href="">Alles Bücher</a></li>
                        <li class="categorie"><a href="">Kindle ebooks</a></li>
                        <li class="categorie"><a href="">Fachbücher</a></li>
                        
                        <li><div class="heading">Audible Hörbücher</div></li>
                        <li class="categorie"><a href="">Audible-Abo</a></li>
                        <li class="categorie"><a href="">Alle Audible Hörbücher</a></li>
                        </ul>
                        `;
    funcMain();
    
}

const funcMain = () =>{
    mainMenu = document.querySelector(".mainMenu");
    mainMenu.addEventListener("click", ()=> {
        backToMain();
    })
}


const backToMain = () => {
    barCategories.innerHTML=`<ul>
    <li><div class="heading">Im Trend</div></li>
    <li class="categorie"><a href="">Bestseller</a></li>
    <li class="categorie"><a href="">Nererscheinung</a></li>
    <li class="categorie"><a href="">Aufsteiger des Tages</a></li>

    <li><div class="heading">Digitale Inhalte & Geräte</div></li>
    <li class="categorie"><a href="">Amazon Music</a></li>
    <li class="categorie"><a href="">Prime Video</a></li>
    <li class="categorie"><a href="">Fire TV </a></li>
   
    <li><div class="heading">Alle Kategorien</div></li>
    <li class="categorie" data-categorie="book"><a href="">Bücher</a></li>
    <li class="categorie"><a href="">File, Serien, Musik & Games</a></li>
    <li class="categorie"><a href=""></a>Elektronik & Computer</li>
    <li class="categorie"><a href="">Sport & Freizeit</a></li>
    <li class="categorie"><a href="">Auto, Motorrad & Gewerbe</a></li>



    <li><div class="heading">Programme & Funktionen</div></li>
    <li class="categorie"><a href="">Handmade </a></li>
    <li class="categorie"><a href="">Luxury Store</a></li>
    <li class="categorie"><a href="">Amazon Outlet</a></li>

    <li><div class="heading">Hilfe & Einstellungen</div></li>
    <li class="categorie"><a href="">Mein Konto</a></li>
    <li class="categorie"><a href="">Sprache</a></li>
    <li class="categorie"><a href="">Anmelden</a></li>

    </ul>
    `;
    addEvents();
}

