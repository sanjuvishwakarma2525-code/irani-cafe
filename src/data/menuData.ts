export interface MenuItem {
  id: string;
  name: string;
  marathiName?: string;
  category: string;
  subcategory?: string;
  price: number;
  isVeg: boolean;
  isSignature?: boolean;
  isPopular?: boolean;
  description: string;
  pairingNote?: string;
}

export const MENU_CATEGORIES = [
  'All',
  'Chai & Hot Beverages',
  'Coffee Favourites',
  'Brun & Bun Pav Specials',
  'Veg Mains',
  'Non Veg Mains',
  'Eggs Your Way',
  'Flavors of Rice',
  'Bread & Sandwiches',
  'Maggie Delights',
  'Bakery Treats',
  'Nacho & Corn Bites',
  'Rolls Special',
  'Desserts & Ice Cream',
  'Chill & Mocktails',
  'Milkshakes & More',
  'Pallonji & Drinks',
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // CHAI & HOT BEVERAGES
  {
    id: 'chai-1',
    name: 'Irani Chai',
    marathiName: 'इराणी चाय',
    category: 'Chai & Hot Beverages',
    price: 35,
    isVeg: true,
    isSignature: true,
    isPopular: true,
    description: 'Slow-brewed on gentle dum for hours in a copper samovar, poured rich and velvety with caramelized condensed milk.',
    pairingNote: 'Essential with warm Brun Maska or Osmania biscuits.'
  },
  {
    id: 'chai-2',
    name: 'Irani Malai Chai',
    marathiName: 'इराणी मलाई चाय',
    category: 'Chai & Hot Beverages',
    price: 40,
    isVeg: true,
    isSignature: true,
    description: 'Our signature dum chai crowned with a thick layer of fresh, clotted buffalo milk malai.',
    pairingNote: 'Best enjoyed poured on a saucer, vintage Irani style.'
  },
  {
    id: 'chai-3',
    name: 'Lemon Tea',
    category: 'Chai & Hot Beverages',
    price: 35,
    isVeg: true,
    description: 'Refreshing black tea brewed with fresh mint and a squeeze of fresh lemon.'
  },
  {
    id: 'chai-4',
    name: 'Green Tea',
    category: 'Chai & Hot Beverages',
    price: 30,
    isVeg: true,
    description: 'Delicate whole leaf green tea infused with subtle herbal notes.'
  },
  {
    id: 'chai-5',
    name: 'Kesar Ukala',
    marathiName: 'केसर उकाळा',
    category: 'Chai & Hot Beverages',
    price: 50,
    isVeg: true,
    isSignature: true,
    description: 'Traditional Gujarati-Parsi comforting milk brew infused with pure saffron strands, crushed cardamom, and nutmeg.',
    pairingNote: 'Gentle warmth for foggy mornings or rainy evenings.'
  },
  {
    id: 'chai-6',
    name: 'Boost - Hot / Cold',
    category: 'Chai & Hot Beverages',
    price: 80,
    isVeg: true,
    description: 'Nostalgic malt chocolate milk beverage, served piping hot or chilled to perfection.'
  },
  {
    id: 'chai-7',
    name: 'Hot Chocolate',
    category: 'Chai & Hot Beverages',
    price: 95,
    isVeg: true,
    description: 'Rich artisanal cocoa blended with creamy whole milk and topped with dark chocolate shavings.'
  },

  // COFFEE FAVOURITES
  {
    id: 'coffee-1',
    name: 'Hot Coffee',
    category: 'Coffee Favourites',
    price: 50,
    isVeg: true,
    description: 'Classic Bombay cafe style frothy milk coffee with rich roasted chicory undertones.'
  },
  {
    id: 'coffee-2',
    name: 'Black Coffee',
    category: 'Coffee Favourites',
    price: 45,
    isVeg: true,
    description: 'Bold dark roast decoction served clean and robust.'
  },
  {
    id: 'coffee-3',
    name: 'Strong Coffee',
    category: 'Coffee Favourites',
    price: 60,
    isVeg: true,
    description: 'Double shot brewed coffee with rich micro-foam for true caffeine seekers.'
  },
  {
    id: 'coffee-4',
    name: 'Cold Coffee',
    category: 'Coffee Favourites',
    price: 90,
    isVeg: true,
    isPopular: true,
    description: 'Thick, frosty cafe blend served in a tall glass with velvety crema.'
  },
  {
    id: 'coffee-5',
    name: 'Coffee Latte',
    category: 'Coffee Favourites',
    price: 120,
    isVeg: true,
    description: 'Smooth espresso cut with velvety steamed milk and light foam.'
  },
  {
    id: 'coffee-6',
    name: 'Coffee Condensed',
    category: 'Coffee Favourites',
    price: 120,
    isVeg: true,
    isSignature: true,
    description: 'Vietnamese-Irani crossover brewed over sweet condensed milk, intensely satisfying.'
  },

  // BRUN & BUN PAV SPECIALS
  {
    id: 'brun-1',
    name: 'Brun Maska',
    marathiName: 'ब्रून मस्का',
    category: 'Brun & Bun Pav Specials',
    price: 50,
    isVeg: true,
    isSignature: true,
    isPopular: true,
    description: 'The soul of an Irani cafe. Crusty, crackling round bread baked crisp on the outside, soft within, generously smeared with salted Amul butter.',
    pairingNote: 'Must be dunked immediately into hot Irani Chai.'
  },
  {
    id: 'brun-2',
    name: 'Brun Maska Sugar',
    category: 'Brun & Bun Pav Specials',
    price: 55,
    isVeg: true,
    description: 'Crisp hot brun slathered in salted butter and sprinkled generously with granulated sugar crystals.'
  },
  {
    id: 'brun-3',
    name: 'Brun Maska Jam',
    category: 'Brun & Bun Pav Specials',
    price: 60,
    isVeg: true,
    description: 'Crispy toasted brun layered with rich butter and sweet mixed fruit preserve.'
  },
  {
    id: 'brun-4',
    name: 'Brun Maska Nutella',
    category: 'Brun & Bun Pav Specials',
    price: 70,
    isVeg: true,
    description: 'Warm crusty bread generously coated with creamy hazelnut chocolate Nutella.'
  },
  {
    id: 'bun-1',
    name: 'Maska Bun',
    marathiName: 'मस्का बन',
    category: 'Brun & Bun Pav Specials',
    price: 50,
    isVeg: true,
    isPopular: true,
    description: 'Pillowy soft, sweet bakery bun sliced and filled with a thick slab of butter.'
  },
  {
    id: 'bun-2',
    name: 'Malai Bun',
    marathiName: 'मलाई बन',
    category: 'Brun & Bun Pav Specials',
    price: 60,
    isVeg: true,
    isSignature: true,
    description: 'Soft sweet bun loaded with rich clotted fresh malai and a whisper of sugar.'
  },
  {
    id: 'bun-3',
    name: 'Bun Maska with Sugar',
    category: 'Brun & Bun Pav Specials',
    price: 55,
    isVeg: true,
    description: 'Soft bun with salted butter and sweet crunchy granulated sugar.'
  },
  {
    id: 'bun-4',
    name: 'Bun Maska with Jam',
    category: 'Brun & Bun Pav Specials',
    price: 60,
    isVeg: true,
    description: 'Sweet bakery bun with generous butter and heritage fruit jam.'
  },
  {
    id: 'bun-5',
    name: 'Bun Maska with Nutella',
    category: 'Brun & Bun Pav Specials',
    price: 80,
    isVeg: true,
    description: 'Fluffy bun smothered with rich chocolate hazelnut spread.'
  },

  // VEG MAINS
  {
    id: 'vmain-1',
    name: 'Paneer Bhurji Pav',
    category: 'Veg Mains',
    price: 230,
    isVeg: true,
    isPopular: true,
    description: 'Fresh cottage cheese scrambled with caramelized onions, juicy tomatoes, fresh green chilies, and aromatic spices, served with 2 buttery pavs.'
  },
  {
    id: 'vmain-2',
    name: 'Soyabean Kheema Pav',
    category: 'Veg Mains',
    price: 180,
    isVeg: true,
    isSignature: true,
    description: 'Plant-based minced soya granules slow cooked in rich Irani masala gravy with ginger, garlic, and fresh mint, served with warm buttered pav.'
  },

  // NON VEG MAINS
  {
    id: 'nvmain-1',
    name: 'Chicken Kheema Pav',
    category: 'Non Veg Mains',
    price: 220,
    isVeg: false,
    isSignature: true,
    isPopular: true,
    description: 'Fine minced chicken simmered in fragrant whole spices, brown onions, and aromatic herbs until tender, served with crisp lime wedges and hot buttered pav.',
    pairingNote: 'Add a sunny Half Fry on top for the ultimate cafe indulgence.'
  },
  {
    id: 'nvmain-2',
    name: 'Chicken Kheema Pav & Half Fry',
    category: 'Non Veg Mains',
    price: 250,
    isVeg: false,
    isSignature: true,
    description: 'Signature spiced chicken kheema served topped with a golden runny yolk half fry egg and buttered pavs.'
  },
  {
    id: 'nvmain-3',
    name: 'Chicken Cutlet Pav',
    category: 'Non Veg Mains',
    price: 100,
    isVeg: false,
    isPopular: true,
    description: 'Crispy golden breadcrumb-crusted spiced chicken mince patty tucked inside a fresh buttered pav with spicy mint chutney.'
  },
  {
    id: 'nvmain-4',
    name: 'Mutton Kheema Pav',
    category: 'Non Veg Mains',
    price: 250,
    isVeg: false,
    isSignature: true,
    isPopular: true,
    description: 'Traditional slow-braised mutton mince steeped in dark roasted Irani spices, ginger juliennes, and fresh coriander, served with oven-fresh pav.'
  },
  {
    id: 'nvmain-5',
    name: 'Mutton Kheema Pav & Half Fry',
    category: 'Non Veg Mains',
    price: 280,
    isVeg: false,
    isSignature: true,
    description: 'Rich, robust mutton kheema topped with a farm-fresh half fry sunny egg with runny yolk and pavs.'
  },

  // EGGS YOUR WAY
  {
    id: 'egg-1',
    name: 'Boiled Egg (2 pcs)',
    category: 'Eggs Your Way',
    price: 50,
    isVeg: false,
    description: 'Perfect hard-boiled country eggs served with cracked black pepper and rock salt.'
  },
  {
    id: 'egg-2',
    name: 'Boiled Cheese Egg Bhurji',
    category: 'Eggs Your Way',
    price: 125,
    isVeg: false,
    description: 'Grated boiled eggs tossed in butter, onions, tomatoes, and melted processed cheese.'
  },
  {
    id: 'egg-3',
    name: 'Half Fry Pav',
    category: 'Eggs Your Way',
    price: 80,
    isVeg: false,
    description: 'Sunny side up twin eggs fried in hot butter with a silky runny yolk, served with pav.'
  },
  {
    id: 'egg-4',
    name: 'Masala Half Fry Pav',
    category: 'Eggs Your Way',
    price: 100,
    isVeg: false,
    description: 'Twin eggs fried with chopped onions, green chilies, coriander, and chatpata spices.'
  },
  {
    id: 'egg-5',
    name: 'Plain Omelette Pav',
    category: 'Eggs Your Way',
    price: 80,
    isVeg: false,
    description: 'Fluffy golden two-egg omelette seasoned lightly with salt and pepper, served with pav.'
  },
  {
    id: 'egg-6',
    name: 'Masala Omelette Pav',
    category: 'Eggs Your Way',
    price: 100,
    isVeg: false,
    isPopular: true,
    description: 'Classic Bombay cafe omelette whisked with chopped onions, green chilies, tomatoes, and cilantro.'
  },
  {
    id: 'egg-7',
    name: 'Cheese Omelette Pav',
    category: 'Eggs Your Way',
    price: 120,
    isVeg: false,
    description: 'Golden folded omelette bursting with molten cheese and butter.'
  },
  {
    id: 'egg-8',
    name: 'Anda Masala Pav',
    category: 'Eggs Your Way',
    price: 180,
    isVeg: false,
    description: 'Spiced boiled eggs simmered in a tangy, thick onion-tomato gravy with pav.'
  },
  {
    id: 'egg-9',
    name: 'Egg Bhurji Pav',
    category: 'Eggs Your Way',
    price: 120,
    isVeg: false,
    isPopular: true,
    description: 'Street-style scrambled eggs tossed with plenty of butter, chilies, tomatoes, and pav.'
  },
  {
    id: 'egg-10',
    name: 'Akhuri (Parsi Bhurji)',
    category: 'Eggs Your Way',
    price: 180,
    isVeg: false,
    isSignature: true,
    description: 'The crown jewel of Parsi breakfasts. Softly scrambled eggs cooked with ginger, garlic, green chilies, turmeric, fresh mint, and coriander, kept deliciously creamy and never overcooked.',
    pairingNote: 'Served with warm pav and hot Irani chai.'
  },

  // FLAVORS OF RICE
  {
    id: 'rice-1',
    name: 'Veg Tawa Pulav',
    category: 'Flavors of Rice',
    price: 120,
    isVeg: true,
    description: 'Fragrant basmati rice tossed on a sizzling flat iron tawa with crunchy veggies, pav bhaji butter masala, and lemon.'
  },
  {
    id: 'rice-2',
    name: 'Egg Rice',
    category: 'Flavors of Rice',
    price: 160,
    isVeg: false,
    description: 'Long grain rice stir-fried with golden scrambled eggs, fried onions, and cracked pepper.'
  },
  {
    id: 'rice-3',
    name: 'Chicken Kheema Rice',
    category: 'Flavors of Rice',
    price: 180,
    isVeg: false,
    isSignature: true,
    description: 'Steaming basmati rice layered with rich, aromatic chicken kheema and caramelized onions.'
  },
  {
    id: 'rice-4',
    name: 'Mutton Kheema Rice',
    category: 'Flavors of Rice',
    price: 220,
    isVeg: false,
    isSignature: true,
    description: 'Hearty mutton mince cooked with slow spices and folded into seasoned fragrant rice.'
  },

  // BREAD & SANDWICHES
  {
    id: 'bread-1',
    name: 'Jam & Butter Bread',
    category: 'Bread & Sandwiches',
    price: 50,
    isVeg: true,
    description: 'Classic crustless white bakery bread sliced and spread with salted Amul butter and mixed fruit jam.'
  },
  {
    id: 'bread-2',
    name: 'Nutella Sandwich',
    category: 'Bread & Sandwiches',
    price: 90,
    isVeg: true,
    description: 'Thick spread of rich Nutella between toasted golden bread slices.'
  },
  {
    id: 'bread-3',
    name: 'Aloo Sandwich',
    category: 'Bread & Sandwiches',
    price: 70,
    isVeg: true,
    description: 'Spiced potato filling with spicy green chutney and chaat masala.'
  },
  {
    id: 'bread-4',
    name: 'Cheese Corn Sandwich',
    category: 'Bread & Sandwiches',
    price: 110,
    isVeg: true,
    description: 'Sweet golden corn and molten cheese grilled crisp with herbs.'
  },
  {
    id: 'bread-5',
    name: 'Veg Club Sandwich',
    category: 'Bread & Sandwiches',
    price: 100,
    isVeg: true,
    description: 'Triple-decker sandwich with crisp cucumbers, tomatoes, beetroots, potato masala, and spicy chutney.'
  },
  {
    id: 'bread-6',
    name: 'Chicken Club Sandwich',
    category: 'Bread & Sandwiches',
    price: 120,
    isVeg: false,
    isPopular: true,
    description: 'Triple layered toasted sandwich loaded with shredded seasoned chicken, fried egg, and herb mayo.'
  },
  {
    id: 'bread-7',
    name: 'Masala Toast Sandwich',
    category: 'Bread & Sandwiches',
    price: 90,
    isVeg: true,
    description: 'Crisp pressed sandwich with potato masala, onions, and fiery mint coriander chutney.'
  },
  {
    id: 'bread-8',
    name: 'Masala Cheese Toast Sandwich',
    category: 'Bread & Sandwiches',
    price: 100,
    isVeg: true,
    isPopular: true,
    description: 'Golden grilled sandwich packed with spiced potato masala and gooey melted cheese.'
  },

  // MAGGIE DELIGHTS
  {
    id: 'maggie-1',
    name: 'Plain Maggie',
    category: 'Maggie Delights',
    price: 65,
    isVeg: true,
    description: 'Classic 2-minute nostalgia cooked in broth just the way you like it.'
  },
  {
    id: 'maggie-2',
    name: 'Masala Maggie',
    category: 'Maggie Delights',
    price: 90,
    isVeg: true,
    isPopular: true,
    description: 'Tossed with butter, diced onions, tomatoes, and extra aromatic spice blend.'
  },
  {
    id: 'maggie-3',
    name: 'Peri Peri Masala Maggie',
    category: 'Maggie Delights',
    price: 100,
    isVeg: true,
    description: 'Fiery peri-peri spice dust tossed into rich masala noodles.'
  },
  {
    id: 'maggie-4',
    name: 'Egg Masala Maggie',
    category: 'Maggie Delights',
    price: 120,
    isVeg: false,
    description: 'Masala maggie folded with seasoned scrambled eggs and butter.'
  },
  {
    id: 'maggie-5',
    name: 'Chicken Cheese Maggie',
    category: 'Maggie Delights',
    price: 150,
    isVeg: false,
    isSignature: true,
    description: 'Loaded with juicy shredded chicken pieces and draped in molten cheddar cheese.'
  },
  {
    id: 'pasta-1',
    name: 'White Sauce Pasta',
    category: 'Maggie Delights',
    price: 180,
    isVeg: true,
    description: 'Penne pasta enveloped in a rich, velvety parmesan white garlic cream sauce.'
  },
  {
    id: 'pasta-2',
    name: 'Chicken White Sauce Pasta',
    category: 'Maggie Delights',
    price: 200,
    isVeg: false,
    description: 'Creamy garlic pasta tossed with herb-marinated grilled chicken chunks.'
  },

  // BAKERY TREATS
  {
    id: 'bakery-1',
    name: 'Chicken Patties',
    category: 'Bakery Treats',
    price: 60,
    isVeg: false,
    isPopular: true,
    description: 'Flaky, buttery puff pastry stuffed with savory minced chicken filling, baked fresh daily in our ovens.'
  },
  {
    id: 'bakery-2',
    name: 'Chicken Tandoori Patties',
    category: 'Bakery Treats',
    price: 65,
    isVeg: false,
    description: 'Flaky puff stuffed with smoky tandoori spiced chicken.'
  },
  {
    id: 'bakery-3',
    name: 'Veg Patties',
    category: 'Bakery Treats',
    price: 50,
    isVeg: true,
    description: 'Golden crisp multi-layered puff pastry filled with spiced green peas and potatoes.'
  },
  {
    id: 'bakery-4',
    name: 'Paneer Patties',
    category: 'Bakery Treats',
    price: 65,
    isVeg: true,
    description: 'Flaky pastry pockets filled with marinated cottage cheese crumble.'
  },
  {
    id: 'bakery-5',
    name: 'Chicken Puff',
    category: 'Bakery Treats',
    price: 50,
    isVeg: false,
    description: 'Crisp golden baked triangle puff with seasoned minced chicken.'
  },
  {
    id: 'bakery-6',
    name: 'Mawa Samosa',
    category: 'Bakery Treats',
    price: 50,
    isVeg: true,
    isSignature: true,
    description: 'A legendary sweet Irani treat. Crisp golden pastry triangles stuffed with sweetened condensed milk khoya mawa, cardamom, and nuts.'
  },
  {
    id: 'bakery-7',
    name: 'Chicken Stuff Croissant',
    category: 'Bakery Treats',
    price: 80,
    isVeg: false,
    description: 'Buttery flaky French crescent roll stuffed with savory pulled chicken.'
  },

  // NACHO & CORN BITES
  {
    id: 'nacho-1',
    name: 'Classic Crunch Nachos',
    category: 'Nacho & Corn Bites',
    price: 110,
    isVeg: true,
    description: 'Golden corn tortilla chips served with salsa dip and herb seasoning.'
  },
  {
    id: 'nacho-2',
    name: 'Corny Cheesy Nachos',
    category: 'Nacho & Corn Bites',
    price: 120,
    isVeg: true,
    description: 'Crispy nachos smothered in warm cheese sauce and sweet corn kernels.'
  },
  {
    id: 'nacho-3',
    name: 'Cheesy Chicken Nachos',
    category: 'Nacho & Corn Bites',
    price: 140,
    isVeg: false,
    description: 'Tortilla crisps layered with spiced chicken, jalapeños, and liquid cheddar.'
  },
  {
    id: 'corn-1',
    name: 'Chatpata Masala Corn',
    category: 'Nacho & Corn Bites',
    price: 80,
    isVeg: true,
    description: 'Steaming tender sweet corn tossed with butter, chatpata masala, and fresh lemon.'
  },

  // ROLLS SPECIAL
  {
    id: 'roll-1',
    name: 'Plain Egg Roll',
    category: 'Rolls Special',
    price: 110,
    isVeg: false,
    description: 'Flaky flatbread layered with spiced egg omelette, pickled onions, and chutneys.'
  },
  {
    id: 'roll-2',
    name: 'Chicken Egg Roll',
    category: 'Rolls Special',
    price: 120,
    isVeg: false,
    isPopular: true,
    description: 'Crisp paratha with double egg, tender chicken chunks, onions, and tangy sauce.'
  },
  {
    id: 'roll-3',
    name: 'Paneer Roll',
    category: 'Rolls Special',
    price: 150,
    isVeg: true,
    description: 'Grilled spiced paneer cubes rolled with crisp bell peppers in a warm flatbread.'
  },

  // DESSERTS & ICE CREAM
  {
    id: 'dessert-1',
    name: 'Caramel Custard',
    marathiName: 'कॅरॅमल कस्टर्ड',
    category: 'Desserts & Ice Cream',
    price: 60,
    isVeg: false,
    isSignature: true,
    isPopular: true,
    description: 'The crowning glory of Irani cafes. Silky, wobble-soft baked egg custard bathed in rich, dark amber burnt caramel syrup. Made from a century-old recipe.',
    pairingNote: 'The quintessential way to conclude any meal at Irani Naka.'
  },
  {
    id: 'dessert-2',
    name: 'Mawa Cake',
    marathiName: 'मावा केक',
    category: 'Desserts & Ice Cream',
    price: 50,
    isVeg: true,
    isSignature: true,
    isPopular: true,
    description: 'Dense, moist traditional butter cake infused with rich thickened milk mawa, cardamom, and sliced pistachios, baked fresh every morning.'
  },
  {
    id: 'dessert-3',
    name: 'Arabian Pudding',
    category: 'Desserts & Ice Cream',
    price: 110,
    isVeg: true,
    description: 'Creamy chilled milk pudding infused with rose water and topped with roasted slivered almonds.'
  },
  {
    id: 'dessert-4',
    name: 'Gulab Jamun (2 pcs)',
    category: 'Desserts & Ice Cream',
    price: 40,
    isVeg: true,
    description: 'Soft melt-in-mouth milk dumplings soaked in warm rose and cardamom sugar syrup.'
  },
  {
    id: 'dessert-5',
    name: 'Artisanal Ice Cream (Vanilla / Mango / Coconut)',
    category: 'Desserts & Ice Cream',
    price: 80,
    isVeg: true,
    description: 'Two scoops of rich churned ice cream. Try the subtle tender coconut or rich Alphonso mango.'
  },

  // CHILL & MOCKTAILS
  {
    id: 'chill-1',
    name: 'Blue Ocean',
    category: 'Chill & Mocktails',
    price: 140,
    isVeg: true,
    description: 'Cool blue curacao syrup shaken with sparkling lemon soda and crushed mint.'
  },
  {
    id: 'chill-2',
    name: 'Virgin Classic Mojito',
    category: 'Chill & Mocktails',
    price: 120,
    isVeg: true,
    description: 'Muddled fresh garden mint leaves, lime chunks, sugar, and sparkling soda.'
  },
  {
    id: 'chill-3',
    name: 'Sunrise Mocktail',
    category: 'Chill & Mocktails',
    price: 160,
    isVeg: true,
    description: 'Gradient mocktail of orange juice, grenadine, and fizzy lemon spritz.'
  },

  // MILKSHAKES & MORE
  {
    id: 'shake-1',
    name: 'Chickoo Shake',
    category: 'Milkshakes & More',
    price: 100,
    isVeg: true,
    isPopular: true,
    description: 'A Bombay Irani classic made with sweet fresh sapodilla chickoo fruit and whole cold milk.'
  },
  {
    id: 'shake-2',
    name: 'Kit-Kat Shake',
    category: 'Milkshakes & More',
    price: 140,
    isVeg: true,
    description: 'Thick chocolate milkshake blended with crispy Kit-Kat wafer bars.'
  },
  {
    id: 'shake-3',
    name: 'Classic Lassi',
    category: 'Milkshakes & More',
    price: 70,
    isVeg: true,
    description: 'Traditional thick churned sweet yogurt drink served chilled.'
  },
  {
    id: 'shake-4',
    name: 'Masala Chaas',
    category: 'Milkshakes & More',
    price: 60,
    isVeg: true,
    description: 'Refreshing spiced buttermilk tempered with roasted cumin, ginger, and fresh mint.'
  },
  {
    id: 'shake-5',
    name: 'Classic Nimbu Paani',
    category: 'Milkshakes & More',
    price: 60,
    isVeg: true,
    description: 'Fresh squeezed lemon with rock salt and sugar, sweet & salted style.'
  },

  // PALLONJI & DRINKS
  {
    id: 'pal-1',
    name: 'Raspberry Pallonji',
    marathiName: 'रासबेरी पालोंजी',
    category: 'Pallonji & Drinks',
    price: 35,
    isVeg: true,
    isSignature: true,
    isPopular: true,
    description: 'The historic ruby-red carbonated soda that has accompanied Irani cafe meals since 1865. Sweet, fizzy nostalgia in a chilled vintage glass bottle.',
    pairingNote: 'Legendary companion to Mutton Kheema Pav.'
  },
  {
    id: 'pal-2',
    name: 'Jeera Masala Pallonji',
    category: 'Pallonji & Drinks',
    price: 35,
    isVeg: true,
    description: 'Zesty roasted cumin spiced soda that aids digestion and sparkles on the palate.'
  },
  {
    id: 'pal-3',
    name: 'Ice-Cream Pallonji',
    category: 'Pallonji & Drinks',
    price: 35,
    isVeg: true,
    isSignature: true,
    description: 'A rare heritage cream soda flavor with sweet vanilla notes and effervescent bubbles.'
  },
  {
    id: 'pal-4',
    name: 'Ginger Pallonji',
    category: 'Pallonji & Drinks',
    price: 35,
    isVeg: true,
    description: 'Spicy ginger bite mixed with sweet effervescence.'
  },
  {
    id: 'pal-5',
    name: 'Chilled Glass Bottle Soda / Soft Drink',
    category: 'Pallonji & Drinks',
    price: 20,
    isVeg: true,
    description: 'Classic cold glass bottle 7-Up, Pepsi, Sprite, or Fanta served with wooden opener.'
  }
];
