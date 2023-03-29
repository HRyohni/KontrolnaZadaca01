//1 (3 BODA)
//Napisi funkciju koja ispisuje neparne brojeve od 0 do 100
function neparni ()
{
    for (let i = 0; i < 100; i++) {
        if (i%2 !=0)
            console.log(i);   
    }
}
//neparni()

//2 (3 BODA)
//Napisi funkciju koja koristi switch selekciju za pretvaranje numerickog unosa u godisnje u doba. Za neispravan unos ispisi prikladnu poruku.
//INPUT: 1; OUTPUT: "Jesen";
//INPUT: 3; OUTPUT: "Ljeto"; 
function sezona (unos)
{
    switch (unos) {
        case 1:
            console.log("Ljeto");
        break;
            case 2:
            console.log("jesen");
            break;
            case 3:
            console.log("zima");
            break;
            case 4:
            console.log("proljece");
            break;
          
    
        default:
            console.log("nesipravni unos");
            break;
    }
}

// sezona(321);

//3 (4 BODA)
//Napisi funkciju koja okrece uneseni string i broji charactere uzimajuci u obzir prazna mjesta (eng. whitespaces)
//INPUT: "Pisanje zadataka nije jednostavan posao"
//OUTPUT: ("oasop navatsondej ejin akatadaz ejnasiP", 39)
function obrni(rijec)
{
    rijec =rijec.split('');
    
    temp ="";
  for (let e = rijec.length -1; 0 <= e; e--) {
   
  temp += rijec[e];
  }

  console.log(temp , temp.length);
}


//obrni("Pisanje zadataka nije jednostavan posao");


//4 (4 BODA)
//Napisi funkciju koja odreduje najdulju vrijednost  u danom objektu
const peopleYouShouldKnow = {
    Donald: "Knuth",
    Bjarne: "Stroustrup",
    Ada: "Lovelace",
    Kent: "Beck",
    Martin: "Fowler",
    Erich: "Gamma"
}


function naj (people)
{  
    console.log (people["Bjarne"]);  // znam da ne vrijedi
    
}
 
//naj(peopleYouShouldKnow);
//INPUT: peopleYouShouldKnow
//OUTPUT: "Stroustrup"

//5 (4 BODA)
//Napisi funkciju u obliku function expressiona koja vraca neproste brojeve
//INPUT: [3, 4, 5, 8, 11]
//OUTPUT: [4, 5, 8]

//ZAMJENA ZA 5 (4 BODA)
//Napisi funkciju u obliku arrow functiona koja pretvara mala slova danih inputa u velika slova
//INPUT: ["aa", "b1", "", null, "AAA"]
//OUTPUT: ["AA","B1", "", null, "AAA"]
function mala (polje)
{
    temp = [];
    polje.forEach(e => {
       try {
        temp.push(e.toUpperCase());
       } 
       catch (error) {
        temp.push(e);
       }
        
       
    });
    console.log(temp);
}

//mala(["aa", "b1", "", null, "AAA"]);
//6 (4 BODA)
//Napisi funkciju koja vraca sve drzave koji su imali manju temperaturu od one iz ulaznog parametra
const someEvents = [
    {
        stateName: "SAD",
        measuredTemperature: 56.7,
    },
    {
        stateName: "Tunis",
        measuredTemperature: 55,
    },
    {
        stateName: "Irak",
        measuredTemperature: 53.9,
    },
    {
        stateName: "Argentina",
        measuredTemperature: 48.9,
    },
    {
        stateName: "Grcka",
        measuredTemperature: 48.0,
    },
];
//INPUT: (someStates, 48.5)
//OUTPUT: [{stateName: "Grcka", measuredTemperature: 48.0}]


function manja (someEvents,temp)
{
    someEvents.map(a =>{
        if (temp> a.measuredTemperature)
        console.log(a);
    })

}
//manja(someEvents,49);