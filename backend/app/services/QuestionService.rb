class QuestionService
  def initialize(user, limit = 10)
    @user = user
    @limit = limit
  end

  def call
    questions = []
    words = Word.where(id: Word.all.pluck(:id).sample(@limit))
    words.each do |word|
      choices = Word.where(id: Word.where.not(id: word.id).pluck(:id).sample(3))
      questions << {
        question: { id: word.id, japanese: word.japanese, english: word.english, part: word.part },
        choices: [
          { id: word.id, japanese: word.japanese, english: word.english, part: word.part },
          { id: choices[0].id, japanese: choices[0].japanese, english: choices[0].english, part: choices[0].part },
          { id: choices[1].id, japanese: choices[1].japanese, english: choices[1].english, part: choices[1].part },
          { id: choices[2].id, japanese: choices[2].japanese, english: choices[2].english, part: choices[2].part },
        ]
      }
    end
    questions
  end

  private

  def sample_data
    [
      {
        question: { id: 1, japanese: '質問1', english: 'question1', part: '名詞' },
        choices: [
          { id: 1, japanese: '選択1', english: 'choise1' },
          { id: 3, japanese: '選択2', english: 'choise2' },
          { id: 4, japanese: '選択3', english: 'choise3' },
          { id: 5, japanese: '選択4', english: 'choise4' },
        ]
      },
      {
        question: { id: 2, japanese: '質問2', english: 'question2', part: '動詞' },
        choices: [
          { id: 2, japanese: '選択2-1', english: 'choise2-1' },
          { id: 4, japanese: '選択2-2', english: 'choise2-2' },
          { id: 5, japanese: '選択2-3', english: 'choise2-3' },
          { id: 6, japanese: '選択2-4', english: 'choise2-4' },
        ]
      },
      {
        question: { id: 3, japanese: '質問3', english: 'question3', part: '形容詞' },
        choices: [
          { id: 3, japanese: '選択3-1', english: 'choise3-1' },
          { id: 4, japanese: '選択3-2', english: 'choise3-2' },
          { id: 5, japanese: '選択3-3', english: 'choise3-3' },
          { id: 6, japanese: '選択3-4', english: 'choise3-4' },
        ]
      }      
    ]
  end
end
# let word_datas = [
#   {
#     question: { id: 1, japanese: '質問1', english: 'question1', part: '名詞' },
#     choices: [
#       { id: 1, japanese: '選択1', english: 'choise1' },
#       { id: 3, japanese: '選択2', english: 'choise2' },
#       { id: 4, japanese: '選択3', english: 'choise3' },
#       { id: 5, japanese: '選択4', english: 'choise4' },
#     ]
#   },
#   {
#     question: { id: 2, japanese: '質問2', english: 'question2', part: '動詞' },
#     choices: [
#       { id: 2, japanese: '選択2-1', english: 'choise2-1' },
#       { id: 4, japanese: '選択2-2', english: 'choise2-2' },
#       { id: 5, japanese: '選択2-3', english: 'choise2-3' },
#       { id: 6, japanese: '選択2-4', english: 'choise2-4' },
#     ]
#   },
#   {
#     question: { id: 3, japanese: '質問3', english: 'question3', part: '形容詞' },
#     choices: [
#       { id: 3, japanese: '選択3-1', english: 'choise3-1' },
#       { id: 4, japanese: '選択3-2', english: 'choise3-2' },
#       { id: 5, japanese: '選択3-3', english: 'choise3-3' },
#       { id: 6, japanese: '選択3-4', english: 'choise3-4' },
#     ]
#   }
# ]