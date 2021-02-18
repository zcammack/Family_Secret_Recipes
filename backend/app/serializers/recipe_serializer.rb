class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes 
  has_many :ingredients
  belongs_to :cookbook
end
