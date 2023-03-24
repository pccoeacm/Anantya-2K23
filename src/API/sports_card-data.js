const SportsCardData = [
  // {
  //   id: 1,
  //   event_name: "INSIDE EDGE (Boys)",
  //   date: "26/03/2023",
  //   time: "7:00 AM to 8:00 PM",
  //   venue: "PCCoE Collge Ground",
  //   short_description:
  //     "Get ready to witness the ultimate battle of skill, strategy, and sportsmanship at our upcoming cricket event!",
  //   detailed_description:
  //     "Step into the world of cricket and be amazed by the power, grace, and determination of these talented athletes! Get ready to witness the ultimate battle of skill, strategy, and sportsmanship at our upcoming cricket event! With fierce competition, thrilling moments, and non-stop excitement, this is one event that no cricket fan should miss. Join us and be a part of the action-packed experience that will leave you on the edge of your seat. Let's play ball!",
  //   Type: "Team of 7, Total 10 players",
  //   prize1: "3000",
  //   prize2: "2000",
  //   // prize3: "???",
  //   studn1: "Ajaykumar Shendage",
  //   scontact1: "8390833210",
  //   studn2: "Shantanu Yadav",
  //   scontact2: "7378932363",
  //   faculty: "Prof. Anand Birajdar",
  //   rule1: "Team of 7 (+3 Extra) players.",
  //   rule2: "Each team plays a match with 7 on each side",
  //   rule3: "ID Cards of all the players are compulsory.",
  //   rule4:
  //     "Team must be present 30 minutes prior to the scheduled time, if you fail to do so further decisions will be taken by the organizing committee and the decision will be final.",
  //   rule5: "Umpire’s decision will be final, arguments will not be entertained",
  //   rule6: "Each Innings will be of 5 overs (2,1,1,1)",
  //   fee: "Rs.200",
  //   image:
  //     "https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg",
  //   path: "/Inside_Edge_Boys",
  // },

  // {
  //   id: 2,
  //   event_name: "INSIDE EDGE (Girls)",
  //   date: "26/03/2023",
  //   time: "7:00 AM to 8:00 PM",
  //   venue: "PCCoE Collge Ground",
  //   short_description:
  //     "Join us as we celebrate the rise of young talent in the exciting world of girl's cricket!",
  //   detailed_description:
  //     "Join us as we celebrate the rise of young talent in the exciting world of girl's cricket! With passion, dedication, and raw skill on display, this event promises to be a showcase of the future stars of the game. From elegant strokes to agile fielding, witness the power and potential of these young athletes as they take on the field. Be a part of this unique and inspiring experience that celebrates girl power and the spirit of cricket. Let's support girls' cricket and watch them shine!",
  //   Type: "Team of 7, Total 10 players",
  //   prize1: "3000",
  //   prize2: "2000",
  //   // prize3: "???",
  //   studn1: "Shrutee Dahake",
  //   scontact1: "7757991161",
  //   studn2: "Rucha Kolte",
  //   scontact2: "7720902806",
  //   faculty: "Prof. Anand Birajdar",
  //   rule1: "Team of 7 (+3 Extra) players.",
  //   rule2: "Each team plays a match with 7 on each side",
  //   rule3: "ID Cards of all the players are compulsory.",
  //   rule4:
  //     "Team must be present 30 minutes prior to the scheduled time, if you fail to do so further decisions will be taken by the organizing committee and the decision will be final.",
  //   rule5: "Umpire’s decision will be final, arguments will not be entertained",
  //   rule6: "Each Innings will be of 5 overs (2,1,1,1)",
  //   fee: "Rs.200",
  //   image:
  //     "https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg",
  //   path: "/Inside_Edge_Girls",
  // },

  // {
  //   id: 3,
  //   event_name: "SUPA STRIKAS (Boys)",
  //   date: "26/03/2023",
  //   time: "7:00 AM to 6:00 PM",
  //   venue: "PCCoE Collge Ground",
  //   short_description:
  //     "With breathtaking dribbles, stunning goals, and fierce competition, this event promises to be an unforgettable showcase of athleticism and sportsmanship.",
  //   detailed_description:
  //     "Get ready to witness the beautiful game come alive with passion, skill, and excitement at our upcoming Football event! With breathtaking dribbles, stunning goals, and fierce competition, this event promises to be an unforgettable showcase of athleticism and sportsmanship. Join us and be a part of the action as the best football players in the game battle it out for supremacy on the field. From the roar of the crowds to the electric atmosphere, experience the excitement and intensity of football like never before. Let's play football and unite through the universal language of the sport!",
  //   Type: "Team of 7",
  //   prize1: "3000",
  //   prize2: "2000",
  //   // prize3: "???",
  //   studn1: "Aniket Chaudhar",
  //   scontact1: "9699110411",
  //   studn2: "Yash M. Salunke",
  //   scontact2: "8262807340",
  //   faculty: "Prof. Anand Birajdar",
  //   rule10: "Only first 16 teams will be considered (FCFS)",
  //   rule1: " Maximum no. of players will be 7.",
  //   rule2: "8 min per half, Total 16 mins + 4min(break)=20 mins.",
  //   rule3: "No Extra Time, Direct penalties in case of draw.",
  //   rule4: "Referee's decision will be the final decision.",
  //   rule5:
  //     "Penalties will be close goal post penalties(One foot should be kept grounded while taking the pen i.e. one step penalty)",
  //   rule6: "All matches will be in KNOCKOUT format.",
  //   fee: "Rs.200",
  //   image:
  //     "https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg",
  //   path: "/Supa_Strikas",
  // },

  // {
  //   id: 4,
  //   event_name: "DARE TO CROSS (Kabaddi Boys)",
  //   date: "26/03/2023",
  //   time: "3:00 PM to 6:00 PM",
  //   venue: "PCCoE Collge Ground",
  //   short_description:
  //     "Get ready to witness the ancient sport of Kabaddi come alive in a modern and exciting avatar!",
  //   detailed_description:
  //     "Get ready to witness the ancient sport of Kabaddi come alive in a modern and exciting avatar! With high-energy action, nail-biting moments, and incredible displays of strength and agility, our Kabaddi event is a must-attend for all sports enthusiasts. From powerful raids to daring tackles, experience the thrill of this contact sport that is both traditional and innovative. Come and cheer for your favorite team as they battle it out for supremacy on the mat. Let's kabaddi!",
  //   Type: "Team of 7",
  //   prize1: "4000",
  //   prize2: "2000",
  //   studn1: "Sachin Girwale",
  //   scontact1: "7499097779",
  //   studn2: "Sanskar Ghule",
  //   scontact2: "8767954367",
  //   faculty: "Prof. Anand Birajdar",
  //   rule1: "Maximum no. of players will be 7+3=10.",
  //   rule2:
  //     "Matches will be played according to the Kabaddi Federation of India Rules and Regulations.",
  //   rule3: "Players up to 85 kg weight are allowed to participate.",
  //   rule4:
  //     "Strictly no fights, intentional fouls on players will be entertained. Will result in direct disqualification of the entire team.",
  //   rule5:
  //     "Team will be given a bye in case the opponent fails to arrive on given reporting time",
  //   rule6: "All matches will be in KNOCKOUT format.",
  //   fee: "Rs.200",
  //   image:
  //     "https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg",
  //   path: "/Dare_To_Cross",
  // },

  {
    id: 5,
    event_name: "QUEEN'S GAMBIT (Chess)",
    date: "28/03/2023",
    time: "9:00 AM to 12:00 PM",
    venue: "PCCoE College Basement",
    short_description:
      "Enter the world of mind games and witness the ultimate battle of wits at our upcoming Chess event!",
    detailed_description:
      "Enter the world of mind games and witness the ultimate battle of wits at our upcoming Chess event! With strategic brilliance, tactical moves, and intellectual prowess, this event promises to be a showcase of the best Chess players in the game. From exciting opening gambits to thrilling endgame maneuvers, experience the excitement and intensity of Chess like never before. Join us and be a part of this thrilling and challenging competition that will leave you spellbound. Let's play Chess and test our mental limits!",
    Type: "Individual",
    prize1: "Prizes Worth Rs. 3000",
    prize2: "",
    studn1: "Harsh Borse",
    scontact1: "8208223321",
    studn2: "Aniket Choudhar",
    scontact2: "9699110411",
    faculty: "Prof. Anand Birajdar",
    rule1:
      "Classic Format (Knockout) will be of 10 mins with 0sec of increment.",
    rule2: "Top 16 will be promoted to round 2.",
    rule3: "In knockouts 16-8-4-2.",
    rule4: " In the case of a draw, the decision of organizers will be final.",
    rule5:
      "Strictly no fights, intentional fouls on players will be entertained. Will result in direct disqualification of the player.",
    rule6:
      "Player will be given a bye in case the opponent fails to arrive on given reporting time.",
    fee: "Rs.100",
    image: "./posters/QueensGambit.png",
    path: "/Queens_Gambit",
    formLink: "https://forms.gle/f5SnC8P1FjFscDFo6",
  },

  // {
  //   id: 6,
  //   event_name: "FINGER BILLIARDS (Carrom)",
  //   date: "23/03/2023",
  //   time: "9:00 AM to 12:00 PM",
  //   venue: "PCCoE Reading Hall",
  //   short_description:
  //     "Get ready to experience the thrill of precision and accuracy in the exciting game of Carrom!",
  //   detailed_description:
  //     "Get ready to experience the thrill of precision and accuracy in the exciting game of Carrom! With lightning-fast shots, strategic moves, and intense gameplay, our Carrom event promises to be a spectacle of skill and entertainment. From pocketing the Queen to scoring a perfect break, witness the excitement and competitiveness of this classic game. Join us and compete against the best players in the game or cheer for your favorite team. Let's strike it big and make every shot count at our Carrom event!",
  //   Type: "Team of 2",
  //   prize1: " 4000",
  //   studn1: "Rutuja Tallapalli",
  //   scontact1: "8177808419",
  //   studn2: "Hardik Patel",
  //   scontact2: "9370594670",
  //   faculty: "Prof. Anand Birajdar",
  //   rule1: " Every team must have 2 members.",
  //   rule2: "Teams will be selected on First Come First Serve Basis.",
  //   rule3: "Participants are expected to know the basic carrom rules.",
  //   rule4:
  //     "The partners shall sit opposite to each other, occupying all four sides.",
  //   rule5: "Rounds will be knockout based.",
  //   rule6: "Results will be based on points scored by winning maximum coins.",
  //   fee: "Rs.50",
  //   image:
  //     "https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg",
  //   path: "/Finger_Billiards",
  // },

  {
    id: 7,
    event_name: "THE FINAL SPRINTS (Girls)",
    date: "27/03/2023",
    time: "4:00 PM to 6:00 PM",
    venue: "PCCoE College Ground",
    short_description:
      "Feel the adrenaline rush as you witness the ultimate display of teamwork and speed at our upcoming girls' Relay Race event!",
    detailed_description:
      "Feel the adrenaline rush as you witness the ultimate display of teamwork and speed at our upcoming girls' Relay Race event! With precision baton passes, lightning-fast sprints, and heart-stopping finishes, this event promises to be an unforgettable showcase of athletic excellence. Cheer for your favorite team as they compete in a thrilling race to the finish line. Join us and witness the determination and grit of these young athletes as they push their limits to be the best. Let's support the girls' Relay Race and celebrate the power of teamwork and sportsmanship!",
    Type: "Team of 2",
    prize1: "Prizes Worth Rs. 3000",
    studn1: "Ajaykumar Shendage",
    scontact1: "8390833210",
    studn2: "Aniket Choudhar",
    scontact2: "9699110411",
    faculty: "Prof. Anand Birajdar",
    rule1: " Every team must have 4 members.",
    rule2:
      " A 100 m straight track will be there, 2 players at one end and 2 players at another end.",
    rule3:
      "Suppose A,B,C,D is a team. A,C are on the one end. B,D are on the other.",
    rule4:
      "A will start the race and run towards B, will give the stick to Player B. Then, Player B will run towards Player C and will give the stick to Player C. Similarly  Player C -> Player D.",
    rule5: "And Last, Player D will run towards the finish line.",
    rule6:
      "All players should follow proper sports attire(Shoes+sporty clothing).",
    fee: "Rs.200",
    image: "./posters/FinalSrpint.png",
    path: "/Final_Sprint",
    formLink: "https://forms.gle/vStn2snRMrtJca6t9",
  },
];

export default SportsCardData;
