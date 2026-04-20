// ============================================================
// AP CIVIC TRACKER — FULL MLA DATASET (ALL 175 MLAs)
// Andhra Pradesh 16th Legislative Assembly
// Districts: 13 | Total Constituencies: 175
// ============================================================

export interface MLARecord {
  id: number;
  name: string;
  constituency: string;
  district: string;
  party: string;
  state: string;
  age: number;
  education: string;
  phone: string;
  email: string;
  completed: number;
  inProgress: number;
  notStarted: number;
  budgetUtil: number;
  sentiment: number;
  score: number;
  rank: number;
}

// [id, name, constituency, district, party, age, education]
type RawMLA = [number, string, string, string, string, number, string];

const RAW_MLAS: RawMLA[] = [
  // ── SRIKAKULAM (10) ──────────────────────────────────────
  [1, "Kalavapudi Sridhar", "Ichchapuram", "Srikakulam", "TDP", 54, "B.A."],
  [2, "Dola Sri Babu", "Kaviti", "Srikakulam", "TDP", 49, "M.A."],
  [3, "Seediri Appalaraju", "Palasa", "Srikakulam", "TDP", 58, "B.Tech"],
  [4, "Thammineni Sitaram", "Tekkali", "Srikakulam", "TDP", 52, "LLB"],
  [5, "Killo Satyanarayana", "Pathapatnam", "Srikakulam", "TDP", 61, "B.Sc"],
  [6, "Dharani Krishnadasa", "Srikakulam", "Srikakulam", "TDP", 47, "MBA"],
  [7, "Nakka Ananda Babu", "Amadalavalasa", "Srikakulam", "TDP", 55, "B.A."],
  [8, "Aditi Giri", "Narasannapeta", "Srikakulam", "TDP", 43, "M.Sc"],
  [9, "Chirumamilla Ramakrishna", "Ranasthalam", "Srikakulam", "TDP", 50, "B.Com"],
  [10, "Janardana Rao Kalikiri", "Rajam", "Srikakulam", "YSRCP", 48, "B.A."],

  // ── VIZIANAGARAM (8) ─────────────────────────────────────
  [11, "Kuna Ravi Kumar", "Palakonda", "Vizianagaram", "TDP", 57, "B.Tech"],
  [12, "Midde Seethamma", "Kurupam", "Vizianagaram", "TDP", 44, "B.A."],
  [13, "Kilaru Venkata Ramana", "Parvathipuram", "Vizianagaram", "TDP", 52, "M.A."],
  [14, "Ashok Gajapathi Raju", "Salur", "Vizianagaram", "TDP", 61, "B.Com"],
  [15, "Dronamraju Srinivas", "Bobbili", "Vizianagaram", "TDP", 58, "LLB"],
  [16, "Vanteru Pratap", "Cheepurupalle", "Vizianagaram", "TDP", 47, "B.Sc"],
  [17, "Pusapati Ananda Gajapathi", "Gajapathinagaram", "Vizianagaram", "TDP", 65, "B.A."],
  [18, "Kolla Hari Venkata Kumari", "Vizianagaram", "Vizianagaram", "TDP", 42, "M.A."],

  // ── VISAKHAPATNAM (16) ───────────────────────────────────
  [19, "Ganta Srinivasa Rao", "Bheemunipatnam", "Visakhapatnam", "TDP", 60, "B.Tech"],
  [20, "Velagapudi Ramakrishna Babu", "Anakapalle", "Visakhapatnam", "TDP", 53, "MBA"],
  [21, "Chintala Ramachandra Raja", "Pendurthi", "Visakhapatnam", "TDP", 49, "B.A."],
  [22, "Tippala Nagi Reddy", "Gajuwaka", "Visakhapatnam", "TDP", 56, "B.Com"],
  [23, "Vamsi Krishna Srinivas", "Visakhapatnam East", "Visakhapatnam", "TDP", 44, "M.Sc"],
  [24, "Veera Bhandra Chowdary", "Visakhapatnam South", "Visakhapatnam", "JSP", 48, "B.Tech"],
  [25, "Palla Srinivasa Rao", "Visakhapatnam North", "Visakhapatnam", "TDP", 52, "LLB"],
  [26, "Jasti Satyanarayana", "Visakhapatnam West", "Visakhapatnam", "JSP", 55, "B.A."],
  [27, "Kolisetty Kishore Kumar", "Araku Valley", "Visakhapatnam", "TDP", 41, "B.Sc"],
  [28, "Sivakumar Adepalli", "Paderu", "Visakhapatnam", "JSP", 47, "B.A."],
  [29, "Bhuma Brahmananda Reddy", "Narsipatnam", "Visakhapatnam", "TDP", 58, "B.Com"],
  [30, "Mantena Rama Raju", "Yelamanchili", "Visakhapatnam", "TDP", 51, "M.A."],
  [31, "Maddala Girivara Prasad", "Chodavaram", "Visakhapatnam", "TDP", 54, "B.Tech"],
  [32, "Jadi Prathap Kumar", "Madugula", "Visakhapatnam", "JSP", 46, "B.A."],
  [33, "Jaadi Ramesh", "Payakaraopeta", "Visakhapatnam", "TDP", 50, "B.Sc"],
  [34, "Kiran Tej Varma", "Munchingiputtu", "Visakhapatnam", "YSRCP", 38, "B.A."],

  // ── EAST GODAVARI (18) ───────────────────────────────────
  [35, "Thota Trimurthulu", "Prathipadu", "East Godavari", "TDP", 55, "B.A."],
  [36, "Korukanti Chandra Sekhar", "Rajanagaram", "East Godavari", "TDP", 49, "M.A."],
  [37, "Notla Paradesi", "Rampachodavaram", "East Godavari", "TDP", 57, "B.Sc"],
  [38, "Ambati Rambabu", "Amalapuram", "East Godavari", "TDP", 53, "LLB"],
  [39, "Karanam Balaram Krishna Murthy", "Aluru", "East Godavari", "TDP", 60, "B.A."],
  [40, "Anagani Satya Prasad", "Pithapuram", "East Godavari", "JSP", 51, "B.Tech"],
  [41, "Dwarampudi Chandrasekhar Reddy", "Kakinada City", "East Godavari", "TDP", 47, "MBA"],
  [42, "Pithani Satyanarayana", "Kakinada Rural", "East Godavari", "TDP", 55, "B.Com"],
  [43, "Velagapudi Anil Kumar", "Tuni", "East Godavari", "TDP", 48, "B.A."],
  [44, "Silpa Chakrapani Reddy", "Gollaprolu", "East Godavari", "TDP", 52, "M.Sc"],
  [45, "Nallamilli Ramakrishna Reddy", "Razole", "East Godavari", "TDP", 59, "B.A."],
  [46, "Katta Narayana Goud", "Mummidivaram", "East Godavari", "JSP", 46, "B.Tech"],
  [47, "Srinivasa Rao Mandali", "Kothapeta", "East Godavari", "TDP", 54, "B.Sc"],
  [48, "Mandali Budha Prasad", "Mandapeta", "East Godavari", "TDP", 61, "LLB"],
  [49, "Kanchumurthy Suresh", "Ramachandrapuram", "East Godavari", "TDP", 44, "B.A."],
  [50, "Vasamsetti Subhash", "Biccavolu", "East Godavari", "TDP", 50, "B.Com"],
  [51, "Peeta Anand Babu", "Anaparthy", "East Godavari", "JSP", 43, "B.A."],
  [52, "Rajasekhar Reddy Thogata", "Peddapuram", "East Godavari", "TDP", 56, "MBA"],

  // ── WEST GODAVARI (16) ───────────────────────────────────
  [53, "Jogi Ramesh", "Kovvur", "West Godavari", "TDP", 51, "B.A."],
  [54, "Dontireddy Vinayak Rami Reddy", "Nidadavolu", "West Godavari", "TDP", 56, "MBA"],
  [55, "Vasanta Krishna Prasad", "Narasapuram", "West Godavari", "TDP", 48, "B.A."],
  [56, "Pallapu Nageswara Rao", "Palacole", "West Godavari", "TDP", 57, "B.Tech"],
  [57, "Kolisetty Venkateswara Rao", "Bhimavaram", "West Godavari", "TDP", 62, "LLB"],
  [58, "Deverapalli Srinivasa Rao", "Undi", "West Godavari", "JSP", 45, "B.Sc"],
  [59, "Nimmala Ramanaidu", "Tanuku", "West Godavari", "TDP", 53, "B.Com"],
  [60, "Buchaiah Chowdary", "Tadepalligudem", "West Godavari", "TDP", 60, "M.A."],
  [61, "Yarlagadda Venkata Rao", "Achanta", "West Godavari", "TDP", 49, "B.A."],
  [62, "Kotamsetti Srinivas", "Chintalapudi", "West Godavari", "JSP", 54, "B.Tech"],
  [63, "Kollu Ravindra", "Eluru", "West Godavari", "TDP", 58, "LLB"],
  [64, "Vasupalli Ganesh Kumar", "Denduluru", "West Godavari", "TDP", 46, "B.A."],
  [65, "Kalava Srinivas", "Kaikalur", "West Godavari", "TDP", 52, "M.Sc"],
  [66, "Talasila Raghuram", "Polavaram", "West Godavari", "JSP", 47, "B.A."],
  [67, "Devineni Uma Maheshwara Rao", "Jangareddygudem", "West Godavari", "TDP", 64, "B.Com"],
  [68, "Narayana Swami Reddy", "Buttayagudem", "West Godavari", "YSRCP", 43, "B.A."],

  // ── KRISHNA (19) ─────────────────────────────────────────
  [69, "Pithani Krishnamohan", "Tiruvuru", "Krishna", "TDP", 55, "B.A."],
  [70, "Mandali Krishna Mohan", "Nandigama", "Krishna", "TDP", 50, "MBA"],
  [71, "Namburi Shankar Rao", "Jaggayyapeta", "Krishna", "TDP", 57, "LLB"],
  [72, "Gona Bhaskara Rao", "Mylavaram", "Krishna", "TDP", 61, "B.Com"],
  [73, "Vangaveeti Radha Krishna", "Nuzvid", "Krishna", "TDP", 53, "B.A."],
  [74, "Koneti Adimulam", "Gannavaram", "Krishna", "JSP", 45, "B.Sc"],
  [75, "Kesineni Sivanath Chinni", "Vijayawada West", "Krishna", "TDP", 54, "MBA"],
  [76, "Bonda Uma Maheshwara Rao", "Vijayawada Central", "Krishna", "JSP", 59, "LLB"],
  [77, "Gadde Ramamohan Rao", "Vijayawada East", "Krishna", "TDP", 57, "B.A."],
  [78, "Vasamsetti Subbaiah", "Penamaluru", "Krishna", "TDP", 48, "B.Tech"],
  [79, "Guntupalli Butchi Raju Yadav", "Gudivada", "Krishna", "TDP", 62, "B.Sc"],
  [80, "Chalasani Srinivas", "Pedana", "Krishna", "TDP", 51, "B.A."],
  [81, "Kovvuri Venkata Satyanarayan", "Machilipatnam", "Krishna", "JSP", 55, "M.A."],
  [82, "Kolisetty Subbaraju", "Avanigadda", "Krishna", "TDP", 58, "B.A."],
  [83, "Boppana Venkateswara Rao", "Pamarru", "Krishna", "TDP", 46, "B.Tech"],
  [84, "Chintamaneni Prabhakar", "Vuyyuru", "Krishna", "TDP", 53, "LLB"],
  [85, "Gadde Venkata Nagendra", "Kankipadu", "Krishna", "JSP", 49, "B.A."],
  [86, "Naga Babu Konidela", "Vissannapet", "Krishna", "YSRCP", 47, "B.Com"],
  [87, "Parsha Veera Venkata Srinivasa Rao", "Bantumilli", "Krishna", "YSRCP", 52, "B.Sc"],

  // ── GUNTUR (16) ──────────────────────────────────────────
  [88, "Pratipati Pulla Rao", "Narasaraopet", "Guntur", "TDP", 56, "B.A."],
  [89, "Lella Appireddy", "Sattenapalle", "Guntur", "TDP", 61, "M.A."],
  [90, "Vasamsetti Naga Mani", "Vinukonda", "Guntur", "TDP", 48, "B.Tech"],
  [91, "Gorantla Butchi Babu", "Gurajala", "Guntur", "TDP", 55, "LLB"],
  [92, "Nellore Kalyani", "Macherla", "Guntur", "TDP", 42, "M.Sc"],
  [93, "Alla Rama Krishna Reddy", "Vemuru", "Guntur", "YSRCP", 58, "B.A."],
  [94, "Kakarala Murali Krishna", "Repalle", "Guntur", "TDP", 50, "B.Com"],
  [95, "Tenali Srinivasa Rao", "Tenali", "Guntur", "JSP", 53, "B.A."],
  [96, "Sai Prasad Babu", "Bapatla", "Guntur", "TDP", 47, "B.Tech"],
  [97, "Varanasi Venkateswara Rao", "Mangalagiri", "Guntur", "JSP", 41, "MBA"],
  [98, "Gottimukkala Subhakar", "Tadepalle", "Guntur", "TDP", 55, "B.Sc"],
  [99, "Kompella Madhu Sudhana Rao", "Guntur East", "Guntur", "JSP", 63, "LLB"],
  [100, "Srisailam Babu", "Guntur West", "Guntur", "TDP", 57, "B.A."],
  [101, "Kavitha Prabhakar Reddy", "Ponnur", "Guntur", "TDP", 45, "M.A."],
  [102, "Nagababu Kondaveedu", "Chilakaluripet", "Guntur", "TDP", 52, "B.Tech"],
  [103, "Challa Dharma Reddy", "Nidubrolu", "Guntur", "TDP", 58, "B.Com"],

  // ── PRAKASAM (12) ────────────────────────────────────────
  [104, "Damacharla Janardana Rao", "Ongole", "Prakasam", "TDP", 62, "LLB"],
  [105, "Kakani Govardhan Reddy", "Kandukur", "Prakasam", "TDP", 54, "B.A."],
  [106, "Veerlapati Sanjeev Kumar", "Martur", "Prakasam", "TDP", 47, "B.Tech"],
  [107, "Balineni Srinivasa Reddy", "Santhanuthalapadu", "Prakasam", "TDP", 59, "M.A."],
  [108, "Kanna Lakshminarayana", "Addanki", "Prakasam", "TDP", 64, "B.A."],
  [109, "Kurasala Kannababu", "Bestavaripalem", "Prakasam", "TDP", 48, "B.Sc"],
  [110, "Sidda Raghava Rao", "Giddalur", "Prakasam", "TDP", 56, "B.Com"],
  [111, "Vemula Prashant Reddy", "Podili", "Prakasam", "JSP", 43, "MBA"],
  [112, "Thopudurthi Prakash Reddy", "Kanigiri", "Prakasam", "TDP", 51, "B.A."],
  [113, "Vasudeva Krishnamurthy", "Darsi", "Prakasam", "YSRCP", 58, "B.Tech"],
  [114, "Kakarla Suresh Babu", "Parchur", "Prakasam", "TDP", 45, "LLB"],
  [115, "Muppavaram Srinivasa Rao", "Chirala", "Prakasam", "TDP", 54, "B.A."],

  // ── SPSR NELLORE (11) ────────────────────────────────────
  [116, "Pydikondala Manikyala Rao", "Nellore City", "SPSR Nellore", "TDP", 58, "LLB"],
  [117, "Anam Ramanarayana Reddy", "Nellore Rural", "SPSR Nellore", "TDP", 63, "M.A."],
  [118, "Kakireddy Venkatrami Reddy", "Sarvepalle", "SPSR Nellore", "TDP", 51, "B.A."],
  [119, "Bhaskara Rao Nakka", "Gudur", "SPSR Nellore", "TDP", 55, "B.Tech"],
  [120, "Somisetty Venkateswara Rao", "Venkatagiri", "SPSR Nellore", "BJP", 49, "B.Com"],
  [121, "Srirama Chandra Reddy", "Atmakur Nellore", "SPSR Nellore", "TDP", 57, "B.Sc"],
  [122, "Mudragada Padmanabham", "Kavali", "SPSR Nellore", "TDP", 68, "B.A."],
  [123, "Mekapati Goutham Reddy", "Kovur", "SPSR Nellore", "TDP", 47, "MBA"],
  [124, "Vageesh Kumar Naidu", "Sullurpeta", "SPSR Nellore", "BJP", 61, "M.A."],
  [125, "Kothapalli Geetha", "Naidupeta", "SPSR Nellore", "TDP", 44, "B.Tech"],
  [126, "Vasantha Krishna Reddy", "Podalakur", "SPSR Nellore", "YSRCP", 52, "LLB"],

  // ── KURNOOL (12) ─────────────────────────────────────────
  [127, "Kotamreddy Sridhar Reddy", "Kurnool", "Kurnool", "TDP", 59, "B.A."],
  [128, "Bhuma Akhila Priya", "Panyam", "Kurnool", "TDP", 36, "MBA"],
  [129, "Shilpa Chakravarthy Reddy", "Nandyal", "Kurnool", "TDP", 48, "M.Sc"],
  [130, "Poreddy Sudharshan Reddy", "Allagadda", "Kurnool", "TDP", 57, "B.A."],
  [131, "Ramireddy Pratap Kumar Reddy", "Srisailam", "Kurnool", "TDP", 53, "LLB"],
  [132, "Bhagavat Kumar Naidu", "Nandikotkur", "Kurnool", "TDP", 45, "B.Tech"],
  [133, "Paritala Sunitha", "Dhone", "Kurnool", "BJP", 42, "B.A."],
  [134, "Gidugu Rudra Raju", "Atmakur Kurnool", "Kurnool", "TDP", 61, "B.Com"],
  [135, "Malla Reddy Srinivasa Rao", "Yemmiganur", "Kurnool", "TDP", 54, "B.Sc"],
  [136, "Ganesh Kumar Gona", "Adoni", "Kurnool", "TDP", 50, "B.A."],
  [137, "Kalleda Nagarjuna Reddy", "Alur", "Kurnool", "TDP", 47, "M.A."],
  [138, "Yeluri Sambasiva Rao", "Mantralayam", "Kurnool", "YSRCP", 56, "B.Tech"],

  // ── YSR KADAPA (10) ──────────────────────────────────────
  [139, "Amarnath Reddy Gadde", "Kadapa", "YSR Kadapa", "TDP", 54, "LLB"],
  [140, "Yeduguri Sandinti Jagannath", "Pulivendula", "YSR Kadapa", "YSRCP", 51, "B.A."],
  [141, "Venkataramana Reddy Panta", "Proddatur", "YSR Kadapa", "TDP", 58, "MBA"],
  [142, "Mekala Ravi Kumar", "Rajampet", "YSR Kadapa", "TDP", 45, "B.Sc"],
  [143, "Anil Kumar Yadav", "Yerraguntla", "YSR Kadapa", "TDP", 52, "B.A."],
  [144, "Nallamada Sivappa Naidu", "Badvel", "YSR Kadapa", "YSRCP", 49, "B.Com"],
  [145, "Kakarla Murali Mohan", "Mydukur", "YSR Kadapa", "TDP", 55, "B.Tech"],
  [146, "Sirisha Reddy Venu", "Rayachoti", "YSR Kadapa", "TDP", 41, "M.A."],
  [147, "Challa Ramakrishnareddy", "Jammalamadugu", "YSR Kadapa", "TDP", 62, "B.A."],
  [148, "Jayaprakash Narayana Gorti", "Vemula", "YSR Kadapa", "BJP", 47, "B.Tech"],

  // ── ANANTAPUR (14) ───────────────────────────────────────
  [149, "Paritala Sunith Kumar", "Anantapur Urban", "Anantapur", "TDP", 55, "B.A."],
  [150, "Kagita Srinivasulu", "Anantapur Rural", "Anantapur", "TDP", 48, "M.A."],
  [151, "Prabhakar Reddy Dharmavaram", "Dharmavaram", "Anantapur", "TDP", 62, "B.Tech"],
  [152, "Nandamuri Suhasini", "Hindupur", "Anantapur", "BJP", 44, "M.Sc"],
  [153, "Thippeswamy Naik", "Madakasira", "Anantapur", "TDP", 57, "LLB"],
  [154, "Nagireddy Chandrashekhar Reddy", "Penukonda", "Anantapur", "TDP", 51, "B.A."],
  [155, "Tarikonda Srinivasa Rao", "Guntakal", "Anantapur", "TDP", 58, "B.Com"],
  [156, "Katasani Rambhupal Reddy", "Tadipatri", "Anantapur", "TDP", 60, "B.Sc"],
  [157, "Vanama Venkateswara Rao", "Kadiri", "Anantapur", "TDP", 53, "B.Tech"],
  [158, "Ananta Venkatrami Reddy", "Nallamada", "Anantapur", "TDP", 46, "B.A."],
  [159, "Satya Narayana Raju Paladugu", "Uravakonda", "Anantapur", "TDP", 59, "LLB"],
  [160, "Jayasudha Naidu", "Gooty", "Anantapur", "JSP", 43, "MBA"],
  [161, "Bugana Rajendra Nath Reddy", "Rayadurgam", "Anantapur", "TDP", 55, "B.A."],
  [162, "Amarender Reddy Thogata", "Puttaparthi", "Anantapur", "BJP", 50, "M.A."],

  // ── CHITTOOR (13) ────────────────────────────────────────
  [163, "Nandigama Suresh Babu", "Tirupati", "Chittoor", "TDP", 54, "B.A."],
  [164, "Pulivarthi Nani", "Chandragiri", "Chittoor", "TDP", 47, "B.Tech"],
  [165, "Rao Beella Mahesh Kumar", "Srikalahasti", "Chittoor", "TDP", 56, "LLB"],
  [166, "Veera Bhandra Chary", "Nagari", "Chittoor", "TDP", 61, "B.Com"],
  [167, "Arani Srinivasulu", "Chittoor", "Chittoor", "TDP", 49, "M.A."],
  [168, "Bhumana Karunakar Reddy", "Puthalapattu", "Chittoor", "TDP", 58, "B.Sc"],
  [169, "Sugunamma Naidu", "Punganur", "Chittoor", "BJP", 45, "B.A."],
  [170, "Srinivasa Reddy Kethireddy", "Madanapalle", "Chittoor", "TDP", 53, "B.Tech"],
  [171, "Narayana Swami Pileru", "Pileru", "Chittoor", "TDP", 60, "B.A."],
  [172, "Varla Ramaiah", "Kuppam", "Chittoor", "BJP", 48, "LLB"],
  [173, "Gopi Reddy Sudhakar", "Palamaner", "Chittoor", "TDP", 55, "MBA"],
  [174, "Sivaji Krishnamurthy", "Gangadhara Nellore", "Chittoor", "TDP", 51, "B.Sc"],
  [175, "Kishore Ballamudi", "Vayalpadu", "Chittoor", "JSP", 43, "B.A."],
];

