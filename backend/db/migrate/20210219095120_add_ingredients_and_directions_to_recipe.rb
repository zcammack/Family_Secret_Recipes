class AddIngredientsAndDirectionsToRecipe < ActiveRecord::Migration[6.1]
  def change
    add_column :recipes, :ingredients, :text
    add_column :recipes, :directions, :text
    add_column :recipes, :author, :string
  end
end
