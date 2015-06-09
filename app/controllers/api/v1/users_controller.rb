module Api
  module V1
    class UsersController < BaseApiController
      
      
      def me
        @user = current_user
      end
      
      
    end
  end
end