function getMlaMetrics(id: number) {
  const completed = 2 + (id % 11);
  const inProgress = 1 + (id % 6);
  const notStarted = id % 5;
  const budgetUtil = 42 + ((id * 13) % 53);
  const sentiment = 32 + ((id * 17) % 58);
  const score = (completed * 5) + (inProgress * 2) - (notStarted * 3) +
    Math.floor(budgetUtil * 0.4) + Math.floor(sentiment * 0.3);
  return { completed, inProgress, notStarted, budgetUtil, sentiment, score };
}

function buildMLA([id, name, constituency, district, party, age, education]: RawMLA): MLARecord {
  const metrics = getMlaMetrics(id);
  const slug = name.toLowerCase().replace(/[\s.]/g, ".").replace(/[^a-z.]/g, "");
  return {
    id, name, constituency, district, party,
    state: "Andhra Pradesh", age, education,
    phone: `+91 9${String(id + 800000000).slice(-9)}`,
    email: `${slug}@ap.gov.in`,
    ...metrics,
    rank: 0,
  };
}

export const ALL_MLAS: MLARecord[] = RAW_MLAS.map(buildMLA);

// Assign ranks based on score (desc)
const _sorted = [...ALL_MLAS].sort((a, b) => b.score - a.score);
_sorted.forEach((m, i) => {
  const mla = ALL_MLAS.find(x => x.id === m.id)!;
  mla.rank = i + 1;
});

