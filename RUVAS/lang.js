<<<<<<< HEAD
let langs = {
    "us": `<div id="doc">
        <div class="darkglass">
            <div class="flags">
                <img src="./img/us.jpg" alt="English" id="us" style="border:4px solid #f60">
                <img src="./img/ua.png" alt="Ukrainian" id="ua" style="border:0">
                <img src="./img/ru.png" alt="Russian" id="ru" style="border:0">
            </div>
            <div class="name">
                
                <h1>RUSLAN VASILIEV</h1>
            </div>
            <!--<div class="divider">
    
            </div>-->
            <div class="about mob">

                <h3><span id='probably'>Probably,</span> best contractor in Chicago and area
                </h3>
                <a href="tel:+12243924953">+1 224 392 4953</a>
            </div>
        </div>
        <!-- <div class="gapSpace"></div> -->
        <div class="darkglass mid">
            <div class="about">
                <h3>Istallation, repair and maintainance:
                <ul>
                    <li>plumbing
                        <p>piping, instalation of any appliances, etc</p></li>
                    <li>electricity
                        <p>(re-)installation and maintainance of sockets, switches, kitchen appliances</p></li>
                    <li>vents
                        <p>maintainance and repair</p></li>
                    
                </ul>
                </h3>
            </div>
            <div class="divider"></div>
            <div class="about">
                <h3>Surfacing:
                <ul>
                    <li><p>flooring, walls, etc</p></li>
                    <li>wall plastering<p></p></li>
                    <li>painting <p>of floor, ceiling, <br>walls (both outside and outside)<br> и прочего</p></li>
                    <li>tiling, brick laying</li>
                </ul></h3>
            </div>
            <div class="divider"></div>
            <div class="about">
                <h3>Furniture assembly/repair
                    <p>kitchen, bedroom, wardrobe, etc</p>
                Doors and windows<br>
                    <p>installation and replacement</p>
                Also backyard area, landscape and more</h3>
            </div>
        </div>
        <div class="darkglass narrow bottom">
            <a class="call button" href="tel:+12243924953">Call NOW!</a>
            <a class="gallery button" href="#" onClick="galleryAlert()"><span>Gallery</span></a>
        </div> 
    </div>`,
    "ua": `<div id="doc">
        <div class="darkglass">
            <div class="flags">
            <img src="./img/us.jpg" alt="English" id="us"  style="border:0">
            <img src="./img/ua.png" alt="Ukrainian" id="ua" style="border:4px solid #f60">
            <img src="./img/ru.png" alt="Russian" id="ru" style="border:0">
            </div>
            <div class="name">
                
                <h1>RUSLAN VASILIEV</h1>
            </div>
            <!--<div class="divider">
    
            </div>-->
            <div class="about mob">

                <h3><span id='probably'>Схоже,</span> кращий контрактор у всьому Чикаго та поблизу
                </h3>
                <a href="tel:+12243924953">+1 224 392 4953</a>
            </div>
        </div>
        <!-- <div class="gapSpace"></div> -->
        <div class="darkglass mid">
            <div class="about">
                <h3>Встановлення, ремонт та обслуговування:
                <ul>
                    <li>сантехніки
                        <p>від прокладки труб до інсталяції ванн</p></li>
                    <li>електрики
                        <p>ремонт/заміна розеток, вимикачів, 
                        монтаж електроустаткування</p></li>
                    <li>вентсистем
                        <p>установка и ремонт витяжoк</p></li>
                    
                </ul>
                </h3>
            </div>
            <div class="divider"></div>
            <div class="about">
                <h3>Робота з поверхнями:
                <ul>
                    <li>монтаж <p>підлоги, стін, тощо</p></li>
                    <li>штукатурка<p></p></li>
                    <li>фарбування <p>підлоги, стелі,<br>стін (як всередині, так і ззовні)<br> та ін.</p></li>
                    <li>укладка плитки, цегли</li>
                </ul></h3>
            </div>
            <div class="divider"></div>
            <div class="about">
                <h3>Монтаж та ремонт мебелів:
                    <p>кухнІ, спальни,
                    дитячі, гардероби</p>
                Двері та вікна<br>
                    <p>установка та заміна</p>
                А також зовнішні роботи, 
                ландшафтні роботи та багато іншого</h3>
            </div>
        </div>
        <div class="darkglass narrow bottom">
            <a class="call button" href="tel:+12243924953">Зателефонувати</a>
            <a class="gallery button" href="#" onClick="galleryAlert()"><span>Галерея</span></a>
        </div> 
    </div>`,
    "ru": `<div id="doc">
        <div class="darkglass">
            <div class="flags">
            <img src="./img/us.jpg" alt="English" id="us" style="border:0">
            <img src="./img/ua.png" alt="Ukrainian" id="ua" style="border:0" >
            <img src="./img/ru.png" alt="Russian" id="ru" style="border:4px solid #f60">
            </div>
            <div class="name">
                
                <h1>RUSLAN VASILIEV</h1>
            </div>
            <!--<div class="divider">
    
            </div>-->
            <div class="about mob">
=======
const langs = {
    "name": {
        "en": "RUSLAN VASILIEV",
        "ua": "РУСЛАН ВАСІЛЬ'ЄВ",
        "ru": "РУСЛАН ВАСИЛЬЕВ"
    },
    "description": {
        "en": "best contractor of Chicago and area",
        "ua": "кращий контрактор у Чикаго та околицях",
        "ru": "лучший контрактор в Чикаго и окрестностях"
    },
    "probably": {
        "en": "Probably",
        "ua": "Можливо",
        "ru": "Возможно"
    },
    "lng-sct1": {
        "en": "",
        "ua": "",
        "ru": "<h3>Установка,<br>ремонт и<br>обслуживание:<br>
        <ul>
            <li>сантехники<br>
                <p>от прокладки труб до установки ванн</p></li>
            <li>электрики<br>
                <p>ремонт/замена розеток, выключателей,<br>
                установка электроприборов</p></li>
            <li>вентсистем<br>
                <p>установка и ремонт вытяжек</p></li>
            
        </ul>
        </h3>"
    },
    "lng-sct2": {
        "en": "",
        "ua": "",
        "ru": ""
    },
    "lng-sct3": {
        "en": "",
        "ua": "",
        "ru": ""
    },


>>>>>>> parent of fbde547 (lang switch js done)


=======
const langs = {
    "name": {
        "en": "RUSLAN VASILIEV",
        "ua": "РУСЛАН ВАСІЛЬ'ЄВ",
        "ru": "РУСЛАН ВАСИЛЬЕВ"
    },
    "description": {
        "en": "best contractor of Chicago and area",
        "ua": "кращий контрактор у Чикаго та околицях",
        "ru": "лучший контрактор в Чикаго и окрестностях"
    },
    "probably": {
        "en": "Probably",
        "ua": "Можливо",
        "ru": "Возможно"
    },
    "lng-sct1": {
        "en": "",
        "ua": "",
        "ru": "<h3>Установка,<br>ремонт и<br>обслуживание:<br>
        <ul>
            <li>сантехники<br>
                <p>от прокладки труб до установки ванн</p></li>
            <li>электрики<br>
                <p>ремонт/замена розеток, выключателей,<br>
                установка электроприборов</p></li>
            <li>вентсистем<br>
                <p>установка и ремонт вытяжек</p></li>
            
        </ul>
        </h3>"
    },
    "lng-sct2": {
        "en": "",
        "ua": "",
        "ru": ""
    },
    "lng-sct3": {
        "en": "",
        "ua": "",
        "ru": ""
    },




>>>>>>> parent of fbde547 (lang switch js done)











    "unit": {
        "en": "",
        "ua": "",
        "ru": ""
    },
}