module Api
  module V1
    class BaseApiController < ApplicationController
      
      # currently, entire API requires auth first
      before_action :api_authenticate_user!
      
      
      def api_authenticate_user!
        unless current_user
          render json: {error: 'authentication error'}, status: 401
        end
      end
      
      
    end
  end
end
