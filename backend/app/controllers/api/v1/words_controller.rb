class Api::V1::WordsController < ApplicationController
  def start
    @questions = QuestionService.new(current_user, params['limit'].to_i).call
    render json: { data: @questions }
  end
end
