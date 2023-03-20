class Plant < ApplicationRecord
    validates :name, :image, presence: true

    has_many :tips
    has_many :users, through: :tips
end
