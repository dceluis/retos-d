json.extract! user, :id, :supply_code, :first_name, :last_name, :dni, :created_at, :updated_at
json.url user_url(user, format: :json)
