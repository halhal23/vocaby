class Result < ApplicationRecord
  belongs_to :user
  belongs_to :test
  belongs_to :word

  validates :is_correct, inclusion: [true, false] 
end
