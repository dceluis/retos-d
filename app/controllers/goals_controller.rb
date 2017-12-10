class GoalsController < ApplicationController
  before_action :set_goal, only: [:show, :edit, :update]

  # GET /goals/1
  # GET /goals/1.json
  def show
  end

  # GET /goals/1/edit
  def edit
  end

  # PATCH/PUT /goals/1
  # PATCH/PUT /goals/1.json
  def update
    respond_to do |format|
      if @goal.update(goal_params)
        format.html { redirect_to @goal, notice: 'Goal was successfully updated.' }
        format.json { render :show, status: :ok, location: @goal }
      else
        format.html { render :edit }
        format.json { render json: @goal.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_goal
    @goal = Goal.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def goal_params
    params.require(:goal).permit(:challenge_id)
  end
end
