class Api::V1::WordbooksController < ApplicationController
  def index
    @books = Wordbook.all
  end
end
