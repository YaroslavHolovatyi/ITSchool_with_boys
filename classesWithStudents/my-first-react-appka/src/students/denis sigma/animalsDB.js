const animals = [
	{
		id: 1,
		title: "Snow Leopard",
		textAbout:
			"The snow leopard is a large cat native to the mountain ranges of Central and South Asia. Known for its beautiful, thick fur and elusive nature, it is often called the 'ghost of the mountains'. Snow leopards are listed as vulnerable, with fewer than 10,000 individuals remaining in the wild.",
		imageSrc:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMWJ7c2OH8Q_LeZ0ExhlxXmvEdRzQcKGPE49PRYxCuKE-L3FWlFXeqtV68jUfI_XeOdFHng86cvQVKoXX3cN-LL3VHGy5Bnfcsra2Og&s=10",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Snow_leopard",
	},
	{
		id: 2,
		title: "Blue Poison Dart Frog",
		textAbout:
			"The blue poison dart frog is a species of poison dart frog found in Suriname. Its striking blue coloration warns predators of its highly toxic skin secretions. Indigenous people of the Amazon historically used its poison to coat blowgun darts for hunting.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Blue_Poison_Arrow_Frog_Dendrobates_azureus.jpg/1200px-Blue_Poison_Arrow_Frog_Dendrobates_azureus.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Blue_poison_dart_frog",
	},
	{
		id: 3,
		title: "Mandarin Duck",
		textAbout:
			"The mandarin duck is a perching duck species found in East Asia. The male is one of the most ornate and colorful ducks in the world, featuring multicolored plumage with distinctive orange 'sail' feathers on its back. In Chinese culture, mandarin ducks symbolize love and fidelity.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aix_galericulata.jpg/1200px-Aix_galericulata.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Mandarin_duck",
	},
	{
		id: 4,
		title: "Fennec Fox",
		textAbout:
			"The fennec fox is the world's smallest wild canid, native to the Sahara Desert and Sinai Peninsula. Its oversized ears serve multiple functions: they dissipate heat and help the fox locate prey underground. Fennec foxes are highly adapted to desert life, obtaining most of their water from food.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Vulpes_zerda_by_Raimund_Spekking.jpg/1200px-Vulpes_zerda_by_Raimund_Spekking.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Fennec_fox",
	},
	{
		id: 5,
		title: "Mantis Shrimp",
		textAbout:
			"Mantis shrimp are marine crustaceans known for their remarkably powerful claws, which can strike with the speed of a bullet. They possess the most complex eyes in the animal kingdom, capable of detecting 16 types of color receptors compared to the human eye's three.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Odontodactylus_scyllarus.jpg/1200px-Odontodactylus_scyllarus.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Mantis_shrimp",
	},
	{
		id: 6,
		title: "Axolotl",
		textAbout:
			"The axolotl is a Mexican walking fish that is actually a neotenic salamander, retaining its larval features throughout its adult life. It is famous for its extraordinary regenerative abilities — it can regrow entire limbs, its heart, and even parts of its brain. Critically endangered in the wild.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Axolotl_ganz.jpg/1200px-Axolotl_ganz.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Axolotl",
	},
	{
		id: 7,
		title: "Pangolin",
		textAbout:
			"Pangolins are mammals covered in large, protective keratin scales, making them the only known scaled mammals. When threatened, they curl into a tight ball. They are highly sought after in illegal wildlife trade, making them the most trafficked mammals in the world, pushing all eight species toward extinction.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Pangolin_basking_edit.jpg/1200px-Pangolin_basking_edit.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Pangolin",
	},
	{
		id: 8,
		title: "Narwhal",
		textAbout:
			"The narwhal is an Arctic whale famous for its long, spiral tusk, which is actually an elongated canine tooth that can grow up to 3 meters long. Often called the 'unicorn of the sea', the tusk is found mainly in males and contains millions of nerve endings used to sense ocean conditions.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Narwhal_pod_2.jpg/1200px-Narwhal_pod_2.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Narwhal",
	},
	{
		id: 9,
		title: "Golden Poison Frog",
		textAbout:
			"The golden poison frog is one of the most toxic animals on Earth. A single frog contains enough poison to kill ten adult humans. Despite its lethal skin, it is a small, beautiful frog found only in the rainforests of Colombia's Pacific coast. Indigenous Emberá people use its toxin on blowgun darts.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Phyllobates_terribilis_-_MHNT.jpg/1200px-Phyllobates_terribilis_-_MHNT.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Golden_poison_frog",
	},
	{
		id: 10,
		title: "Clouded Leopard",
		textAbout:
			"The clouded leopard is a wild cat found in the Himalayas and Southeast Asia. It has the largest canine teeth relative to body size of any living cat and is an exceptional climber, capable of hanging upside down from branches. Its cloud-like spots provide excellent camouflage in forest environments.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Clouded_leopard.jpg/1200px-Clouded_leopard.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Clouded_leopard",
	},
	{
		id: 11,
		title: "Mimic Octopus",
		textAbout:
			"The mimic octopus is a remarkable cephalopod discovered in 1998 in the Indo-Pacific. It can impersonate over 15 different species, including lionfish, flatfish, and sea snakes, by altering its body shape and movement patterns. This behavioral mimicry is unique among known animals.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Mimic_octopus_3.jpg/1200px-Mimic_octopus_3.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Mimic_octopus",
	},
	{
		id: 12,
		title: "Quokka",
		textAbout:
			"The quokka is a small marsupial native to southwestern Australia, most famously found on Rottnest Island. Known as 'the world's happiest animal', its facial anatomy gives it a permanent smile-like expression. Quokkas are fearless around humans and have become famous subjects for selfie photos.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Quokka_at_Rottnest.jpg/1200px-Quokka_at_Rottnest.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Quokka",
	},
	{
		id: 13,
		title: "Platypus",
		textAbout:
			"The platypus is one of the world's most bizarre mammals, native to eastern Australia. It is one of only five monotremes — mammals that lay eggs. It navigates and hunts using electroreception through its bill, detecting electrical fields produced by prey. Males have venomous spurs on their hind legs.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Platypus.jpg/1200px-Platypus.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Platypus",
	},
	{
		id: 14,
		title: "Leafy Sea Dragon",
		textAbout:
			"The leafy sea dragon is a marine fish related to seahorses, found along the southern coast of Australia. It has elaborate leaf-like appendages covering its body for camouflage, making it nearly invisible among kelp. Like seahorses, it is the male that carries and broods the eggs.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Leafy_seadragon_at_Monterey_Bay_Aquarium.jpg/1200px-Leafy_seadragon_at_Monterey_Bay_Aquarium.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Leafy_seadragon",
	},
	{
		id: 15,
		title: "Okapi",
		textAbout:
			"The okapi is a forest-dwelling mammal native to the Democratic Republic of Congo. Despite its zebra-like striped hindquarters, it is most closely related to the giraffe. It was unknown to science until 1901 and lives so secretively in dense rainforests that its population size remains difficult to estimate.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Okapi2.jpg/1200px-Okapi2.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Okapi",
	},
	{
		id: 16,
		title: "Blue-footed Booby",
		textAbout:
			"The blue-footed booby is a marine bird native to the eastern Pacific Ocean. Its striking blue feet are the result of carotenoid pigments from its fish diet. Males perform an elaborate high-stepping courtship dance to display their vivid feet to prospective mates. The bluer the feet, the healthier the bird.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Blue-footed_booby_portrait.jpg/1200px-Blue-footed_booby_portrait.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Blue-footed_booby",
	},
	{
		id: 17,
		title: "Saiga Antelope",
		textAbout:
			"The saiga is a critically endangered antelope with one of the most distinctive features in the animal kingdom: a bulbous, flexible nose that filters dust during summer migrations and warms cold air in winter. Once roaming across Eurasia in millions, populations collapsed due to poaching and mass mortality events.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Saiga_antelope_at_the_Stepnoi_Sanctuary.jpg/1200px-Saiga_antelope_at_the_Stepnoi_Sanctuary.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Saiga_antelope",
	},
	{
		id: 18,
		title: "Aye-aye",
		textAbout:
			"The aye-aye is a long-fingered lemur native to Madagascar. It uses a specialized elongated middle finger to tap on wood and listen for hollow spots, then gnaws a hole and extracts insect larvae — the only primate that uses echolocation to find food. In Malagasy folklore, it is considered a bad omen.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Aye-aye_%28Daubentonia_madagascariensis%29.jpg/1200px-Aye-aye_%28Daubentonia_madagascariensis%29.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Aye-aye",
	},
	{
		id: 19,
		title: "Fossa",
		textAbout:
			"The fossa is a cat-like carnivore endemic to Madagascar and the island's apex predator. Though related to mongooses, it resembles a puma with retractable claws and semi-retractable claws used for tree climbing. It is the primary predator of lemurs, capable of chasing prey both on the ground and through tree canopies.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Cryptoprocta_ferox.jpg/1200px-Cryptoprocta_ferox.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Fossa_(animal)",
	},
	{
		id: 20,
		title: "Shoebill",
		textAbout:
			"The shoebill is a tall bird native to tropical east Africa, named for its massive shoe-shaped bill. This prehistoric-looking bird can stand motionless for hours while hunting, then strikes with explosive speed to catch lungfish, eels, and even juvenile crocodiles. It is notorious for staring down humans without fear.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Balaeniceps_rex_-_Wilhelma_Zoo_-_Stuttgart%2C_Germany_-_20100809_003.jpg/1200px-Balaeniceps_rex_-_Wilhelma_Zoo_-_Stuttgart%2C_Germany_-_20100809_003.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Shoebill",
	},
	{
		id: 21,
		title: "Dumbo Octopus",
		textAbout:
			"The dumbo octopus is the deepest-living genus of octopus, found at depths of up to 7,000 meters. Its name comes from its two large ear-like fins, resembling Disney's Dumbo. Unlike other octopuses, it swallows its prey whole. It is one of the rarest and least understood octopus species in the world.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Grimpoteuthis_boylei.jpg/1200px-Grimpoteuthis_boylei.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Dumbo_octopus",
	},
	{
		id: 22,
		title: "Honey Badger",
		textAbout:
			"The honey badger is listed in the Guinness World Records as the world's most fearless animal. Native to Africa and Asia, it is known for its extraordinary ferocity, attacking animals many times its size. Its skin is extremely tough and loose, allowing it to twist around and bite attackers even when grabbed. It is resistant to many snake venoms.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Honey_badger.jpg/1200px-Honey_badger.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Honey_badger",
	},
	{
		id: 23,
		title: "Sunfish (Mola mola)",
		textAbout:
			"The ocean sunfish, or Mola mola, is the heaviest known bony fish in the world, reaching weights of over 2,300 kg. It looks like a giant swimming head, having lost its tail through evolution and replaced it with a rudder-like structure. Despite its size, it feeds mainly on jellyfish and is completely harmless.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Ocean_sunfish_noaa.jpg/1200px-Ocean_sunfish_noaa.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Ocean_sunfish",
	},
	{
		id: 24,
		title: "Proboscis Monkey",
		textAbout:
			"The proboscis monkey is an endangered primate endemic to Borneo, famous for the male's enormous, pendulous nose, which can exceed 10 cm in length. The nose amplifies vocalizations and plays a role in attracting mates. These monkeys are excellent swimmers and have partially webbed feet, often crossing rivers to escape predators.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Proboscis_Monkey_in_Sabah%2C_Malaysia.jpg/1200px-Proboscis_Monkey_in_Sabah%2C_Malaysia.jpg",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Proboscis_monkey",
	},
	{
		id: 25,
		title: "Tardigrade",
		textAbout:
			"Tardigrades, also called water bears, are microscopic animals less than 1 mm long. They are considered the most resilient animals ever discovered, capable of surviving extreme conditions: the vacuum of outer space, temperatures from -272°C to 150°C, high radiation, and pressures six times greater than the deepest ocean.",
		imageSrc:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/SEM_image_of_Milnesium_tardigradum_in_active_state_-_journal.pone.0045682.g001-2.png/1200px-SEM_image_of_Milnesium_tardigradum_in_active_state_-_journal.pone.0045682.g001-2.png",
		wikipediaPageSrc: "https://en.wikipedia.org/wiki/Tardigrade",
	},
];

export default animals;

// DB - DataBase/ БД - База даних
