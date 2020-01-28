var words = [
  'appel',
  'aldus',
  'afwas',
  'aftel',
  'aarde',
  'armen',
  'actie',
  'apart',
  'adres',
  'avond',
  'aders',
  'alarm',
  'boten',
  'balen',
  'beter',
  'bomen',
  'boren',
  'boven',
  'boxen',
  'brood',
  'broek',
  'brand',
  'breed',
  'benen',
  'beeld',
  'brief',
  'beten',
  'basis',
  'blauw',
  'beren',
  'buren',
  'banen',
  'bloed',
  'broer',
  'blond',
  'boter',
  'beleg',
  'breng',
  'baken',
  'beker',
  'blind',
  'bezig',
  'baden',
  'bedel',
  'bazen',
  'bazin',
  'baren',
  'beden',
  'beken',
  'bezem',
  'baard',
  'bidet',
  'breuk',
  'conus',
  'cello',
  'creme',
  'cloud',
  'cacao',
  'cadet',
  'cavia',
  'ceder',
  'combi',
  'china',
  'clown',
  'draai',
  'deden',
  'dalen',
  'derde',
  'delen',
  'dwaas',
  'daden',
  'dader',
  'dames',
  'diner',
  'datum',
  'dozen',
  'dreun',
  'duits',
  'dagen',
  'deren',
  'dwerg',
  'dwaal',
  'dwing',
  'druil',
  'droog',
  'draad',
  'dweil',
  'drank',
  'duren',
  'dwars',
  'drugs',
  'daten',
  'daler',
  'doorn',
  'disco',
  'degen',
  'droom',
  'dient',
  'drone',
  'dadel',
  'duwen',
  'druif',
  'deken',
  'deler',
  'elven',
  'eigen',
  'enger',
  'engel',
  'elder',
  'enkel',
  'effen',
  'email',
  'egaal',
  'fiets',
  'friet',
  'files',
  'forel',
  'films',
  'feest',
  'fruit',
  'falen',
  'flora',
  'fauna',
  'feeen',
  'freak',
  'forum',
  'fusie',
  'geven',
  'gaven',
  'groen',
  'graai',
  'getal',
  'grens',
  'grond',
  'groef',
  'graal',
  'gewei',
  'games',
  'grote',
  'groet',
  'garen',
  'gebak',
  'graag',
  'genre',
  'glans',
  'geluk',
  'geeuw',
  'horen',
  'heren',
  'halen',
  'hagel',
  'haren',
  'helen',
  'harde',
  'hemel',
  'hoofd',
  'huren',
  'hamer',
  'haken',
  'heden',
  'hotel',
  'hobby',
  'heler',
  'hoger',
  'ieder',
  'index',
  'immer',
  'icoon',
  'inlog',
  'inzet',
  'innig',
  'jovel',
  'jaren',
  'jicht',
  'jabot',
  'jacht',
  'jaden',
  'jagen',
  'jager',
  'japon',
  'jarig',
  'jawel',
  'jeans',
  'jemig',
  'jeugd',
  'joint',
  'jonas',
  'joule',
  'koken',
  'kreet',
  'koker',
  'kerst',
  'kegel',
  'koude',
  'kader',
  'krent',
  'kamer',
  'kaars',
  'kaart',
  'kraan',
  'krant',
  'keren',
  'kruid',
  'kerel',
  'kubus',
  'kraal',
  'kleur',
  'kroon',
  'klein',
  'korst',
  'klopt',
  'kabel',
  'kunst',
  'kopje',
  'krans',
  'klimt',
  'kater',
  'klink',
  'kudde',
  'kruis',
  'lopen',
  'laten',
  'lepel',
  'links',
  'laden',
  'leven',
  'lezen',
  'lucht',
  'lenen',
  'laser',
  'lente',
  'licht',
  'lader',
  'leder',
  'lunch',
  'lijst',
  'leger',
  'leden',
  'legen',
  'lagen',
  'lezer',
  'lever',
  'lingo',
  'loper',
  'luier',
  'lager',
  'leeuw',
  'maand',
  'malen',
  'maken',
  'media',
  'meter',
  'motor',
  'maten',
  'markt',
  'mazen',
  'molen',
  'meest',
  'meren',
  'model',
  'meden',
  'maden',
  'macht',
  'meeuw',
  'mager',
  'magen',
  'maren',
  'manen',
  'noord',
  'nieuw',
  'negen',
  'namen',
  'neven',
  'nodig',
  'naden',
  'neder',
  'nemen',
  'onder',
  'optel',
  'ovaal',
  'ovale',
  'onwel',
  'optie',
  'orden',
  'oppas',
  'ouder',
  'ophef',
  'oases',
  'palen',
  'plein',
  'pegel',
  'paars',
  'prijs',
  'piano',
  'pixel',
  'paden',
  'pasta',
  'pizza',
  'poten',
  'paard',
  'puber',
  'pauze',
  'preek',
  'polis',
  'pater',
  'proef',
  'panda',
  'penis',
  'prins',
  'pluto',
  'polen',
  'plint',
  'quota',
  'quant',
  'quark',
  'queue',
  'quilt',
  'quote',
  'robot',
  'reken',
  'raden',
  'regen',
  'radio',
  'rente',
  'regio',
  'rugby',
  'reden',
  'roken',
  'ruzie',
  'ruist',
  'regel',
  'racen',
  'races',
  'riool',
  'ramen',
  'radar',
  'roman',
  'rokje',
  'razen',
  'roede',
  'staan',
  'staal',
  'speel',
  'steeg',
  'stoel',
  'stook',
  'steek',
  'schep',
  'spijs',
  'stoep',
  'shirt',
  'samen',
  'sites',
  'sport',
  'spalk',
  'sjaal',
  'storm',
  'staat',
  'steun',
  'strak',
  'serie',
  'shows',
  'schat',
  'snoep',
  'sfeer',
  'smeer',
  'speer',
  'scene',
  'speld',
  'smeed',
  'smaak',
  'super',
  'stand',
  'steer',
  'smelt',
  'sedan',
  'skier',
  'sluis',
  'sneer',
  'steel',
  'truck',
  'terug',
  'typen',
  'talen',
  'taboe',
  'tegel',
  'taart',
  'tafel',
  'trouw',
  'teken',
  'teren',
  'taken',
  'treur',
  'tenen',
  'titel',
  'thuis',
  'tiara',
  'teder',
  'toets',
  'tabak',
  'trein',
  'tarwe',
  'telen',
  'teler',
  'uiten',
  'uilig',
  'uitje',
  'uiver',
  'ultra',
  'uniek',
  'uppie',
  'uraan',
  'uiers',
  'velen',
  'vloer',
  'video',
  'varen',
  'vegen',
  'veren',
  'vader',
  'vaten',
  'vuren',
  'vrouw',
  'vlees',
  'vogel',
  'vroeg',
  'vezel',
  'veins',
  'vorst',
  'veder',
  'vanaf',
  'vieze',
  'veger',
  'villa',
  'veler',
  'vrede',
  'vries',
  'woord',
  'wagen',
  'wonen',
  'waren',
  'warme',
  'weten',
  'water',
  'weren',
  'wazig',
  'wegen',
  'weven',
  'wezen',
  'weken',
  'wraak',
  'wilde',
  'wreed',
  'wrede',
  'wenst',
  'woest',
  'xenon',
  'yacht',
  'yucca',
  'zwaar',
  'zware',
  'zesde',
  'zagen',
  'zalig',
  'zomer',
  'zeden',
  'zwart',
  'zeven',
  'zicht',
  'zadel',
  'zweet',
  'zenuw',
  'zweer',
  'zweef',
  'zaden',
  'zaken',
  'zeker',
  'zever',
  'zeeen'
];

