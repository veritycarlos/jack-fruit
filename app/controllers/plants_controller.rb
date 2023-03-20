class PlantsController < ApplicationController

    def index
        plants = Plant.all
        render json: plants
    end 

    def show
        plant = Plant.find_by(id: params[:id])
        if plant
            render json: plant
        else
            render json: { error: "Plant not found" }, status: :not_found
        end
    end 

    def create
        plant = Plant.create(name: params[:name], image: params[:image])
        render json: plant, status: :created
    end 

    def destroy
        plant = Plant.find_by(id: params[:id])
        if plant
            plant.destroy
            head :no_content
        else
            render json: { error: "Plant not found" }, status: :not_found
    
        end
    end 

    def update
        plant = Plant.find_by(id: params[:id])
        plant.update(plant_params)
        render json: plant
    end


    private

    def plant_params
        params.permit(:name, :image)
    end
end
