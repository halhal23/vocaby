class Word < ApplicationRecord
  belongs_to :level
  has_many :results

  def answer_count(user)
    results.where(user_id: user.id).count
  end

  def correct_count(user)
    results.where(user_id: user.id, is_correct: true).count
  end

  def incorrect_count(user)
    results.where(user_id: user.id, is_correct: false).count
  end
end