let randomword = words[Math.floor(Math.random() * words.length)]; //random word pakken
//lets aanmaken
let body = document.body;
let vak = document.createElement('div');
let witvak = document.createElement('div');
let word = document.createElement('div');
let checkletter = document.createElement('div');
let inputword = document.createElement('input');
let inputcheck = document.createElement('input');
let checkbutton = document.createElement('button');
let pogingen = 0;
let gedoe = [];

//dingen aanroepen
body.appendChild(vak);
body.appendChild(witvak);
vak.appendChild(inputcheck);
vak.appendChild(checkletter);
vak.appendChild(checkbutton);
//heel veel opmaak
//#region
body.style.backgroundColor = 'grey';
vak.style.backgroundColor = '#191818';

vak.style.marginLeft = '412px';
vak.style.width = '600px';
vak.style.height = '240px';

vak.style.display = 'inline-grid';
vak.style.gridTemplateColumns = '200px 200px 200px';
vak.style.gridTemplateRows = '80px 80px 80px';

witvak.style.backgroundColor = 'white';
witvak.style.display = 'table';
witvak.style.marginLeft = '412px';
witvak.style.marginTop = '-5px';
witvak.style.width = '600px';
witvak.style.height = '500px';
//125

witvak.style.display = 'grid';
witvak.style.gridTemplateColumns = 'repeat(5, auto)';
witvak.style.gridTemplateRows = 'repeat(5, auto)';
witvak.style.gridColumn = '1/6';

