# frozen_string_literal: true

class NameStatisticsController < ActionController::Base
  def index
    res = NameStatistic.where('LOWER(name) LIKE ?', "%#{params[:name].downcase}%").first(20)

    render json: res, status: :ok
  end
end
