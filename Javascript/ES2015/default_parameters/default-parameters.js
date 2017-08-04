'use strict';

// provide a default parameter  
function killEnemy( name ='default_enemy', weapon ='default_weapon' ) {
    console.log(`kill ${name} with a ${weapon}`);
}

killEnemy(); /*kill default_enemy with a default_weapon*/

// parameters with a default value are considered optional.
// So we pass undefined to tell the interpreter to use the default value.
killEnemy(undefined, undefined); /*kill default_enemy with a default_weapon*/

killEnemy('Puyih'); /*kill Puyih with a default_weapon*/

killEnemy(undefined, 'sword'); /*kill default_enemy with a gun*/

killEnemy('Lex', 'toothpick');/*kill Lex with a toothpick*/