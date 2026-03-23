const fish = [
	{
		id: 1,
		title: "Atlantic Salmon",
		textAbout:
			"The Atlantic salmon is a species of ray-finned fish in the family Salmonidae. It is found in the northern Atlantic Ocean and in rivers that flow into the North Atlantic.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Atlantic_salmon_Atlantic_salmon_Salmo_salar.jpg/320px-Atlantic_salmon_Atlantic_salmon_Salmo_salar.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Atlantic_salmon",
	},
	{
		id: 2,
		title: "Clownfish",
		textAbout:
			"The clownfish is a small brightly colored fish known for its symbiotic relationship with sea anemones. All clownfish are born male and some transition to female.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Clown_fish_in_the_shallows.jpg/320px-Clown_fish_in_the_shallows.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Clownfish",
	},
	{
		id: 3,
		title: "Atlantic Cod",
		textAbout:
			"The Atlantic cod is a benthopelagic fish found in the colder waters of the North Atlantic Ocean. It is one of the most commercially important fish and the classic ingredient in traditional fish and chips.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Atlantic_cod.jpg/320px-Atlantic_cod.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Atlantic_cod",
	},
	{
		id: 4,
		title: "Bluefin Tuna",
		textAbout:
			"The bluefin tuna is among the largest, fastest, and most highly prized fish in the world. Native to the Atlantic Ocean, it can swim up to 43 mph and is highly sought after in the sushi market.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Pacific_bluefin_tuna.jpg/320px-Pacific_bluefin_tuna.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Atlantic_bluefin_tuna",
	},
	{
		id: 5,
		title: "Great White Shark",
		textAbout:
			"The great white shark is found in the coastal surface waters of all major oceans. It is the world's largest known predatory fish, reaching lengths of over 6 meters.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/320px-White_shark.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Great_white_shark",
	},
	{
		id: 6,
		title: "Seahorse",
		textAbout:
			"Seahorses are small marine fish of the genus Hippocampus, notable for being the only animal species where the male carries the young during pregnancy.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/A_pair_of_seahorses.jpg/320px-A_pair_of_seahorses.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Seahorse",
	},
	{
		id: 7,
		title: "Swordfish",
		textAbout:
			"The swordfish is a large, highly migratory predatory fish characterized by a long, flat, pointed bill. They are a popular sport fish and can weigh up to 650 kg.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Swordfish_illustration.jpg/320px-Swordfish_illustration.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Swordfish",
	},
	{
		id: 8,
		title: "Manta Ray",
		textAbout:
			"Manta rays are large cartilaginous fish related to sharks. They are the largest rays in the world, with wingspans reaching up to 7 meters, and are known for their graceful movement through the ocean.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Manta_ray_at_cleaning_station.jpg/320px-Manta_ray_at_cleaning_station.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Manta_ray",
	},
	{
		id: 9,
		title: "Piranha",
		textAbout:
			"Piranhas are freshwater fish native to South American rivers, known for their sharp teeth and powerful jaws. Despite their fearsome reputation, most species are omnivorous scavengers.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Piranha.jpg/320px-Piranha.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Piranha",
	},
	{
		id: 10,
		title: "Anglerfish",
		textAbout:
			"The anglerfish is a bony fish named for its characteristic mode of predation, using a fleshy growth from its head as a lure. It lives in the deep ocean and is one of the most bizarre-looking creatures on Earth.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Linophryne_arborifera.jpg/320px-Linophryne_arborifera.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Anglerfish",
	},
	{
		id: 11,
		title: "Halibut",
		textAbout:
			"Halibut are the largest flatfish in the ocean, capable of growing over 2.5 meters long and weighing more than 300 kg. They are found in the North Pacific and North Atlantic oceans and are prized for their mild white flesh.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Pacific_halibut_NOAA.jpg/320px-Pacific_halibut_NOAA.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Halibut",
	},
	{
		id: 12,
		title: "Moray Eel",
		textAbout:
			"Moray eels are a family of eels found in both tropical and temperate seas. They are known for their snake-like appearance, powerful bite, and a second set of jaws in their throat used to grip prey.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Gymnothorax_javanicus_2.jpg/320px-Gymnothorax_javanicus_2.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Moray_eel",
	},
	{
		id: 13,
		title: "Flying Fish",
		textAbout:
			"Flying fish are tropical and subtropical marine fish with large, wing-like pectoral fins that allow them to glide above the water surface for distances of up to 200 meters to escape predators.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Exocoetus_obtusirostris.jpg/320px-Exocoetus_obtusirostris.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Flying_fish",
	},
	{
		id: 14,
		title: "Pufferfish",
		textAbout:
			"Pufferfish are known for their ability to inflate into a ball-like shape when threatened. They are among the most poisonous vertebrates in the world, yet are considered a delicacy in Japan.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Tetraodon_nigroviridis_1.jpg/320px-Tetraodon_nigroviridis_1.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Pufferfish",
	},
	{
		id: 15,
		title: "Lionfish",
		textAbout:
			"The lionfish is a venomous marine fish native to the Indo-Pacific. Recognizable by its dramatic striped appearance and long, spiky fins, it has become an invasive species in the Atlantic Ocean and Caribbean Sea.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Lionfish_in_Java.jpg/320px-Lionfish_in_Java.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Lionfish",
	},
	{
		id: 16,
		title: "Rainbow Trout",
		textAbout:
			"The rainbow trout is a trout and species of salmonid native to cold-water tributaries of the Pacific Ocean in Asia and North America. It is one of the most widely fished freshwater species in the world.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Rainbow_trout.png/320px-Rainbow_trout.png",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Rainbow_trout",
	},
	{
		id: 17,
		title: "Barracuda",
		textAbout:
			"The barracuda is a large, predatory ray-finned fish known for its fearsome appearance and powerful bite. Found in tropical and subtropical oceans, it can reach speeds of up to 43 km/h.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Barracuda_laban.jpg/320px-Barracuda_laban.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Barracuda",
	},
	{
		id: 18,
		title: "Hammerhead Shark",
		textAbout:
			"Hammerhead sharks are a group of sharks named for the unusual and distinctive structure of their heads, which are flattened and laterally extended into a hammer shape, enhancing their vision and electroreception.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Scalloped_hammerhead_shark.jpg/320px-Scalloped_hammerhead_shark.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Hammerhead_shark",
	},
	{
		id: 19,
		title: "Oarfish",
		textAbout:
			"The oarfish is the world's longest bony fish, capable of reaching lengths of 11 meters or more. It inhabits the deep ocean and is rarely seen alive, likely inspiring many historical sea serpent legends.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Regalecus_glesne.jpg/320px-Regalecus_glesne.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Oarfish",
	},
	{
		id: 20,
		title: "Catfish",
		textAbout:
			"Catfish are a diverse group of ray-finned fish named for their prominent barbels, which resemble cat whiskers. Found in freshwater environments worldwide, they are important both commercially and as sport fish.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Catfish_whiskers.jpg/320px-Catfish_whiskers.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Catfish",
	},
	{
		id: 21,
		title: "Goldfish",
		textAbout:
			"The goldfish is one of the earliest fish to be domesticated, kept as a pet for over a thousand years. Native to East Asia, it was selectively bred from wild carp and comes in a wide variety of shapes and colors.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Common_goldfish.jpg/320px-Common_goldfish.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Goldfish",
	},
	{
		id: 22,
		title: "Blobfish",
		textAbout:
			"The blobfish is a deep-sea fish native to the waters off Australia and New Zealand. Its gelatinous appearance, well-known from photos taken at the surface, is a result of decompression from its extreme deep-water habitat.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Psychrolutes_marcidus.jpg/320px-Psychrolutes_marcidus.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Blobfish",
	},
	{
		id: 23,
		title: "Stonefish",
		textAbout:
			"The stonefish is the most venomous fish in the world, found in the coastal regions of the Indo-Pacific. It camouflages itself as a rock or coral on the seafloor and delivers venom through spines on its back.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Synanceia_verrucosa_2.jpg/320px-Synanceia_verrucosa_2.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Stonefish",
	},
	{
		id: 24,
		title: "Parrotfish",
		textAbout:
			"Parrotfish are a group of marine fish found in tropical and subtropical oceans. They are named for their beak-like teeth and bright colors, and play a crucial role in producing the white sand found on many tropical beaches.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Stoplight-parrotfish.jpg/320px-Stoplight-parrotfish.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Parrotfish",
	},
	{
		id: 25,
		title: "Electric Eel",
		textAbout:
			"The electric eel is a South American electric fish and the only species in its genus. Despite its name, it is more closely related to carp than true eels, and can generate electric shocks of up to 860 volts.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Electric_eel_-_Electrophorus_electricus_-_NHMUK.jpg/320px-Electric_eel_-_Electrophorus_electricus_-_NHMUK.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Electric_eel",
	},
	{
		id: 26,
		title: "Blue Tang",
		textAbout:
			"The blue tang is a brightly colored marine fish found in the reefs of the Indo-Pacific. It is a popular aquarium fish and gained worldwide fame as the character Dory in the Pixar film Finding Nemo.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Paracanthurus_hepatus_-_aquarium.jpg/320px-Paracanthurus_hepatus_-_aquarium.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Paracanthurus",
	},
	{
		id: 27,
		title: "Whale Shark",
		textAbout:
			"The whale shark is the largest fish in the world, reaching lengths of up to 12 meters. Despite its enormous size, it is a filter feeder, subsisting mainly on plankton, and poses no danger to humans.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Whale_shark_Georgia_aquarium.jpg/320px-Whale_shark_Georgia_aquarium.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Whale_shark",
	},
	{
		id: 28,
		title: "Mackerel",
		textAbout:
			"Mackerel are fast-swimming pelagic fish found in both temperate and tropical seas. They travel in large schools and are an important food fish known for their rich, oily flesh high in omega-3 fatty acids.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Scomber_scombrus.jpg/320px-Scomber_scombrus.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Mackerel",
	},
	{
		id: 29,
		title: "Coelacanth",
		textAbout:
			"The coelacanth is a rare order of fish that was believed to be extinct until rediscovered in 1938. Often called a living fossil, it has remained largely unchanged for over 400 million years and breathes using a vestigial lung.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Coelacanth-bgiu.png/320px-Coelacanth-bgiu.png",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Coelacanth",
	},
	{
		id: 30,
		title: "Marlin",
		textAbout:
			"The marlin is a large ocean fish with a spear-like snout and a long, rigid dorsal fin. Among the fastest fish in the ocean, marlins are a prized target for sport fishermen and can weigh over 900 kg.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Blue_marlin.jpg/320px-Blue_marlin.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Marlin",
	},
];