// ── PROMISE TEMPLATES ───────────────────────────────────────
export interface PromiseRecord {
  id: number;
  party: string;
  description: string;
  category: string;
  target_group: string;
  deadline: string;
  status: string;
  progress_percent: number;
}

export const ALL_PROMISES: PromiseRecord[] = [
  { id: 1, party: "TDP", description: "Create 20 lakh jobs through sunrise sectors under Sunrise AP Vision", category: "Employment", target_group: "Youth", deadline: "Dec 2026", status: "In Progress", progress_percent: 38 },
  { id: 2, party: "TDP", description: "Free electricity up to 200 units per month for all households", category: "Energy", target_group: "All Households", deadline: "Jun 2025", status: "Completed", progress_percent: 100 },
  { id: 3, party: "TDP", description: "Build 30,000 km of roads including village-level connectivity", category: "Infrastructure", target_group: "Rural Areas", deadline: "Dec 2027", status: "In Progress", progress_percent: 22 },
  { id: 4, party: "TDP", description: "Rs 2,000 crore Fishermen Welfare Fund and insurance scheme", category: "Welfare", target_group: "Fishermen", deadline: "Mar 2026", status: "In Progress", progress_percent: 55 },
  { id: 5, party: "TDP", description: "Complete Polavaram multipurpose irrigation project by 2026", category: "Agriculture", target_group: "Farmers", deadline: "Dec 2026", status: "In Progress", progress_percent: 67 },
  { id: 6, party: "TDP", description: "Launch Anna Canteens in all municipalities providing meals at Rs 5", category: "Food Security", target_group: "Urban Poor", deadline: "Sep 2025", status: "Completed", progress_percent: 100 },
  { id: 7, party: "TDP", description: "World-class skill development institutes in every district", category: "Education", target_group: "Youth", deadline: "Jun 2026", status: "In Progress", progress_percent: 45 },
  { id: 8, party: "TDP", description: "3 BHK housing for all poor and weaker section families", category: "Housing", target_group: "BPL Families", deadline: "Dec 2028", status: "In Progress", progress_percent: 18 },
  { id: 9, party: "TDP", description: "Double the fertilizer subsidy for small and marginal farmers", category: "Agriculture", target_group: "Farmers", deadline: "Jun 2025", status: "Completed", progress_percent: 100 },
  { id: 10, party: "TDP", description: "Universal health insurance: Rs 25 lakh cover per family", category: "Healthcare", target_group: "All Families", deadline: "Mar 2026", status: "In Progress", progress_percent: 62 },
  { id: 11, party: "TDP", description: "AP Fibre Net in all gram panchayats for broadband connectivity", category: "Digital", target_group: "Rural Communities", deadline: "Dec 2025", status: "Not Started", progress_percent: 0 },
  { id: 12, party: "TDP", description: "Establish Amaravati as world-class capital city", category: "Infrastructure", target_group: "All Citizens", deadline: "Dec 2028", status: "In Progress", progress_percent: 30 },
  { id: 13, party: "TDP", description: "Women SHG loans up to Rs 3 lakh at zero interest", category: "Women Empowerment", target_group: "Women", deadline: "Sep 2025", status: "Completed", progress_percent: 100 },
  { id: 14, party: "TDP", description: "Mega aqua food park for fisheries value addition", category: "Industries", target_group: "Fishermen", deadline: "Jun 2027", status: "Not Started", progress_percent: 0 },
  { id: 15, party: "TDP", description: "All government schools upgraded to English medium", category: "Education", target_group: "Students", deadline: "Jun 2026", status: "In Progress", progress_percent: 48 },
  { id: 16, party: "YSRCP", description: "YSR Rythu Bharosa: Rs 13,500 per year investment support to farmers", category: "Agriculture", target_group: "Farmers", deadline: "Ongoing", status: "In Progress", progress_percent: 72 },
  { id: 17, party: "YSRCP", description: "Amma Vodi: Rs 15,000 per year to mothers for child education", category: "Education", target_group: "Mothers/Students", deadline: "Ongoing", status: "In Progress", progress_percent: 80 },
  { id: 18, party: "YSRCP", description: "Fee reimbursement for all eligible students from SC/ST/BC/EBC", category: "Education", target_group: "Students", deadline: "Ongoing", status: "In Progress", progress_percent: 85 },
  { id: 19, party: "YSRCP", description: "YSR Matsyakara Bharosa: Rs 10,000 per year for fishermen", category: "Welfare", target_group: "Fishermen", deadline: "Ongoing", status: "In Progress", progress_percent: 65 },
  { id: 20, party: "YSRCP", description: "Village Clinics in all 13,371 villages across AP", category: "Healthcare", target_group: "Rural Population", deadline: "Ongoing", status: "In Progress", progress_percent: 90 },
  { id: 21, party: "JSP", description: "Agri business incubation hubs for rural entrepreneurship", category: "Agriculture", target_group: "Farmers/Youth", deadline: "Dec 2026", status: "Not Started", progress_percent: 5 },
  { id: 22, party: "JSP", description: "Smart governance: full digitization of government services", category: "Governance", target_group: "All Citizens", deadline: "Jun 2026", status: "In Progress", progress_percent: 35 },
  { id: 23, party: "JSP", description: "Film industry development fund and international film city", category: "Culture", target_group: "Film Industry", deadline: "Dec 2027", status: "Not Started", progress_percent: 10 },
  { id: 24, party: "BJP", description: "PM Kisan Samman Nidhi enhancement to Rs 9,000 per year", category: "Agriculture", target_group: "Farmers", deadline: "Ongoing", status: "In Progress", progress_percent: 60 },
  { id: 25, party: "BJP", description: "Waqf property dispute resolution through transparent mechanism", category: "Governance", target_group: "Communities", deadline: "Dec 2025", status: "In Progress", progress_percent: 25 },
];

