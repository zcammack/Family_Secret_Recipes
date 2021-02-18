class Recipe < ApplicationRecord
  belongs_to :cookbook
  has_many :ingredients
end
