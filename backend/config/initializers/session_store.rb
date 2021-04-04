if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: '_auth-vocaby-api', domain: 'vocaby.com' # domainは仮
else
  Rails.application.config.session_store :cookie_store, key: '_auth-vocaby-api'
end