class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :cookbook_id, :directions, :ingredients, :author
  belongs_to :cookbook
end
