class UserChallengesController < ApplicationController
  before_action :set_user_challenge, only: [:show, :edit, :update, :destroy]
  before_action :require_user!

  # GET /user_challenges
  # GET /user_challenges.json
  def index
    @user_challenges = current_user.user_challenges.includes(:challenge)

    js progress: current_user.complete_challenges.count / Challenge.count
  end

  # GET /user_challenges/1
  # GET /user_challenges/1.json
  def show
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_challenge
      @user_challenge = UserChallenge.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_challenge_params
      params.require(:user_challenge).permit(:user_id, :challenge_id)
    end
end
