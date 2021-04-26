class Test < ApplicationRecord
  belongs_to :user
  has_many :results
  has_many :words, through: :results, source: :word

  def correct_rate
    (correct_results.count / results.count.to_f) * 100
  end

  def incorrect_rate
    (results.where(is_correct: false).count / results.count.to_f) * 100
  end

  def correct_count
    results.where(is_correct: true).count
  end
end
