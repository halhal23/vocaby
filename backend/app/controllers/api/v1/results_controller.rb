class Api::V1::ResultsController < ApplicationController
  def create
    result = current_user.results.new(result_params)
    if result.save
      render json: { message: 'ok'}
    else
      render json: { message: 'ng', nannde: result.errors.full_messages }
    end
  end

  private

  def result_params
    params.permit(:word_id, :test_id, :is_correct)
  end
end
