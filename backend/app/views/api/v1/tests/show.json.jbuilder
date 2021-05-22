json.test do
  json.level @test.words.first.level.name
  json.wordbook @test.words.first.level.wordbook.name
  json.result_count @test.results.count
  json.correct_count @test.correct_count
end

json.results do
  json.array! @test.results do |result|
    json.is_correct result.is_correct
    json.word do
      json.japanese result.word.japanese
      json.english result.word.english
      json.answer_count result.word.answer_count(@current_user)
      json.correct_count result.word.correct_count(@current_user)
    end
  end
end