class RecipeSerializer < ActiveModel::Serializer
  belongs_to :cookbook
  attributes :id, :name, :cookbook_id, :directions, :ingredients, :author, :created_at
end
