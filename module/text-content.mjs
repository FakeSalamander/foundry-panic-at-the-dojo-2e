const Dice = {
  d4: "d4",
  d6: "d6",
  d8: "d8",
  d10: "d10",
};

const Token = {
  Speed: "Speed",
  Iron: "Iron",
  Power: "Power",
  Basic: "Basic", // TODO represent basic/any as sum of other tokens
  Burning: "Burning",
  Chaos: "Chaos",
  Challenge: "Challenge",
  Mentor: "Mentor",
  Training: "Training",
  Weakness: "Weakness",
  Poltergeist: "Poltergeist",
  Any: "Any",
};

export const defaultForm = {
  key: "0",
  name: "<unselected>",
  ability: {
    description: "",
  },
  actionDice: [],
  forbiddenActionDice: [],
  actions: [],
};
export const forms = [
  {
    key: "b",
    ability: {
      description:
        "Your Actions may apply to one extra target within range. When you add Blaster Form to a Style, increase that Style's maximum range by 1",
    },
    actionDice: [Dice.d8, Dice.d8, Dice.d8],
    forbiddenActionDice: [Dice.d8],
    name: "Blaster",
    rangeModifiers: [{ relMaxRange: 1 }],
    actions: [
      {
        name: "Amplify",
        levels: [
          {
            otherCost: ["2 HP"],
            description:
              "Your next Action this turn has its range increased by 3 and may apply to one additional target",
          },
        ],
      },
      {
        name: "Shockwave",
        levels: [
          {
            diceCost: [3],
            description: "Deal 1 damage to every enemy within range. Unblockable by Armor and Shields",
          },
          {
            diceCost: [6],
            description: "Deal 2 damage to one enemy within range. Unblockable by Armor and Shields",
          },
        ],
      },
    ],
  },
  {
    key: "c",
    ability: {
      description: `After you spend Control Tokens, you may Push 1 or Pull 1 to the enemy whose Action you Controlled. When you add Control Form to a Style, CHOOSE ONE:\n-Increase that Style's maximum range by 3.\n-Set that Style's minimum range to 0.`,
    },
    actionDice: [Dice.d10, Dice.d8, Dice.d6, Dice.d4],
    forbiddenActionDice: [Dice.d8, Dice.d6],
    name: "Control",
    rangeModifiers: [{ relMaxRange: 3 }, { absMinRange: 0 }],
    actions: [
      {
        name: "Suppression",
        levels: [
          {
            diceCost: [3],
            description: "You gain 1 Control token and may Move 1.",
          },
          {
            diceCost: [6],
            description: "6+: You gain 1 Control token and may Move 1.",
          },
          {
            diceCost: [9],
            description: "9+: You gain 1 Control token and may Move 1.",
          },
        ],
      },
    ],
  },
  {
    key: "d",
    ability: {
      description:
        "After you take damage, pay HP, or are healed, you gain 1 Speed token.\nWhen you Bleed, gain 3 Speed tokens.\nAfter each Dice Action you perform, if it applied Forced Movement to an enemy, they must discard 1 Basic token, if they have any. If it applied Forced Movement to an ally, they heal 1. If it moved, swapped, or teleported you, you heal 1.",
    },
    actionDice: [Dice.d10, Dice.d6, Dice.d6, Dice.d6],
    forbiddenActionDice: [Dice.d10, Dice.d6],
    name: "Dance",
    actions: [
      {
        name: "Dance Together",
        levels: [
          {
            tokenCost: [
              {
                number: 3,
                tokenType: Token.Speed,
              },
            ],
            description: "Choose someone within range. Pull them 1, then you Move 1, then you Pull them 1 more. Usable once per turn.",
          },
        ],
      },
      {
        name: "Tango",
        levels: [
          {
            diceCost: [3],
            description: "Swap spaces with an adjacent enemy, then Push them 1.",
          },
          {
            diceCost: [6],
            description: "Pull them 2, then deal 2 damage to them.",
          },
          {
            diceCost: [10],
            description: "Push them 4, then deal 3 damage to them.",
          },
        ],
      },
      {
        name: "Dance Apart",
        levels: [
          {
            diceCost: [4],
            description: "Push 3 to someone within range, then Move 1.",
          },
          {
            diceCost: [7],
            description: "Move 2 more, then heal.",
          },
        ],
      },
    ],
  },
  {
    key: "i",
    ability: {
      description:
        "You have Armor.\nWhen your Armor triggers, you gain 1 Iron token.\nWhen you gain Speed tokens, replace half of them (rounded down) with Iron tokens.\nYou may spend 1 Iron token to take 1 less damage from any source (even Reduced Hits).",
    },
    actionDice: [Dice.d8, Dice.d6, Dice.d6, Dice.d6],
    forbiddenActionDice: [Dice.d8, Dice.d6],
    name: "Iron",
    actions: [
      {
        name: "Secure",
        levels: [
          {
            diceCost: [3],
            description:
              "Choose two: you gain 3 Iron tokens; -or- an ally within range other than yourself gains 2 Iron tokens; -or- give Shield 2 to an ally within range",
          },
        ],
      },
      {
        name: "Contain",
        levels: [
          {
            diceCost: [3],
            description:
              "Target an enemy within range, then Choose two: Challenge them; -or Give them 2 Fatigue tokens; -or- place a Trap into their space",
          },
        ],
      },
      {
        name: "Protect",
        levels: [
          {
            diceCost: [6],
            description: "Choose four from the Secure and Contain lists. Options from the Contain list must target an enemy within range.",
          },
        ],
      },
    ],
  },
  {
    key: "o",
    ability: {
      description:
        "Before each Action you perform, you may Move 1.\n After your first Action on your turn, Move 1, then deal 2 damage to an enemy within range.\n At the end of each turn where you performed any Actions, you may deal 1 damage to an enemy within range, then Move 2.",
    },
    actionDice: [Dice.d6, Dice.d6, Dice.d4, Dice.d4],
    forbiddenActionDice: [Dice.d6, Dice.d4],
    name: "One-Two",
    actions: [
      {
        name: "Slide In",
        levels: [
          {
            diceCost: [1],
            description: "Teleport 2 spaces",
          },
          {
            diceCost: [4],
            description: "Teleport 2 more, then you may deal 1 damage to an enemy within range."
          }
        ],
      },
      {
        name: "Left, Right!",
        levels: [
          {
            diceCost: [4],
            description: "Deal 1 damage to an enemy within range, then deal 2 damage to a different enemy within range.",
          },
        ],
      },
    ],
  },
  {
    key: "p",
    ability: {
      description:
        "When you gain Speed tokens, replace half of them (rounded down) with Power tokens.\nYou can Enhance a Hit two additional times.",
    },
    actionDice: [Dice.d10, Dice.d10, Dice.d4],
    forbiddenActionDice: [Dice.d10, Dice.d4],
    name: "Power",
    actions: [
      {
        name: "Yell",
        levels: [
          {
            otherCost: ["X"],
            description: "You gain Power tokens equal to half of X (rounded up), then you gain a Shield with a value equal to half of X (rounded down).",
          },
        ],
      },
      {
        name: "Crush",
        levels: [
          {
            diceCost: [6],
            description:
              "Unblockable by Abilities and Tokens. Deal 3 damage to an enemy within range.",
          },
          {
            diceCost: [9],
            description: "9+: Deal 5 damage instead, and Crush is Unblockable.",
          },
        ],
      },
    ],
  },
  {
    key: "r",
    ability: {
      description:
        "You have Armor.\nUnblockable by Control Tokens and Iron Tokens.\nThe first time your Armor triggers each turn, you may Teleport 2. Then, if you Action Pool is empty, add a 3 to your Action Pool.",
    },
    actionDice: [Dice.d10, Dice.d10],
    forbiddenActionDice: [Dice.d10],
    name: "Reversal",
    actions: [
      {
        name: "Palm Strike",
        levels: [
          {
            diceCost: [3],
            description:
              "Push 3 and deal 1 damage to an adjacent enemy.",
          },
        ],
      },
      {
        name: "Deep Breathing",
        levels: [
          {
            otherCost: ["X"],
            description:
              "Move up to 2. This movement ignores obstacles. At the start of the next turn, add X to your Action Pool. Usable once per turn. Unblockable.",
          },
        ],
      },
      {
        name: "Rupture",
        levels: [
          {
            otherCost: ["X"],
            description:
              "An enemy within range gains X Burning Tokens. This can only target the active character.",
          }
        ]
      }
    ],
  },
  {
    key: "s",
    ability: {
      description:
        "At the start and end of your turn, you gain 2 Speed tokens\nAt the start of each Movement Phase, you may Move 1\nYou do not discard any Speed tokens during the End Phase.",
    },
    actionDice: [Dice.d4, Dice.d4, Dice.d4, Dice.d4, Dice.d4, Dice.d4],
    forbiddenActionDice: [Dice.d4, Dice.d4, Dice.d4],
    name: "Shadow",
    actions: [
      {
        name: "Stunt",
        levels: [
          {
            tokenCost: [
              {
                number: 3,
                tokenType: Token.Speed,
              },
            ],
            description:
              "Place one Fog, Copy, or Trap obstacle into an adjacent space, then teleport two spaces.\nDuring enemy turns: usable once per turn.",
          },
        ],
      },
    ],
  },
  {
    key: "S",
    ability: {
      description:
        "At the start of each turn choose a song; Iron, Power or Speed. You gain 3 tokens of the chosen type, and each  ally (other than yourself) gain 1 of the chosen type.",
    },
    actionDice: [Dice.d8, Dice.d6, Dice.d6, Dice.d4],
    forbiddenActionDice: [Dice.d8, Dice.d4],
    name: "Song",
    actions: [
      {
        name: "Sing Along",
        levels: [
          {
            diceCost: [2],
            description:
              "Target an ally you can see. Choose one: They discard one token; -or- they heal 2; -or- they gain 2 tokens from your song. Usable once per turn.",
          },
          {
            diceCost: [4],
            description: "4+: They also choose one from the list.",
          },
          {
            diceCost: [6],
            description:
              "6+: Add a 4 to their Action Pool.",
          },
        ],
      },
      {
        name: "Diss Track",
        levels: [
          {
            diceCost: [3],
            description:
              "Target an enemy you can see. Choose one to give them: 2 Burning tokens; -or- 2 Fatigue tokens; -or- 2 Weakness tokens.",
          },
          {
            diceCost: [5],
            description: "5+: They also choose one from the list.",
          },
          {
            diceCost: [6],
            description:
              "6+: Pull 2 and Challenge them.",
          },
        ],
      },
    ],
  },
  {
    key:"t",
    ability: {
      description:
        "At the start of your turn, you gain Shield 2.\nAfter your Shield absorbs from an enemy Action, you deal 1 damage to them. If it broke your Shield, deal 2 damage instead."
    },
    actionDice: [5, Dice.d6, Dice.d6, Dice.d6],
    forbiddenActionDice: [5, Dice.d6],
    name: "Thorns",
    actions: [
      {
        name: "Blossoms",
        levels: [
          {
            diceCost: [3],
            description: "You gain Shield 2 and choose one: Gain 1 Power token; -or- Move 1; -or- heal 1."
          },
          {
            diceCost: [6],
            description: "6+: Instead, gain Shield 4 and choose two."
          }
        ]
      },
      {
        name: "Brambles",
        levels: [
          {
            otherCost: ["Destroy Your Shield"],
            description: "This is a Token Action that costs your Shield. Deal 1 damage up to X enemies within Range 1-X, then gain 1 Power token. X is equal to the value of the destroyed shield. Usable twice per turn."
          }
        ]
      }
    ]
  },
  {
    key: "v",
    ability: {
      description:
        "At the start of your turn, discard up to 2 Status tokens you hold; then if you are Bleeding, you heal.\nAt the end of your turn, choose up to two enemies within range and give them each 1 Weakness token",
    },
    actionDice: [5,4,3,2,1],
    forbiddenActionDice: [5,3],
    name: "Vigilance",
    actions: [
      {
        name: "Bow Down",
        levels: [
          {
            diceCost: [2],
            description: "Give 1 Weakness token to an enemy within range.",
          },
          {
            diceCost: [4],
            description: "4+: Give 1 Weakness token to each enemy within range",
          },
        ],
      },
      {
        name: "Stand Strong",
        levels: [
          {
            diceCost: [1],
            description: "Give 1 Power token to an ally within range. Usable once per turn",
          },
          {
            diceCost: [3],
            description: "3+: Heal that ally",
          },
          {
            diceCost: [5],
            description: "5+: Heal and give 1 Power token to a different ally within range.",
          },
        ],
      },
    ],
  },
  {
    key: "w",
    ability: {
      description:
        "After each Action you perform, if you are not Bleeding, you pay 1 HP.\nAt the start of your turn, you gain 2 Power tokens. When you Bleed, add a 4 to your Action Pool",
    },
    actionDice: [Dice.d10, Dice.d10, Dice.d6, Dice.d6],
    forbiddenActionDice: [Dice.d10, Dice.d6],
    name: "Wild",
    actions: [
      {
        name: "Pounce",
        levels: [
          {
            otherCost: ["Free"],
            description:
              "Pull yourself 3 towards an enemy you can see. Usable once per turn",
          },
        ],
      },
      {
        name: "Howl",
        levels: [
          {
            diceCost: [4],
            description:
              "Gain 1 Power token, then heal 4, then give 1 Weakness token to each enemy you can see. Usable once per turn",
          },
        ],
      },
    ],
  },
//  {
//    key: "z",
//    ability: {
//      description:
//        "Your Action Pool is predetermined: 7, 5, 3, 1. You may hold multiple Shields at a time. Only one Shield is active at a time. When your active Shield breaks, your next Shield doesn't become active until the end of the current turn.\nWhen an enemy damages or breaks your Shield, you deal 1 damage to them",
//    },
//    actionDice: [7, 5, 3, 1],
//    forbiddenActionDice: [5, 3],
//    name: "Zen",
//    actions: [
//      {
//       name: "Focus",
//        levels: [
//          {
//            diceCost: [3],
//            description: "You gain a 2 point Shield. You may move one space.",
//          },
//          {
//            diceCost: [7],
//            description: "You gain a 4 point Shield. You may move two spaces",
//          },
//        ],
//      },
//    ],
//  },
];
export const defaultArchetype = {
  key: "0",
  name: "<unselected>",
  focusedAbility: {
    description: "",
  },
  fusedAbility: {
    description: "",
  },
  franticAbility: {
    description: "",
  },
};
export const archetypes = [
  {
    key: "a",
    name: "Angel",
    focusedAbility: {
      description:
        "Your Challenges are Unblockable By Shields.\nAt the start of your turn, you may heal, then if you did, Challenge an enemy you can see and deal 1 damage to them.\nAfter you Challenge an enemy, deal 1 damage to them and heal 1.",
    },
    fusedAbility: {
      description:
        "Your Challenges are Unblockable By Shields.\nAt the start of your turn, you may heal 2, then if you did, Challenge an enemy you can see.\nAfter you Challenge an enemy, deal 1 damage to them.",
    },
    franticAbility: {
      description:
        "Your Challenges are Unblockable By Shields.\nAt the start of this turn, you may heal, then if you did, Challenge an enemy you can see and deal 1 damage to them.\nAfter you Challenge an enemy, deal 1 damage to them and heal 1..",
    },
    archetypeActions: [
      {
        name: "Bow Down",
        levels: [
          {
            diceCost: [2],
            description: "Challenge one enemy you can see. You may Pull them up to 3.",
          },
          {
            diceCost: [5],
            description: "5+: Challenge every enemy adjacent to the initial target, then Pull 1 to everyone Challenged by Siren Song.",
          },
        ],
      },
    ],
  },
  {
    key: "c",
    name: "Cavalry",
    focusedAbility: {
      description:
        "At the start and end of your turn, you may Move up to 2, then you and each ally within range gains Shield 2.",
    },
    fusedAbility: {
      description:
        "At the start of your turn, you may Move up to 2, then you and each ally within range gains Shield 2.",
    },
    franticAbility: {
      description:
        "At the start and end of this turn, you may Move up to 2, then you and each ally within range gains Shield 2.",
    },
    archetypeActions: [
      {
        name: "First Aid",
        levels: [
          {
            diceCost: [1],
            description: "Target an ally within Range 1-5. Pull yourself towards them, 1 space at a time, until you are adjacent to that ally. First Aid can only target an ally once per turn.",
          },
          {
            diceCost: [4],
            description: "4+:  Heal that ally.",
          },
          {
            diceCost: [6],
            description: "6+:  Give that ally Shield 4.",
          },
        ],
      },
    ],
  },
  {
    key: "y",
    name: "Cyborg",
    focusedAbility: {
      description: "At the start of your turn, you gain 3 Basic Tokens of one type, 2 Basic Tokens of a different type, and 1 Basic Token of the final type.",
    },
    franticAbility: {
      description: "At the start of this turn, you gain 3 Basic Tokens of one type, 2 Basic Tokens of a different type, and 1 Basic Token of the final type.",
    },
    fusedAbility: {
      description: "At the start of your turn, you gain 2 Basic Tokens of one type, and 1 Basic Token of each of the other type.",
    },
    archetypeActions: [
      {
        name: "XYZ-BURST",
        levels: [
          {
            otherCost: ["2 to 5 Basic Tokens"],
            description: "You may pay for XYZ-BURST using 2, 3, 4, or 5 Basic Tokens. You heal X, then teleport Y, then deal Z damage to an enemy within range. X is equal to the number of Iron Tokens spent to pay for this. Y is equal to twice the number of Speed Tokens spent. Z is equal to the number of Power Tokens spent. Usable once per turn, only during your own turn. ",
          }
        ],
      },
    ],
  },
  {
    key: "d",
    name: "Demon",
    focusedAbility: {
      description: "At the end of your turn, you gain 2 Chaos tokens. At the start of each enemy turn, you may Pull yourself up to X spaces towards the active character, where X is the number of Chaos Tokens you hold.",
    },
    franticAbility: {
      description: "At the end of this turn, you gain 2 Chaos tokens.  At the start of each enemy turn, you may Pull yourself up to X spaces towards the active character, where X is the number of Chaos Tokens you hold.",
    },
    fusedAbility: {
      description: "At the end of your turn, you gain 1 Chaos token.  At the start of each enemy turn, you may Pull yourself up to X spaces towards the active character, where X is the number of Chaos Tokens you hold.",
    },
    archetypeActions: [
      {
        name: "Devil Dive",
        levels: [
          {
            diceCost: [4],
            description: "Teleport 3, then deal 2 damage to an enemy within range.",
          }
        ],
      },
    ],
  },
  {
    key: "f",
    name: "Flametongue",
    focusedAbility: {
      description:
        "Three times per turn, after you deal damage to an enemy, give them 2 Burning tokens",
    },
    franticAbility: {
      description:
        "Until your next turn, three times per turn, after you deal damage to an enemy, give them 2 Burning tokens",
    },
    fusedAbility: {
      description:
        "Three times per turn, aftert you deal damage to an enemy, give them 1 Burning token",
    },
    archetypeActions: [
      {
        name: "Incinerate",
        levels: [
          {
            diceCost: [2],
            description: "Deal 1 damage and give 1 Burning token to an enemy within range.",
          },
          {
            diceCost: [5],
            description: "5+: Deal 2 damage and give 2 Burning tokens instead.",
          },
          {
            diceCost: [8],
            description: "8+: Deal 3 damage and give 3 Burning tokens instead.",
          },
        ],
      },
    ],
  },
  {
    key: "g",
    name: "Gunkata",
    focusedAbility: {
      description:
        "At the start and end of your turn, you perform one Gunslinger Action of your choice without paying its cost, from among those available to you in your current Stance.",
    },
    franticAbility: {
      description:
        "At the start and end of this turn, you perform one Gunslinger Action of your choice without paying its cost, from among those available to you in your current Stance.",
    },
    fusedAbility: {
      description: "At the start -or- end of your turn, you perform one Gunslinger Action of your choice without paying its cost, from among those available to you in your current Stance.",
    },
    archetypeActions: [
      {
        name: "Grape Shot",
        levels: [
          {
            diceCost: [4],
            description: "This is a Gunslinger Action. Deal 1 damage to up to four enemies within range. Any target that takes 0 damage from Grape Shot is pushed 1 space.",
          },
        ],
      },
      {
        name: "Slug Shot",
        levels: [
          {
            diceCost: [4],
            description: "This is a Gunslinger Action. Push 4 and deal 2 damage to an enemy within range.",
          },
        ],
      },
    ],
  },
  {
    key: "h",
    name: "Phantom",
    focusedAbility: {
      description:
        "At the start of your turn, you gain 4 Poltergeist Tokens.",
    },
    franticAbility: {
      description:
        "At the start of this turn, you gain 4 Poltergeist Tokens.",
    },
    fusedAbility: {
      description:
        "At the start of your turn, you gain 2 Poltergeist Tokens.",
    },
     archetypeActions: [
      {
        name: "Telekinesis",
        levels: [
          {
            tokenCost: [
              {
                number: 1,
                tokenType: Token.Poltergeist,
              },
            ],
            description: "Choose one: Push 3 to an enemy or obstacle within range; -or- Pull 3 to an enemy or obstacle within range. If this movement ends with an enemy and an obstacle sharing a space, you deal 1 damage to that enemy. Usable once per turn.",
          },
        ],
      },
     ],
  },
  {
    key: "p",
    name: "Punk",
    focusedAbility: {
      description:
        "At the start of your turn, add X to your Action Pool. X is equal to the damage on your current health bar, to a maximum of 13. If your health bar is full, X = 3",
    },
    franticAbility: {
      description:
        "At the start of this turn, add X to your Action Pool. X is equal to the damage on your current health bar, to a maximum of 13. If your health bar is full, X = 3",
    },
    fusedAbility: {
      description:
        "At the start of your turn, add X to your Action Pool. X is equal to half the damage on your current health bar, to a maximum of 9. If your health bar is full, X = 2",
    },
    archetypeActions: [
      {
        name: "Telekinesis",
        levels: [
          {
            diceCost: [7],
            description: "Push 4 and deal 4 damage to an enemy within range.",
          },
          {
            diceCost: [13],
            description: "13+: Push 7 and deal 7 damage instead.",
          },
        ],
      },
     ],
  },
  {
    key: "t",
    name: "Teacher",
    focusedAbility: {
      description: "At the start of your turn, you gain 2 Mentor tokens.",
    },
    franticAbility: {
      description: "At the start of this turn, you gain 2 Mentor tokens.",
    },
    fusedAbility: {
      description: "At the start of your turn, you gain 1 Mentor token.",
    },
    archetypeActions: [
      {
        name: "Remember Your Training",
        levels: [
          {
            tokenCost: [
              {
                number: 1,
                tokenType: Token.Mentor,
              },
            ],
            description: "The  active character heals 1, then performs a Unique Action available to their current Stance, without paying its cost. For the purposes of Gates or the value of X, use a value of 4. Usable once per turn, only during allies' turns. Usable while you are Taken Out.",
          },
        ],
      },
     ],
  },
  {
    key: "r",
    name: "Trickster",
    focusedAbility: {
      description:
        "At the start of each turn, you may target 1 non-Unique token held by someone within range of you or your Copies, then choose one or both: Steal the chosen token: -and/or- Convert the chosen token into an Iron token.",
    },
    franticAbility: {
      description:
        "Until your next turn, at the start of each turn, you may target 1 non-Unique token held by someone within range of you or your Copies, then choose one or both: Steal the chosen token: -and/or- Convert the chosen token into an Iron token.",
    },
    fusedAbility: {
      description:
        "At the start of each allied turn, you may target 1 non-Unique token held by someone within range of you or your Copies, then choose one or both: Steal the chosen token: -and/or- Convert the chosen token into an Iron token.",
    },
    archetypeActions: [
      {
        name: "Bag of Tricks",
        levels: [
          {
            otherCost: ["???"],
            description: "Bag of Tricks can be used as either a Dice Action or a Token Action. To pay for Bagt of Tricks, CHOOSE ONE OR MORE: Spend a 2+ die and 1 HP; -or- Spend a 3+ die; -or- spend 2 Iron tokens; -or- spend 3 Speed tokens; -or- pay 3 HP.\n X is equal to the number of cost choices paid. Choose X:\n Create a Copy within range and swap spaces with it; -or- Create a Pit Trap in an empty space within range; -or- Move  up to 2, then swap spaces with an obstacle within range; -or- Pull 3 to an enemy you can see and they discard 1 token; -or- Give 2 Weakness tokens to an enemy within range. \nUsable once per turn.",
          },
        ],
      },
     ],
  },
  {
    key: "u",
    name: "Underdog",
    focusedAbility: {
      description:
        "At the start of your turn, you gain 2 Luck Tokens.\nThe first two times you take damage each turn, you gain one Basic token of your choice",
    },
    franticAbility: {
      description:
        "At the start of this turn, you gain 2 Luck Tokens.\nUntil your next turn, the first two times you take damage each turn, you gain one Basic token of your choice",
    },
    fusedAbility: {
      description:
        "At the start of your turn, you gain 1 Luck Token.\nThe first time you take damage each turn, you gain one Basic token of your choice",
    },
    archetypeActions: [
      {
        name: "Just What I Needed",
        levels: [
          {
            tokenCost: [
              {
                number: 3,
                tokenType: Token.Basic,
              },
            ],
            description: "Choose one: Teleport 3; -or- Push 2 and deal 2 damage to an enemy within range; -or- you gain temporary Armor. Usable once per turn.",
          },
        ],
      },
     ],
  },
  {
    key: "w",
    name: "Wardancer",
    focusedAbility: {
      description:
        "At the start of the Action Phase of your turn, increase one of your numbers by 3, a different one by 2, and one of your remaining numbers by 1. This can only increase a number up to a maximum value of 9.",
    },
    franticAbility: {
      description:
         "At the start of the Action Phase of this turn, increase one of your numbers by 3, a different one by 2, and one of your remaining numbers by 1. This can only increase a number up to a maximum value of 9.",

    },
    fusedAbility: {
      description: "At the start of the Action Phase of your turn, increase one of your numbers by 2, and one of your other numbers by 1. This can only increase a number up to a maximum value of 5.",

    },
    archetypeActions: [
      {
        name: "War Dance",
        levels: [
          {
            diceCost: [2],
            description: "Move 1, then deal 1 damage to an enemy within range.",
          },
          {
            diceCost: [5],
            description: "5+: Move 2 and deal 2 damage instead.",
          },
          {
            diceCost: [9],
            description: "9+: Move 3 and deal 3 damage instead.",
          },
        ],
      },
     ],
  },
  {
    key: "i",
    name: "Winterblossom",
    focusedAbility: {
      description: "At the start of each turn, give 1 Weakness token to one enemy within range of you or your Copies.",
    },
    franticAbility: {
      description:
        "At the start of each turn until your next turn, give 1 Weakness token to one enemy within range of you or your Copies.",
    },
    fusedAbility: {
      description:
        "At the start of each allied turn, give 1 Weakness token to one enemy within range of you or your Copies.",
    },
    archetypeActions: [
      {
        name: "Frostbite",
        levels: [
          {
            diceCost: [1],
            description: "Give 1 Weakness token to an enemy within range.",
          },
          {
            diceCost: [3],
            description: "3+: Give 1 Weakness token to a different enemy within range.",
          },
          {
            diceCost: [5],
            description: "5+: Give 1 Weakness token to up to two enemies within range.",
          },
          {
            diceCost: [8],
            description: "8+: Give 1 Weakness token to up to three enemies within range.",
          },
        ],
      },
     ],
  },
];
export const bossArchetypes = [
  {
    key: "1",
    name: "The Blur",
    focusedAbility: {
      description: "",
    },
    fusedAbility: {
      description: "After you perform an Action, you may move one space.",
    },
    franticAbility: {
      description: "",
    },
    archetypeActions: [
      {
        name: "Unseen Step",
        levels: [
          {
            otherCost: ["X"],
            description: "Teleport X.",
          },
        ],
      },
     ],
  },
  {
    key: "3",
    name: "The Immortal",
    focusedAbility: {
      description: "",
    },
    fusedAbility: {
      description: "The first time you deal damage each turn, you heal.",
    },
    franticAbility: {
      description: "",
    },
    archetypeActions: [
      {
        name: "Unseen Step",
        levels: [
          {
            otherCost: ["X"],
            description: "Teleport X.",
          },
        ],
      },
     ],
  },
  {
    key: "2",
    name: "The Giant",
    focusedAbility: {
      description: "",
    },
    fusedAbility: {
      description:
        "You take up a 2x2 space on the battle grid.\nYour maximum range is increasesed by 1.\nYou do not take Fall Damage.\nYou can move over Walls. When you do, they become Rubble, and you must discard one Speed token.\nYou can Enhance a Hit one additional time.\n At the startt of each of your turns, you gain 2 Power tokens.",
    },
    franticAbility: {
      description: "",
    },
    archetypeActions: [
      {
        name: "Crush",
        levels: [
          {
            diceCost: [6],
            description: "Unblockable by Abilities and Tokens. Deal 3 damage to an enemy within range.",
          },
          {
            diceCost: [9],
            description: "9+: Deal 5 damage instead, and Crush is Unblockable.",
          },
        ],
      },
     ],
  },
  {
    key: "4",
    name: "The Machine",
    focusedAbility: {
      description: "",
    },
    fusedAbility: {
      description:
        "Your Stances are made up of one Style attached to two Forms.\n You never roll Green Action Dice.\n You cannot use Freestyles.",
    },
    franticAbility: {
      description: "",
    },
    archetypeActions: [
      {
        name: "Synchro Breaker",
        levels: [
          {
            diceCost: [4],
            description: "Target an adjacent enemy and Disable all of their Abilities until the end of this turn.",
          },
        ],
      },
     ],
  },
  {
    key: "5",
    name: "The Necromancer",
    focusedAbility: {
      description: "",
    },
    fusedAbility: {
      description:
        "At the start of your turn, place a Copy into an empty space within range.\nAt the end of your turn, each of your Copies may Move 1, then each Copy deals 1 damage to one adjacent enemy.",
    },
    franticAbility: {
      description: "",
    },
    archetypeActions: [
      {
        name: "Arise, My Minion!",
        levels: [
          {
            otherCost: ["2 HP"],
            description: "Create a Copy in an empty space within range. Both you and that Copy may Move 1. Usable once per turn.",
          },
        ],
      },
     ],
  },
  {
    key: "6",
    name: "The Swarm",
    focusedAbility: {
      description: "",
    },
    fusedAbility: {
      description:
        "At the end of your turn, for each Copy you have in play, choose one: You gain 1 Power token; or you gain 1 Iron token; or you may move one space; or each of your Copies may move 1 space; or destroy a Copy to deal 1 damage to each enemy adjacent to it.",
    },
    franticAbility: {
      description: "",
    },
    archetypeActions: [
      {
        name: "En Masse",
        levels: [
          {
            diceCost: [1],
            description: "Create a Copy in an adjacent empty space.",
          },
          {
            diceCost: [3],
            description: "3+: Create a Copy in an adjacent empty space.",
          },
          {
            diceCost: [5],
            description: "5+: Swap spaces with a Copy within range, then Create a Copy in an adjacent empty space.",
          },
          {
            diceCost: [8],
            description: "8+: Swap spaces with a Copy within range, then Create a Copy in an adjacent empty space.",
          },
        ],
      },
     ],
  },
  {
    key: "7",
    name: "The Tank",
    focusedAbility: {
      description: "",
    },
    fusedAbility: {
      description: "You have Armor. Your Armor blocks 10 damage the first time it triggers each turn.\nWhen you are Pushed or Pulled, you move one less space.",
    },
    franticAbility: {
      description: "",
    },
    archetypeActions: [
      {
        name: "Unseen Step",
        levels: [
          {
            otherCost: ["X"],
            description: "Teleport X.",
          },
        ],
      },
     ],
  },
  {
    key: "8",
    name: "The Untouchable",
    focusedAbility: {
      description: "",
    },
    fusedAbility: {
      description:
        "At the start of your turn and when you Bleed, you gain one Control token. It only costs you 1 Control Token to Dodge an Action",
    },
    franticAbility: {
      description: "",
    },
    archetypeActions: [
      {
        name: "Controlling",
        levels: [
          {
            diceCost: [2],
            description: "You gain 1 Control Token.",
          },
          {
            diceCost: [5],
            description: "5+: You gain 1 more Control Token.",
          },
        ],
      },
     ],
  },
];
export const defaultStyle = {
  key: "0",
  name: "<unselected>",
  parentArchetypeName: "<unselected>",
  maxRange: 0,
  minRange: 0,
  ability: {
    description: "",
  },
  actions: [],
};
export const styles = [
  {
    key: "01",
    parentArchetypeName: "Angel",
    name: "Halcyon",
    minRange: 1,
    maxRange: 2,
    ability: {
      description:
        "At the start of your turn, you may discard one token you hold.\nAfter you remove tokens using an Action or Ability, you gain an equal number of Iron tokens.",
    },
    actions: [
      {
        name: "Purify",
        levels: [
          {
            diceCost: [1],
            description: "Discard one token from yourself or an ally within range.",
          },
          {
            diceCost: [3],
            description: "3+: Discard up to two tokens from someone within range.",
          },
          {
            diceCost: [6],
            description: "6+: Discard up to two tokens from someone within range.",
          },
        ],
      },
    ],
  },
  {
    key: "02",
    parentArchetypeName: "Angel",
    name: "Judgment",
    minRange: 1,
    maxRange: 1,
    ability: {
      description:
        "When an enemy with your Challenge token starts their turn, they do not roll their lowest Action Die. It is discarded and unused. If they are in a Stance that does not roll Action Dice, they get ride of their bonus die if they have one, or their smallest number if they do not.\n If an enemy discards your Challenge token using an enemy Action or Ability, all numbers currently in their Action Pool are reduced by 2 (to a minimum of 1).",
    },
    actions: [
      {
        name: "Denial",
        levels: [
          {
            diceCost: [4],
            description: "Teleport into an empty space adjacent to an enemy you can see, then Challenge them.",
          },
        ],
      },
    ],
  },
  {
    key: "03",
    parentArchetypeName: "Angel",
    name: "Shining",
    minRange: 1,
    maxRange: 1,
    ability: {
      description:
        "At the start of your turn, Push 1 to all obstacles and enemies adjacent to you.\nEnemies cannot use Action Movement, Free Movement, or teleports to enter a space adjacent to you. \n If an enemy discards your Challenge token using an enemy Action or Ability, the enemy who held the token takes 3 damage.",
    },
    actions: [
      {
        name: "Beacon",
        levels: [
          {
            diceCost: [1],
            description: "Pull up to 4 one ally that you can see, other than yourself.",
          },
          {
            diceCost: [4],
            description: "4+, Once per turn: You and that ally heal.",
          },
        ],
      },
      {
        name: "Blinding Light",
        levels: [
          {
            diceCost: [2],
            description: "Challenge an adjacent enemy, then Push 1 and give them 1 Burning Token.",
          },
          {
            diceCost: [5],
            description: "5+: Push 3 and give them 3 Burning Tokens instead.",
          },
        ],
      },
    ],
  },
  {
    key: "04",
    parentArchetypeName: "Angel",
    name: "Singing",
    minRange: 2,
    maxRange: 4,
    ability: {
      description:
        "At the start and end of your turn, choose a Mood: Despair, Sorrow, or Rage.\n If you picked Despair, give 1 Fatigue token to all enemies.\n If you picked Sorrow, give 1 Weakness token to all enemies.\n If you picked Rage, give 1 Burning token to all enemies.",
    },
    actions: [
      {
        name: "Rip Chord",
        levels: [
          {
            diceCost: [2],
            description:
              "Give one of your Mood's tokens to an enemy within Range.",
          },
          {
            diceCost: [5],
            description:
              "5+: Give one of your Mood's tokens to each enemy within Range.",
          },
          {
            diceCost: [8],
            description:
              "5+: Give one of your Mood's tokens to each enemy you can see.",
          },
        ],
      },
      {
        name: "Mood Shift",
        levels: [
          {
            diceCost: [6],
            description:
              "Apply all of your Start Effects as this Action's effects. Usable once per turn, only during your own turn.",
          },
        ],
      },
    ],
  },
  {
    key: "05",
    parentArchetypeName: "Angel",
    name: "Winged",
    minRange: 1,
    maxRange: 2,
    ability: {
      description:
        "You do not take Fall Damage.\nRubble does not give you Fatigue tokens.\nAt the end of every turn, you may move 1 space.\nAfter you give an enemy your Challenge token, you may Move 2.",
    },
    actions: [
      {
        name: "As The Crow Flies",
        levels: [
          {
            diceCost: [1],
            description: "Teleport 4.",
          },
          {
            diceCost: [4],
            description: "4+: Challenge an enemy within range, then Teleport 2.",
          },
        ],
      },
    ],
  },
  {
    key: "06",
    parentArchetypeName: "Cavalry",
    name: "Charging",
    minRange: 1,
    maxRange: 1,
    ability: {
      description:
        "At the start of your turn, you gain temporary Armor and may move 2 spaces.\nAt the start of each ally's turn, they may move 2 spaces.",
    },
    actions: [
      {
        name: "Follow My Lead",
        levels: [
          {
            diceCost: [3],
            description:
              "You may move one space, then deal 1 damage to an enemy within range. An ally you can see (other than yourself) may move one space, then deal 1 damage to an enemy within their range.",
          },
          {
            diceCost: [6],
            description:
              "5+: You may move 1, then deal 1 damage to an enemy within range. An ally you can see (other than yourself) may move one space, then deal 1 damage to an enemy within their range.",
          },
        ],
      },
    ],
  },
  {
    key: "07",
    parentArchetypeName: "Cavalry",
    name: "Heroic",
    minRange: 1,
    maxRange: 2,
    ability: {
      description:
        "At the start of your turn, you heal 1.\nWhenever an ally within range takes damage, they take half that damage (rounded down) and you take the other half (rounded up).",
    },
    actions: [
      {
        name: "Burning Heart",
        levels: [
          {
            otherCost: ["3 HP"],
            description: "Each ally within range gains 2 Iron tokens and 2 Power tokens. Usable once per turn, only while you hold no Power tokens",
          },
        ],
      },
      {
        name: "Hero's Moment",
        levels: [
          {
            diceCost: [7],
            description: "Deal 4 damage to an adjacent enemy and push them X. X is equal to 2, or to half the damage on your current health bar (rounded up), whichever is higher.",
          },
        ],
      },
    ],
  },
  {
    key: "08",
    parentArchetypeName: "Cavalry",
    name: "Jumping",
    minRange: 1,
    maxRange: 1,
    ability: {
      description: "At the start and end of your turn, you may Teleport 3.\n When you Bleed, you may Teleport 3.",
    },
    actions: [
      {
        name: "Leap In",
        levels: [
          {
            diceCost: [3],
            description:
              "Teleport 3, then deal deal 2 damage to an enemy within range.",
          },
        ],
      },
      {
        name: "Leap Out",
        levels: [
          {
            diceCost: [3],
            description:
              "Deal 2 damage to an enemy within range, then teleport 3. Then, choose one: Deal 2 damage to a different enemy within range; -or- heal 2; -or- gain 2 Power tokens.",
          },
        ],
      },
    ],
  },
  {
    key: "09",
    parentArchetypeName: "Cavalry",
    name: "Rallying",
    minRange: 1,
    maxRange: 3,
    ability: {
      description:
        "At the start of each ally's turn, if they are within Range of you or your Copies, they may heal.\nAt the end of your turn, choose an ally you can see other than yourself. They heal and agin Shield 2.",
    },
    actions: [
      {
        name: "Group Up",
        levels: [
          {
            diceCost: [2],
            description: "Pull up to 3 to one ally you can see.",
          },
          {
            diceCost: [3],
            description: "3+: Pull up to 3 to one ally you can see.",
          },
          {
            diceCost: [5],
            description: "5+, Once per turn:  Choose one to apply to each ally within range: Heal; -or- gain 2 Power tokens; -or- gain Shield 3.",
          },
        ],
      },
    ],
  },
  {
    key: "10",
    parentArchetypeName: "Cavalry",
    name: "Unbreakable",
    minRange: 1,
    maxRange: 2,
    ability: {
      description:
        "Your allies within range may spend your tokens.\nAt the start and end of your turn, give 1 Iron token to each ally within range.",
    },
    actions: [
      {
        name: "Eyes Open",
        levels: [
          {
            diceCost: [5],
            description: "You gain 4 Iron tokens and may Move 1.",
          },
        ],
      },
      {
        name: "Stay Out Of This",
        levels: [
          {
            tokenCost: [
              {
                number: 4,
                tokenType: Token.Iron
              }
            ],
            description: "Give 3 Weakness tokens and Push 3 to an enemy within range.",
          },
        ],
      },
    ],
  },
  {
    key: "11",
    parentArchetypeName: "Cyborg",
    name: "Armored",
    minRange: 1,
    maxRange: 2,
    ability: {
      description: "After you spend Iron tokens or trigger your Armor, you heal 1. This can heal a maximum of 3 HP per turn.\nIf an enemy discards your Challenge token using an enemy Action or Ability, the enemy who held the token gains 2 Weakness tokens.",
    },
    actions: [
      {
        name: "Hard Body",
        levels: [
          {
            diceCost: [2],
            description: "You gain temporary Armor.",
          },
          {
            diceCost: [6],
            description: "6+: You gain 4 Iron tokens.",
          },
        ],
      },
      {
        name: "You, Stay",
        levels: [
          {
            tokenCost: [
              {
                number: 2,
                tokenType: Token.Iron,
              },
            ],
            description:
              "Challenge an enemy within range.\nGive that enemy 2 Fatigue tokens. Usable once per turn.",
          },
          {
            tokenCost: [
              {
                number: 5,
                tokenType: Token.Iron,
              },
            ],
            description:
              "5 Iron: Instead give them 4 Fatigue tokens. You gain Shield 3.",
          },
        ],
      },
    ],
  },
  {
    key: "12",
    parentArchetypeName: "Cyborg",
    name: "Incinerator",
    minRange: 1,
    maxRange: 3,
    ability: {
      description:
        "After you spend a Power token to Enhance a Hit, give 1 Burning token to the target of that hit.\nAfter you take damage from Burning Tokens, gain 1 Power token.",
    },
    actions: [
            {
        name: "Flamethrower",
        levels: [
          {
            diceCost: [1],
            description:
              "Gain 2 Power tokens and 1 Burning token. Usable once per turn.",
          },
          {
            diceCost: [5],
            description:
              "5+: Gain 2 more Power tokens and 1 more Burning token.",
          },
        ],
      },
      {
        name: "Flamethrower",
        levels: [
          {
            tokenCost: [
              {
                number: 2,
                tokenType: Token.Power,
              },
            ],
            description:
              "Deal 1 damage and give 1 Burning token to an enemy within range. Usable once per turn.",
          },
          {
            tokenCost: [
              {
                number: 4,
                tokenType: Token.Power,
              },
            ],
            description:
              "4 Power: Instead, deal 2 damage and give 2 Burning tokens, and also, Flamethrower now applies to each target adjacent to the initial target(s).",
          },
        ],
      },
    ],
  },
  {
    key: "13",
    parentArchetypeName: "Cyborg",
    name: "Machine",
    minRange: 1,
    maxRange: 2,
    ability: {
      description:
        "At the start of your turn, you gain 1 Iron token.\nYou may spend your Iron Tokens as if they were Power tokens or Speed tokens.",
    },
    actions: [
      {
        name: "High Efficiency",
        levels: [
          {
            diceCost: [1],
            description:
              "Choose two: You heal 1; -or- you gain 1 Iron token; -or- you gain 1 Power token; -or- you gain 1 Speed token; -or- you deal 1 damage to an enemy within range.",
          },
          {
            diceCost: [4],
            description: "4+: Choose all five instead",
          },
          {
            diceCost: [8],
            description: "8+: Replace all 1's in High Efficiency with 2's.",
          },
        ],
      },
    ],
  },
  {
    key: "14",
    parentArchetypeName: "Cyborg",
    name: "Rocket",
    minRange: 1,
    maxRange: 1,
    ability: {
      description: "After you Push, you may Teleport to any empty space adjacent to the target of that Push.\nAt the start of your turn, you amy Push 3 to an obstacle, ally, or enemy within range.",
    },
    actions: [
      {
        name: "Nitro Boost",
        levels: [
          {
            diceCost: [3],
            description: "Teleport 2, then agin 2 Speed tokens.",
          },
          {
            diceCost: [6],
            description: "6+: Teleport 2, then gain 3 Speed tokens.",
          },
        ],
      },
      {
        name: "Rocket Tackle",
        levels: [
          {
            tokenCost: [
              {
                number: 3,
                tokenType: Token.Speed,
              },
            ],
            description: "Push 2 to someone within range. Usable once per turn.",
          },
          {
            tokenCost: [
              {
                number: 5,
                tokenType: Token.Speed,
              },
            ],
            description: "5 Speed: If they are an ally, they Move up to 3. If they are an enemy, Push 2 and deal 2 damage to them.",
          },
        ],
      },
    ],
  },
  {
    key: "15",
    parentArchetypeName: "Cyborg",
    name: "Syphon",
    minRange: 1,
    maxRange: 2,
    ability: {
      description:
        "At the start of your turn, you may choose 1 token you hold. Either replace it with a Power token, or gain another copy of it.",
    },
    actions: [
      {
        name: "Power Converter",
        levels: [
          {
            diceCost: [2],
            description:
              "Target a single token held by you or someone within range.\nChoose one or both: You steal the targeted token(s) from them; and/or replace the targeted token(s) with Power tokens.",
          },
          {
            diceCost: [6],
            description:
              "6+: Power Converter instead applies to every token they hold of the targeted token's type.",
          },
        ],
      },
    ],
  },
  {
    key: "16",
    parentArchetypeName: "Demon",
    name: "Dark",
    minRange: 2,
    maxRange: 4,
    ability: {
      description:
        "You can see and target enemies through Fog.\nAt the end of your turn, place a Fog obstacle into your space.",
    },
    actions: [
      {
        name: "Darkness Dawns",
        levels: [
          {
            diceCost: [4],
            description:
              "Place one or two Fog obstacles into empty spaces within range.\nYou may teleport to an empty space within those Fog obstacles.",
          },
        ],
      },
      {
        name: "Twilight Sorrow",
        levels: [
          {
            diceCost: [4],
            description:
              "Each enemy standing in Fog gains 1 Weakness token and 1 Fatigue token. Then, you gain 3 Speed tokens.",
          },
        ],
      },
    ],
  },
  {
    key: "17",
    parentArchetypeName: "Demon",
    name: "Ogre",
    minRange: 1,
    maxRange: 2,
    ability: {
      description:
        "Your Throw Actions may target any number of enemies within range. After  you perform an Action that inflicted Forced Movement on any enemies, you deal 1 damage to each enemy moved by that Action.",
    },
    actions: [
      {
        name: "Gate Guardian",
        levels: [
          {
            diceCost: [4],
            description:
              "Pull 2 to all enemies you can see, then deal 1 damage to each enemy within range.",
          },
        ],
      },
      {
        name: "Watch Your Step",
        levels: [
          {
            diceCost: [4],
            description:
              "Target an enemy you can see that moved during this turn. You Push 1 and deal 2 damage to them.",
          },
        ],
      },
    ],
  },
  {
    key: "18",
    parentArchetypeName: "Demon",
    name: "Slasher",
    minRange: 1,
    maxRange: 2,
    ability: {
      description: "After an effect Pushes you, you may Pull yourself up to 2 towards the source of that Push.\nAt the end of every turn, you may Move 1, then you deal 1 damage to an enemy within range.",
    },
    actions: [
      {
        name: "Suddenly...",
        levels: [
          {
            diceCost: [4],
            description:
              "Teleport into an empty space adjacent to someone who is alone, then if they are an enemy, you deal 1 damage to them.\nSomeone is alone if nobody is adjacent to them.",
          },
        ],
      },
    ],
  },
  {
    key: "19",
    parentArchetypeName: "Demon",
    name: "Vampire",
    minRange: 1,
    maxRange: 1,
    ability: {
      description:
        "After you deal damage with an Action or Ability, you heal 1. This Ability cannot heal you more than the Bleed Value in a single turn.\nAfter you give Weakness tokens to an enemy, you gain 1 Power token, to a maximum of 4 Power tokens per turn.",
    },
    actions: [
      {
        name: "Life Steal",
        levels: [
          {
            diceCost: [4],
            description:
              "Deal 2 damage and give 1 Weakness token to an enemy within range.",
          },
        ],
      },
      {
        name: "Hypnotic Gaze",
        levels: [
          {
            diceCost: [4],
            description:
              "Target an enemy you can see. Pull them up to 4, then if they are now within your range, give them 2 Weakness tokens.",
          },
        ],
      },
    ],
  },
  {
    key: "20",
    parentArchetypeName: "Demon",
    name: "Zombie",
    minRange: 1,
    maxRange: 2,
    ability: {
      description: "After an enemy destroys any of your Copies, you deal 1 damage to them.\nAt the start of your turn and when you Bleed, place a Copy into a space within range of you or your Copies.\nAt the end of your turn, you deal 1 damage to each enemy adjacent to any of your Copies.",
    },
    actions: [
      {
        name: "Hunger",
        levels: [
          {
            diceCost: [4],
            description:
              "One target within range discards 3 tokens of their choice (or all of their tokens, if they have less). For each token they discarded, place a Copy into an empty space adjacent to them.",
          },
        ],
      },
      {
        name: "Raise The Dead",
        levels: [
          {
            diceCost: [4],
            description:
              "Give 2 Fatigue tokens to an enemy within range, then place 2 Copies in empty spaces adjacent to that enemy.",
          },
        ],
      },
    ],
  },
  {
    key: "21",
    parentArchetypeName: "Flametongue",
    name: "Blazing",
    minRange: 1,
    maxRange: 3,
    ability: {
      description:
        "At the start of each allied turn, give 1 Burning token to each enemy within range.",
    },
    actions: [
      {
        name: "Blazing Speed",
        levels: [
          {
            otherCost: ["1 HP"],
            description:
              "Target an enemy you can see that has Burning Tokens. Pull yourself up to X spaces towards them, where X is the number of Burning Tokens they hold. Usable once per turn.",
          },
        ],
      },
      {
        name: "Ignition",
        levels: [
          {
            diceCost: [6],
            description:
              "Deal X damage to an adjacent enemy. X = the number of Burning tokens they hold. Usable once per turn.",
          },
        ],
      },
    ],
  },
  {
    key: "22",
    parentArchetypeName: "Flametongue",
    name: "Explosion",
    minRange: 1,
    maxRange: 2,
    ability: {
      description:
        "After you perform an Action that destroyed any obstacles, deal 1 damage to all enemies on or adjacent to any of those obstacles.",
    },
    actions: [
      {
        name: "Demolition",
        levels: [
          {
            diceCost: [3],
            description:
              "Choose one: Place a Pit into a space within range; -or- place 2 Traps into spaces within range; -or- destroy up to 3 obstacles within range.",
          },
          {
            diceCost: [5],
            description:
              "4+: Choose two instead.",
          },
          {
            diceCost: [7],
            description:
              "6+: Choose three instead.",
          },
        ],
      },
      {
        name: "Ka-Boom!",
        levels: [
          {
            diceCost: [2],
            description:
              "Place Rubble into an adjacent space, then destroy it. Push yourself 2 spaces away from that Rubble.",
          },
          {
            diceCost: [4],
            description:
              "4+: Place Rubble into an adjacent space, then destroy it. Push yourself 2 or 3 spaces away from that Rubble.",
          },
          {
            diceCost: [6],
            description:
              "6+: Place Rubble into an adjacent space, then destroy it. Push yourself up to 3 spaces away from that Rubble.",
          },
        ],
      },
    ],
  },
  {
    key: "23",
    parentArchetypeName: "Flametongue",
    name: "Inferno",
    minRange: 1,
    maxRange: 2,
    ability: {
      description:
        "You have Armor against damage from Burning tokens. After you Reduce a Hit, give 1 Burning token to your attacker.",
    },
    actions: [
      {
        name: "Flame Guard",
        levels: [
          {
            otherCost: ["1 HP"],
            description:
              "You can only use Flame Guard while you hold no Iron tokens. You gain 2 Iron tokens. Usable once per turn.",
          },
        ],
      },
      {
        name: "Heat Beam",
        levels: [
          {
            diceCost: [4],
            description:
              "Unblockable. Deal 3 damage to an enemy you can see that is holding at least 2 Burning tokens, then they discard 2 Burning tokens.",
          },
        ],
      },
    ],
  },
  {
    key: "24",
    parentArchetypeName: "Flametongue",
    name: "Phoenix",
    minRange: 1,
    maxRange: 1,
    ability: {
      description:
        "At the start of your turn, you gain Shield 2, then if you are Bleeding, you heal.\nWhen you Bleed, you heal and gain Shield 3.\nYou do not take damage from Burning Tokens.",
    },
    actions: [
      {
        name: "Cleansing Fire",
        levels: [
          {
            diceCost: [4],
            description:
              "Choose two: Give 2 Burning tokens to an enemy within range; -or- heal an ally within range; -or- discard up to 3 status tokens from an ally within range. Usable once per turn.",
          },
        ],
      },
      {
        name: "Firebird's Flight",
        levels: [
          {
            diceCost: [4],
            description:
              "Teleport 3, then give 2 Burning tokens to all adjacent enemies.",
          },
        ],
      },
    ],
  },
  {
    key: "25",
    parentArchetypeName: "Flametongue",
    name: "Volcanic",
    minRange: 1,
    maxRange: 3,
    ability: {
      description:
        "At the start and end of your turn, you may place a Trap into a space within range.\nAfter an enemy within range takes damage from a Trap, give that enemy 1 Burning token.\nYou do not take damage from Traps.",
    },
    actions: [
      {
        name: "Lava Walk",
        levels: [
          {
            tokenCost: [
              {
                number: 1,
                tokenType: Token.Speed
              }
            ],
            description:
              "Move 1, then place a Trap into the space you left. Usable twice per turn.",
          },
        ],
      },
      {
        name: "Pyroclasm",
        levels: [
          {
            diceCost: [3],
            description:
              "Place three Traps into spaces within range.",
          },
        ],
      },
    ],
  },
  {
    key: "26",
    parentArchetypeName: "Gunkata",
    name: "Akimbo",
    minRange: 2,
    maxRange: 4,
    ability: {
      description: "At the start and end of your turn, Move 2.\nAfter each Action you perform, Move 1.",
    },
    actions: [
      {
        name: "Firing Wild",
        levels: [
          {
            diceCost: [3],
            description:
              "Choose one: Deal 1 damage to each adjacent enemy; -or- deal 1 damage to up to 3 enemies within range; -or- deal 1 damage to up to 2 enemies you can see beyond your maximum range.",
          },
          {
            diceCost: [5],
            description:
              "5+: Choose two instead.",
          },
          {
            diceCost: [8],
            description:
              "8+: Deal 2 damage instead of 1.",
          },
        ],
      },
      {
        name: "Kneecapper",
        levels: [
          {
            diceCost: [4],
            description:
              "This is a Gunslinger Action. Choose one or two enemies within range. Deal 1 damage and give 2 Fatigue tokens to each target.",
          },
        ],
      },
    ],
  },
  {
    key: "27",
    parentArchetypeName: "Gunkata",
    name: "Crosshair",
    minRange: 4,
    maxRange: 5,
    ability: {
      description:
        "Whenever you deal 3 or more damage to an enemy in a single hit, they gain 1 Weakness token and you gain 1 Power token.",
    },
    actions: [
      {
        name: "Take Aim",
        levels: [
          {
            diceCost: [1],
            description:
              "This is a Gunslinger Action. Your next damage-dealing Action is Unblockable by Armor, Iron Tokens, and Shields.",
          },
        ],
      },
      {
        name: "Headshot",
        levels: [
          {
            diceCost: [6],
            description:
              "Deal 5 damage to an enemy within range. Usable once per Round.",
          },
        ],
      },
    ],
  },
{
    key: "28",
    parentArchetypeName: "Gunkata",
    name: "Fullmetal",
    minRange: 3,
    maxRange: 6,
    ability: {
      description: "At the start of your turn, choose your Ammo: Incendiary, Toxin, or Tracer. You have the chosen Ammo effect until your next turn.\n- Incendiary: After each damage-dealing Action you perform, give each enemy dealt damage by that Action 1 Burning token.\n- Toxin: After each damage-dealing Action you perform, give each enemy dealt damage by that Action 1 Weakness token.\n- Tracer: You can see and target enemies through Fog and Walls. You have +2 maximum Range.",
    },
    actions: [
      {
        name: "Bombardment",
        levels: [
          {
            diceCost: [5],
            description: "This is a Gunslinger Action. Place a Trap into any space within range. Then, deal 2 damage to each enemy adjacent to, or on, that Trap.",
          },
        ],
      },
      {
        name: "Bazooka",
        levels: [
          {
            diceCost: [7],
            description: "Deal 4 damage to an enemy within range, then deal 1 damage and give 2 Burning tokens to an enemy adjacent to you.",
          },
        ],
      },
    ],
  },
  {
    key: "29",
    parentArchetypeName: "Gunkata",
    name: "Quickdraw",
    minRange: 2,
    maxRange: 3,
    ability: {
      description: "Add a d6 to your Action Dice.\nIf an enemy discards your Challenge token using an enemy Action or Ability, the enemy who held the token gains 2 Fatigue tokens.",
    },
    actions: [
      {
        name: "Point Blank Shot",
        levels: [
          {
            diceCost: [1],
            description: "Push 1 and deal 1 damage to an adjacent enemy.",
          },
          {
            diceCost: [4],
            description: "4+: Instead, Push 3 and deal 3 damage.",
          },
        ],
      },
      {
        name: "Showdown",
        levels: [
          {
            diceCost: [4],
            description: "This is a Gunslinger Action. Challenge an enemy within range. If they take the next turn for their side, they cannot discard your Challenge before the end of that turn. If they do not, you deal 3 damage to them.\nUsable once per turn. Unblockable by Shields.",
          },
        ],
      },
    ],
  },
  {
    key: "30",
    parentArchetypeName: "Gunkata",
    name: "Ricochet",
    minRange: 2,
    maxRange: 5,
    ability: {
      description:
        "After each Action you perform, you may choose one: deal 1 damage to one enemy within range that was not targeted by that Action; -or- replace one obstacle you can see with Rubble.",
    },
    actions: [
      {
        name: "Trick Shot",
        levels: [
          {
            diceCost: [3],
            description:
              "Choose one obstacle within range. Destroy it, then deal 2 damage to an enemy within Range 1-3 of that obstacle.",
          },
          {
            diceCost: [6],
            description:
              "6: Then, deal 2 damage to another enemy within Range 1-3 of that first enemy.",
          },
          {
            diceCost: [9],
            description:
              "6: Then, deal 2 damage to a third enemy within Range 1-3 of that second enemy.",
          },
        ],
      },
      {
        name: "Scatter Shot",
        levels: [
          {
            diceCost: [4],
            description:
              "This is a Gunslinger Action. Place Rubble into a space within range. Then, each enemy on or adjacent to that Rubble takes 1 damage and is pushed 3 spaces away from that Rubble.",
          },
        ],
      },
    ],
  },
  {
    key: "31",
    parentArchetypeName: "Phantom",
    name: "Aura",
    minRange: 1,
    maxRange: 3,
    ability: {
      description:
        "At the start of your turn, you gain Shield 3.\nAfter an enemy within range damages or breaks an ally's Shield, or has their own Shield damaged or broken, you may Push 1 or Pull 1 to that enemy.\nAfter a Shield within range breaks, you gain 1 Power token.",
    },
    actions: [
      {
        name: "Aura Surge",
        levels: [
          {
            otherCost: ["4+ -or- 1 Poltergeist Token:"],
            description: "Choose one: an ally within range gains Shield 3; -or- Remove up to 4 points of Shield from 1 enemy within range. If this breaks their Shield, deal 2 damage to them.",
          },
        ],
      },
    ],
  },
  {
    key: "32",
    parentArchetypeName: "Phantom",
    name: "Crying",
    minRange: 1,
    maxRange: 4,
    ability: {
      description:
        "At the start of your turn, give 1 Weakness token to all enemies within range.\nAt the end of your turn, Challenge an enemy within range and give them one Weakness token.\nIf an enemy discards your Challenge token using an enemy Action or Ability, the enemy who held it gains 3 Burning tokens.",
    },
    actions: [
      {
        name: "Banshee's Wail",
        levels: [
          {
            diceCost: [6],
            description:
              "All enemies within range gain 1 Weakness token and take 2 damage.\nAll Traps, Pits, and Walls within range become Rubble.",
          },
        ],
      },
    ],
  },
  {
    key: "33",
    parentArchetypeName: "Phantom",
    name: "Puppet's",
    minRange: 1,
    maxRange: 3,
    ability: {
      description:
        "After each space you move using Free Movement, you may Move 1 to one ally or obstacle within range. Obstacles you move with this Ability become Rubble.\nAt the end of your turn, each enemy that moved this turn takes 1 damage, and each ally that moved this turn heals 2.",
    },
    actions: [
      {
        name: "Pull The Strings",
        levels: [
          {
            diceCost: [2],
            description: "Target an enemy or ally you can see. Pull them 3.",
          },
          {
            diceCost: [4],
            description: "4+: Target an enemy or ally within range. Push them 3.",
          },
          {
            diceCost: [4],
            description: "7+: Target an enemy or ally within range. Choose one: Push them up to 4; -or- Pull them up to 4.",
          },
        ],
      },
    ],
  },
  {
    key: "34",
    parentArchetypeName: "Phantom",
    name: "Spirit",
    minRange: 1,
    maxRange: 3,
    ability: {
      description:
        "You and your Copies do not take damage from Pits or Traps.\nYou and your Copies treat Walls as if they were Rubble.\nAfter each space of Free Movement you do, any number of your Copies may Move 1.",
    },
    actions: [
      {
        name: "Now You See Me...",
        levels: [
          {
            diceCost: [1],
            description: "Place a Copy into an empty space within range.",
          },
          {
            diceCost: [3],
            description: "3+: Place a Copy into an empty space within range.",
          },
          {
            diceCost: [5],
            description: "5+: Place a Copy into an empty space within range.",
          },
          {
            diceCost: [7],
            description: "7+: Each of your Copies may Move up to 3.",
          },
        ],
      },
      {
        name: "...Now You Don't",
        levels: [
          {
            otherCost: ["Free"],
            description:
              "Swap spaces with one of your Copies. Usable once per turn.",
          },
        ],
      },
    ],
  },
  {
    key: "35",
    parentArchetypeName: "Phantom",
    name: "Vortex",
    minRange: 1,
    maxRange: 4,
    ability: {
      description:
        "You do not take damage from Pits.\nWhen you are standing on a Pit, every other Pit counts as an adjacent space you can move to. Your range is still calculated only from the space you are currently standing in.",
    },
    actions: [
      {
        name: "Wormhole",
        levels: [
          {
            diceCost: [1],
            description: "Place a Pit into your own space.",
          },
          {
            diceCost: [4],
            description: "4+: Place 1 Pit into an empty space you can see.",
          },
        ],
      },
      {
        name: "Black Hole",
        levels: [
          {
            diceCost: [3],
            description: "Target 1 empty space within range. Place a Pit into that space, then target someone within range and Pull them 2 towards the Pit.",
          },
        ],
      },
    ],
  },
  {
    key: "36",
    parentArchetypeName: "Punk",
    name: "Brawling",
    minRange: 1,
    maxRange: 1,
    ability: {
      description:
        "At the end of each turn you took damage, you gain Shield 2.\nAfter your Shield absorbs, you gain 1 Power token.",
    },
    actions: [
      {
        name: "Tough It Out",
        levels: [
          {
            diceCost: [3],
            description: "Pay 1 HP, then gain a 3 point Shield.",
          },
          {
            diceCost: [9],
            description: "9+: You instead pay 2 HP and instead gain a 7-point Shield.",
          },
        ],
      },
      {
        name: "Jab",
        levels: [
          {
            otherCost: ["Reduce your Shield's Value by 2"],
            description: "You cannot use Jab unless you have a Shield with value 2+. Push 1 and deal 1 damage to an adjacent enemy. Usable once per turn.",
          },
        ],
      },
    ],
  },
  {
    key: "37",
    parentArchetypeName: "Punk",
    name: "Flashy",
    minRange: 1,
    maxRange: 1,
    ability: {
      description:
        "After you roll your Action Dice, you may combine two of your numbers into a single, larger number. Then, you may split one of your numbers in half (one rounded up, the other rounded down). You cannot split a 1.",
    },
    actions: [
      {
        name: "Show Off",
        levels: [
          {
            otherCost: ["X"],
            description:
              "Choose X: Move 1; -or- Pull 1 to an enemy you can see; -or- deal 1 damage to an enemy within range; -or- give 1 Burning token to an enemy within range; -or- give 1 Weakness token to an enemy within range; -or- give 1 Fatigue token to an enemy within range; -or- Challenge an enemy within range; -or- Push 1 to an enemy within range; -or- gain 1 Iron token; -or- gain 1 Power token; -or- gain 1 Speed token; -or- heal 1; -or- gain Shield 1. Usable once per turn.",
          },
        ],
      },
    ],
  },
  {
    key: "38",
    parentArchetypeName: "Punk",
    name: "Knockdown",
    minRange: 1,
    maxRange: 1,
    ability: {
      description: "After you take damage from an Action, you deal 1 damage to each enemy that dealt damage to you. If that enemy holds your Challenge, you deal 2 damage to them instead.",
    },
    actions: [
      {
        name: "Slugfest",
        levels: [
          {
            otherCost: ["Free"],
            description:
              "Move 1, then Challenge an enemy within range, then they deal 1 damage to you. Usable once per turn.",
          },
        ],
      },
    ],
  },
  {
    key: "39",
    parentArchetypeName: "Punk",
    name: "Mad",
    minRange: 1,
    maxRange: 2,
    ability: {
      description: "At the start of your turn, choose a Weapon: Club, Knife, or Pistol. You have the chosen Weapon's effect until your next turn.\n- Club: After each damage-dealing Action you perform, give each enemy dealt damage by that Action one Fatigue token.\n- Knife: Your Actions and Abilities are Unblockable by Armor and Tokens.\n- Pistol: You have +3 maximum Range.",
    },
    actions: [
      {
        name: "Weapon Throw",
        levels: [
          {
            diceCost: [2],
            description:
              "Deal 1 damage and give 1 Burning Token to an enemy you can see, then Disable your current Weapon until your next turn.",
          },
        ],
      },
      {
        name: "Slice & Smash",
        levels: [
          {
            diceCost: [2],
            description:
              "Deal 1 damage to  up to 2 enemies within range.",
          },
          {
            diceCost: [5],
            description:
              "5+: Deal 2 damage and Push 1 instead.",
          },
          {
            diceCost: [8],
            description:
              "8+: Deal 3 damage and Push 2 instead.",
          },
          {
            diceCost: [11],
            description:
              "11+: Deal 4 damage and Push 3 instead.",
          },
        ],
      },
    ],
  },
  {
    key: "40",
    parentArchetypeName: "Punk",
    name: "Taunting",
    minRange: 1,
    maxRange: 1,
    ability: {
      description:
        "After you take damage, you gain 1 Iron token.\nAfter you take damage from an enemy with your Challenge, you may Move 1. If an enemy discards your Challenge token using an Action or Ability, you gain 2 Iron tokens.",
    },
    actions: [
      {
        name: "Is That All You Got?",
        levels: [
          {
            diceCost: [1],
            description: "Challenge an enemy you can see. You gain 1 Iron token.",
          },
          {
            diceCost: [6],
            description: "6+: Challenge another enemy you can see, then gain 2 Iron tokens and heal 2.",
          },
          {
            diceCost: [12],
            description: "12+: Challenge a third enemy you can see, then give each of those enemies 3 Weakness tokens and Push 2.",
          },
        ],
      },
      {
        name: "Not Good Enough",
        levels: [
          {
            otherCost: ["Your Challenge Token"],
            description:
              "This Action costs your CHallenge token held by an enemy within range. You must discard one such token to pay for Not Good Enough. Target the enemy who held the Challenge Token you spent to pay for Not Good Enough. Give them 2 Weakness tokens. Usable once per turn.",
          },
        ],
      },
    ],
  },
  {
    key: "41",
    parentArchetypeName: "Teacher",
    name: "Patient",
    minRange: 1,
    maxRange: 1,
    ability: {
      description:
        "At the end of your turn, your Speed tokens become Iron tokens.\nYou may only take one Action per turn.\nYour Action Pool does not empty between Turns or Rounds.",
    },
    actions: [
      {
        name: "Waiting Game",
        levels: [
          {
            otherCost: ["X"],
            description:
              "Add X+1 to your Action Pool. Then, you may move one space.You can only use Waiting Game during enemy turns.",
          },
        ],
      },
    ],
  },
  {
    key: "42",
    parentArchetypeName: "Teacher",
    name: "Elder",
    minRange: 1,
    maxRange: 2,
    ability: {
      description:
        "The cost of this Stance's Unique Actions are reduced by 1 (to a minimum of 1+ or 2 tokens).\nOnce per turn, during your turn, you may use any Unique Action you know, from among all of your Stances, for free. It does not cost any tokens or numbers to use. If your free Action is a Tiered Action, you perform it as if you spent a 7.",
    },
    actions: [],
  },
  {
    key: "43",
    parentArchetypeName: "Teacher",
    name: "Mastermind",
    minRange: 0,
    maxRange: 0,
    ability: {
      description:
        "You cannot perform Actions. Instead, you spend your numbers on your allies, making them perform Actions for you.\nEach Action you take uses an ally's current location, range, and Stance bonuses as if they'd taken that Action themselves. You can only give Actions to allies you can see.\nAfter each Action an ally performs during your turn, you may move 1 space.",
    },
    actions: [],
  },
  {
    key: "44",
    parentArchetypeName: "Teacher",
    name: "Motivating",
    minRange: 1,
    maxRange: 2,
    ability: {
      description:
        "At the end of your turn, allies within range heal, and you gain an Inspired token.",
    },
    actions: [
      {
        name: "You Can Do It!",
        levels: [
          {
            diceCost: [4],
            description:
              "Choose an ally within range. They choose two: They heal; they move two spaces; they gain a copy of a token they hold; or they discard one token they hold.",
          },
        ],
      },
    ],
  },
  {
    key: "45",
    parentArchetypeName: "Teacher",
    name: "Training",
    minRange: 1,
    maxRange: 1,
    ability: {
      description:
        "At the end of your turn, give an ally one Training token.\nTraining Token: Before performing an Action, you may spend a Training token to increase all numbers listed in that Action by 1, including its cost. You may only spend 1 Training token per turn.",
    },
    actions: [
      {
        name: "Watch Closely",
        levels: [
          {
            diceCost: [3],
            description:
              "You gain one Training Token. If you spend it before the end of this turn, give one Training Token to an ally.",
          },
        ],
      },
    ],
  },
  {
    key: "46",
    parentArchetypeName: "Trickster",
    name: "Caged",
    minRange: 1,
    maxRange: 1,
    ability: {
      description: "Adjacent enemies cannot gain or spend Speed tokens.",
    },
    actions: [
      {
        name: "Welcome To My Maze",
        levels: [
          {
            diceCost: [2],
            description:
              "Deal 1 damage to one enemy outside of your Range.\nThen, pull them three spaces.",
          },
        ],
      },
    ],
  },
  {
    key: "47",
    parentArchetypeName: "Trickster",
    name: "Mysterious",
    minRange: 1,
    maxRange: 2,
    ability: {
      description:
        "At the start of your turn, place a Fog obstacle into your space.\nWhile you stand in Fog, your maximum range is doubled.",
    },
    actions: [
      {
        name: "Ghost Walk",
        levels: [
          {
            tokenCost: [
              {
                number: 3,
                tokenType: Token.Speed,
              },
            ],
            description:
              "Place a Fog obstacle into an empty space within range.\nThen, teleport to a Fog obstacle within range.",
          },
          {
            tokenCost: [
              {
                number: 3,
                tokenType: Token.Iron,
              },
            ],
            description:
              "Place a Fog obstacle into an empty space within range.\nThen, teleport to a Fog obstacle within range.",
          },
        ],
      },
    ],
  },
  {
    key: "48",
    parentArchetypeName: "Trickster",
    name: "Illusion",
    minRange: 1,
    maxRange: 3,
    ability: {
      description:
        "After an enemy deals damage to you while within range of at least\none of your Copies, you deal 1 damage to them. If they are within range of three or more Copies, you deal 2 damage to them instead.\nYou may spend your Copies as Iron tokens.",
    },
    actions: [
      {
        name: "Where Are You Looking?",
        levels: [
          {
            diceCost: [3],
            description: "Place 2 Copies into empty spaces within range.",
          },
          {
            diceCost: [6],
            description: "Place 2 more Copies into empty spaces within range.",
          },
        ],
      },
    ],
  },
  {
    key: "49",
    parentArchetypeName: "Trickster",
    name: "Hidden",
    minRange: 1,
    maxRange: 3,
    ability: {
      description:
        "You may move through Walls as though they were empty spaces.\nYou can see and target enemies through Walls.",
    },
    actions: [
      {
        name: "Sudden Strike",
        levels: [
          {
            tokenCost: [
              {
                number: 3,
                tokenType: Token.Iron,
              },
            ],
            description: "Deal 2 damage to an enemy within range.",
          },
        ],
      },
    ],
  },
  {
    key: "50",
    parentArchetypeName: "Trickster",
    name: "Whip",
    minRange: 2,
    maxRange: 5,
    ability: {
      description:
        "Your Throw Actions target one person within range.\nWhen you Throw or Grapple an enemy, they take 2 damage.",
    },
    actions: [
      {
        name: "Grapple Hook",
        levels: [
          {
            diceCost: [5],
            description: "Teleport to any empty space within range.",
          },
        ],
      },
    ],
  },
  {
    key: "51",
    parentArchetypeName: "Underdog",
    name: "Collateral",
    minRange: 1,
    maxRange: 2,
    ability: {
      description: "After you destroy an obstacle, you gain one Basic token of your choice.",
    },
    actions: [
      {
        name: "Roughhousing",
        levels: [
          {
            diceCost: [3],
            description:
              "Destroy an obstacle within range, then choose one: Teleport to that obstacle's space; deal 1 damage to each enemy adjacent to the destroyed obstacle; or destroy another obstacle within range.\nYou can spend 2 Basic Tokens to choose a second option from the list, or 3 Basic Tokens to choose all three.",
          },
        ],
      },
    ],
  },
  {
    key: "52",
    parentArchetypeName: "Underdog",
    name: "Distracting",
    minRange: 1,
    maxRange: 2,
    ability: {
      description:
        "After an enemy deals damage to you, if they have no Weakness tokens, give that enemy one Weakness token.",
    },
    actions: [
      {
        name: "Flare",
        levels: [
          {
            diceCost: [1],
            tokenCost: [
              {
                number: 2,
                tokenType: Token.Basic,
              },
            ],
            description:
              "Flare can be used as either a Simple or Token Action.\nMove one space, then give one Weakness token to one enemy within range.",
          },
        ],
      },
    ],
  },
  {
    key: "53",
    parentArchetypeName: "Underdog",
    name: "Eye of the ...",
    minRange: 1,
    maxRange: 1,
    ability: {
      description: "At the start of your turn, you gain a Bonus of your choice.",
    },
    actions: [
      {
        name: "Thrill of the Fight",
        levels: [
          {
            diceCost: [3],
            description:
              "Target an adjacent enemy, then choose one: Challenge them; you deal 2 damage to them; or give them 2 Burning tokens.\nYou can spend 2 Basic Tokens to choose a second option from the list, or 3 Basic Tokens to choose all three.",
          },
        ],
      },
    ],
  },
  {
    key: "54",
    parentArchetypeName: "Underdog",
    name: "Lucky",
    minRange: 1,
    maxRange: 1,
    ability: {
      description: "You have Armor.\nAdd a d4 to your Action Dice.",
    },
    actions: [
      {
        name: "Just What I Needed",
        levels: [
          {
            diceCost: [3],
            description:
              "Choose one: You gain 2 Basic tokens; you teleport two or three spaces; or you heal.\nYou can spend 2 Basic Token to choose a second option from the list, or 3 Basic Tokens to choose all three.",
          },
        ],
      },
    ],
  },
  {
    key: "55",
    parentArchetypeName: "Underdog",
    name: "Misfortune's",
    minRange: 1,
    maxRange: 3,
    ability: {
      description:
        "When you would take damage from a Trap, deal that damage to an enemy within range instead. If no enemies are within range, gain one Power token instead.",
    },
    actions: [
      {
        name: "Bad Luck",
        levels: [
          {
            diceCost: [1],
            tokenCost: [
              {
                number: 3,
                tokenType: Token.Basic,
              },
            ],
            description:
              "Bad Luck can be used as either a Simple or Token Action.\nPlace a Trap into a space within range.",
          },
        ],
      },
    ],
  },
  {
    key: "56",
    parentArchetypeName: "Wardancer",
    name: "Forbidden",
    minRange: 1,
    maxRange: 2,
    ability: {
      description:
        "At the start of your turn, you take 2 damage. This damage cannot drop you below 1 HP on your current Health Bar.",
    },
    actions: [],
  },
  {
    key: "57",
    parentArchetypeName: "Wardancer",
    name: "Lightning",
    minRange: 1,
    maxRange: 1,
    ability: {
      description: "After you deal damage, you gain 1 Speed token.",
    },
    actions: [
      {
        name: "Deadly Dance",
        levels: [
          {
            diceCost: [2],
            description: "Teleport 2 spaces. Deal 1 damage to an enemy within range.",
          },
          {
            diceCost: [5],
            description: "Teleport 2 spaces. Deal 2 damage to an enemy within range.",
          },
          {
            diceCost: [8],
            description: "Teleport 2 spaces. Deal 2 damage to an enemy within range.",
          },
        ],
      },
    ],
  },
  {
    key: "58",
    parentArchetypeName: "Wardancer",
    name: "Overwhelming",
    minRange: 1,
    maxRange: 1,
    ability: {
      description:
        "You ignore Armor when dealing damage.\nWhen an enemy hits you with an Action, you may spend a Power token to deal 1 damage to them and push them 1 space.",
    },
    actions: [
      {
        name: "Power Strike",
        levels: [
          {
            diceCost: [4],
            description: "Deal 2 damage to an enemy within range. You gain 2 Power tokens.",
          },
          {
            diceCost: [8],
            description: "Deal 4 damage and gain 4 Power tokens instead.",
          },
        ],
      },
    ],
  },
  {
    key: "59",
    parentArchetypeName: "Wardancer",
    name: "Relentless",
    minRange: 1,
    maxRange: 1,
    ability: {
      description:
        "When you deal damage to an enemy, immediately push them one space and then move into the empty space they left.\nIf you damage multiple enemies at the same time, push all of them one space, then move into one of the empty spaces they left.",
    },
    actions: [
      {
        name: "Rush Down",
        levels: [
          {
            diceCost: [3],
            description:
              "Deal 1 damage to an enemy within range. Then, deal 1 damage to an enemy within range.",
          },
          {
            diceCost: [5],
            description: "Then, deal 1 damage to an enemy within range.",
          },
          {
            diceCost: [7],
            description: "Then, deal 1 damage to an enemy within range.",
          },
        ],
      },
    ],
  },
  {
    key: "60",
    parentArchetypeName: "Wardancer",
    name: "Weightless",
    minRange: 1,
    maxRange: 1,
    ability: {
      description:
        "All spaces are Empty spaces to you.\nEdges cannot remove you from play.\nRubble does not make you discard Speed tokens.\nTraps deal no damage to you.",
    },
    actions: [
      {
        name: "Effortless",
        levels: [
          {
            diceCost: [4],
            description: "Teleport to any space you can see.",
          },
          {
            diceCost: [7],
            description: "Choose an ally. They may teleport to any space they can see.",
          },
        ],
      },
    ],
  },
  {
    key: "61",
    parentArchetypeName: "Winterblossom",
    name: "Crystal",
    minRange: 1,
    maxRange: 2,
    ability: {
      description:
        "When one of your Copies is destroyed, it deals 1 damage to everyenemy adjacent to it.",
    },
    actions: [
      {
        name: "Splinter",
        levels: [
          {
            diceCost: [3],
            description:
              "Place a Copy of you into any space within range. Then, deal 1 damage to every enemy adjacent to that Copy.",
          },
          {
            diceCost: [6],
            description:
              "Place a Copy of you into any space within range. Then, deal 1 damage to every enemy adjacent to that Copy.",
          },
        ],
      },
      {
        name: "Shatter",
        levels: [
          {
            otherCost: ["Free"],
            description:
              "Shatter is a Token Action that costs nothing.\nDestroy one of your Copies. Give one Weakness token to an enemy that was within range of that Copy.",
          },
        ],
      },
    ],
  },
  {
    key: "62",
    parentArchetypeName: "Winterblossom",
    name: "Frozen",
    minRange: 1,
    maxRange: 1,
    ability: {
      description:
        "After an enemy moves into an empty space adjacent to you, you may give them one Weakness token.",
    },
    actions: [
      {
        name: "Exploit Weakness",
        levels: [
          {
            diceCost: [3],
            description:
              "Choose one enemy within range. Give them one Weakness token and deal 2 damage to them.",
          },
        ],
      },
    ],
  },
  {
    key: "63",
    parentArchetypeName: "Winterblossom",
    name: "Precision",
    minRange: 1,
    maxRange: 2,
    ability: {
      description:
        "Your Actions deal +1 damage to enemies with Armor or Shields.\nWhen you target an enemy with an Action, they must discard 1 Iron token.",
    },
    actions: [
      {
        name: "Perfect Strike",
        levels: [
          {
            diceCost: [3, 3],
            description:
              "This Action costs two numbers to perform.\nDeal 4 damage to an enemy within range. This damage cannot be reduced by Armor and ignores Shields. Tokens and Abilities cannot be used in response to Perfect Strike.",
          },
        ],
      },
    ],
  },
  {
    key: "64",
    parentArchetypeName: "Winterblossom",
    name: "Pressure",
    minRange: 1,
    maxRange: 2,
    ability: {
      description:
        "At the start of your turn, give one Weakness token to every enemy within range.",
    },
    actions: [
      {
        name: "Apply Pressure",
        levels: [
          {
            diceCost: [5],
            description:
              "Choose one enemy within range. Deal damage to them equal to the number of tokens they hold.\nYou can only use Apply Pressure once per turn.",
          },
        ],
      },
    ],
  },
  {
    key: "65",
    parentArchetypeName: "Winterblossom",
    name: "Reflected",
    minRange: 2,
    maxRange: 3,
    ability: {
      description:
        "At the start of your turn, you may place up to three Walls into empty adjacent spaces.\nYou can see and target enemies through Walls.",
    },
    actions: [
      {
        name: "Walled In",
        levels: [
          {
            diceCost: [3],
            description: "Place 3 Walls into empty spaces within Range 1-3.",
          },
        ],
      },
      {
        name: "Icicle Fall",
        levels: [
          {
            diceCost: [3],
            description: "Deal 1 damage to each enemy adjacent to any Walls.",
          },
        ],
      },
    ],
  },
];
export const builds = [
  {
    key: "a",
    name: "Agile",
    description: "At the start of your turn you gain 2 speed tokens",
  },
  {
    key: "o",
    name: "Overpowering",
    description: "At the start of your turn, you gain 1 Power token",
  },
  {
    key: "t",
    name: "Tough",
    description: "At the start of your turn, you gain 1 Iron token",
  },
  {
    key: "b",
    name: "Bumbling",
    description: "At the end of any turn you took damage, you may move 1 space",
  },
  {
    key: "s",
    name: "Scheming",
    description:
      "At either the start or the end of your turn, you may place one Trap into an adjacent space",
  },
  {
    key: "m",
    name: "Mysterious",
    description:
      "At the start of your turn, you may place a Copy or Fog obstacle into an empty adjacent space",
  },
];

