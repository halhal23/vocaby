class ApplicationController < ActionController::API
        include ActionController::Cookies

        skip_before_action :verify_authenticity_token, raise: false
        def login!
                session[:user_id] = @user.id
                Rails.logger.debug 'ログイン時にセッションを作成します'
                Rails.logger.debug session
        end

        def current_user
                @current_user ||= User.find(session[:user_id]) if session[:user_id]
        end
end
