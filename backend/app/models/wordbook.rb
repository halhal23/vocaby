class Wordbook < ApplicationRecord
  has_many :levels
  has_many :words, through: :levels

  def word_count
    words.count
  end

  def get_current_rate(user)
    rand(100)
  end

  def get_complete_rate(user)
    rand(100)
  end
end
