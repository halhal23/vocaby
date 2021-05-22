json.array! @books do |book|
  json.name book.name
  json.word_count book.word_count
  json.current_rate book.get_current_rate(@current_user)
  json.complete_rate book.get_complete_rate(@current_user)
  json.levels book.levels.each do |level|
    json.id level.id
    json.name level.name
    json.word_count level.word_count
    json.current_rate level.get_current_rate(@current_user)
    json.complete_rate level.get_complete_rate(@current_user)
  end
end