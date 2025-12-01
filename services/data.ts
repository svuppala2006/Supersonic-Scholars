import { PageContent } from '../types';

export const PAGES: PageContent[] = [
  {
    id: 'fundamentals',
    title: 'Game Fundamentals',
    description: 'The core elements that define the standard game of Soccar.',
    content: [
      {
        sectionTitle: 'Kickoff',
        body: 'The start and restart of the game. It is a crucial moment where initial speed, boost management, and a controlled hit on the ball can determine early possession.',
        tip: 'Coordinate with your teammates to decide who goes for the ball and who gathers boost, as this prevents double commitment.',
      },
      {
        sectionTitle: 'Boost Pads',
        body: 'Hexagonal spots on the arena floor that grant a small amount of boost (12 units) upon collection. They are vital for maintaining speed and boost reserves throughout the match.',
        tip: 'Learn to "boost pad starve" the opponent by collecting the path of small pads as you rotate, even if your boost tank is full.',
      },
      {
        sectionTitle: 'Goal & Ball',
        body: 'The target zone where the ball must completely cross the line to score. The ball is a spherical object with physics manipulated by car impact.',
        tip: 'When defending, position your car to cover the most direct path to the goal, often near the back post.',
      },
      {
        sectionTitle: 'Demos (Demolitions)',
        body: "The act of destroying an opponent's car by hitting them at Supersonic Speed. The demolished player instantly respawns near their goal after a short delay.",
        tip: 'Demos are most effective when they disrupt a defender\'s rotation or clear an opponent from the path of a pass or shot.',
      }
    ],
    quizzes: [
      {
        id: 'fund_q1',
        question: 'During a standard kickoff, all players should rush the ball simultaneously for the best chance of scoring.',
        type: 'boolean',
        options: [
            { id: 'true', text: 'True' },
            { id: 'false', text: 'False' }
        ],
        correctAnswerId: 'false'
      },
      {
        id: 'fund_q2',
        question: 'What is the primary objective of a good kickoff?',
        type: 'multiple',
        options: [
            { id: 'a', text: 'Demolishing an opponent.' },
            { id: 'b', text: 'Securing possession or directing the ball into a favorable position.' },
            { id: 'c', text: 'Gathering the corner boost pad.' },
            { id: 'd', text: 'Faking a shot and rotating back.' }
        ],
        correctAnswerId: 'b'
      },
      {
        id: 'fund_q3',
        question: 'How much boost does a small boost pad grant?',
        type: 'multiple',
        options: [
            { id: 'a', text: '25' },
            { id: 'b', text: '12' },
            { id: 'c', text: '33' },
            { id: 'd', text: '100' }
        ],
        correctAnswerId: 'b'
      }
    ]
  },
  {
    id: 'stats',
    title: 'Stats & Scoring',
    description: 'Explain how in-game points and statistics are earned and what they represent.',
    content: [
      {
        sectionTitle: 'Points Overview',
        body: 'Points are awarded for various actions (shots, clears, goals, saves) and serve as a general indicator of activity. However, they do not always measure overall impact perfectly.',
      },
      {
        sectionTitle: 'Key Metrics',
        body: 'Goals: Scored when the ball fully enters the net. Saves: Blocking a shot heading into your goal. Assists: Final pass leading to a goal. Demolition: Destroying an opponent.',
      },
      {
        sectionTitle: 'Advanced Scoring',
        body: 'Hat Trick: 3 goals in a match. Clear Ball: Hitting ball out of defensive zone. Center Ball: Hitting ball into opponent goal box.',
      }
    ],
    quizzes: [
      {
        id: 'stats_q1',
        question: 'A "Shot on Goal" is always given for any hit that sends the ball toward the opponent\'s net.',
        type: 'boolean',
        options: [
            { id: 'true', text: 'True' },
            { id: 'false', text: 'False' }
        ],
        correctAnswerId: 'false'
      },
      {
        id: 'stats_q2',
        question: 'Which of the following actions is not a recognized in-game statistical award?',
        type: 'multiple',
        options: [
            { id: 'a', text: 'Epic Save' },
            { id: 'b', text: 'Aerial Hit' },
            { id: 'c', text: 'Backflip Goal' },
            { id: 'd', text: 'Center Ball' }
        ],
        correctAnswerId: 'c'
      }
    ]
  },
  {
    id: 'cars',
    title: 'Car Specs & Hitboxes',
    description: 'Detail the concept of car hitboxes and how different cars are categorized.',
    content: [
      {
        sectionTitle: 'The Hitbox System',
        body: 'A car\'s visual appearance does not always match its actual hitbox size or shape. All cars fall into standardized hitbox categories.',
      },
      {
        sectionTitle: 'Common Presets',
        body: 'Octane: The most popular and versatile, tall but round. Fennec shares this hitbox. Dominus: Long and flat, good for aerial control. Breakout: Similar to Dominus but slightly different nose. Merc: Tallest and boxiest.',
      }
    ],
    quizzes: [
      {
        id: 'cars_q1',
        question: 'The Octane and Fennec have different in-game hitboxes due to their unique body shapes.',
        type: 'boolean',
        options: [
            { id: 'true', text: 'True' },
            { id: 'false', text: 'False' }
        ],
        correctAnswerId: 'false'
      },
      {
        id: 'cars_q2',
        question: 'Which car is known for having the tallest and boxiest hitbox, often utilized for defensive clears?',
        type: 'multiple',
        options: [
            { id: 'a', text: 'Dominus' },
            { id: 'b', text: 'Breakout' },
            { id: 'c', text: 'Octane' },
            { id: 'd', text: 'Merc' }
        ],
        correctAnswerId: 'd'
      }
    ]
  },
  {
    id: 'competitive',
    title: 'Competitive Play',
    description: 'The ranking system, playlists, and tournament structure.',
    content: [
      {
        sectionTitle: 'Ranks',
        body: 'Players earn Skill Rating (SR) to climb tiers: Bronze, Silver, Gold, Platinum, Diamond, Champion, Grand Champion, Supersonic Legend.',
      },
      {
        sectionTitle: 'Playlists',
        body: '1v1, 2v2 (Most popular), 3v3 (Standard), and 4v4 (Chaos). Each playlist has a separate rank.',
      }
    ],
    quizzes: [
      {
        id: 'comp_q1',
        question: 'A player\'s Competitive Rank is shared across all competitive playlists.',
        type: 'boolean',
        options: [
            { id: 'true', text: 'True' },
            { id: 'false', text: 'False' }
        ],
        correctAnswerId: 'false'
      },
      {
        id: 'comp_q2',
        question: 'What is the highest standard competitive rank a player can achieve?',
        type: 'multiple',
        options: [
            { id: 'a', text: 'Grand Champion' },
            { id: 'b', text: 'Platinum' },
            { id: 'c', text: 'Supersonic Legend' },
            { id: 'd', text: 'Diamond' }
        ],
        correctAnswerId: 'c'
      }
    ]
  },
  {
    id: 'modes',
    title: 'Gamemodes',
    description: 'Unique rules and objectives for the main extra game modes.',
    content: [
      {
        sectionTitle: 'Extra Modes',
        body: 'Hoops: Basketball style. Rumble: Random power-ups. Dropshot: Break floor tiles to score. Snowday: Hockey puck on ice.',
      }
    ],
    quizzes: [
      {
        id: 'mode_q1',
        question: 'The game mode "Dropshot" uses random power-ups to create scoring opportunities.',
        type: 'boolean',
        options: [
            { id: 'true', text: 'True' },
            { id: 'false', text: 'False' }
        ],
        correctAnswerId: 'false'
      },
      {
        id: 'mode_q2',
        question: 'Which game mode replaces the standard ball with a flat, sliding puck?',
        type: 'multiple',
        options: [
            { id: 'a', text: 'Hoops' },
            { id: 'b', text: 'Dropshot' },
            { id: 'c', text: 'Snowday' },
            { id: 'd', text: 'Rumble' }
        ],
        correctAnswerId: 'c'
      }
    ]
  },
  {
    id: 'mechanics',
    title: 'Core Mechanics',
    description: 'Fundamental and advanced car/ball control skills.',
    content: [
      {
        sectionTitle: 'Controller Mappings',
        body: 'Customizing bindings is recommended. Separating Air Roll and Powerslide from Boost is common for advanced play. Default settings are rarely optimal.',
      },
      {
        sectionTitle: 'Advanced Skills',
        body: 'Flip Resets, Ceiling Shots, and Wave Dashes are flashy, but basic aerials, recoveries, and power slide turns are more important for ranking up.',
      }
    ],
    quizzes: [
      {
        id: 'mech_q1',
        question: '"Mechanics" refers only to the basic movements of the car like driving and jumping.',
        type: 'boolean',
        options: [
            { id: 'true', text: 'True' },
            { id: 'false', text: 'False' }
        ],
        correctAnswerId: 'false'
      },
      {
        id: 'mech_q2',
        question: 'The most common advanced binding change involves moving which action to a more accessible button?',
        type: 'multiple',
        options: [
            { id: 'a', text: 'Drive Forward' },
            { id: 'b', text: 'Air Roll / Powerslide' },
            { id: 'c', text: 'Score Goal' },
            { id: 'd', text: 'Rear View' }
        ],
        correctAnswerId: 'b'
      }
    ]
  }
];