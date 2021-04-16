class Api::V1::WordbooksController < ApplicationController
  def index
    @books = Wordbook.all
    # render json: { data: @books }
  end
end
