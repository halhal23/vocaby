class Level < ApplicationRecord
  has_many :words
  belongs_to :wordbook

  def word_count
    words.count
  end

  def get_current_rate(user)
    rand(100)
  end

  def get_complete_rate(user)
    rand(100)
    # user.results.where(word_id: words.ids, is_current: true).count / words.count
  end
end
