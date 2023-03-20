class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true

    has_secure_password

    has_many :tips
    has_many :plants, through: :tips
end