checkletter.innerHTML = 'Check letter';
checkletter.style.color = 'white';

checkletter.style.gridColumn = '1/2';
checkletter.style.gridRow = '2/3';

inputcheck.style.gridRow = '2/3';
inputcheck.style.gridColumn = '2/3';

checkletter.style.marginTop = '30px';
checkletter.style.marginLeft = '20px';

inputcheck.style.height = '20px';
inputcheck.style.marginTop = '30px';

checkbutton.style.gridColumn = '2/3';
checkbutton.style.gridRow = '3/4';

checkbutton.innerHTML = 'CHECK';
checkbutton.style.height = '30px';
checkbutton.style.width = '80px';
checkbutton.style.marginLeft = '60px';
//#endregion

//
//hokjes aanmaken
for (y = 1; y <= 5; y++) {
  //rijen aanmaken 1/5

  for (i = 1; i <= 5; i++) {
    //hokjes aanmaken 1/5
    let block = document.createElement('div');
    block.innerHTML = i;
    block.id = 'block-r' + y + '-c' + i; // Id geven per rij en collumn
    witvak.appendChild(block); // aanroepen
    block.style.border = 'solid black 2px';
    block.style.marginLeft = '2px';
    block.style.padding = '20px';
    block.style.marginTop = '20px';
    checkbutton.style.marginTop = '30px';
    block.style.gridColumn = i;
    block.style.textAlign = 'center';
    gedoe.push(block); // item toevoegen
  }
}

checkbutton.onclick = function() {
  checkword();
};

console.log(randomword); //antwoord
function checkword() {
  let checktyp = inputcheck.value; //input
  let wordtyp = randomword;
  if (pogingen < 6) {
    if (checktyp.length == 5) {
      pogingen++;
      console.log(pogingen);
      word1 = wordtyp.split('');
      word2 = checktyp.split('');
      for (i = 0; i < 5; i++) {
        let block = document.getElementById(
          'block-r' + pogingen + '-c' + (i + 1)
        );
        block.innerHTML = word2[i];
        if (word1[i] == word2[i]) {
          block.style.backgroundColor = 'green';
          word1[i] = null;
          word2[i] = null; //zet
          block.style.padding = '20px';
          block.style.borderRadius = '0px 0px 0px 0px ';
        } else {
          block.style.backgroundColor = 'red';
          block.style.padding = '20px';
          block.style.borderRadius = '0px 0px 0px 0px ';
        }
      }
      for (x = 0; x < 5; x++) {
        let block = document.getElementById(
          'block-r' + pogingen + '-c' + (x + 1)
        );
        let pos = word1.indexOf(word2[x]);
        if (word2[x] != null && pos > -1) {
          block.style.backgroundColor = 'yellow';
          block.style.borderRadius = '100px 100px 100px 100px ';
          word1[pos] = null;
          word2[x] = null;
          console.log(word1);
        }
      }
      for (y = 1; y <= 5; y++) {
        gedoe.shift();
      }
      if (wordtyp == checktyp) {
        alert('Je wint');

        checkbutton.onclick = function() {
          reload();
        };
        checkbutton.innerHTML = 'reload';
        function reload() {
          location.reload();
        }
        pogingen = 5;
      } else {
        if (pogingen == 5) {
          alert('Het goede woord was ' + wordtyp);
          checkbutton.onclick = function() {
            reload();
          };
          checkbutton.innerHTML = 'reload';
          function reload() {
            location.reload();
          }
        }
      }
    }
  }
}
