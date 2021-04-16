require 'csv'

namespace :csv do
  namespace :wordbook do
    task import: :environment do
      CSV.foreach("csv-datas/db-wordbooks.csv", headers: true) do |row|
        Wordbook.create!(id: row[0], name: row[1])
      end
    end
  end
  namespace :word do
    task import: :environment do
      CSV.foreach("csv-datas/db-words.csv", headers: true) do |row|
        level = Level.find_or_create_by(name: row[4], wordbook_id: row[5])
        puts "importing #{row[0] row[1]}"
        Word.create!({
          id: row[0],
          english: row[1],
          japanese: row[2],
          part: row[3],
          level_id: level.id
        })
      end
    end
  end
end

# namespace :db do
#   task reset: %i(
#     db:drop
#     db:create
#     db:migrate
#     db:seed
#   )
# end