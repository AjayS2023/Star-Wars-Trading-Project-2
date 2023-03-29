const {v4: uuidv4} = require('uuid');

const trades = [
    {
        id: '1',
        name: 'Anakin Skywalker Lightsaber',
        category: 'prequel',
        owner: 'Ajay',
        details: "This blue lightsaber is a replica of Anakin Skywalker's faithful blade. " +
        "Ferocious and deadly, this blade has destroyed Count Dooku and helped the Republic win many wars.",
        status: 'New',
        image: '/images/items/Anakin-lightsaber.jpg'
    },
    {
        id: '2', 
        name: 'Obi-Wan Kenobi vs. Anakin Skywalker Poster',
        category: 'prequel',
        owner: "StarWARS_Fan66" , 
        details: 'This is a poster of former brothers fighting each other on the fiery planet world of Mustafar. This battle will determine the fate of the galaxy itself.',
        status: 'New',
        image: '/images/items/duel-poster.jpg'
    },
    {
        id: '3',
        name: 'LEGO Star Wars Clone AT-TE Walker',
        category: 'prequel',
        owner: 'LEGOFan2023',
        details: 'This is a LEGO set of an AT-TE walker used by the clones during the Clone Wars. It was mainly used for ground missions.',
        status: 'Used',
        image: '/images/items/LEGO at-te.png'
    },
    {
        id: '4',
        name: 'Phase 2 Clone Trooper Helmet',
        category: 'prequel',
        owner: 'CloneFan',
        details: 'This is a clone trooper helmet from phase 2 of the clone wars. It provides a more sleek design in comparison to phase 1 helmets but provides slightly less protection.',
        status: 'Used',
        image: '/images/items/clone-helmet.jpg'
    },
    {
        id: '5',
        name: 'Darth Vader Action Figure',
        category: 'original',
        owner: 'Palpy66',
        details: 'This is an action figure of Darth Vader choking a Rebel soldier. His power is to be feared.',
        status: 'Used',
        image: '/images/items/vader-action-figure.jpg'
    },
    {
        id: '6', 
        name: 'LEGO Second Death Star',
        category: 'original',
        owner: 'HelloThereKenobi',
        details: 'This is a lego model of the second Death Star which can be used to destory entire planets.',
        status: 'New',
        image: '/images/items/LEGO death-star.jpg'
    },
    {
        id: '7',
        name: 'Stormtrooper Armor',
        category: 'original',
        owner: 'CT-7567',
        details: 'This is the armor of a stormtrooper, the soldiers of the mighty Galactic Empire. They are the fist of the Empire and will destroy their foes.',
        status: 'Used',
        image: '/images/items/stormtrooper-armor.jpg'
    },
    {
        id: '8',
        name: 'Stuffed Ewok',
        category: 'original',
        owner: 'Kenobi&Skywalker',
        details: 'This is a stuffed ewok, a copy of the Ewok creature which made appearances in Episode 6: Return of the Jedi.',
        status: 'Used',
        image: '/images/items/ewok.jpg'
    },
    {
        id: '9',
        name: 'Kylo Ren Action Figure',
        category: 'sequel',
        owner: 'SoloFan',
        details: 'This is an action figure of Kylo Ren, the Sith apprentice to Supreme Leader Snoke and former Jedi Ben Solo.',
        status: 'Used',
        image: '/images/items/kylo-ren.jpeg'
    },
    {
        id: '10',
        name: 'Captain Phasma Armor',
        category: 'sequel',
        owner: 'SarcasticJedi',
        details: 'This is the armor of Captain Phasma, the battle-hardened solider of the First Order. She leads a battalion and is sure to discipline the troops under her command.',
        status: 'New',
        image: '/images/items/phasma.webp'
    },
    {
        id: '11',
        name: 'Supreme Leader Snoke statue',
        category: 'sequel',
        owner: 'Snoke',
        details: 'This is a statue of Snoke sitting on his throne room as shown in Episode 8: The Last Jedi as he plots on how to change the fate of the galaxy.',
        status: 'New',
        image: '/images/items/snoke.jpg'  
    },
    {
        id: '12',
        name: 'Rey vs. Kylo Ren poster',
        category: 'sequel',
        owner: 'Rylo',
        details: 'This is a poster of Rey vs. Kylo Ren in Rise of Skywalker in their duel.',
        status: 'New',
        image: '/images/items/force dyad.jpg'
    }
];

exports.find = ()  =>{
    return trades;
};

exports.findById = function(id){
    return trades.find(trade => trade.id === id);
};

exports.save = function(trade){
    trade.id = uuidv4();
    trades.push(trade);
}

exports.updateById = function(id, newTrade){
    let trade = trades.find(trade => trade.id === id);
    if(trade){
        trade.name = newTrade.name;
        trade.category = newTrade.category;
        trade.owner = newTrade.owner;
        trade.details = newTrade.details;
        trade.status = newTrade.status;
        trade.image = newTrade.image;
        return true;
    } else {
        return false;
    }
};

exports.deleteById = function(id){
    let index = trades.findIndex(trade => trade.id === id);
    if(index != -1){
        trades.splice(index, 1);
        return true;
    } else {
        return false;
    }
}