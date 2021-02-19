class Cookbook < ApplicationRecord
    has_many :recipes. dependant: :destroy
end
