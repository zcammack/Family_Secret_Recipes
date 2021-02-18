class CookbooksController < ApplicationController

    def index
        cookbooks = Cookbook.all
        render json: cookbooks
    end

    def show
        cookbook = Cookbook.find_by(id: params[:id])
        render json: { id: cookbook.id, recipes: cookbook.recipes}
    end
end
