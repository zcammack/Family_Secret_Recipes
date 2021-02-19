class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :cookbook_id, :directions, :ingredients, :author
  belongs_to :cookbook
end