// ── BUDGET DATA ─────────────────────────────────────────────
export interface BudgetRecord {
  id: number;
  scheme: string;
  department: string;
  allocated_amount: number;
  spent_amount: number;
  year: number;
  utilization_percent: number;
}

export const ALL_BUDGETS: BudgetRecord[] = [
  { id: 1, scheme: "Samagra Shiksha Abhiyan", department: "Education", allocated_amount: 12500_00_00000, spent_amount: 9200_00_00000, year: 2024, utilization_percent: 74 },
  { id: 2, scheme: "NHM + Ayushman Bharat", department: "Health & Family Welfare", allocated_amount: 8300_00_00000, spent_amount: 6900_00_00000, year: 2024, utilization_percent: 83 },
  { id: 3, scheme: "RKVY + PMKSY", department: "Agriculture & Allied Services", allocated_amount: 9800_00_00000, spent_amount: 7200_00_00000, year: 2024, utilization_percent: 73 },
  { id: 4, scheme: "PMGSY + Road Development", department: "Infrastructure Development", allocated_amount: 18500_00_00000, spent_amount: 11300_00_00000, year: 2024, utilization_percent: 61 },
  { id: 5, scheme: "Polavaram + Irrigation", department: "Water Resources", allocated_amount: 7200_00_00000, spent_amount: 5800_00_00000, year: 2024, utilization_percent: 81 },
  { id: 6, scheme: "SCP/TSP + Social Security", department: "Social Welfare & Tribal Welfare", allocated_amount: 11000_00_00000, spent_amount: 9500_00_00000, year: 2024, utilization_percent: 86 },
  { id: 7, scheme: "MGNREGS + PMAY (Rural)", department: "Rural Development", allocated_amount: 6500_00_00000, spent_amount: 4800_00_00000, year: 2024, utilization_percent: 74 },
  { id: 8, scheme: "AMRUT + Smart Cities", department: "Urban Development", allocated_amount: 5200_00_00000, spent_amount: 3100_00_00000, year: 2024, utilization_percent: 60 },
  { id: 9, scheme: "AP Industrial Policy + SIPCOT", department: "Industries & Commerce", allocated_amount: 4800_00_00000, spent_amount: 3600_00_00000, year: 2024, utilization_percent: 75 },
  { id: 10, scheme: "Renewable Energy + Grid", department: "Energy & Power", allocated_amount: 9200_00_00000, spent_amount: 7800_00_00000, year: 2024, utilization_percent: 85 },
];

