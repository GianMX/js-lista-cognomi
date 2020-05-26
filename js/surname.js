// VARIABLES SURNAME LIST + REQUEST USER SURNAME
var surname = prompt("Prego, inserisci il tuo cognome")
var listsurname = ['Bianchi','Rossi','Duzioni','Balsano','Verdi']
// Add a new item to an array and order list
listsurname.push(surname);
listsurname.sort();
listsurname.sort(function (a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
});
// UL of surnamme each one as <li>
for (var i = 0; i < listsurname.length; i++) {
  document.getElementById('surname_list').innerHTML += '<li>' + listsurname[i] + '</li>';
}
// Surname position as <li> via indexOf
document.getElementById('surname_position').innerHTML = "Il tuo cognome si trova alla posizione numero &num; " + (listsurname.indexOf(surname)+1);
