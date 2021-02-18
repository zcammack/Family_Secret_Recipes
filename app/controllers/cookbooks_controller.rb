class CookbooksController < ApplicationController
  before_action :set_cookbook, only: [:show, :update, :destroy]

  # GET /cookbooks
  def index
    @cookbooks = Cookbook.all

    render json: @cookbooks
  end

  # GET /cookbooks/1
  def show
    render json: @cookbook
  end

  # POST /cookbooks
  def create
    @cookbook = Cookbook.new(cookbook_params)

    if @cookbook.save
      render json: @cookbook, status: :created, location: @cookbook
    else
      render json: @cookbook.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cookbooks/1
  def update
    if @cookbook.update(cookbook_params)
      render json: @cookbook
    else
      render json: @cookbook.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cookbooks/1
  def destroy
    @cookbook.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cookbook
      @cookbook = Cookbook.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def cookbook_params
      params.require(:cookbook).permit(:title, :about)
    end
end