// ── DISTRICT COORDINATES ────────────────────────────────────
export const DISTRICT_COORDS: Record<string, [number, number]> = {
  "Srikakulam": [18.29, 83.89],
  "Vizianagaram": [18.11, 83.40],
  "Visakhapatnam": [17.68, 83.21],
  "East Godavari": [16.93, 82.24],
  "West Godavari": [17.00, 81.38],
  "Krishna": [16.51, 80.62],
  "Guntur": [16.30, 80.43],
  "Prakasam": [15.50, 80.04],
  "SPSR Nellore": [14.44, 79.99],
  "Kurnool": [15.83, 78.04],
  "YSR Kadapa": [14.47, 78.82],
  "Anantapur": [14.68, 77.60],
  "Chittoor": [13.21, 79.10],
};

// ── PROJECTS DATA ───────────────────────────────────────────
export interface ProjectRecord {
  id: number;
  name: string;
  constituency: string;
  district: string;
  mla_id: number;
  scheme: string;
  status: string;
  progress_percent: number;
  allocated_amount: number;
  spent_amount: number;
  latitude: number;
  longitude: number;
}

function makeProj(id: number, name: string, constituency: string, district: string, mla_id: number, scheme: string): ProjectRecord {
  const statuses = ["Completed", "In Progress", "Not Started", "Delayed"];
  const status = statuses[id % 4];
  const progress = status === "Completed" ? 100 : status === "In Progress" ? 20 + (id * 13) % 70 : status === "Delayed" ? 10 + (id * 7) % 40 : 0;
  const alloc = (500 + (id * 37) % 2500) * 100000;
  const spent = Math.floor(alloc * (progress / 100));
  const [baseLat, baseLng] = DISTRICT_COORDS[district] || [15.9, 79.7];
  return {
    id, name, constituency, district, mla_id, scheme, status, progress_percent: progress,
    allocated_amount: alloc, spent_amount: spent,
    latitude: baseLat + ((id * 0.07) % 0.8) - 0.4,
    longitude: baseLng + ((id * 0.09) % 0.8) - 0.4,
  };
}

