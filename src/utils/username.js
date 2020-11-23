const ADJECTIVES=['typical',
    'civil',
    'jittery',
    'quack',
    'brief',
    'stingy',
    'witty'
]


const OBJECTS=[
    'fine',
'perfect',
'aromatic',
'half',
'fluffy',
'fragile',
'brainy'
]


function genRandomUsername(){
    const adj=ADJECTIVES[Math.floor(Math.random()*7)];
    const obj=OBJECTS[Math.floor(Math.random()*7)];
    return `${adj}-${obj}`;
}



// console.log(genRandomUsername());
// console.log(genRandomUsername());
// console.log(genRandomUsername());console.log(genRandomUsername());


module.exports={genRandomUsername};