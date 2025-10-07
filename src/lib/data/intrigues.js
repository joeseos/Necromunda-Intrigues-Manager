export const intrigues = [
  {
    id: 'ace-diamonds',
    suit: 'diamonds',
    value: 'ACE',
    name: 'WRECK THE PLACE',
    category: 'Outlaw',
    alignmentTest: 'D6',
    reward: '+1 Reputation',
    criteria: 'If any of your fighters can reach your opponent\'s deployment zone, they may perform the Vandalise (Basic) action. Each time this action is performed, make a note. If this action is performed twice, your gang can claim this Intrigue.',
    notes: 'If your opponent\'s deployment zone does not follow the standard rules for deployment, you may discard this Intrigue and draw another.'
  },
  {
    id: '2-diamonds',
    suit: 'diamonds',
    value: '2',
    name: 'SEED THE REBELLION',
    category: 'Outlaw',
    alignmentTest: 'D6',
    reward: '+1 Reputation',
    criteria: 'If any of your fighters can reach your opponent\'s deployment zone, they may perform the Graffiti (Basic) action. Each time this action is performed, make a note. If this action is performed twice, your gang has claimed this Intrigue. If this action is performed four times, your gang can claim this Intrigue and is rewarded with +2 Reputation, rather than the usual +1.',
    notes: 'If your opponent\'s deployment zone does not follow the standard rules for deployment, you may discard this Intrigue and draw another.'
  },
  {
    id: '3-diamonds',
    suit: 'diamonds',
    value: '3',
    name: 'BURN IT DOWN!',
    category: 'Outlaw',
    alignmentTest: '2D6',
    reward: '+2 Reputation',
    criteria: 'If any of your fighters can reach your opponent\'s deployment zone, they may perform the Start Fire (Basic) action. Place a Blaze token in base-to-base contact with the fighter. From the start of the next round, any fighter that moves within 3" of the Blaze token takes an automatic Strength 3, AP -, Damage 1 hit. If this action is performed twice, your gang can claim this Intrigue. If this action is performed four times, your gang can claim this Intrigue and is rewarded with +3 Reputation, rather than the usual +2.'
  },
  {
    id: '4-diamonds',
    suit: 'diamonds',
    value: '4',
    name: 'BLOW IT UP!',
    category: 'Outlaw',
    alignmentTest: '3D6',
    reward: '+4 Reputation',
    criteria: 'Choose a fighter on your crew to be the bomb carrier. This fighter can perform the Plant Bomb (Double) action. If the bomb carrier completes this action once whilst within 6" of the centre of the battlefield then the bomb has been planted. At the end of the battle, the bomb explodes and your gang can claim this Intrigue. Any fighters within 6" of the centre of the battlefield at the end of the battle are taken Out of Action. Should the bomb carrier be taken Out of Action before planting the bomb, the model is replaced by a frag trap booby trap.'
  },
  {
    id: '5-diamonds',
    suit: 'diamonds',
    value: '5',
    name: 'MAKE THEM BLEED!',
    category: 'Outlaw',
    alignmentTest: '2D6',
    reward: '+4 Reputation, opponent loses -2 Reputation',
    criteria: 'If, at the end of the battle, your gang has taken the enemy gang\'s Leader and all of their Champions that took part in this battle Out of Action, your gang can claim this Intrigue.'
  },
  {
    id: '6-diamonds',
    suit: 'diamonds',
    value: '6',
    name: 'CLEAR THE SMUGGLING ROUTES',
    category: 'Outlaw',
    alignmentTest: '2D6',
    reward: '200 credits',
    criteria: 'If, at the end of the battle, no enemy fighters are within their own deployment zone, your gang can claim this Intrigue.'
  },
  {
    id: '7-diamonds',
    suit: 'diamonds',
    value: '7',
    name: 'COLLECT A DEBT',
    category: 'Outlaw',
    alignmentTest: 'D6',
    reward: '100 credits',
    criteria: 'When one of your fighters is Engaged with an enemy fighter, instead of performing a Fight (Basic) action, they may perform the Shakedown (Double) action. If this action is performed once, your gang can claim this Intrigue.'
  },
  {
    id: '8-diamonds',
    suit: 'diamonds',
    value: '8',
    name: 'REVEAL THE IMPOSTER',
    category: 'Outlaw',
    alignmentTest: '2D6',
    reward: '150 credits',
    criteria: 'At the start of the third round of the battle, after rolling for Priority but before Readying fighters, one randomly determined fighter from your crew (not a Leader or Champion) is revealed as an imposter and counts as part of the opponent\'s gang for the remainder of the battle. If one of your fighters manages to take the imposter Out of Action after they have been revealed, your gang can claim this Intrigue. If the imposter is taken Out of Action, no Lasting Injury roll is made for the fighter replaced, as they never really took part in the battle.'
  },
  {
    id: '9-diamonds',
    suit: 'diamonds',
    value: '9',
    name: 'STAND ALONE',
    category: 'Outlaw',
    alignmentTest: '2D6',
    reward: '+3 Reputation, and the chosen fighter gains the Fearsome skill',
    criteria: 'Choose one friendly Leader or Champion that is taking part in the battle. For the remainder of the battle, they cannot make group activations. However, if the chosen fighter takes three enemy fighters Out of Action by the end of the battle, and has not been taken Out of Action themselves, your gang can claim this Intrigue.'
  },
  {
    id: '10-diamonds',
    suit: 'diamonds',
    value: '10',
    name: 'HIT THE STIMMS',
    category: 'Outlaw',
    alignmentTest: '3D6',
    reward: 'For the remainder of this battle, your fighters ignore the effects of Flesh Wounds',
    criteria: 'By simply announcing your gang will use this Intrigue during the Ready Fighters step of any Priority phase, your gang can claim this Intrigue.'
  },
  {
    id: 'jack-diamonds',
    suit: 'diamonds',
    value: 'J',
    name: 'RESURRECT THE DEAD',
    category: 'Outlaw',
    alignmentTest: '4D6',
    reward: 'Return one dead fighter (-1 Toughness, gains Fearsome)',
    criteria: 'By simply announcing that your gang has completed this Intrigue during the Wrap-up step of the post-battle sequence, your gang can claim this Intrigue.'
  },
  {
    id: 'queen-diamonds',
    suit: 'diamonds',
    value: 'Q',
    name: 'RUN WITH THE GHASTS',
    category: 'Outlaw',
    alignmentTest: '2D6',
    reward: '3 crew members take Ghast, gain D6+1 Ghast doses',
    criteria: 'By simply announcing your gang will use this Intrigue during the Ready Fighters step of any Priority phase, your gang can claim this Intrigue.'
  },
  {
    id: 'king-diamonds',
    suit: 'diamonds',
    value: 'K',
    name: 'CORRUPT THE MACHINE',
    category: 'Outlaw',
    alignmentTest: '2D6',
    reward: '150 credits',
    criteria: 'Choose three terrain features and/or door consoles at least 6" from your deployment zone and at least 8" from each other. Any Standing and Active fighter from your gang that is within 1" of one of the chosen features may perform the Hacking (Double) action. Make an Intelligence check for the fighter. If the check is passed, they have successfully planted the code. If the code is planted three times, your gang can claim this Intrigue.'
  },
  {
    id: 'ace-spades',
    suit: 'spades',
    value: 'ACE',
    name: 'STITCH THEM UP!',
    category: 'Law Abiding',
    alignmentTest: '2D6',
    reward: '100 credits',
    criteria: 'If one of your Standing fighters is within 1" of a Seriously Injured enemy fighter, instead of performing a Coup De Grace (Simple) action, they may perform the Plant Evidence (Basic) action. Each time this action is performed, make a note. If this action is performed twice, your gang can claim this Intrigue.'
  },
  {
    id: '2-spades',
    suit: 'spades',
    value: '2',
    name: 'THE PRICE OF PEACE',
    category: 'Law Abiding',
    alignmentTest: 'D6',
    reward: '+4 Reputation',
    criteria: 'During the Ready Fighters step of any Priority phase, offer your opponent a bribe of 250 credits. If your opponent accepts, they immediately forfeit the battle to your gang and your gang claims this Intrigue.'
  },
  {
    id: '3-spades',
    suit: 'spades',
    value: '3',
    name: 'MINIMUM FORCE',
    category: 'Law Abiding',
    alignmentTest: '2D6',
    reward: '+2 Reputation',
    criteria: 'To claim this Intrigue, your gang must take three enemy fighters Out of Action in close combat, using a weapon with the Melee trait.'
  },
  {
    id: '4-spades',
    suit: 'spades',
    value: '4',
    name: 'HOLD THE LINE',
    category: 'Law Abiding',
    alignmentTest: '2D6',
    reward: '+2 Reputation OR claim a single unclaimed Racket',
    criteria: 'Nominate a terrain feature at least 12" from your deployment zone. If, at the end of the battle, there are no enemy fighters within 6" of that terrain feature, your gang can claim this Intrigue.'
  },
  {
    id: '5-spades',
    suit: 'spades',
    value: '5',
    name: 'SHOW OF FORCE',
    category: 'Law Abiding',
    alignmentTest: '2D6',
    reward: '+4 Reputation',
    criteria: 'To claim this Intrigue, your gang must take at least six enemy fighters Out of Action either with shooting or in close combat.'
  },
  {
    id: '6-spades',
    suit: 'spades',
    value: '6',
    name: 'KEEP THE TRADE FLOWING',
    category: 'Law Abiding',
    alignmentTest: '2D6',
    reward: '150 credits',
    criteria: 'If, at the end of the battle, at least four of your fighters are Standing and Active or Standing and Engaged within your enemy\'s deployment zone, your gang can claim this Intrigue.'
  },
  {
    id: '7-spades',
    suit: 'spades',
    value: '7',
    name: 'CUT OFF THE HEAD',
    category: 'Law Abiding',
    alignmentTest: '2D6',
    reward: '+1 Rep per Champion, +2 Rep for Leader taken Out',
    criteria: 'If, at the end of the battle, you have taken your enemy\'s Leader or any of their Champions Out of Action, announce you are claiming this Intrigue and receive the rewards as described above.'
  },
  {
    id: '8-spades',
    suit: 'spades',
    value: '8',
    name: 'WATCH FROM THE SHADOWS',
    category: 'Law Abiding',
    alignmentTest: '3D6',
    reward: '50 credits, one fighter gains Cunning skill',
    criteria: 'During the Ready Fighters step of any Priority phase, randomly choose a fighter from your opponent\'s crew. For the remainder of this battle, any of your fighters within 12" of the chosen enemy fighter may perform the Shadow (Double) action. If at the end of the battle, you have a fighter Shadowing an enemy fighter, your gang can claim this Intrigue.'
  },
  {
    id: '9-spades',
    suit: 'spades',
    value: '9',
    name: 'BREAK THEIR WILL',
    category: 'Law Abiding',
    alignmentTest: '4D6',
    reward: '+4 Reputation, opponent loses -2 Reputation',
    criteria: 'You can only claim this Intrigue if the enemy is an Outlaw gang. If it is not, you may discard this Intrigue and draw another. If, at the end of the battle, your gang has taken the enemy gang\'s Leader and all of their Champions that took part in this battle Out of Action, your gang can claim this Intrigue.'
  },
  {
    id: '10-spades',
    suit: 'spades',
    value: '10',
    name: 'MARK THE IMPURE',
    category: 'Law Abiding',
    alignmentTest: 'D6',
    reward: '+2 Reputation',
    criteria: 'When one of your fighters activates within 6" of your opponent\'s Leader, they may perform the Pict Capture (Double) action. If a model that has performed this action begins a later activation within 1" of an edge of the battlefield, you can remove them from play as they make off with the evidence required. When the battle ends, your gang can claim this Intrigue.'
  },
  {
    id: 'jack-spades',
    suit: 'spades',
    value: 'J',
    name: 'CARRY A GUILD BOND',
    category: 'Law Abiding',
    alignmentTest: 'D6',
    reward: '+2 Reputation',
    criteria: 'Choose one fighter from your crew to be the courier. If, at the end of any round, the courier is in the enemy\'s deployment zone, you can remove them from the battlefield and your gang can claim this Intrigue.'
  },
  {
    id: 'queen-spades',
    suit: 'spades',
    value: 'Q',
    name: 'BRING THEM IN DEAD OR ALIVE',
    category: 'Law Abiding',
    alignmentTest: '4D6',
    reward: '50 credits per enemy fighter taken Out',
    criteria: 'You can only claim this Intrigue if the enemy is an Outlaw gang. If it is not, you may discard this Intrigue and draw another. During the Wrap-up step, claim this Intrigue for each enemy fighter taken Out of Action.'
  },
  {
    id: 'king-spades',
    suit: 'spades',
    value: 'K',
    name: 'RETRIEVE THE INFORMER',
    category: 'Law Abiding',
    alignmentTest: '3D6',
    reward: '150 credits',
    criteria: 'One randomly determined fighter from your opponent\'s crew (not a Leader or Champion) is revealed as an imposter and counts as part of your gang for the remainder of the battle. If the imposter is Standing and Active within your deployment zone when the battle ends, your gang can claim this Intrigue.'
  }
];
