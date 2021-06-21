let cards = [
    {
        card: 7777,
        money: 10000
    },
    {
        card: 1234,
        money: 30000
    },
    {
        card: 4444,
        money: 20000
    },
]

let people = [
    {
        name: 'Barbara',
        card_user: 4444
    },
    {
        name: 'Alex',
        card_user: 7777
    },
]

for(let person of people) {
    for(let item of cards) {
        if(item.card == person.card_user) {
            console.log(person.name, item.money)
        } else console.log('Карта не ваша, идите домой')
    }
}
