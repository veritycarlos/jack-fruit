class TipsController < ApplicationController

    def index
        if params[:plant_id]
            plant = Plant.find(params[:plant_id])
            tips = plant.tips
        else
            tips = Tip.all
        end
        render json: tips, include: :plant
    end 

    #i think this is correct
    def show
        if params[:plant_id]
            plant = Plant.find(params[:plant_id])
            tips = plant.tips
        else
            tips = Tip.all
        end
        render json: tips, include: :plant
    end 

end
