class Api::V1::RegistrationsController < ApplicationController
  def signup
    @user = User.new(registration_params)
    if @user.save
      login!
      render json: { status: :created, data: @user }
    else
      render json: { status: 500, errors: ['登録できませんでした。'] }
    end
  end

  private

  def registration_params
    params.permit(:name, :email, :password, :password_digest)
  end
end
