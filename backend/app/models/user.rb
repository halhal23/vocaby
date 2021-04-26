class User < ApplicationRecord
  has_secure_password
  has_many :tests
  has_many :results

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
end
