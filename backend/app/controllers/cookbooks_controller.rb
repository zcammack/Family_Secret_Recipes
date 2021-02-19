class CookbooksController < ApplicationController

  before_action :set_cookbook, only: [:show, :update, :destroy]

  # GET /cookbooks
  def index
    @cookbooks = Cookbook.all

    render json: @cookbooks
  end

  # GET /cookbooks/1
  def show
    @cookbook = Cookbook.find(params[:id])
    render json: @cookbook, status: 200
  end

  # POST /cookbooks
  def create
    @cookbook = Cookbook.create(cookbook_params)
    render json: @cookbook, status: 200
  end

  # PATCH/PUT /cookbooks/1
  def update
    if @cookbook.update(cookbook_params)
      render json: @cookbook, status: 200
    else
      render json: { errors: @cookbook.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /cookbooks/1
  def destroy
    @cookbook = Cookbook.find_by(id: params[:id])
    @cookbook.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cookbook
      @cookbook = Cookbook.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def cookbook_params
      params.require(:cookbook).permit(:name)
    end
end
