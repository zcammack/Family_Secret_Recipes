class CookbooksController < ApplicationController

    def index
        cookbooks = Cookbook.all
        render json: cookbooks
    end

    def show
        cookbook = Cookbook.find_by(id: params[:id])
        options = {
          include: [:recipes]
        }
        render json: CookbookSerializer.new(cookbook, options)
    end
end
