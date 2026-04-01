const fish = [
  {
    id: 1,
    title: "Atlantic Salmon",
    textForCard: "A migratory fish that travels between rivers and the ocean.",
    textForSidebar:
      "The Atlantic salmon is a species of ray-finned fish found in the northern Atlantic Ocean and rivers flowing into it. It is known for its long migrations between freshwater and saltwater habitats.",
    whereLives: "North Atlantic Ocean & rivers",
    imageSrc:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Atlantic_salmon",
  },
  {
    id: 2,
    title: "Clownfish",
    textForCard: "A colorful fish that lives with sea anemones.",
    textForSidebar:
      "Clownfish have a symbiotic relationship with sea anemones, gaining protection while providing nutrients. All are born male, and some change to female.",
    whereLives: "Coral reefs (Indo-Pacific)",
    imageSrc:
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Clownfish",
  },
  {
    id: 3,
    title: "Atlantic Cod",
    textForCard: "A key commercial fish used in many dishes.",
    textForSidebar:
      "Atlantic cod is a cold-water fish important for global fisheries. It has been a staple food source and is widely used in traditional dishes like fish and chips.",
    whereLives: "North Atlantic Ocean",
    imageSrc:
      "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Atlantic_cod",
  },
  {
    id: 4,
    title: "Bluefin Tuna",
    textForCard: "A fast and valuable ocean predator.",
    textForSidebar:
      "Bluefin tuna are among the largest and fastest fish, capable of high speeds. They are highly prized in the sushi industry.",
    whereLives: "Atlantic Ocean",
    imageSrc:
      "https://images.unsplash.com/photo-1510023115878-e9cf44d0a95a?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Atlantic_bluefin_tuna",
  },
  {
    id: 5,
    title: "Great White Shark",
    textForCard: "The largest predatory fish in the ocean.",
    textForSidebar:
      "Great white sharks are apex predators found worldwide. They can grow over 6 meters long and are known for their power and hunting skills.",
    whereLives: "Oceans worldwide (coastal)",
    imageSrc:
      "https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Great_white_shark",
  },
  {
    id: 6,
    title: "Seahorse",
    textForCard: "A fish where males carry the babies.",
    textForSidebar:
      "Seahorses are unique fish where males incubate eggs in a pouch. They swim upright and use camouflage to avoid predators.",
    whereLives: "Shallow coastal waters",
    imageSrc:
      "https://images.unsplash.com/photo-1596025812027-61a8983a90b4?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Seahorse",
  },
  {
    id: 7,
    title: "Swordfish",
    textForCard: "A large fish with a long sword-like bill.",
    textForSidebar:
      "Swordfish are powerful predators known for their speed and distinctive long bill used to slash prey.",
    whereLives: "Tropical & temperate oceans",
    imageSrc:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Swordfish",
  },
  {
    id: 8,
    title: "Manta Ray",
    textForCard: "A giant graceful ocean glider.",
    textForSidebar:
      "Manta rays are the largest rays, known for their wing-like fins and graceful swimming style.",
    whereLives: "Tropical oceans",
    imageSrc:
      "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Manta_ray",
  },
  {
    id: 9,
    title: "Piranha",
    textForCard: "A fish known for its sharp teeth.",
    textForSidebar:
      "Piranhas are freshwater fish with powerful jaws. Despite their reputation, many species are scavengers.",
    whereLives: "South American rivers",
    imageSrc:
      "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Piranha",
  },
  {
    id: 10,
    title: "Anglerfish",
    textForCard: "A deep-sea fish that uses a glowing lure.",
    textForSidebar:
      "Anglerfish attract prey using a bioluminescent lure. They live in deep ocean environments.",
    whereLives: "Deep ocean",
    imageSrc:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Anglerfish",
  },
  {
    id: 11,
    title: "Halibut",
    textForCard: "A giant flatfish of the ocean floor.",
    textForSidebar:
      "Halibut are among the largest flatfish and are valued for their meat.",
    whereLives: "North Atlantic & Pacific",
    imageSrc:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Halibut",
  },
  {
    id: 12,
    title: "Moray Eel",
    textForCard: "An eel with a powerful bite.",
    textForSidebar:
      "Moray eels have a second set of jaws to capture prey and are common in reef environments.",
    whereLives: "Tropical seas",
    imageSrc:
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Moray_eel",
  },
  {
    id: 13,
    title: "Flying Fish",
    textForCard: "A fish that glides above water.",
    textForSidebar:
      "Flying fish escape predators by leaping and gliding over the ocean surface.",
    whereLives: "Tropical oceans",
    imageSrc:
      "https://images.unsplash.com/photo-1504124016-78ba12e25e90?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Flying_fish",
  },
  {
    id: 14,
    title: "Pufferfish",
    textForCard: "A fish that inflates when threatened.",
    textForSidebar:
      "Pufferfish can inflate and contain powerful toxins, making them both dangerous and fascinating.",
    whereLives: "Tropical & subtropical waters",
    imageSrc:
      "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Pufferfish",
  },
  {
    id: 15,
    title: "Lionfish",
    textForCard: "A venomous fish with striking fins.",
    textForSidebar:
      "Lionfish are known for their beauty and venomous spines. They are invasive in some regions.",
    whereLives: "Indo-Pacific & Atlantic",
    imageSrc:
      "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Lionfish",
  },
  {
    id: 16,
    title: "Rainbow Trout",
    textForCard: "A popular freshwater sport fish.",
    textForSidebar:
      "Rainbow trout are widely distributed and valued for fishing and aquaculture.",
    whereLives: "Cold freshwater rivers & lakes",
    imageSrc:
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Rainbow_trout",
  },
  {
    id: 17,
    title: "Barracuda",
    textForCard: "A fast predator with sharp teeth.",
    textForSidebar:
      "Barracudas are aggressive hunters known for speed and sudden attacks.",
    whereLives: "Tropical oceans",
    imageSrc:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Barracuda",
  },
  {
    id: 18,
    title: "Hammerhead Shark",
    textForCard: "A shark with a uniquely shaped head.",
    textForSidebar:
      "Hammerhead sharks use their wide heads to improve vision and detect prey.",
    whereLives: "Warm oceans",
    imageSrc:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Hammerhead_shark",
  },
  {
    id: 19,
    title: "Oarfish",
    textForCard: "The longest bony fish in the ocean.",
    textForSidebar:
      "Oarfish live in deep waters and are rarely seen, inspiring sea monster legends.",
    whereLives: "Deep ocean",
    imageSrc:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Oarfish",
  },
  {
    id: 20,
    title: "Catfish",
    textForCard: "A fish with whisker-like barbels.",
    textForSidebar:
      "Catfish are found worldwide in freshwater and are important for fishing industries.",
    whereLives: "Freshwater worldwide",
    imageSrc:
      "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Catfish",
  },
  {
    id: 21,
    title: "Goldfish",
    textForCard: "A popular domesticated aquarium fish.",
    textForSidebar:
      "Goldfish were bred from carp and have been kept as pets for centuries.",
    whereLives: "Aquariums & ponds",
    imageSrc:
      "https://images.unsplash.com/photo-1520990877573-bcf25e0b1e7a?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Goldfish",
  },
  {
    id: 22,
    title: "Blobfish",
    textForCard: "A deep-sea fish with a gelatinous body.",
    textForSidebar:
      "Blobfish appear unusual due to pressure differences when brought to the surface.",
    whereLives: "Deep ocean (Australia & NZ)",
    imageSrc:
      "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Blobfish",
  },
  {
    id: 23,
    title: "Stonefish",
    textForCard: "The most venomous fish in the world.",
    textForSidebar:
      "Stonefish camouflage as rocks and can deliver extremely potent venom.",
    whereLives: "Indo-Pacific coastal waters",
    imageSrc:
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Stonefish",
  },
  {
    id: 24,
    title: "Parrotfish",
    textForCard: "A colorful fish that creates sand.",
    textForSidebar:
      "Parrotfish grind coral into sand, contributing to tropical beaches.",
    whereLives: "Tropical reefs",
    imageSrc:
      "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Parrotfish",
  },
  {
    id: 25,
    title: "Electric Eel",
    textForCard: "A fish that generates electricity.",
    textForSidebar:
      "Electric eels can produce strong shocks to hunt and defend themselves.",
    whereLives: "South American rivers",
    imageSrc:
      "https://images.unsplash.com/photo-1504124016-78ba12e25e90?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Electric_eel",
  },
  {
    id: 26,
    title: "Blue Tang",
    textForCard: "A bright blue reef fish.",
    textForSidebar:
      "Blue tangs are popular aquarium fish and known from animated films.",
    whereLives: "Indo-Pacific reefs",
    imageSrc:
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Paracanthurus",
  },
  {
    id: 27,
    title: "Whale Shark",
    textForCard: "The largest fish in the world.",
    textForSidebar:
      "Whale sharks are gentle giants that feed on plankton and pose no threat to humans.",
    whereLives: "Warm oceans worldwide",
    imageSrc:
      "https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Whale_shark",
  },
  {
    id: 28,
    title: "Mackerel",
    textForCard: "A fast-swimming oily fish.",
    textForSidebar:
      "Mackerel travel in large schools and are valued for their nutritional content.",
    whereLives: "Temperate & tropical seas",
    imageSrc:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Mackerel",
  },
  {
    id: 29,
    title: "Coelacanth",
    textForCard: "A living fossil fish.",
    textForSidebar:
      "Coelacanths were thought extinct until rediscovered and have ancient evolutionary traits.",
    whereLives: "Deep ocean (Africa)",
    imageSrc:
      "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Coelacanth",
  },
  {
    id: 30,
    title: "Marlin",
    textForCard: "A fast fish with a spear-like bill.",
    textForSidebar:
      "Marlins are among the fastest ocean fish and are prized in sport fishing.",
    whereLives: "Open ocean",
    imageSrc:
      "https://images.unsplash.com/photo-1510023115878-e9cf44d0a95a?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Marlin",
  },
];

export default fish;
