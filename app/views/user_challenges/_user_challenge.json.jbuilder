json.extract! user_challenge, :id, :user_id, :challenge_id, :created_at, :updated_at
json.url user_challenge_url(user_challenge, format: :json)
