/*jshint esversion: 6 */ 
import { users } from './util.js';

// TODO: Hent HTML #id med getElementById
const userUl = document.getElementById('users');
const searchField = document.getElementById('name');
const ageInput = document.getElementById('age');
const filterButton = document.getElementById('filter');

const createTableUI = (users) => {
    userUl.innerHTML = null;
    userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
    // TODO: bruk for-of eller vanlig for-løkke og tempelate literals `` til å skrive ut listen med brukere
    for (const user of users){
        userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
    }
  };
  
  const handleSearch = () => {
    // TODO: Hent ut verdien fra søke input feltet
    const searchName = searchField.value;
    // TODO: Sjekk om searchName ekisterer
    if (searchName) {
      // TODO: Bruk .find for å finne navnet til den brukeren som matcher søkeordet
      const searchResult = users.find((user) => user.name.toLowerCase() === searchName.toLowerCase());
      // TODO: Sjekk som resultatet eksisterer
      if (searchResult) {
        // TODO: Oppdatere grensesnittet med createTableUI og resultatet av søket
        createTableUI([searchResult]);
      } else {
        // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe
        userUl.innerHTML = `"fant ikke matchende navn"`;
      }
    } else {
      // TODO: Hvis ingen søkeord vis default liste med brukere via createTableUI
      userUl.createTableUI();
    }
  };
  
  const handleFilter = () => {
    // TODO: Hent ut verdien fra filter input feltet
    const filterValue = ageInput.value;
    // TODO: Sjekk om filterVerdien ekisterer og er et tall
    if (filterValue && Number(filterValue)) {
      // TODO: Bruk .filter for å hente ut de brukeren  som har en alder høyere en filterverdien
      const filterResult = users.filter((user) => user.age > filterValue);
      // TODO: Sjekk om det er noe resultat og at legnden er større enn null
      if (filterResult && filterResult.length > 0) {
        // TODO: Oppdatere grensesnittet med createTableUI og resultatet av filteret
        createTableUI(filterResult);
      } else {
        // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe
        userUl.innerHTML = `"fant ikke matchende alder"`;
      }
    } else {
      // TODO: Hvis ingen filter eller filteret ikke er et tall vis default liste med brukere via createTableUI
      userUl.createTableUI();
    }
  };
  
  const main = () => {
    createTableUI(users);
  };
  
  main();
  
  // TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
  searchField.addEventListener('keyup', handleSearch);

  // TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
  filterButton.addEventListener('click', handleFilter);

  //LINKS USED
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  //https://github.com/olavsdtr/JS_CC_Oppgaver/blob/main/Oppgave_02/src/litt_hjelp.js