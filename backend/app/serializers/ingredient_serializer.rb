class IngredientSerializer
  include FastJsonapi::ObjectSerializer
  attributes 
  belongs_to :recipe
end