// TODO endless alternate rules version
export const reinforceAction = {
  name: "Reinforcements",
  levels: [
    {
      description: "Heal, then place a Stooge anywhere in play.",
      diceCost: [1],
    },
  ],
};

// NOTE: converted with "mapActions" in import-script.mjs
export let basicActions = [
  {
    title: "Movement",
    cost: "X",
    description: "<p><strong>X</strong> You gain X Speed tokens.</p>",
  },
  {
    title: "Damage",
    cost: "1+, 3+, 5+, 7+, 9+",
    description:
      "<p><strong>1+</strong> Choose one enemy within your range. Deal 1 damage to them</p><p><strong>3+</strong> Deal 2 damage instead.</p><p><strong>5+</strong> Deal 3 damage instead, and push them 1 space away.</p><p><strong>7+</strong> Deal 4 damage instead, and push them 1 more space.</p><p><strong>9+</strong> Deal 5 damage instead, and push them 1 more space.</p>",
  },
  {
    title: "Throw",
    cost: "X",
    description:
      "<p><strong>X</strong> Choose an adjacent enemy or ally. Push them up to X spaces.</p>",
  },
  {
    title: "Grapple",
    cost: "X",
    description:
      "<p><strong>X</strong> Choose an enemy or ally within range. Pull them up to X spaces.</p>",
  },
  {
    title: "Open The Path",
    cost: "1+, 4+, 8+",
    description:
      "<p><strong>1+</strong> Choose an obstacle in range and destroy it.</p><p><strong>4+</strong> Also destroy every obstacle adjacent to it.</p><p><strong>8+</strong> Also destroy every obstacle adjacent to those obstacles.</p>",
  },
  {
    title: "A Challenger Approaches",
    cost: "1+",
    description: "<p><strong>1+</strong> Challenge an enemy within Range 1 - 4.</p>",
  },
  {
    title: "Put It Out!",
    cost: "2+, 4+, 7+",
    description:
      "<p><strong>2+</strong> Remove one token from someone within range.</p><p><strong>4+</strong> Remove one more token from them.</p><p><strong>7+</strong> Remove one more token from them.</p>",
  },
  {
    title: "Bring it On!",
    cost: "4+",
    description: "<p><strong>4+</strong> Challenge any number of enemies you can see.</p>",
  },
  {
    title: "Rescue",
    cost: "5+",
    description:
      "<p><strong>5+</strong> Chose an ally within range with zero HP, or an ally who is not in play. That ally heals. If that ally is not in play, they return to play in an empty space of their choice.</p>",
  },
];
