# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cookbook_a = Cookbook.create(name: "Southern Homecooking")

cookbook_b = Cookbook.create(name: "Fancy Cooking")

recipe_a = Recipe.create(name: "Mashed Potatoes", cookbook_id: 1)

recipe_b = Recipe.create(name: "Garlic Bread", cookbook_id: 1)

recipe_c = Recipe.create(name: "Lasagna", cookbook_id: 2)
