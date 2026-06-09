export type Answer = {
  id: 'a' | 'b' | 'c' | 'd';
  text: string;
};

export type Question = {
  id: string;
  category: string;
  prompt: string;
  context: string;
  answers: Answer[];
  correct: 'a' | 'b' | 'c' | 'd';
  explanation: string;
  beforeTitle: string;
  beforeText: string;
  afterTitle: string;
  afterText: string;
};

export const questions: Question[] = [
  {
    id: 'q001',
    category: 'European Capitals',
    prompt: 'Which city serves as the capital of France?',
    context:
      'Pick the city that officially functions as the national capital. Famous tourist cities are not always the seat of government.',
    answers: [
      { id: 'a', text: 'Paris' },
      { id: 'b', text: 'Lyon' },
      { id: 'c', text: 'Marseille' },
      { id: 'd', text: 'Nice' },
    ],
    correct: 'a',
    explanation:
      'Paris is the official capital of France. The other cities are large and well known, but they are not the seat of the national government.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Capitals are administrative seats. Tourism popularity does not change a city\u2019s legal status.',
    afterTitle: 'After You Answer',
    afterText:
      'France centralises its government in Paris, including the presidency, the National Assembly, and the Senate.',
  },
  {
    id: 'q002',
    category: 'European Capitals',
    prompt: 'Which city is the capital of Germany?',
    context:
      'The capital hosts the federal government, not just the largest city. Read each option carefully.',
    answers: [
      { id: 'a', text: 'Munich' },
      { id: 'b', text: 'Hamburg' },
      { id: 'c', text: 'Berlin' },
      { id: 'd', text: 'Frankfurt' },
    ],
    correct: 'c',
    explanation:
      'Berlin has been the capital of reunified Germany since the 1990s. Frankfurt is a financial hub, not the political capital.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Some countries have an official capital that is not their largest city. Be precise about the seat of government.',
    afterTitle: 'After You Answer',
    afterText:
      'The Bundestag and many federal ministries are located in Berlin, while Frankfurt is home to the European Central Bank.',
  },
  {
    id: 'q003',
    category: 'European Capitals',
    prompt: 'Which city is the capital of Italy?',
    context:
      'Italy\u2019s capital is the home of the national parliament and the presidency. Other Italian cities are famous for different reasons.',
    answers: [
      { id: 'a', text: 'Milan' },
      { id: 'b', text: 'Rome' },
      { id: 'c', text: 'Naples' },
      { id: 'd', text: 'Florence' },
    ],
    correct: 'b',
    explanation:
      'Rome is the capital of Italy. Milan is the fashion and finance centre, but the national government is seated in Rome.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Italy\u2019s regions each have their own character, but only one city holds the national government.',
    afterTitle: 'After You Answer',
    afterText:
      'Rome hosts the Italian president, parliament, and the prime minister\u2019s office.',
  },
  {
    id: 'q004',
    category: 'European Capitals',
    prompt: 'Which city is the capital of Spain?',
    context:
      'Spain has autonomous communities with important cities, but the central government is based in one capital.',
    answers: [
      { id: 'a', text: 'Barcelona' },
      { id: 'b', text: 'Valencia' },
      { id: 'c', text: 'Seville' },
      { id: 'd', text: 'Madrid' },
    ],
    correct: 'd',
    explanation:
      'Madrid is the capital of Spain. Barcelona is the largest Mediterranean city, but the king, parliament, and central government are in Madrid.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Spanish regional centres are well known, but they are not the same as the national seat of power.',
    afterTitle: 'After You Answer',
    afterText:
      'Madrid is the home of the Spanish royal family, the Cortes Generales, and the prime minister\u2019s office.',
  },
  {
    id: 'q005',
    category: 'European Capitals',
    prompt: 'Which city is the capital of Portugal?',
    context:
      'Portugal\u2019s capital sits on a major river and is known for its historic neighbourhoods, fado music, and pastel buildings.',
    answers: [
      { id: 'a', text: 'Porto' },
      { id: 'b', text: 'Coimbra' },
      { id: 'c', text: 'Lisbon' },
      { id: 'd', text: 'Faro' },
    ],
    correct: 'c',
    explanation:
      'Lisbon is the capital of Portugal. Porto is the second-largest city, and Coimbra is famous for its university, but the seat of government is Lisbon.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Many countries have an older city and a more populous city. Only one of them is the capital.',
    afterTitle: 'After You Answer',
    afterText:
      'Lisbon hosts the Portuguese president, parliament, and prime minister\u2019s residence.',
  },
  {
    id: 'q006',
    category: 'European Capitals',
    prompt: 'Which city is the capital of Greece?',
    context:
      'The capital has been continuously inhabited for thousands of years and is the political centre of the country.',
    answers: [
      { id: 'a', text: 'Athens' },
      { id: 'b', text: 'Thessaloniki' },
      { id: 'c', text: 'Patras' },
      { id: 'd', text: 'Heraklion' },
    ],
    correct: 'a',
    explanation:
      'Athens is the capital of Greece. It is one of the oldest cities in the world and the centre of the modern Greek state.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Greek cities have very different regional roles, but only one is the national capital.',
    afterTitle: 'After You Answer',
    afterText:
      'Athens hosts the Hellenic Parliament, the prime minister\u2019s office, and most central government ministries.',
  },
  {
    id: 'q007',
    category: 'European Capitals',
    prompt: 'Which city is the capital of the Netherlands?',
    context:
      'The capital is the seat of the Dutch government, although the royal family lives in a nearby city.',
    answers: [
      { id: 'a', text: 'Amsterdam' },
      { id: 'b', text: 'Rotterdam' },
      { id: 'c', text: 'The Hague' },
      { id: 'd', text: 'Utrecht' },
    ],
    correct: 'a',
    explanation:
      'Amsterdam is the constitutional capital of the Netherlands. The Hague hosts the government and the royal court, but the capital by law is Amsterdam.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Some countries have multiple official cities: one as the capital and others as government or judicial seats.',
    afterTitle: 'After You Answer',
    afterText:
      'The Dutch parliament sits in The Hague, but the constitution names Amsterdam as the capital.',
  },
  {
    id: 'q008',
    category: 'European Capitals',
    prompt: 'Which city is the capital of Belgium?',
    context:
      'Belgium is a federal state with three regions. The capital hosts the federal parliament and the king.',
    answers: [
      { id: 'a', text: 'Brussels' },
      { id: 'b', text: 'Antwerp' },
      { id: 'c', text: 'Ghent' },
      { id: 'd', text: 'Liège' },
    ],
    correct: 'a',
    explanation:
      'Brussels is the capital of Belgium. It is also the de facto seat of the European Union\u2019s main institutions.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Belgium has both a federal capital and regional capitals. Only one of them is the national capital.',
    afterTitle: 'After You Answer',
    afterText:
      'The Belgian federal parliament, royal palace, and most ministries are based in Brussels.',
  },
  {
    id: 'q009',
    category: 'European Capitals',
    prompt: 'Which city is the capital of Austria?',
    context:
      'Austria\u2019s capital is famous for music history, classical architecture, and a long-standing role in European diplomacy.',
    answers: [
      { id: 'a', text: 'Vienna' },
      { id: 'b', text: 'Salzburg' },
      { id: 'c', text: 'Graz' },
      { id: 'd', text: 'Innsbruck' },
    ],
    correct: 'a',
    explanation:
      'Vienna is the capital of Austria. Salzburg and Innsbruck are regional centres, but the federal government is seated in Vienna.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Many Austrian cities are world-famous, but the political capital is one specific city.',
    afterTitle: 'After You Answer',
    afterText:
      'Vienna hosts the Austrian president, parliament, and the main federal ministries.',
  },
  {
    id: 'q010',
    category: 'European Capitals',
    prompt: 'Which city is the capital of Switzerland?',
    context:
      'Switzerland is a federal republic. Its capital is smaller than the country\u2019s largest cities and is known for a quieter, administrative character.',
    answers: [
      { id: 'a', text: 'Zurich' },
      { id: 'b', text: 'Geneva' },
      { id: 'c', text: 'Bern' },
      { id: 'd', text: 'Basel' },
    ],
    correct: 'c',
    explanation:
      'Bern is the federal capital of Switzerland. Zurich is the largest city, and Geneva hosts many international organisations, but the seat of parliament is Bern.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Switzerland deliberately keeps its capital smaller and less commercial than its largest urban centres.',
    afterTitle: 'After You Answer',
    afterText:
      'The Federal Assembly and Federal Council meet in Bern, even though the country\u2019s financial centre is Zurich.',
  },
  {
    id: 'q011',
    category: 'European Capitals',
    prompt: 'Which city is the capital of Poland?',
    context:
      'The capital sits on a major river and was heavily rebuilt after the Second World War. It is the political and cultural centre of the country.',
    answers: [
      { id: 'a', text: 'Krakow' },
      { id: 'b', text: 'Warsaw' },
      { id: 'c', text: 'Gdansk' },
      { id: 'd', text: 'Wroclaw' },
    ],
    correct: 'b',
    explanation:
      'Warsaw is the capital of Poland. Krakow is a historic royal capital, but the modern Polish government sits in Warsaw.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Many countries have a former capital that remains culturally important, but a different modern capital.',
    afterTitle: 'After You Answer',
    afterText:
      'The Sejm, the Senate, and the presidential palace are all located in Warsaw.',
  },
  {
    id: 'q012',
    category: 'European Capitals',
    prompt: 'Which city is the capital of Sweden?',
    context:
      'The capital is built on islands and connected by many bridges. It is the political, financial, and cultural centre of the country.',
    answers: [
      { id: 'a', text: 'Gothenburg' },
      { id: 'b', text: 'Malmo' },
      { id: 'c', text: 'Uppsala' },
      { id: 'd', text: 'Stockholm' },
    ],
    correct: 'd',
    explanation:
      'Stockholm is the capital of Sweden. The other cities are important, but the Riksdag and the royal palace are in Stockholm.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Scandinavian countries each have one main capital, often located on the coast or on a series of islands.',
    afterTitle: 'After You Answer',
    afterText:
      'The Swedish parliament (Riksdag) and the king\u2019s official residence are in Stockholm.',
  },
  {
    id: 'q013',
    category: 'European Capitals',
    prompt: 'Which city is the capital of Norway?',
    context:
      'The capital hosts the Storting (parliament) and the royal palace. It is also the centre of the country\u2019s cultural life.',
    answers: [
      { id: 'a', text: 'Bergen' },
      { id: 'b', text: 'Oslo' },
      { id: 'c', text: 'Stavanger' },
      { id: 'd', text: 'Trondheim' },
    ],
    correct: 'b',
    explanation:
      'Oslo is the capital of Norway. Bergen was a larger historical city, but the national government is seated in Oslo.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Norwegian cities have very different regional economies, but only one is the national capital.',
    afterTitle: 'After You Answer',
    afterText:
      'Oslo is the seat of the Storting, the prime minister\u2019s office, and the Norwegian royal family.',
  },
  {
    id: 'q014',
    category: 'European Capitals',
    prompt: 'Which city is the capital of Denmark?',
    context:
      'The capital sits on the islands of Zealand and Amager and is connected to Sweden by a bridge. It is the largest city in the country.',
    answers: [
      { id: 'a', text: 'Aarhus' },
      { id: 'b', text: 'Odense' },
      { id: 'c', text: 'Copenhagen' },
      { id: 'd', text: 'Aalborg' },
    ],
    correct: 'c',
    explanation:
      'Copenhagen is the capital of Denmark. The Danish parliament (Folketing) and the royal residence are located there.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Denmark has a clear central capital that is also its largest city, unlike some federal or historic capitals.',
    afterTitle: 'After You Answer',
    afterText:
      'The Folketing, the prime minister\u2019s office, and Christiansborg Palace are all in Copenhagen.',
  },
  {
    id: 'q015',
    category: 'European Capitals',
    prompt: 'Which city is the capital of Finland?',
    context:
      'The capital is in the south of the country on a peninsula. It is a centre of design, technology, and government.',
    answers: [
      { id: 'a', text: 'Turku' },
      { id: 'b', text: 'Tampere' },
      { id: 'c', text: 'Helsinki' },
      { id: 'd', text: 'Espoo' },
    ],
    correct: 'c',
    explanation:
      'Helsinki is the capital of Finland. The Eduskunta (parliament) and the president\u2019s residence are in Helsinki.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Some Nordic countries share cultural patterns, but each has its own capital city.',
    afterTitle: 'After You Answer',
    afterText:
      'Helsinki is the seat of Finland\u2019s parliament, government, and the official residence of the president.',
  },
  {
    id: 'q016',
    category: 'European Capitals',
    prompt: 'Which city is the capital of the Czech Republic?',
    context:
      'The capital has a long history as a European political centre and is known for its bridges, trams, and old town.',
    answers: [
      { id: 'a', text: 'Brno' },
      { id: 'b', text: 'Prague' },
      { id: 'c', text: 'Ostrava' },
      { id: 'd', text: 'Plzen' },
    ],
    correct: 'b',
    explanation:
      'Prague is the capital of the Czech Republic. The president, both chambers of parliament, and the prime minister are based in Prague.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Central European countries often have one dominant historical capital where the national government is also located.',
    afterTitle: 'After You Answer',
    afterText:
      'Prague Castle and the surrounding ministries are the centre of Czech political life.',
  },
  {
    id: 'q017',
    category: 'European Capitals',
    prompt: 'Which city is the capital of Hungary?',
    context:
      'The capital is split by the Danube River into Buda and Pest, and it is the political and cultural heart of the country.',
    answers: [
      { id: 'a', text: 'Debrecen' },
      { id: 'b', text: 'Szeged' },
      { id: 'c', text: 'Budapest' },
      { id: 'd', text: 'Pécs' },
    ],
    correct: 'c',
    explanation:
      'Budapest is the capital of Hungary. The Hungarian parliament building sits on the banks of the Danube.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Hungary\u2019s capital combines two historic cities, Buda and Pest, into one administrative unit.',
    afterTitle: 'After You Answer',
    afterText:
      'The National Assembly and the offices of the prime minister are in Budapest.',
  },
  {
    id: 'q018',
    category: 'European Capitals',
    prompt: 'Which city is the capital of Romania?',
    context:
      'The capital is the largest city in the country and is known for wide boulevards and a mix of architectural styles.',
    answers: [
      { id: 'a', text: 'Cluj-Napoca' },
      { id: 'b', text: 'Timisoara' },
      { id: 'c', text: 'Bucharest' },
      { id: 'd', text: 'Iasi' },
    ],
    correct: 'c',
    explanation:
      'Bucharest is the capital of Romania. The Romanian parliament meets in the Palace of the Parliament, the heaviest building in the world.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Romania has several large regional cities, but only one is the national capital.',
    afterTitle: 'After You Answer',
    afterText:
      'Bucharest hosts the presidency, the government, and both chambers of the Romanian parliament.',
  },
  {
    id: 'q019',
    category: 'European Capitals',
    prompt: 'Which city is the capital of the United Kingdom?',
    context:
      'The capital is in England and is the seat of the monarchy, the prime minister, and both houses of parliament.',
    answers: [
      { id: 'a', text: 'Edinburgh' },
      { id: 'b', text: 'London' },
      { id: 'c', text: 'Cardiff' },
      { id: 'd', text: 'Belfast' },
    ],
    correct: 'b',
    explanation:
      'London is the capital of the United Kingdom. The other cities are capitals of the UK\u2019s devolved nations within the country.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'The United Kingdom is made up of four nations, each with its own regional capital, but the national capital is London.',
    afterTitle: 'After You Answer',
    afterText:
      'Westminster is the seat of the House of Commons, the House of Lords, and the prime minister\u2019s office.',
  },
  {
    id: 'q020',
    category: 'European Capitals',
    prompt: 'Which city is the capital of Ireland?',
    context:
      'The capital sits on the east coast and is the centre of government, parliament, and national cultural life.',
    answers: [
      { id: 'a', text: 'Cork' },
      { id: 'b', text: 'Galway' },
      { id: 'c', text: 'Limerick' },
      { id: 'd', text: 'Dublin' },
    ],
    correct: 'd',
    explanation:
      'Dublin is the capital of the Republic of Ireland. The Oireachtas (parliament) and the president\u2019s residence are in Dublin.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Ireland has several well-known cities, but the seat of national government is Dublin.',
    afterTitle: 'After You Answer',
    afterText:
      'Leinster House hosts the Dáil and Seanad, and Áras an Uachtaráin is the official residence of the president.',
  },
  {
    id: 'q021',
    category: 'Asian Capitals',
    prompt: 'Which city is the capital of Japan?',
    context:
      'The capital is the seat of the Emperor, the Prime Minister, and the National Diet. It is one of the largest metropolitan areas in the world.',
    answers: [
      { id: 'a', text: 'Osaka' },
      { id: 'b', text: 'Kyoto' },
      { id: 'c', text: 'Tokyo' },
      { id: 'd', text: 'Yokohama' },
    ],
    correct: 'c',
    explanation:
      'Tokyo is the capital of Japan. Kyoto was the historic imperial capital for centuries, but the national government has been in Tokyo since the Meiji Restoration.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Japan moved its capital from Kyoto to Tokyo in the 19th century. Both cities remain important.',
    afterTitle: 'After You Answer',
    afterText:
      'The Imperial Palace, the National Diet, and the prime minister\u2019s residence (Kantei) are all in Tokyo.',
  },
  {
    id: 'q022',
    category: 'Asian Capitals',
    prompt: 'Which city is the capital of China?',
    context:
      'The capital is in the north of the country and hosts the central government, the National People\u2019s Congress, and key state institutions.',
    answers: [
      { id: 'a', text: 'Shanghai' },
      { id: 'b', text: 'Beijing' },
      { id: 'c', text: 'Guangzhou' },
      { id: 'd', text: 'Shenzhen' },
    ],
    correct: 'b',
    explanation:
      'Beijing is the capital of China. Shanghai is the country\u2019s largest city and a financial hub, but the central government is in Beijing.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Several Chinese cities have global economic importance, but only one is the political capital.',
    afterTitle: 'After You Answer',
    afterText:
      'Beijing hosts the National People\u2019s Congress, the State Council, and the headquarters of the Chinese Communist Party.',
  },
  {
    id: 'q023',
    category: 'Asian Capitals',
    prompt: 'Which city is the capital of South Korea?',
    context:
      'The capital sits on the Han River and is the political, cultural, and economic centre of the country.',
    answers: [
      { id: 'a', text: 'Busan' },
      { id: 'b', text: 'Incheon' },
      { id: 'c', text: 'Seoul' },
      { id: 'd', text: 'Daegu' },
    ],
    correct: 'c',
    explanation:
      'Seoul is the capital of South Korea. The National Assembly and the presidential office (Yongbyon-style complex) are in Seoul.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'South Korea has several large metropolitan areas, but the national government sits in Seoul.',
    afterTitle: 'After You Answer',
    afterText:
      'Seoul hosts the National Assembly, the presidential residence, and most ministries.',
  },
  {
    id: 'q024',
    category: 'Asian Capitals',
    prompt: 'Which city is the capital of North Korea?',
    context:
      'The capital is the political centre of the country and hosts the main state institutions and monuments.',
    answers: [
      { id: 'a', text: 'Pyongyang' },
      { id: 'b', text: 'Hamhung' },
      { id: 'c', text: 'Wonsan' },
      { id: 'd', text: 'Kaesong' },
    ],
    correct: 'a',
    explanation:
      'Pyongyang is the capital of North Korea. The other cities are important regionally, but the national government and main institutions are in Pyongyang.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Each country on the Korean peninsula has its own capital, with very different political and economic systems.',
    afterTitle: 'After You Answer',
    afterText:
      'Pyongyang hosts the Supreme People\u2019s Assembly, the central government, and major state ceremonies.',
  },
  {
    id: 'q025',
    category: 'Asian Capitals',
    prompt: 'Which city is the capital of India?',
    context:
      'India is a federal republic, and this city hosts the executive, legislative, and judicial branches at the national level.',
    answers: [
      { id: 'a', text: 'Mumbai' },
      { id: 'b', text: 'New Delhi' },
      { id: 'c', text: 'Kolkata' },
      { id: 'd', text: 'Bengaluru' },
    ],
    correct: 'b',
    explanation:
      'New Delhi is the capital of India. Mumbai is the financial capital, Bengaluru is a tech hub, and Kolkata was a former capital under British rule.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'India has many major cities, but New Delhi is the seat of the national government.',
    afterTitle: 'After You Answer',
    afterText:
      'New Delhi hosts the President (Rashtrapati Bhavan), Parliament, and the Prime Minister\u2019s Office.',
  },
  {
    id: 'q026',
    category: 'Asian Capitals',
    prompt: 'Which city is the capital of Pakistan?',
    context:
      'The capital is a planned city built in the 20th century to serve as the national seat of government.',
    answers: [
      { id: 'a', text: 'Karachi' },
      { id: 'b', text: 'Lahore' },
      { id: 'c', text: 'Islamabad' },
      { id: 'd', text: 'Peshawar' },
    ],
    correct: 'c',
    explanation:
      'Islamabad is the capital of Pakistan. Karachi is the largest city, and Lahore is a cultural capital, but the national government is in Islamabad.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Some countries move their capital from a historic city to a newly planned city for political or strategic reasons.',
    afterTitle: 'After You Answer',
    afterText:
      'Islamabad is adjacent to Rawalpindi and hosts the President\u2019s House, the Prime Minister\u2019s Office, and Parliament.',
  },
  {
    id: 'q027',
    category: 'Asian Capitals',
    prompt: 'Which city is the capital of Thailand?',
    context:
      'The capital is one of the largest and most-visited cities in Southeast Asia and sits on a major river.',
    answers: [
      { id: 'a', text: 'Phuket' },
      { id: 'b', text: 'Chiang Mai' },
      { id: 'c', text: 'Bangkok' },
      { id: 'd', text: 'Pattaya' },
    ],
    correct: 'c',
    explanation:
      'Bangkok is the capital of Thailand. The Thai king resides in Bangkok, and the National Assembly and government offices are also there.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Thailand\u2019s official ceremonial name is very long, but in everyday use the capital is known as Bangkok or Krung Thep.',
    afterTitle: 'After You Answer',
    afterText:
      'The Grand Palace, the parliament, and the prime minister\u2019s office are all in Bangkok.',
  },
  {
    id: 'q028',
    category: 'Asian Capitals',
    prompt: 'Which city is the capital of Vietnam?',
    context:
      'The capital is in the north of the country and has been the political centre for many centuries.',
    answers: [
      { id: 'a', text: 'Ho Chi Minh City' },
      { id: 'b', text: 'Da Nang' },
      { id: 'c', text: 'Hue' },
      { id: 'd', text: 'Hanoi' },
    ],
    correct: 'd',
    explanation:
      'Hanoi is the capital of Vietnam. Ho Chi Minh City (formerly Saigon) is the largest city, but the seat of government is in Hanoi.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Vietnam has a former imperial capital (Hue) and a large southern commercial city, but the modern capital is Hanoi.',
    afterTitle: 'After You Answer',
    afterText:
      'Hanoi hosts the National Assembly, the Office of the President, and the prime minister\u2019s offices.',
  },
  {
    id: 'q029',
    category: 'Asian Capitals',
    prompt: 'Which city is the capital of Indonesia?',
    context:
      'The country is an archipelagic state, and its capital is on the island of Java. The government has announced plans to relocate it, but the current capital is still this city.',
    answers: [
      { id: 'a', text: 'Bali' },
      { id: 'b', text: 'Surabaya' },
      { id: 'c', text: 'Jakarta' },
      { id: 'd', text: 'Bandung' },
    ],
    correct: 'c',
    explanation:
      'Jakarta is the current capital of Indonesia. The government has been working on a plan to move the capital to Nusantara on Borneo.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Some countries relocate their capital for reasons of overcrowding, geography, or national development. Indonesia is one such case.',
    afterTitle: 'After You Answer',
    afterText:
      'Jakarta remains the working capital while the new capital, Nusantara, is being developed.',
  },
  {
    id: 'q030',
    category: 'Asian Capitals',
    prompt: 'Which city is the capital of the Philippines?',
    context:
      'The capital is a highly urbanised city in the National Capital Region, often called Metro Manila in everyday conversation.',
    answers: [
      { id: 'a', text: 'Manila' },
      { id: 'b', text: 'Cebu' },
      { id: 'c', text: 'Davao' },
      { id: 'd', text: 'Quezon City' },
    ],
    correct: 'a',
    explanation:
      'Manila is the capital of the Philippines. The seat of government and the presidential palace are located there.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'The Philippines has many important cities, but Manila is the constitutional capital.',
    afterTitle: 'After You Answer',
    afterText:
      'Malacañang Palace, the seat of the president, is in Manila, while Quezon City hosts some government offices within the same metro area.',
  },
  {
    id: 'q031',
    category: 'Asian Capitals',
    prompt: 'Which city is the capital of Malaysia?',
    context:
      'The capital is a planned federal territory and serves as the administrative centre of the country.',
    answers: [
      { id: 'a', text: 'Kuala Lumpur' },
      { id: 'b', text: 'George Town' },
      { id: 'c', text: 'Johor Bahru' },
      { id: 'd', text: 'Ipoh' },
    ],
    correct: 'a',
    explanation:
      'Kuala Lumpur is the national capital of Malaysia. Putrajaya is the federal administrative centre, but the constitutional capital remains Kuala Lumpur.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Malaysia has a constitutional capital and a separate administrative centre. They are different cities in the same region.',
    afterTitle: 'After You Answer',
    afterText:
      'Kuala Lumpur is the seat of the Yang di-Pertuan Agong, and Putrajaya handles most ministerial offices.',
  },
  {
    id: 'q032',
    category: 'Asian Capitals',
    prompt: 'Which city is the capital of Singapore?',
    context:
      'This is a city-state, so the country and the capital are one and the same urban area.',
    answers: [
      { id: 'a', text: 'Jurong' },
      { id: 'b', text: 'Woodlands' },
      { id: 'c', text: 'Singapore' },
      { id: 'd', text: 'Tampines' },
    ],
    correct: 'c',
    explanation:
      'Singapore is both a sovereign country and a city. Its capital is Singapore itself. The other options are districts within the city-state.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'For a city-state, there is no separate capital city: the country is one city.',
    afterTitle: 'After You Answer',
    afterText:
      'Singapore\u2019s parliament, presidential office, and prime minister\u2019s office are all located within the city-state.',
  },
  {
    id: 'q033',
    category: 'Asian Capitals',
    prompt: 'Which city is the capital of Saudi Arabia?',
    context:
      'The capital sits in the central region of the country and is the seat of the king, the Council of Ministers, and major government bodies.',
    answers: [
      { id: 'a', text: 'Mecca' },
      { id: 'b', text: 'Riyadh' },
      { id: 'c', text: 'Jeddah' },
      { id: 'd', text: 'Medina' },
    ],
    correct: 'b',
    explanation:
      'Riyadh is the capital of Saudi Arabia. Mecca is the holiest city in Islam, and Jeddah is the country\u2019s main port, but the government is seated in Riyadh.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Saudi Arabia has religiously and economically important cities, but the political capital is Riyadh.',
    afterTitle: 'After You Answer',
    afterText:
      'The Royal Court, the Council of Ministers, and most government ministries are based in Riyadh.',
  },
  {
    id: 'q034',
    category: 'Asian Capitals',
    prompt: 'Which city is the capital of Iran?',
    context:
      'The capital sits at the foot of the Alborz mountains and is the political, cultural, and economic centre of the country.',
    answers: [
      { id: 'a', text: 'Isfahan' },
      { id: 'b', text: 'Shiraz' },
      { id: 'c', text: 'Tehran' },
      { id: 'd', text: 'Tabriz' },
    ],
    correct: 'c',
    explanation:
      'Tehran is the capital of Iran. The other cities have deep historical importance, but the national government and parliament sit in Tehran.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Iran has many ancient and culturally important cities, but the modern capital is Tehran.',
    afterTitle: 'After You Answer',
    afterText:
      'Tehran hosts the Islamic Consultative Assembly (Majlis), the presidency, and the supreme leader\u2019s offices.',
  },
  {
    id: 'q035',
    category: 'Asian Capitals',
    prompt: 'Which city is the capital of Turkey (Türkiye)?',
    context:
      'The capital is in the interior of the country and was chosen in the early 20th century as the new national seat of government.',
    answers: [
      { id: 'a', text: 'Istanbul' },
      { id: 'b', text: 'Izmir' },
      { id: 'c', text: 'Ankara' },
      { id: 'd', text: 'Bursa' },
    ],
    correct: 'c',
    explanation:
      'Ankara is the capital of Türkiye. Istanbul is the largest city and a former Ottoman capital, but the national government is based in Ankara.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'When the Republic of Türkiye was founded, the capital moved from Istanbul to Ankara for strategic reasons.',
    afterTitle: 'After You Answer',
    afterText:
      'Ankara hosts the Grand National Assembly, the presidency, and the main government ministries.',
  },
  {
    id: 'q036',
    category: 'Asian Capitals',
    prompt: 'Which city is the capital of Israel?',
    context:
      'Israel\u2019s government, the Knesset, and the Supreme Court are based in this city, although the country\u2019s status is contested internationally.',
    answers: [
      { id: 'a', text: 'Tel Aviv' },
      { id: 'b', text: 'Haifa' },
      { id: 'c', text: 'Jerusalem' },
      { id: 'd', text: 'Beersheba' },
    ],
    correct: 'c',
    explanation:
      'Jerusalem is declared the capital of Israel by Israeli law, and the Knesset, Supreme Court, and official residences are located there. Most foreign embassies are in Tel Aviv because of the disputed status.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'A few capitals are subject to international dispute. The question is about the capital declared by the country in question.',
    afterTitle: 'After You Answer',
    afterText:
      'Israeli institutions operate from Jerusalem, although many countries maintain their embassies in Tel Aviv pending a final political settlement.',
  },
  {
    id: 'q037',
    category: 'African Capitals',
    prompt: 'Which city is the capital of Egypt?',
    context:
      'The capital is the largest city in the Arab world and sits on the Nile. It has served as a national capital for centuries.',
    answers: [
      { id: 'a', text: 'Cairo' },
      { id: 'b', text: 'Alexandria' },
      { id: 'c', text: 'Luxor' },
      { id: 'd', text: 'Aswan' },
    ],
    correct: 'a',
    explanation:
      'Cairo is the capital of Egypt. Alexandria is a major port, and Luxor and Aswan are historic cities, but the national government is in Cairo.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Egypt has ancient cities, but the modern capital is Cairo, the largest city on the African continent.',
    afterTitle: 'After You Answer',
    afterText:
      'Cairo hosts the Egyptian presidency, the parliament, and the main government ministries.',
  },
  {
    id: 'q038',
    category: 'African Capitals',
    prompt: 'Which city is the capital of South Africa?',
    context:
      'South Africa has three official branches of government located in different cities. One city serves as the official legislative capital.',
    answers: [
      { id: 'a', text: 'Johannesburg' },
      { id: 'b', text: 'Cape Town' },
      { id: 'c', text: 'Durban' },
      { id: 'd', text: 'Pretoria' },
    ],
    correct: 'd',
    explanation:
      'Pretoria is the administrative capital of South Africa. Cape Town is the legislative capital, and Bloemfontein is the judicial capital. Johannesburg is the largest city.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'South Africa has three capitals, each hosting a branch of government. The administrative seat is Pretoria.',
    afterTitle: 'After You Answer',
    afterText:
      'Pretoria is where the Union Buildings and the president\u2019s official office are located. Parliament sits in Cape Town.',
  },
  {
    id: 'q039',
    category: 'American Capitals',
    prompt: 'Which city is the capital of Canada?',
    context:
      'The capital is not the country\u2019s largest city. It is the seat of the federal government and Parliament.',
    answers: [
      { id: 'a', text: 'Toronto' },
      { id: 'b', text: 'Ottawa' },
      { id: 'c', text: 'Montreal' },
      { id: 'd', text: 'Vancouver' },
    ],
    correct: 'b',
    explanation:
      'Ottawa is the capital of Canada. Toronto is the largest city, and Montreal is the largest French-speaking city, but the federal government is in Ottawa.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Canada\u2019s capital is a bilingual city located on the Ottawa River, on the border between Ontario and Quebec.',
    afterTitle: 'After You Answer',
    afterText:
      'Parliament Hill, the Prime Minister\u2019s Office, and the Governor General\u2019s residence (Rideau Hall) are in Ottawa.',
  },
  {
    id: 'q040',
    category: 'American Capitals',
    prompt: 'Which city is the capital of Brazil?',
    context:
      'The capital is a planned city built in the 20th century to develop the country\u2019s interior. It is not the country\u2019s largest or most famous city.',
    answers: [
      { id: 'a', text: 'Rio de Janeiro' },
      { id: 'b', text: 'São Paulo' },
      { id: 'c', text: 'Salvador' },
      { id: 'd', text: 'Brasília' },
    ],
    correct: 'd',
    explanation:
      'Brasília is the capital of Brazil. The capital was moved from Rio de Janeiro to Brasília in 1960 to encourage development of the interior.',
    beforeTitle: 'Before You Pick',
    beforeText:
      'Brazil built a brand-new capital in its central highlands. Rio de Janeiro, the former capital, remains a major cultural city.',
    afterTitle: 'After You Answer',
    afterText:
      'Brasília is known for its modernist architecture designed by Lúcio Costa and Oscar Niemeyer, including the National Congress building.',
  },
];

export const totalQuestions = questions.length;
