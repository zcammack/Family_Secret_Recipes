class CookbookSerializer < ActiveModel::Serializer
  has_many :recipes
  attributes :id, :name
end
