import axios from "axios";

const cardJsonData = await axios.get("https://data.scryfall.io/default-cards/default-cards-20230522210953.json").then(res => res.data);

/*
pulls unique sets from the json data
 */
function getSets(inputData) {
    const cardSets = new Set();
    for (const cardData of inputData) {
        cardSets.add(cardData.set_name);
    }
    console.log(cardSets);
}
// getSets(cardJsonData);

/*
stips down the card objects to only what is required
 */
function createSimpleCardObject(inputData) {
    const simpleCardDataMap = new Map();
    for (const cardData of inputData) {
        simpleCardDataMap.set(cardData.id , [ cardData.set_name, cardData.collector_number, cardData.scryfall_uri, cardData.rarity, cardData.type_line ]);
    }
    console.log(simpleCardDataMap);
}

// createSimpleCardObject(cardJsonData);
/*
createSimpleCardObject sample output:


'4a82b032-b1ba-456c-abab-c0f7430b0587' => [
    'Strixhaven: School of Mages',
    '121',
    'https://scryfall.com/card/stx/121/bayou-groff?utm_source=api',
    'common',
    'Creature — Plant Dog'
],
    '4a8337ac-fddc-4af7-a623-e9a8c8323564' => [
    'Classic Sixth Edition',
    '119',
    'https://scryfall.com/card/6ed/119/coercion?utm_source=api',
    'common',
    'Sorcery'
]

Key:value where key is the scryfall card id and the value is an array of the 5 card attributes

*/
