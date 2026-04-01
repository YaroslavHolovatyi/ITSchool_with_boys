const animals = [
  {
    id: 1,
    title: "Snow Leopard",
    textForCard: "A rare mountain cat known as the 'ghost of the mountains'.",
    textForSidebar:
      "The snow leopard is a large cat native to the mountain ranges of Central and South Asia. Known for its thick fur and elusive behavior, it thrives in cold, rugged terrain and remains one of the most mysterious big cats.",
    whereLives: "Central and South Asia (mountains)",
    imageSrc:
      "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Snow_leopard",
  },
  {
    id: 2,
    title: "Blue Poison Dart Frog",
    textForCard: "A bright blue frog with highly toxic skin.",
    textForSidebar:
      "This frog is known for its vibrant blue color and toxic skin secretions. Native to Suriname, it uses its coloration to warn predators of its danger.",
    whereLives: "Suriname (South America)",
    imageSrc:
      "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Blue_poison_dart_frog",
  },
  {
    id: 3,
    title: "Mandarin Duck",
    textForCard: "One of the most colorful ducks in the world.",
    textForSidebar:
      "The mandarin duck is famous for its vibrant feathers and symbolic meaning of love in Asian cultures. Males display stunning colors to attract mates.",
    whereLives: "East Asia",
    imageSrc:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Mandarin_duck",
  },
  {
    id: 4,
    title: "Fennec Fox",
    textForCard: "The smallest fox with oversized ears.",
    textForSidebar:
      "The fennec fox lives in desert regions and uses its large ears to dissipate heat and locate prey underground.",
    whereLives: "Sahara Desert",
    imageSrc:
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Fennec_fox",
  },
  {
    id: 5,
    title: "Mantis Shrimp",
    textForCard: "A marine animal with an incredibly powerful punch.",
    textForSidebar:
      "Mantis shrimp can strike with extreme speed and have advanced vision capable of detecting many color spectrums beyond human ability.",
    whereLives: "Tropical oceans",
    imageSrc:
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Mantis_shrimp",
  },
  {
    id: 6,
    title: "Axolotl",
    textForCard: "A salamander that regenerates limbs.",
    textForSidebar:
      "Axolotls are unique amphibians that never fully mature and can regenerate limbs, organs, and even parts of their brain.",
    whereLives: "Mexico",
    imageSrc:
      "https://images.unsplash.com/photo-1621325697-5b3e3f7a00c2?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Axolotl",
  },
  {
    id: 7,
    title: "Pangolin",
    textForCard: "The only mammal covered in scales.",
    textForSidebar:
      "Pangolins protect themselves by curling into a ball. Sadly, they are the most trafficked mammals in the world.",
    whereLives: "Africa and Asia",
    imageSrc:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Pangolin",
  },
  {
    id: 8,
    title: "Narwhal",
    textForCard: "The 'unicorn of the sea' with a long tusk.",
    textForSidebar:
      "Narwhals are Arctic whales known for their spiral tusk, which is actually a tooth used for sensing the environment.",
    whereLives: "Arctic waters",
    imageSrc:
      "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Narwhal",
  },
  {
    id: 9,
    title: "Golden Poison Frog",
    textForCard: "One of the most toxic animals on Earth.",
    textForSidebar:
      "This small frog carries enough toxin to kill multiple humans. Its bright color serves as a warning to predators.",
    whereLives: "Colombia",
    imageSrc:
      "https://images.unsplash.com/photo-1551189014-fe516b1a577a?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Golden_poison_frog",
  },
  {
    id: 10,
    title: "Clouded Leopard",
    textForCard: "A tree-climbing wild cat with cloud-like spots.",
    textForSidebar:
      "This elusive cat is an excellent climber and has the largest canine teeth relative to body size among cats.",
    whereLives: "Southeast Asia",
    imageSrc:
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Clouded_leopard",
  },
  {
    id: 11,
    title: "Mimic Octopus",
    textForCard: "An octopus that imitates other animals.",
    textForSidebar:
      "The mimic octopus can transform its appearance and behavior to imitate other species for protection.",
    whereLives: "Indo-Pacific",
    imageSrc:
      "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Mimic_octopus",
  },
  {
    id: 12,
    title: "Quokka",
    textForCard: "Known as the world's happiest animal.",
    textForSidebar:
      "Quokkas are friendly marsupials with a natural smile-like expression, often interacting with humans.",
    whereLives: "Australia",
    imageSrc:
      "https://images.unsplash.com/photo-1529419412599-7bb870e11810?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Quokka",
  },
  {
    id: 13,
    title: "Platypus",
    textForCard: "An egg-laying mammal with a duck bill.",
    textForSidebar:
      "The platypus uses electroreception to hunt underwater and is one of the few venomous mammals.",
    whereLives: "Australia",
    imageSrc:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Platypus",
  },
  {
    id: 14,
    title: "Leafy Sea Dragon",
    textForCard: "A fish that looks like floating seaweed.",
    textForSidebar:
      "This marine species uses leaf-like appendages for camouflage among kelp.",
    whereLives: "Southern Australia",
    imageSrc:
      "https://images.unsplash.com/photo-1596025812027-61a8983a90b4?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Leafy_seadragon",
  },
  {
    id: 15,
    title: "Okapi",
    textForCard: "A zebra-striped relative of the giraffe.",
    textForSidebar:
      "The okapi lives in dense forests and was unknown to science until the 20th century.",
    whereLives: "Congo",
    imageSrc:
      "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Okapi",
  },
  {
    id: 16,
    title: "Blue-footed Booby",
    textForCard: "A bird famous for its bright blue feet.",
    textForSidebar:
      "Males perform dances to show off their feet, which indicate health and fitness.",
    whereLives: "Pacific Ocean coasts",
    imageSrc:
      "https://images.unsplash.com/photo-1591198619664-f0290d58c347?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Blue-footed_booby",
  },
  {
    id: 17,
    title: "Saiga Antelope",
    textForCard: "An antelope with a unique bulbous nose.",
    textForSidebar:
      "Its nose helps filter dust and regulate air temperature in extreme climates.",
    whereLives: "Central Asia",
    imageSrc:
      "https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Saiga_antelope",
  },
  {
    id: 18,
    title: "Aye-aye",
    textForCard: "A nocturnal lemur with a long finger.",
    textForSidebar:
      "It uses echolocation-like tapping to locate insects inside trees.",
    whereLives: "Madagascar",
    imageSrc:
      "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Aye-aye",
  },
  {
    id: 19,
    title: "Fossa",
    textForCard: "The top predator of Madagascar.",
    textForSidebar:
      "The fossa hunts lemurs and moves easily through trees and ground.",
    whereLives: "Madagascar",
    imageSrc:
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Fossa_(animal)",
  },
  {
    id: 20,
    title: "Shoebill",
    textForCard: "A bird with a massive shoe-shaped beak.",
    textForSidebar:
      "It hunts by standing still for long periods and striking quickly.",
    whereLives: "East Africa",
    imageSrc:
      "https://images.unsplash.com/photo-1590418606746-018840f9ced6?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Shoebill",
  },
  {
    id: 21,
    title: "Dumbo Octopus",
    textForCard: "A deep-sea octopus with ear-like fins.",
    textForSidebar:
      "It lives at extreme ocean depths and moves gracefully using its fins.",
    whereLives: "Deep ocean",
    imageSrc:
      "https://images.unsplash.com/photo-1591025207163-942350e47db2?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Dumbo_octopus",
  },
  {
    id: 22,
    title: "Honey Badger",
    textForCard: "One of the most fearless animals.",
    textForSidebar:
      "It is known for attacking animals larger than itself and surviving snake bites.",
    whereLives: "Africa and Asia",
    imageSrc:
      "https://images.unsplash.com/photo-1578393098337-5594cce112b5?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Honey_badger",
  },
  {
    id: 23,
    title: "Sunfish",
    textForCard: "The heaviest bony fish in the world.",
    textForSidebar:
      "Despite its size, it feeds mainly on jellyfish and is harmless.",
    whereLives: "Oceans worldwide",
    imageSrc:
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Ocean_sunfish",
  },
  {
    id: 24,
    title: "Proboscis Monkey",
    textForCard: "A monkey with a large distinctive nose.",
    textForSidebar:
      "The nose helps amplify sounds and attract mates. It is also a strong swimmer.",
    whereLives: "Borneo",
    imageSrc:
      "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Proboscis_monkey",
  },
  {
    id: 25,
    title: "Tardigrade",
    textForCard: "A microscopic animal that survives extreme conditions.",
    textForSidebar:
      "Tardigrades can survive space, radiation, and extreme temperatures, making them one of the toughest organisms.",
    whereLives: "Everywhere (water, moss, soil)",
    imageSrc:
      "https://images.unsplash.com/photo-1617369120004-4fc70312c5e6?w=800&q=80",
    wikipediaPageSrc: "https://en.wikipedia.org/wiki/Tardigrade",
  },
];

export default animals;
