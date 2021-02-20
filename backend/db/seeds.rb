# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cookbook_a = Cookbook.create(name: "Southern Homecooking")

cookbook_b = Cookbook.create(name: "Fancy Cooking")

recipe_a = Recipe.create(name: "Mashed Potatoes", cookbook_id: cookbook_a.id, ingredients: "Two pounds of potatoes, one cup of milk, salt and pepper, and two tablespoons of butter.", directions: "Step one: Boil salted water and add potatoes. Cook until tender. Step two: heat butter and milk over low heat until butter is melted. Step three: Blend together potatoes and melted butter. Season to taste with salt and pepper.", author: "Zackary Cammack")

recipe_b = Recipe.create(name: "Garlic Bread", cookbook_id: cookbook_a.id, ingredients: "Four cloves of crushed garlic, two tablespoons of butter, two tablespoons of olive oil, one loaf of crusty bread, three tablespoons grated cheese, and chopped parsely.", directions: "Combine garlic, butter, and oil in a microwave safe dish or in a small saucepan. Heat garlic and butter and oil in microwave for 1 minute or in a small pot over moderate-low heat for 3 minutes. Then Toast split bread under broiler. Remove bread when it is toasted golden brown in color. Brush bread liberally with garlic oil. Sprinkle with cheese, if using, and parsley. If you added cheese, return to broiler and brown 30 seconds. Cut into chunks and serve.", author: "Chase Cammack")

recipe_c = Recipe.create(name: "Lasagna", cookbook_id: cookbook_b.id, ingredients: "1 (16 ounce) package lasagna noodles, ½ pound ground pork, ½ pound lean ground beef, 1 (8 ounce) can tomato sauce, 1 (28 ounce) can crushed tomatoes, 1 tablespoon chopped fresh parsley, 1 clove garlic, crushed, ½ teaspoon dried oregano, ½ cup minced onion, ⅛ teaspoon white sugar, 1 ½ teaspoons dried basil, 1 ½ teaspoons salt, 1 pound small curd cottage cheese, 3 eggs, ¾ cup grated Parmesan cheese, 2 teaspoons salt, ¼ teaspoon ground black pepper, 1 pound shredded mozzarella cheese)", directions: "Step One: Preheat oven to 375 degrees F (190 degrees C). Bring a large pot of lightly salted water to a boil. Add noodles and cook for 8 to 10 minutes or until al dente; drain and set aside. Step Two: Place pork and beef in a large, deep skillet. Cook over medium high heat until evenly brown. Stir in tomato sauce, crushed tomatoes, parsley, garlic, oregano, onion, sugar, basil and salt. Simmer over medium-low heat for 30 minutes, stirring occasionally. Step Three: In a large bowl, combine cottage cheese, eggs, Parmesan cheese, parsley, salt and pepper. Step Four: In a 9x13 inch baking dish, place 2 layers of noodles on the bottom of dish; layer 1/2 of the cheese mixture, 1/2 of the mozzarella cheese and 1/2 of the sauce; repeat layers. Step Five: Cover with aluminum foil and bake in preheated oven for 30 to 40 minutes. Remove foil and bake for another 5 to 10 minutes; let stand for 10 minutes before cutting; serve.", author: "Phyllis Cammack")
