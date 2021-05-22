class Api::V1::TestsController < ApplicationController
  before_action :set_test, only: [:show]
  before_action :current_user, only: [:show]

  def start
    Rails.logger.debug '------------------------------------------'
    Rails.logger.debug params.to_json
    Rails.logger.debug '------------------------------------------'
    level = Level.find(params['level_id'])
    @questions = QuestionService.new(@current_user, level, params['limit'].to_i).call
    test = current_user.tests.create
    render json: { questions: @questions, test_id: test.id }
  end

  def show
  end

  private

  def set_test
    @test = Test.find(params[:id])
  end
end
