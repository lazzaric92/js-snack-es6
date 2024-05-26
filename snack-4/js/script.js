//todo:Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const footballTeams = [
    {
        teamName: 'Juventus',
        points: 0,
        foulsReceived: 0
    },
    {
        teamName: 'Inter',
        points: 0,
        foulsReceived: 0
    },
    {
        teamName: 'Milan',
        points: 0,
        foulsReceived: 0
    },
    {
        teamName: 'Atalanta',
        points: 0,
        foulsReceived: 0
    },
    {
        teamName: 'Roma',
        points: 0,
        foulsReceived: 0
    },
    {
        teamName: 'Lazio',
        points: 0,
        foulsReceived: 0
    },
    {
        teamName: 'Napoli',
        points: 0,
        foulsReceived: 0
    },
    {
        teamName: 'Torino',
        points: 0,
        foulsReceived: 0
    },
    {
        teamName: 'Bologna',
        points: 0,
        foulsReceived: 0
    },
    {
        teamName: 'Fiorentina',
        points: 0,
        foulsReceived: 0
    }
]





function getRandomIntNumber(min, max){
    return Math.floor((Math.random() * (max - min) + 1) + min);
}