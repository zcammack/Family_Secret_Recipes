class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  belongs_to :cookbook
end
