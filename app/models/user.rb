class User < ApplicationRecord
    has_many :tips
    has_many :plants, through: :tips
end
