import type { Country } from './types';

export const countries: Country[] = [
  {
    id: '1',
    name: 'Italy',
    slug: 'italy',
    description: 'Home to ancient Roman ruins, Renaissance art, and exquisite cuisine.',
    imageId: 'italy_hero',
    longDescription: "Italy, a country in Southern Europe, is a place where history, art, and gastronomy converge. From the ancient ruins of Rome to the Renaissance masterpieces of Florence and the romantic canals of Venice, Italy offers a journey through time. Its diverse landscapes range from the sun-drenched coasts of Sicily to the snow-capped peaks of the Alps.",
    history: "The history of Italy is a tapestry woven with the threads of empires and the genius of its people. It is the birthplace of the Roman Empire, which left an indelible mark on Western civilization in law, governance, and engineering. The Renaissance, a fervent period of cultural and artistic rebirth, began in Italy, producing luminaries like Leonardo da Vinci, Michelangelo, and Raphael.",
    travelTips: "When visiting Italy, be sure to indulge in the regional cuisine, as each area boasts its own unique flavors. Public transportation, especially trains, is an efficient way to travel between major cities. It's advisable to book accommodations and popular tours in advance, particularly during peak tourist season. Learning a few basic Italian phrases will be greatly appreciated by the locals.",
    landmarks: [
      { id: 'l1', name: 'Colosseum', slug: 'colosseum', description: "An iconic symbol of Imperial Rome, this massive stone amphitheater was used for gladiatorial contests and public spectacles.", imageId: "colosseum_detail" },
      { id: 'l2', name: 'Canals of Venice', slug: 'canals-of-venice', description: "A unique city built on water, with a network of canals serving as streets, plied by gondolas.", imageId: "venice_detail" },
      { id: 'l3', name: 'Leaning Tower of Pisa', slug: 'leaning-tower-of-pisa', description: "Famous for its unintended tilt, this freestanding bell tower is an architectural marvel.", imageId: "pisa_detail" },
    ]
  },
  {
    id: '2',
    name: 'Japan',
    slug: 'japan',
    description: 'A unique blend of ancient traditions and futuristic technology.',
    imageId: 'japan_hero',
    longDescription: "Japan is an island nation in East Asia where ancient traditions are seamlessly woven into a futuristic and fast-paced lifestyle. From serene temples and meticulously maintained gardens to neon-lit skyscrapers and bullet trains, Japan is a study in contrasts. It offers a rich cultural experience, from the formal tea ceremonies to the vibrant world of anime and manga.",
    history: "Japan's history is rich with samurai warriors, imperial dynasties, and periods of isolation that have shaped its unique culture. The Edo period brought about a flourishing of arts and culture, while the Meiji Restoration propelled Japan into the modern era. Today, Japan is a global leader in technology and innovation while still cherishing its historical heritage.",
    travelTips: "The Japan Rail Pass is an economical way to explore the country by train. Politeness and respect are paramount in Japanese culture. While major cities are modern, carrying some cash is useful, especially in rural areas. Don't miss the opportunity to stay in a traditional ryokan (inn) and relax in an onsen (hot spring).",
    landmarks: [
      { id: 'l4', name: 'Fushimi Inari Shrine', slug: 'fushimi-inari-shrine', description: "Famous for its thousands of vibrant red torii gates that wind through a network of trails.", imageId: "fushimi_inari_detail" },
      { id: 'l5', name: 'Tokyo Skytree', slug: 'tokyo-skytree', description: "A broadcasting and observation tower that is the tallest structure in Japan, offering panoramic city views.", imageId: "tokyo_skytree_detail" },
      { id: 'l6', name: 'Kinkaku-ji (Golden Pavilion)', slug: 'kinkaku-ji', description: "A stunning Zen Buddhist temple in Kyoto, with its top two floors completely covered in gold leaf.", imageId: "golden_pavilion_detail" },
    ]
  },
  {
    id: '3',
    name: 'Egypt',
    slug: 'egypt',
    description: 'Land of the Pharaohs, with millennia-old monuments and rich history.',
    imageId: 'egypt_hero',
    longDescription: "Egypt, a country linking Northeast Africa with the Middle East, dates to the time of the pharaohs. Millennia-old monuments sit along the fertile Nile River Valley, including Giza's colossal Pyramids and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple and Valley of the Kings tombs. The capital, Cairo, is home to Ottoman landmarks and a trove of antiquities.",
    history: "Ancient Egypt is one of the world's oldest and most fascinating civilizations, with a history that spans over 3,000 years. The pharaohs, regarded as gods on Earth, built magnificent pyramids, temples, and tombs. The civilization made significant advances in writing (hieroglyphs), mathematics, and medicine. The legacy of ancient Egypt continues to captivate archaeologists and historians.",
    travelTips: "A cruise down the Nile is a popular and convenient way to see many of the ancient sites between Luxor and Aswan. Dress conservatively, especially when visiting religious sites. Bargaining is common in markets (souks). Stay hydrated, as the climate can be hot and dry. Hiring a qualified Egyptologist as a guide can greatly enhance your experience.",
    landmarks: [
        { id: 'l7', name: 'Pyramids of Giza', slug: 'pyramids-of-giza', description: "The last of the Seven Wonders of the Ancient World still standing, these pyramids are a testament to ancient engineering.", imageId: 'pyramids_detail' },
        { id: 'l8', name: 'Karnak Temple', slug: 'karnak-temple', description: "A vast complex of temples, chapels, pylons, and other buildings near Luxor.", imageId: 'karnak_detail' },
        { id: 'l9', name: 'Valley of the Kings', slug: 'valley-of-the-kings', description: "For nearly 500 years, this valley was used for rock-cut tombs for the Pharaohs and powerful nobles.", imageId: 'valley_kings_detail' }
    ]
  },
  {
    id: '4',
    name: 'Brazil',
    slug: 'brazil',
    description: 'Famous for its vibrant carnivals, vast rainforests, and iconic landmarks.',
    imageId: 'brazil_hero',
    longDescription: "Brazil, the largest country in South America, is a land of immense diversity and natural beauty. It's renowned for its vibrant Carnival festival in Rio de Janeiro, the vast Amazon Rainforest, and the stunning Iguazu Falls. Brazil's culture is a rich mix of Indigenous, African, and European influences, reflected in its music, dance, and cuisine.",
    history: "Brazil's history is marked by Portuguese colonization, the sugar and gold rushes, and a period of monarchy before becoming a republic. It was the last country in the Western world to abolish slavery. In the 20th century, Brazil experienced significant industrial and agricultural growth and cultural dynamism, becoming a major regional power.",
    travelTips: "Brazil is a huge country, so domestic flights are often necessary for long distances. Learn some basic Portuguese, as English is not widely spoken outside of tourist areas. Be mindful of your safety, especially in large cities. Embrace the relaxed and friendly culture, and be sure to try local specialties like feijoada and caipirinhas.",
    landmarks: [
        { id: 'l10', name: 'Christ the Redeemer', slug: 'christ-the-redeemer', description: "An Art Deco statue of Jesus Christ in Rio de Janeiro, located at the peak of Corcovado mountain.", imageId: 'christ_redeemer_detail' },
        { id: 'l11', name: 'Iguazu Falls', slug: 'iguazu-falls', description: "A magnificent waterfall system on the border of Brazil and Argentina, one of the largest in the world.", imageId: 'iguazu_detail' },
        { id: 'l12', name: 'Amazon Rainforest', slug: 'amazon-rainforest', description: "The world's largest tropical rainforest, known for its immense biodiversity.", imageId: 'amazon_detail' }
    ]
  },
  {
    id: '5',
    name: 'Australia',
    slug: 'australia',
    description: 'A continent of stunning natural beauty, from coral reefs to vast deserts.',
    imageId: 'australia_hero',
    longDescription: "Australia is a continent and country of incredible contrasts, from the vibrant marine life of the Great Barrier Reef to the ancient, red landscapes of the Outback. Its cities, like Sydney and Melbourne, are bustling hubs of culture and arts. Australia is famous for its unique wildlife, including kangaroos, koalas, and the platypus.",
    history: "Australia's history is ancient, with Indigenous Australians inhabiting the continent for over 65,000 years. European settlement began in 1788 with the arrival of the British First Fleet. The country evolved from a penal colony to a prosperous, independent nation, with a culture that values mateship, sport, and the great outdoors.",
    travelTips: "Australia is vast, so plan your itinerary carefully and consider flights for long distances. The sun can be extremely strong, so always wear sunscreen, a hat, and sunglasses. Tipping is not obligatory but is appreciated for good service. When driving in rural areas, be aware of wildlife on the roads, especially at dawn and dusk.",
    landmarks: [
        { id: 'l13', name: 'Sydney Opera House', slug: 'sydney-opera-house', description: "A multi-venue performing arts centre in Sydney, with a unique sail-like design.", imageId: 'sydney_opera_house_detail' },
        { id: 'l14', name: 'Uluru (Ayers Rock)', slug: 'uluru', description: "A massive sandstone monolith in the heart of the Northern Territory's arid 'Red Centre'.", imageId: 'uluru_detail' },
        { id: 'l15', name: 'Great Barrier Reef', slug: 'great-barrier-reef', description: "The world's largest coral reef system, composed of over 2,900 individual reefs.", imageId: 'great_barrier_reef_detail' }
    ]
  },
  {
    id: '6',
    name: 'United States',
    slug: 'usa',
    description: 'A diverse nation with iconic cities, vast national parks, and a rich cultural tapestry.',
    imageId: 'usa_hero',
    longDescription: "The United States is a vast and diverse country, offering everything from the bustling metropolises of New York and Los Angeles to the breathtaking natural wonders of the Grand Canyon and Yellowstone. Its cultural landscape is a mosaic of influences from around the globe, creating a dynamic and ever-evolving society.",
    history: "The history of the United States is one of exploration, revolution, and expansion. From its founding by immigrants seeking freedom and opportunity to its rise as a global superpower, the U.S. has been shaped by conflict, innovation, and a continuous struggle for civil rights. It's a story of a nation constantly redefining itself.",
    travelTips: "The U.S. is best explored by car for flexibility, but domestic flights are essential for covering its vast distances. Tipping is customary in restaurants, bars, and for services (typically 15-20%). Sales tax is added at the checkout and varies by state. Each region has its own distinct culture and attractions, so plan accordingly.",
    landmarks: [
        { id: 'l16', name: 'Statue of Liberty', slug: 'statue-of-liberty', description: "A colossal neoclassical sculpture on Liberty Island in New York Harbor, a symbol of freedom.", imageId: 'statue_of_liberty_detail' },
        { id: 'l17', name: 'Grand Canyon', slug: 'grand-canyon', description: "A massive canyon in Arizona, carved by the Colorado River, known for its overwhelming size and intricate and colorful landscape.", imageId: 'grand_canyon_detail' },
        { id: 'l18', name: 'Golden Gate Bridge', slug: 'golden-gate-bridge', description: "An iconic suspension bridge spanning the Golden Gate, the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean.", imageId: 'golden_gate_bridge_detail' }
    ]
  },
  {
    id: '7',
    name: 'France',
    slug: 'france',
    description: 'A center of art, fashion, gastronomy and culture with iconic landmarks.',
    imageId: 'france_hero',
    longDescription: "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine.",
    history: "France's history is rich and complex, from the Roman conquest of Gaul to the French Revolution, which transformed the nation and the world. It has been a major center of European culture for centuries, producing influential philosophers, artists, and writers. The Napoleonic era left a lasting legal and administrative legacy.",
    travelTips: "The high-speed TGV train network is a great way to travel between major French cities. It's polite to greet shopkeepers with 'Bonjour' upon entering. A 'service compris' (service charge) is usually included in restaurant bills, but a small extra tip for good service is appreciated. Try to explore beyond Paris to experience the diverse regions.",
    landmarks: [
        { id: 'l19', name: 'Eiffel Tower', slug: 'eiffel-tower', description: "A wrought-iron lattice tower on the Champ de Mars in Paris, it is a global cultural icon of France.", imageId: 'eiffel_tower_detail' },
        { id: 'l20', name: 'Louvre Museum', slug: 'louvre-museum', description: "The world's largest art museum and a historic monument in Paris, home to masterpieces like the Mona Lisa.", imageId: 'louvre_detail' },
        { id: 'l21', name: 'Mont Saint-Michel', slug: 'mont-saint-michel', description: "A tidal island and mainland commune in Normandy, France, known for its stunning abbey.", imageId: 'mont_saint_michel_detail' }
    ]
  },
  {
    id: '8',
    name: 'China',
    slug: 'china',
    description: 'A vast country with a rich history stretching back millennia and breathtaking landscapes.',
    imageId: 'china_hero',
    longDescription: "China, a populous nation in East Asia, has a landscape that spans grassland, desert, mountains, lakes, rivers and more than 14,000km of coastline. Beijing, the capital, mixes modern architecture with historic sites like the Forbidden City palace complex and Tiananmen Square. Shanghai is a skyscraper-studded global financial center.",
    history: "China is one of the world's oldest civilizations, with a continuous history of over 3,000 years. It is the cradle of numerous inventions, including paper, gunpowder, printing, and the compass. Dynastic rule, imperial expansion, and periods of great artistic and scientific achievement characterize its long and storied past.",
    travelTips: "High-speed trains are the best way to travel between major cities. A VPN is necessary to access many Western websites and apps. While mobile payments are ubiquitous, it's wise for tourists to carry some cash. Learning a few Mandarin phrases will be very helpful. Be prepared for crowds, especially at popular tourist sites.",
    landmarks: [
        { id: 'l22', name: 'Great Wall of China', slug: 'great-wall-of-china', description: "A series of fortifications made of stone, brick, and other materials, built to protect the Chinese states and empires.", imageId: 'great_wall_detail' },
        { id: 'l23', name: 'Terracotta Army', slug: 'terracotta-army', description: "A collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China.", imageId: 'terracotta_army_detail' },
        { id: 'l24', name: 'The Bund, Shanghai', slug: 'the-bund-shanghai', description: "A waterfront area in central Shanghai, with buildings and wharves on its east side and a row of historic buildings on its west.", imageId: 'bund_shanghai_detail' }
    ]
  },
  {
    id: '9',
    name: 'India',
    slug: 'india',
    description: 'A vibrant land of diverse cultures, ancient history, and spiritual depth.',
    imageId: 'india_hero',
    longDescription: "India is a vast South Asian country with diverse terrain – from Himalayan peaks to Indian Ocean coastline – and history reaching back 5 millennia. It's a land of incredible diversity, with a myriad of cultures, languages, and religions. From the bustling streets of Mumbai to the serene backwaters of Kerala, India offers a spectrum of experiences.",
    history: "India's history is one of ancient civilizations, vast empires, and a rich tapestry of cultures. The Indus Valley Civilization is one of the world's oldest. The country has been the birthplace of major religions like Hinduism, Buddhism, Jainism, and Sikhism. The British colonial era culminated in a powerful independence movement led by Mahatma Gandhi.",
    travelTips: "Trains are a classic way to experience India, but flights are recommended for long distances. Be cautious with street food and drink only bottled or filtered water. Dress modestly, particularly when visiting religious sites. Bargaining is expected in markets. India can be intense and chaotic, so a patient and open-minded attitude is key.",
    landmarks: [
        { id: 'l25', name: 'Taj Mahal', slug: 'taj-mahal', description: "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan.", imageId: 'taj_mahal_detail' },
        { id: 'l26', name: 'Varanasi Ghats', slug: 'varanasi-ghats', description: "Riverfront steps leading to the banks of the River Ganges, used for religious ceremonies and cremation.", imageId: 'varanasi_ghats_detail' },
        { id: 'l27', name: 'Amber Fort', slug: 'amber-fort', description: "A fort located in Amer, Rajasthan, known for its artistic Hindu style elements.", imageId: 'amber_fort_detail' }
    ]
  },
  {
    id: '10',
    name: 'Peru',
    slug: 'peru',
    description: 'Home to the ancient Inca civilization and the stunning Andes mountains.',
    imageId: 'peru_hero',
    longDescription: "Peru is a country in South America that's home to a section of Amazon rainforest and Machu Picchu, an ancient Incan city high in the Andes mountains. The region around Machu Picchu, including the Sacred Valley, Inca Trail and colonial city of Cusco, is rich in archaeological sites. On Peru’s arid Pacific coast is Lima, the capital, with a preserved colonial center.",
    history: "Peru's history is dominated by the Inca Empire, the largest empire in pre-Columbian America. Their advanced engineering and administrative skills are still visible in sites like Machu Picchu. The Spanish conquest in the 16th century brought a new era, blending European and Indigenous cultures. Peru gained independence in 1821.",
    travelTips: "Acclimatize to the altitude in cities like Cusco before undertaking strenuous treks. The food is a highlight; be sure to try ceviche and lomo saltado. Domestic flights are the most practical way to travel between regions. Learn some basic Spanish. U.S. dollars are widely accepted in tourist areas, but it's good to have local currency (soles).",
    landmarks: [
        { id: 'l28', name: 'Machu Picchu', slug: 'machu-picchu', description: "An Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley.", imageId: 'machu_picchu_detail' },
        { id: 'l29', name: 'Nazca Lines', slug: 'nazca-lines', description: "A group of geoglyphs made in the soil of the Nazca Desert in southern Peru.", imageId: 'nazca_lines_detail' },
        { id: 'l30', name: 'Lake Titicaca', slug: 'lake-titicaca', description: "One of South America's largest lakes and the world’s highest navigable body of water.", imageId: 'lake_titicaca_detail' }
    ]
  },
  {
    id: '11',
    name: 'Greece',
    slug: 'greece',
    description: 'Birthplace of democracy, philosophy, and stunning islands.',
    imageId: 'greece_hero',
    longDescription: "Greece, located in Southeast Europe, is a country rich in history and culture. It's known for its ancient ruins, beautiful islands with white-sand beaches, and delicious cuisine. From the Acropolis in Athens to the stunning sunsets in Santorini, Greece offers a diverse range of experiences for every traveler.",
    history: "Greece is often called the cradle of Western civilization. It's the birthplace of democracy, Western philosophy, the Olympic Games, and major scientific and mathematical principles. The country's history is evident in its many ancient sites, including the Parthenon, the temple of Apollo at Delphi, and the Palace of Knossos in Crete.",
    travelTips: "Island hopping is a popular activity in Greece, with ferries connecting the many islands. The best time to visit is during the spring and fall when the weather is pleasant and the crowds are smaller. Greek cuisine is a highlight, so be sure to try local dishes like moussaka, souvlaki, and fresh seafood. Learning a few Greek phrases will be appreciated by the locals.",
    landmarks: [
      { id: 'l31', name: 'Acropolis of Athens', slug: 'acropolis-of-athens', description: 'An ancient citadel located on a rocky outcrop above the city of Athens and contains the remains of several ancient buildings of great architectural and historic significance, the most famous being the Parthenon.', imageId: 'acropolis_detail' },
      { id: 'l32', name: 'Santorini', slug: 'santorini', description: 'A volcanic island in the Cyclades group of the Greek islands. It is famous for its dramatic views, stunning sunsets from Oia town, the white-washed buildings, and its very own active volcano.', imageId: 'santorini_detail' },
      { id: 'l33', name: 'Meteora', slug: 'meteora', description: 'A rock formation in central Greece hosting one of the largest and most precipitously built complexes of Eastern Orthodox monasteries, second in importance only to Mount Athos.', imageId: 'meteora_detail' }
    ]
  },
  {
    id: '12',
    name: 'Canada',
    slug: 'canada',
    description: 'A vast country of breathtaking landscapes, from mountains to coastlines.',
    imageId: 'canada_hero',
    longDescription: "Canada is a vast and diverse country, known for its stunning natural beauty, multicultural cities, and friendly locals. From the Rocky Mountains in the west to the rugged coastlines of the east, Canada offers a wide range of outdoor activities. Its cities, like Toronto, Vancouver, and Montreal, are vibrant hubs of culture, food, and art.",
    history: "Canada's history has been shaped by Indigenous peoples, who have lived on the land for thousands of years, and by French and British colonization. The country was formed through a gradual process of confederation, beginning in 1867. Today, Canada is a multicultural nation that celebrates its diversity and heritage.",
    travelTips: "Canada is a huge country, so plan your transportation accordingly. The weather can vary greatly depending on the region and time of year, so pack layers. Tipping is customary in restaurants and for services. Canadians are known for their politeness, so be sure to say 'please' and 'thank you.'",
    landmarks: [
      { id: 'l34', name: 'CN Tower', slug: 'cn-tower', description: 'A 553.3 m-high concrete communications and observation tower in downtown Toronto, Ontario, Canada. It was completed in 1976, becoming the world\'s tallest free-standing structure and world\'s tallest tower at the time.', imageId: 'cn_tower_detail' },
      { id: 'l35', name: 'Banff National Park', slug: 'banff-national-park', description: 'Canada\'s oldest national park, established in 1885. Located in the Rocky Mountains, it is famous for its turquoise-colored lakes, majestic mountains, and abundant wildlife.', imageId: 'banff_detail' },
      { id: 'l36', name: 'Niagara Falls', slug: 'niagara-falls', description: 'A group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the province of Ontario in Canada and the state of New York in the United States.', imageId: 'niagara_falls_detail' }
    ]
  }
];
