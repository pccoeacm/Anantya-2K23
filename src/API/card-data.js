import { aboutBGM } from "../assets";
const cardData = [
	{
		id: 1,
		event_name: "Codigo 4.0",
		date: "",
		short_description:
			" Codigo comprises of two rounds with time limits of 1.5 and 2 hours respectively, testing participants' logic, data structures, and competitiveness. Teams are ranked by their code's score, and in case of a tie, the submission time for the final solution is considered.",
		detailed_description:
			"Codigo will put your sense of logic, competitiveness, and data structure to the test. It is a unique event with two rounds. The first round will have a 1.5-hour time limit, while the second round will have a 2-hour time limit. Your aptitude for logic and fundamental data structures will be tested in the first round, and your competitiveness and complex data structure skills will be tested in the second round. Each issue will have a fixed score, and the number of test cases that a team's submitted code passes will determine their performance. Teams will be ranked based on their score, and in case of ties, the time it took to submit the final solution that resulted in a higher score will be used to break the tie.",
		Type: "Team of 3 Individuals",
		prize1: "?",
		prize2: "??",
		prize3: "???",
		studn1: "Om Gupta",
		scontact1: "7020635160",
		studn2: "Bhushan Patil",
		scontact2: "9028239735",
		faculty: "Mr. Rahul Pitale",
		fcontact: "9420240035",
		rule1: "Team size: 3 individuals only.",
		rule2: "Number of teams -150 max.",
		rule3: "Rs. 90 Registration fee for non-PCCOEian.",
		rule4:
			"All departments are eligible to participate in the coding competition (FY to BE).",
		rule5:
			"All participants will get an e-certificate (participation certificate).",
		rule6:
			"At the end of the contest, the top 3 teams with the highest scores will be selected as winners.",
		image:
			"https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg",
		path: "/codigo",
	},

	{
		id: 2,
		event_name: "Webbit-2.0",
		date: "",
		short_description:
			"WebBit is all about web development. There will be two rounds. Technologies allowed are HTML, CSS, and JavaScript (the use of frameworks is allowed). From the second round, a winner and a runner-up will be declared based on unique and innovative designs",
		detailed_description:
			"This contest is about web development. There will be two rounds. Technologies allowed are HTML, CSS, and JavaScript (the use of frameworks is allowed). From the second round, a winner and a runner-up will be declared based on unique and innovative designs",
		Type: "Solo",
		prize1: "?",
		prize2: "??",
		prize3: "???",
		studn1: "Suraj Tade",
		scontact1: "8999948294",
		studn2: "Yash Waghmare",
		scontact2: "7972988063",
		faculty: "Mr. Rahul Pitale",
		fcontact: "9420240035",
		rule1: "Participants should stick to the time limit.",
		rule2: "No website building platforms are allowed.",
		rule3:
			"Only technologies mentioned in the description can be used. Evaluation will be done based on the uniqueness of design, time taken and understand-ability of the code.",
		rule4:
			"In round-1 if two participants acquire a similar score, based on time taken one of the candidates will be selected for the next round.",
		rule5:
			"If copyright for any design from any resource is found, they will be disqualified.",
		rule6: "Participants can carry their personal laptops.",
		fee: "Rs. 50",
		image:
			"https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg",
		path: "/webbit",
	},
	{
		id: 3,
		event_name: "Perplexo",
		date: "",
		short_description:
			"Perplexo is an event testing knowledge in Internet and Technology. It includes tricky questions, hints, and a live leaderboard. Last year, one reached level 6, but none completed the challenge.",
		detailed_description:
			"Perplexo is an event where you get to test your knowledge in the wide domain of the Internet and Technology. It is an event consisting of a series of questions, a trail of hints followed by a sequence of surprisingly tricky answers along with a live ranking leader board. We return with greater difficulty, tougher ciphers and deeper trails. You have to be more attentive, cautious and aware than at any time you are. Push your limits, bend the rules and crack the code. Last year only one was able to reach level 6, but none completed the challenge.",
		Type: "Duo",
		prize1: "?",
		prize2: "??",
		studn1: "Shreyash Khandagale",
		scontact1: "9172048792",
		studn2: "Yash Waghmare",
		scontact2: "7972988063",
		faculty: "Mr. Ganesh Deshmukh",
		fcontact: "9420240035",
		rule1: "N/A",
		fee: "Rs.100",
		image:
			"https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg",
		path: "/Perplexo",
	},
	{
		id: 4,
		event_name: "Hackathon",
		date: "",
		short_description:
			"Hackathon is a technical event for developing innovative projects based on relevant computer science technologies. Participants present their implementation to a jury in two rounds, with 20 teams qualifying for the final round. Teams must implement changes suggested by reviewers before the final presentation.",
		detailed_description:
			"A hackathon is a technical event where participants have to implement their innovative ideas and develop their projects within a stipulated time. The project must be based on any computer science relevant technologies, such as web apps, Android apps, IoT, ML models, networks, security, and automation. The event will consist of two rounds. In the first round, participants will present their problem statements and implementations to the internal jury using a presentation within a given amount of time (Review 1). After the evaluation of the first round, 20 teams will qualify for the next round. The qualified teams will need to incorporate the suggestions/changes given by the reviewers within a specific time frame and prepare for the final presentation, which will be evaluated by the jury.",
		Type: "Team of 4 Members",
		prize1: "?",
		prize2: "??",
		prize3: "???",
		studn1: "Raj Firke",
		scontact1: "9421544886",
		studn2: "Yash Waghmare",
		scontact2: "7972988063",
		faculty: "Mrs. Sushma Vispute",
		rule1: "All participants have to be present on time.",
		rule2:
			"All the intermediate evaluation processes during Offline Hackathon should be followed.",
		rule3: "All the group members should be present during the presentation.",
		rule4:
			"Participants have to begin with their work on 22nd March and First round will be conducted by the Faculty allotted on 23th March.",
		rule5:
			"Those Teams which get selected, certain changes will be communicated to the respective teams which they will be expected to do overnight.",
		rule6:
			"Next Day i.e. 24th March, the final evaluation will be conducted and participants will be evaluated on their project (and on the changes).",
		fee: "Rs.200",
		image:
			"https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg",
		path: "/hackathon",
	},
	{
		id: 5,
		event_name: "Cosmic Aptitude Test",
		date: "",
		short_description:
			"The Cosmic Aptitude Test has 3 rounds. Round 1 has 120 participants taking a Level 1 quiz. Round 2 has 40 participants taking a Level 2 quiz and Round 3 has 10 participants taking Reading and Writing tests.",
		detailed_description:
			"Cosmic Aptitude Test consisting of 3 rounds. Round 1 has 120 participants taking a Level 1 Aptitude quiz with 30 MCQs. Round 2 has 40 participants taking a Level 2 Aptitude quiz with 20 MCQs covering verbal, analytical, and quantitative skills. Round 3 has 10 participants taking two rounds, Reading comprehension and Writing, where they will be given an RC sheet to solve and write essays on assigned topics, respectively, evaluated using scoremyessay.com.",
		Type: "Solo",
		prize1: "?",
		prize2: "??",
		prize3: "???",
		studn1: "Mugdha Kshirsagar",
		scontact1: "8605679011",
		studn2: "Yash Waghmare",
		scontact2: "7972988063",
		faculty: "Mr. Kapil Tajane",
		rule1:
			"Participants are not allowed calculators for 1 Round but they can bring scientific calculators for round 2.",
		rule2:
			"Participants must bring pen and paper for rough work for rounds 1 and 2.",
		rule3: "If caught copying he/she will be strictly eliminated",
		rule4: "ROUND 1 – Level 1 Aptitude quiz- involves 30 questions(MCQ)",
		rule5:
			"ROUND 2 – Level 2 Aptitude quiz- involves 20 questions (MCQS – 5 verbal, 5 analytical and 10 quantitative).",
		rule6:
			"ROUND 3- 2 sections: Reading involves Reading comprehension. The sheet will be given that will include RCs and participants need to solve those. Writing- Volunteers' laptops will be given. On word you'll need to write essays on given topics, options will be there. And it will be evaluated using scoremyessay.com",
		fee: "Rs.50",
		image:
			"https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg",
		path: "/cosmic_Aptitude_Test",
	},
	{
		id: 6,
		event_name: "IPL Auction",
		date: "",
		short_description:
			"Experience a real-time IPL Auction with 210+ players and 10 teams bidding for their desired players. Each player is rated and teams submit their playing 11 for a final team rating. The team with the highest rating wins. Enjoy the excitement of the IPL Auction!",
		detailed_description:
			"Welcome to the real-time IPL Auction featuring 210+ players. Ten teams will participate in the auction, with each team bidding on the 210+ players and selecting their desired team. All players in the list have been assigned ratings. Each team must submit their playing 11, and the final team rating will be calculated based on the submitted playing 11. The team with the highest points based on their rating will be declared the winner. Join us and experience the thrill of the IPL Auction in real-time.",
		Type: "Team of 4",
		prize1: "?",
		prize2: "??",
		prize3: "???",
		studn1: "Sarthak Zambre",
		scontact1: "9028870976",
		studn2: "Kunal Patil",
		scontact2: "9130100000",
		faculty: "Mrs. Geetanjali Sharma",
		rule1: "Each Team given a Budget: 100 CR.",
		rule2: "Judging criteria - Average of Rating of Players the Team owns.",
		rule3: "Minimum 11 and maximum 15 player.",
		rule4: "Maximum 4 can participate in the auction.",
		rule5:
			"Auction will be conducted for 1 extra RTM if required (Base Price 20 lakh)",
		rule6: "Only top 10 teams will be selected for Final Auction.",
		fee: "Rs.200",
		image:
			"https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg",
		path: "/IPL_Auction",
	},
	{
		id: 7,
		event_name: "Startup Mania",
		date: "",
		short_description:
			"Innovation and entrepreneurship drive the world forward. Startups foster new ideas, from recognition to scrutiny, leading to success",
		detailed_description:
			"Innovation and entrepreneurship are the wheels that steer the world into a brighter future. Startup mania will help in innovating new ideas right from acknowledging the potential of your idea, steering your ideas in the right direction and scrutinizing your views which will pave the way for glaring success. In the idea presentation round, every team has to present their ideas using the template provided.The institute will provide guidance and funding to all innovative startup ideas.",
		Type: "Team of 1 to 4",
		prize1: "?",
		prize2: "??",
		prize3: "???",
		studn1: "Pranjali Deshpande",
		scontact1: "7888081312",
		studn2: "Kunal Patil",
		scontact2: "9130100000",
		faculty: "N/A",
		rule1: "Every group should have 1-4 members.",
		rule2: "The event would be carried out in two rounds.",
		rule3:
			"ROUND1: You can make a video or reel to introduce your product in the form of an advertisement. The top teams will be decided via poll by panel members.",
		rule4:
			"ROUND2: The groups qualified in round 1 will be eligible in round 2. In this  round the teams have to present their ideas using PPTs in front of the panel members.",
		rule5: "An individual can be a member of just one team.",
		rule6: "You can present your idea in any language: English, Hindi, Marathi",
		fee: "Rs.??",

		image:
			"https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg",
		path: "/Startup_Mania",
	},
	{
		id: 8,
		event_name: "The Alpha Analyst",
		date: "",
		short_description:
			"The Alpha Analyst event to test your trading skills based on real market based situation without the risk of loosing real money.",
		detailed_description:
			"The Alpha Analyst event to test your trading skills based on real market based situation without the risk of loosing real money.",
		Type: "Team of 3",
		prize1: "?",
		prize2: "??",
		prize3: "???",
		studn1: "Prathamesh Bachhav",
		scontact1: "9823632630",
		studn2: "Kunal Patil",
		scontact2: "9130100000",
		faculty: "N/A",
		rule1: "Each team consists of 3 players only! Not more nor less.",
		rule2: "For Round 1 only one member from each team will apply..",
		rule3: "For Round 2 only 10 teams will be selected.",
		rule4: "Round 2 will a Buzzer round in offline mode.",
		rule5: "1st Round- Online quiz(30 questions 15 min)",
		rule6: "2nd Round-Buzzer Round(2 hours)",
		fee: "Rs.??",
		image:
			"https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg",
		path: "/The_Alpha_Analyst",
	},
	{
		id: 9,
		event_name: "G20x Anantya",
		date: "",
		short_description:
			"This event will provide you  a stage to showcase your  leadership skills and geopolitics knowledge",
		detailed_description:
			"The G20 (Group of Twenty) is a forum for international cooperation on economic and financial issues, bringing together the world's largest advanced and emerging economies India's membership in the G20 reflects the country's growing economic importance in the global arena. As one of the fastest-growing economies in the world, India is a significant contributor to global growth and development. Its inclusion in the G20 provides it with aplatform to engage with other major economies and shape global economic policies.",
		Type: "Solo",
		prize1: "?",
		prize2: "??",
		prize3: "???",
		studn1: "Satyam Mirgane",
		scontact1: "8638945764",
		studn2: "Siddheshwar Rede",
		scontact2: "",
		faculty: "N/A",
		rule1: "Round 1: Questions regarding Geopolitics.",
		rule2: "For Round 2, 25 students will be selected.",
		rule3:
			"20 students will be participating and the rest 5 will be in standby.",
		rule4:
			"ALLOCATION OF COUNTRY:Collection of the preferences from the selected students and allot them country according to their score in round 1.",
		rule5:
			"Round 2: Each representative will be given 3 mins to present his/her views regarding the topic.",
		rule6:
			"After completion of the representation of all the 20 delegates a 5-10 min open discussion will be conducted.",
		fee: "Rs.??",

		image:
			"https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg",
		path: "/G20x_Anantya",
	},
	{
		id: 10,
		event_name: "Movie Trivia",
		date: "",
		short_description:
			" Movie Trivia College Events are a popular activity on college campuses and often attract enthusiastic participants who love movies and want to show off their knowledge. The event provides a fun and entertaining way for students to socialize and compete while also promoting film appreciation and knowledge.",
		detailed_description:
			"The Movie Trivia College Event is a competition that tests participants' knowledge of films from various genres and eras, Acting & Music skills too . Typically, the event is organized for college students and is conducted in a team format where teams of participants compete against each other. In this competition there are 4 rounds: Round 1: “Lagge rahoo  munna bhaii” This is a Quiz round group of two member have to participate, kahoot quiz based on trivial movie questions. Top winning teams will be proceed to next round depending on the participation count.        Round 2: “Nach baliye” The qualified teams of round 1 will be grouped in a group of four members and they will have to perform the hook step of the song played within 30 sec. Round 3: “Shamitabh” About: The qualified teams from round 2 will now showcase their acting skills by enacting movies based on hard and easy categories under limited time. Round 4: “Brahmastra” About: This is the finale round of the event where there will be blended faces of movie stars which will be showcased and in end of round we will get our WINNER. ",

		Type: "Solo",
		prize1: "?",
		prize2: "??",
		prize3: "???",
		studn1: "Ankita Nandy",
		scontact1: "8420574336",
		studn2: "",
		scontact2: "",
		faculty: "N/A",
		rule1:
			"Round 1: “Lagge rahoo  munna bhaii”. ➨ This is a Quiz round group of two member have to participate, kahoot quiz based on trivial movie questions. Top winning teams will be proceed to next round depending on the participation count.",
		rule2:
			"Round 2: “Nach baliye” ➨ The qualified teams of round 1 will be grouped in a group of four members and they will have to perform the hook step of the song played within 30 sec.",
		rule3:
			"Round 3: “Shamitabh” ➨ The qualified teams from round 2 will now showcase their acting skills by enacting movies based on hard and easy categories under limited time.",
		rule4: "Round 4: “Brahmastra” ",
		rule5:
			"In case of a tie in any round the organizers will be taking the final decision",
		rule6:
			"If the participants and volunteer is found misbehaving or involved in any malpractice strict action will be taken against them and the team will be disqualified.",
		fee: "Rs.??",

		image:
			"https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg",
		path: "/Movie_Trivia",
	},
	{
		id: 11,
		event_name: "Unleash the Art ",
		date: "",
		short_description:
			" Unleash the Art is an immersive event that celebrates creativity and self-expression through various art forms such as painting, sculpture, photography, and performance art. It aims to inspire attendees to explore their creativity and experience art in a fun and interactive way, fostering a sense of community.",
		detailed_description:
			"The event will take place in a large, open space with various installations and exhibits scattered throughout. Attendees will be free to wander and explore at their own pace, interacting with the art and the artists themselves. In addition to the exhibits, there will be live performances and interactive workshops where attendees can learn new techniques and try their hand at different art forms. In this event we arranging two sub-events for the attendees: Reel-making: ➨ In this event, participants will be able to showcase their creativity, talent, and editing skills such as dancing, singing, playing instruments, photography, transition videos, etc. the participants have to perform or exhibit their art or talents via a reel of a maximum of 1 minute. Photography: ➨ In this event, participants have to submit an original clicked photograph displaying the theme reflection. In this event, the participants are allowed to perform open editing revolving around the theme.",

		Type: "",
		prize1: "?",
		prize2: "??",
		prize3: "???",
		studn1: "Sanjay Chilveri",
		scontact1: "7718063047",
		studn2: "Shyam Tiwari",
		scontact2: "8303250543",
		faculty: "Mrs. Madhuri Suryavanshi",
		rule1:
			"For Photography: ➨ Required Photo should be based on a theme Reflections.",
		rule2: "Editing is allowed. Theme-based editing can also be done.",
		rule3: "The Photo clicked should be during the Time of Anantya.",
		rule4: "For Reel MAking: ➨  The reel must be of max 1 Minute.",
		rule5:
			"In this reel-making competition you have to showcase your talent like dance, singing, transition photo reel, playing instruments, etc",
		rule6: "The reel should be made during the time of Anantya.",
		fee: "Rs.??",

		image:
			"https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg",
		path: "/Unleash_the_Art",
	},
	{
		id: 12,
		event_name: "Sports League ",
		date: "",
		short_description: "abc",
		detailed_description: "prq",
		image:
			"https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg",
		path: "/Sports_League",
	},
];

export default cardData;
