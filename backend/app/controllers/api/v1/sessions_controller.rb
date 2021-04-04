class Api::V1::SessionsController < ApplicationController
  def signin
    @user = User.find_by(email: session_params[:email])
    if @user && @user.authenticate(session_params[:password])
      login!
      render json: { logged_in: true, data: @user }
    else
      render json: { status: 401, errors: ['認証に失敗しました。', '再度ログインし直すか、会員登録をしてください。'] }
    end
  end

  def signout
    reset_session
    render json: { status: 200, logged_in: false }
  end

  def logged_in
    Rails.logger.debug 'こちらがセッションです' 
    Rails.logger.debug session
    if current_user
      render json: { logged_in: true, data: current_user, messages: ['ログイン中です。'] }
    else
      render json: { logged_in: false, errors: ['ログインしてください。'] }
    end
  end

  private

  def session_params
    params.permit(:email, :password)
  end
end
