class Plant < ApplicationRecord
    validates :name, :image, presence: true

    has_many :tips, dependent: :destroy
    has_many :users, through: :tips
end