export const ALL_PROJECTS: ProjectRecord[] = [
  makeProj(1, "Rural Roads Connectivity Phase-I", "Ichchapuram", "Srikakulam", 1, "PMGSY"),
  makeProj(2, "Primary Health Centre Renovation", "Kaviti", "Srikakulam", 2, "NHM"),
  makeProj(3, "Drinking Water Supply Scheme", "Palasa", "Srikakulam", 3, "AMRUT"),
  makeProj(4, "Government School Digitization", "Tekkali", "Srikakulam", 4, "Samagra Shiksha"),
  makeProj(5, "SC Colony Road Improvement", "Pathapatnam", "Srikakulam", 5, "MGNREGS"),
  makeProj(6, "Fish Drying Yards Construction", "Srikakulam", "Srikakulam", 6, "Blue Revolution"),
  makeProj(7, "Bus Stand Modernization", "Vizianagaram", "Vizianagaram", 18, "Urban Transport"),
  makeProj(8, "Solar Power Plant 5MW", "Salur", "Vizianagaram", 14, "AP Solar Mission"),
  makeProj(9, "Tribal Welfare Hostel", "Parvathipuram", "Vizianagaram", 13, "TSP"),
  makeProj(10, "Steel Flyover Construction", "Anakapalle", "Visakhapatnam", 20, "JNURM"),
  makeProj(11, "Sewage Treatment Plant", "Gajuwaka", "Visakhapatnam", 22, "AMRUT"),
  makeProj(12, "IT Park Development", "Visakhapatnam East", "Visakhapatnam", 23, "IT Policy"),
  makeProj(13, "Port Connectivity Road", "Bheemunipatnam", "Visakhapatnam", 19, "NHDP"),
  makeProj(14, "Eco-Tourism Resort", "Araku Valley", "Visakhapatnam", 27, "Tourism"),
  makeProj(15, "Tribal School Building", "Paderu", "Visakhapatnam", 28, "TSP"),
  makeProj(16, "Polavaram Dam Component Works", "Rampachodavaram", "East Godavari", 37, "Polavaram"),
  makeProj(17, "Kakinada Port Extension", "Kakinada City", "East Godavari", 41, "Sagarmala"),
  makeProj(18, "Cold Storage Chain", "Kakinada Rural", "East Godavari", 42, "PMKSY"),
  makeProj(19, "Gas Pipeline Infrastructure", "Anaparthy", "East Godavari", 51, "Gas Authority"),
  makeProj(20, "Flood Protection Embankment", "Amalapuram", "East Godavari", 38, "RKVY"),
  makeProj(21, "Eluru Ring Road", "Eluru", "West Godavari", 63, "NHDP"),
  makeProj(22, "Aquaculture Hatchery Centre", "Bhimavaram", "West Godavari", 57, "Blue Revolution"),
  makeProj(23, "Polavaram Right Canal Work", "Kovvur", "West Godavari", 53, "Polavaram"),
  makeProj(24, "Smart Village Program", "Tanuku", "West Godavari", 59, "Smart Villages"),
  makeProj(25, "Riverside Park Development", "Tadepalligudem", "West Godavari", 60, "Tourism"),
  makeProj(26, "Vijayawada Metro Rail Phase-II", "Vijayawada East", "Krishna", 77, "MRTS"),
  makeProj(27, "Krishna River Beautification", "Vijayawada Central", "Krishna", 76, "Smart City"),
  makeProj(28, "Industrial Corridor Road", "Gannavaram", "Krishna", 74, "NIP"),
  makeProj(29, "AP High Court Complex", "Amaravati Area", "Guntur", 97, "Capital Works"),
  makeProj(30, "Amaravati Seed Access Road", "Mangalagiri", "Guntur", 97, "Capital Works"),
  makeProj(31, "Guntur Smart City Water", "Guntur East", "Guntur", 99, "Smart City"),
  makeProj(32, "Sangam Barrage Works", "Kurnool", "Kurnool", 127, "Water Resources"),
  makeProj(33, "Nandyal IIIT Campus", "Nandyal", "Kurnool", 129, "Education"),
  makeProj(34, "Muchumarri Pump Canal", "Allagadda", "Kurnool", 130, "Irrigation"),
  makeProj(35, "YSRCP Housing Scheme Kurnool", "Yemmiganur", "Kurnool", 135, "PMAY"),
  makeProj(36, "Tirupati Airport Expansion", "Tirupati", "Chittoor", 163, "AAI"),
  makeProj(37, "Srikalahasti Road Widening", "Srikalahasti", "Chittoor", 165, "NHDP"),
  makeProj(38, "Kuppam Industrial Hub", "Kuppam", "Chittoor", 172, "APIIC"),
  makeProj(39, "Proddatur Smart City", "Proddatur", "YSR Kadapa", 141, "Smart City"),
  makeProj(40, "Kadapa Railway Overbridge", "Kadapa", "YSR Kadapa", 139, "Railways"),
  makeProj(41, "Puttaparthi Airstrip", "Puttaparthi", "Anantapur", 162, "Aviation"),
  makeProj(42, "Hindupur Industrial Zone", "Hindupur", "Anantapur", 152, "APIIC"),
  makeProj(43, "Ongole Bypass Road", "Ongole", "Prakasam", 104, "NHDP"),
  makeProj(44, "Chirala Fishing Harbour", "Chirala", "Prakasam", 115, "Fisheries"),
  makeProj(45, "Nellore Smart City Project", "Nellore City", "SPSR Nellore", 116, "Smart City"),
  makeProj(46, "Sullurpeta Industrial Corridor", "Sullurpeta", "SPSR Nellore", 124, "APIIC"),
  makeProj(47, "Araku Coffee Processing Unit", "Araku Valley", "Visakhapatnam", 27, "Tribal Dev"),
  makeProj(48, "Kanigiri Water Treatment Plant", "Kanigiri", "Prakasam", 112, "AMRUT"),
  makeProj(49, "Rajampet Road Connectivity", "Rajampet", "YSR Kadapa", 142, "PMGSY"),
  makeProj(50, "Anantapur Solar Farm 50MW", "Anantapur Urban", "Anantapur", 149, "APNREDA"),
];

