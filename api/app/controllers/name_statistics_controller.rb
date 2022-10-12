# frozen_string_literal: true

class NameStatisticsController < ActionController::Base
  def index
    response = if params[:name]
      NameStatistic.where('LOWER(name) LIKE ?', "%#{params[:name].downcase}%")
    else
      NameStatistic.first(500).sample(50)
    end

    render json: response, status: :ok
  end
end
