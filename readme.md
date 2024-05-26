! SNACK 1
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
Ma  la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto letterale javascript che ha come proprietà:
- nome del tavolo (tableName),
- nome dell'ospite (guestName),
- posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto.

// Creo l'array guests con gli oggetti letterali con le proprietà richieste.
    Stampo la lista degli invitati con il forEach.


! SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
- Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo, ad esempio (Marco della Rovere => MARCO DELLA ROVERE);
- Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
- Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

Id  Name                Grades
213 Giuseppina della Rovere 78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84

// Creo l'array students con gli oggetti letterali con le proprietà riportate.
    Mappo l'array per crearne un altro (1) con solo i nomi in maiuscolo.
    Filtro l'array per crearne un altro (2) con gli sudenti con il totale di voti > 70.
    Filtro l'array (2) per crearne un altro (3) con gli studenti con id > 120.


! SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal

// Creo l'array di oggetti
    Trovo l'oggetto con il peso minore e lo assegno a una costante con la destrutturazione
    Stampo in console con template literal


! SNACK 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Creo l'array di oggetti, con le due proprietà pari a 0
    Creo una funzione per generare dei numeri random
    Riassegno le proprietà pari a 0 invocando la funzione
    Creo il nuovo array con la destrutturazione


! BONUS 1: SNACK 5
Abbiamo questa lista di articoli di moda:

name        type      color
Poppy       tshirt    red
Jumping     occhiali  blue
CrissCross  scarpe    black
Jenny       borsa     pink

Questi articoli sono inseriti in un array di oggetti.
Dobbiamo attaccare a ognuno un cartellino position con una lettera dell'alfabeto generata casualmente e inserire gli oggetti così modificati in un nuovo array di oggetti.

// Creo l'array di oggetti
    Con la destrutturazione creo i nuovi oggetti (con la proprietà position) da inserire nel nuovo array
BONUS 2
Stampare in pagina oltre che in console!