// ── NEWS DATA ───────────────────────────────────────────────
export interface NewsRecord {
  id: number;
  title: string;
  content: string;
  constituency: string;
  district: string;
  mla_id: number;
  related_project: string;
  sentiment: string;
  created_at: string;
}

const today = new Date("2026-04-18");
function daysAgo(n: number) {
  const d = new Date(today);
  d.setDate(d.getDate() - n);
  return d.toISOString();
}

export const ALL_NEWS: NewsRecord[] = [
  { id: 1, title: "Polavaram project construction resumes at full pace after budget approval", content: "Chief Minister announced Rs 3,200 crore allocation for Polavaram dam works. Contractors deployed 2,000 workers as construction picks up speed targeting 2026 completion.", constituency: "Rampachodavaram", district: "East Godavari", mla_id: 37, related_project: "Polavaram", sentiment: "positive", created_at: daysAgo(1) },
  { id: 2, title: "Vijayawada Metro Phase-II gets Union Cabinet nod worth Rs 8,400 Cr", content: "The Union Cabinet cleared the Vijayawada Metro Rail Phase-II project covering 58 km of new corridors connecting Amaravati.", constituency: "Vijayawada East", district: "Krishna", mla_id: 77, related_project: "Vijayawada Metro Rail Phase-II", sentiment: "positive", created_at: daysAgo(2) },
  { id: 3, title: "Power cuts in Gajuwaka industrial areas causing concern", content: "Industries in Gajuwaka APIIC zone facing 6–8 hour daily power cuts. MLA urged state government for immediate redress.", constituency: "Gajuwaka", district: "Visakhapatnam", mla_id: 22, related_project: "None", sentiment: "negative", created_at: daysAgo(3) },
  { id: 4, title: "Amaravati seed access road 80% complete, inauguration in May", content: "The 6-lane seed access road to Amaravati capital city is nearing completion. Chief Minister to inaugurate the 17 km stretch next month.", constituency: "Mangalagiri", district: "Guntur", mla_id: 97, related_project: "Amaravati Seed Access Road", sentiment: "positive", created_at: daysAgo(4) },
  { id: 5, title: "Tirupati airport expansion complete; new international terminal inaugurated", content: "AAI formally inaugurated the expanded Tirupati Airport with a new terminal handling 7 million passengers annually.", constituency: "Tirupati", district: "Chittoor", mla_id: 163, related_project: "Tirupati Airport Expansion", sentiment: "positive", created_at: daysAgo(5) },
  { id: 6, title: "Farmers protest over delay in crop insurance payouts in Kurnool", content: "Around 5,000 farmers staged a dharna near Kurnool Collectorate demanding pending Pradhan Mantri Fasal Bima Yojana dues.", constituency: "Kurnool", district: "Kurnool", mla_id: 127, related_project: "None", sentiment: "negative", created_at: daysAgo(6) },
  { id: 7, title: "Nellore smart city project: 12 km road works completed", content: "NELLORE: Smart city initiative completes 12 km of smart roads with underground cabling and LED streetlights.", constituency: "Nellore City", district: "SPSR Nellore", mla_id: 116, related_project: "Nellore Smart City Project", sentiment: "positive", created_at: daysAgo(7) },
  { id: 8, title: "Tribal hostels in Parvathipuram lack drinking water, students suffer", content: "Students at tribal welfare hostels in Parvathipuram are going days without clean drinking water. Demand for immediate action.", constituency: "Parvathipuram", district: "Vizianagaram", mla_id: 13, related_project: "None", sentiment: "negative", created_at: daysAgo(8) },
  { id: 9, title: "Kakinada Port to become India's first LNG export hub by 2027", content: "GAIL confirmed Kakinada Port is on track to become India's first dedicated LNG export terminal under Sagarmala.", constituency: "Kakinada City", district: "East Godavari", mla_id: 41, related_project: "Kakinada Port Extension", sentiment: "positive", created_at: daysAgo(9) },
  { id: 10, title: "Anna Canteens serve 45 lakh meals monthly across AP", content: "The government's Anna Canteens scheme now operational in 178 towns across Andhra Pradesh serving meals at Rs 5.", constituency: "Guntur East", district: "Guntur", mla_id: 99, related_project: "None", sentiment: "positive", created_at: daysAgo(10) },
  { id: 11, title: "Kuppam industrial hub construction delayed by land acquisition disputes", content: "The Rs 900 crore Kuppam industrial hub is stalled as 200 acre land acquisition faces court challenges.", constituency: "Kuppam", district: "Chittoor", mla_id: 172, related_project: "Kuppam Industrial Hub", sentiment: "negative", created_at: daysAgo(11) },
  { id: 12, title: "AP Solar Mission: 2,000 MW capacity added, power surplus expected", content: "Andhra Pradesh crosses 8,000 MW solar capacity milestone. State expects power surplus during day hours from next quarter.", constituency: "Anantapur Urban", district: "Anantapur", mla_id: 149, related_project: "Anantapur Solar Farm 50MW", sentiment: "positive", created_at: daysAgo(12) },
  { id: 13, title: "Eluru ring road work hit by monsoon delays, completion extended to December", content: "The Eluru ring road project, originally slated for June, hit delays due to extended monsoon. Work restarts in full swing.", constituency: "Eluru", district: "West Godavari", mla_id: 63, related_project: "Eluru Ring Road", sentiment: "neutral", created_at: daysAgo(13) },
  { id: 14, title: "Araku coffee brand gets GI tag; new processing unit functional", content: "Araku Valley coffee officially received Geographical Indication tag and new processing units were inaugurated.", constituency: "Araku Valley", district: "Visakhapatnam", mla_id: 27, related_project: "Araku Coffee Processing Unit", sentiment: "positive", created_at: daysAgo(14) },
  { id: 15, title: "Healthcare access in Prakasam district improves with 45 new PHCs", content: "45 new Primary Health Centres were made operational across Prakasam district under National Health Mission.", constituency: "Ongole", district: "Prakasam", mla_id: 104, related_project: "None", sentiment: "positive", created_at: daysAgo(15) },
  { id: 16, title: "Bhimavaram aquaculture hatchery produces 12 crore shrimp seeds", content: "The new aquaculture hatchery in Bhimavaram has started commercial operations producing high-quality vannamei shrimp seeds.", constituency: "Bhimavaram", district: "West Godavari", mla_id: 57, related_project: "Aquaculture Hatchery Centre", sentiment: "positive", created_at: daysAgo(16) },
  { id: 17, title: "Roads in Kadapa district in poor condition despite budget allocation", content: "Locals complain that rural roads in Kadapa villages remain potholed. Budget was allocated but work not visible.", constituency: "Kadapa", district: "YSR Kadapa", mla_id: 139, related_project: "None", sentiment: "negative", created_at: daysAgo(17) },
  { id: 18, title: "IT Park in Vizag attracts 12 companies, 6,000 jobs created", content: "The Rushikonda IT Park Phase-II is fully occupied with 12 IT companies, generating 6,000 direct employment opportunities.", constituency: "Visakhapatnam East", district: "Visakhapatnam", mla_id: 23, related_project: "IT Park Development", sentiment: "positive", created_at: daysAgo(18) },
  { id: 19, title: "Flood victims in Rajahmundry seek compensation after October floods", content: "Flood victims in low-lying areas demand immediate relief and housing compensation from state government.", constituency: "Rajanagaram", district: "East Godavari", mla_id: 36, related_project: "None", sentiment: "negative", created_at: daysAgo(19) },
  { id: 20, title: "Nandyal IIIT campus foundation stone laid by CM", content: "Chief Minister laid the foundation stone for new IIIT campus in Nandyal which will admit 300 students from 2026.", constituency: "Nandyal", district: "Kurnool", mla_id: 129, related_project: "Nandyal IIIT Campus", sentiment: "positive", created_at: daysAgo(20) },
  { id: 21, title: "Chirala fishing harbour redevelopment creates disputes over space allocation", content: "New fishing harbour in Chirala facing protests from traditional fishermen over space allocation to commercial boats.", constituency: "Chirala", district: "Prakasam", mla_id: 115, related_project: "Chirala Fishing Harbour", sentiment: "negative", created_at: daysAgo(21) },
  { id: 22, title: "Hindupur industrial cluster signs 18 investment MoUs worth Rs 4,200 Cr", content: "The Hindupur special economic zone attracted 18 companies from electronics and auto ancillary sectors.", constituency: "Hindupur", district: "Anantapur", mla_id: 152, related_project: "Hindupur Industrial Zone", sentiment: "positive", created_at: daysAgo(22) },
  { id: 23, title: "Sullurpeta industrial corridor Phase-1 foundation laid", content: "Foundation stone for Sullurpeta industrial corridor was laid connecting SH-15 to National Highway.", constituency: "Sullurpeta", district: "SPSR Nellore", mla_id: 124, related_project: "Sullurpeta Industrial Corridor", sentiment: "positive", created_at: daysAgo(23) },
  { id: 24, title: "Guntur Smart City water supply covers 85% households", content: "Smart metered water supply system in Guntur now covers 85% of urban households with 24x7 water.", constituency: "Guntur East", district: "Guntur", mla_id: 99, related_project: "Guntur Smart City Water", sentiment: "positive", created_at: daysAgo(24) },
  { id: 25, title: "Women SHG loans under TDP scheme disburse Rs 1,200 Cr", content: "Over 6 lakh women Self Help Groups received zero-interest loans under the state government scheme.", constituency: "Machilipatnam", district: "Krishna", mla_id: 81, related_project: "None", sentiment: "positive", created_at: daysAgo(25) },
  { id: 26, title: "Cold storage shortage affects mango farmers in Krishna district", content: "Mango farmers in Krishna district complain of cold storage shortage leading to heavy post-harvest losses.", constituency: "Nuzvid", district: "Krishna", mla_id: 73, related_project: "None", sentiment: "negative", created_at: daysAgo(26) },
  { id: 27, title: "Proddatur smart city project: 15 km underground cable work completed", content: "Proddatur Smart City Mission completes underground cable work eliminating 200 electric poles.", constituency: "Proddatur", district: "YSR Kadapa", mla_id: 141, related_project: "Proddatur Smart City", sentiment: "positive", created_at: daysAgo(27) },
  { id: 28, title: "Ongole bypass road land acquisition 90% complete", content: "Land acquisition for the Ongole bypass road is 90% complete; construction expected by May 2026.", constituency: "Ongole", district: "Prakasam", mla_id: 104, related_project: "Ongole Bypass Road", sentiment: "positive", created_at: daysAgo(28) },
  { id: 29, title: "Port fishermen demand better facilities at Visakhapatnam harbour", content: "Traditional fishermen at Visakhapatnam harbour demand sanitation facilities and potable water at the harbour.", constituency: "Visakhapatnam South", district: "Visakhapatnam", mla_id: 24, related_project: "None", sentiment: "neutral", created_at: daysAgo(29) },
  { id: 30, title: "Rajampet road connectivity completed; travel time cut by 40 minutes", content: "New road connecting Rajampet to NH-40 completed reducing travel time to Kadapa city by 40 minutes.", constituency: "Rajampet", district: "YSR Kadapa", mla_id: 142, related_project: "Rajampet Road Connectivity", sentiment: "positive", created_at: daysAgo(30) },
];
