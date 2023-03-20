class PlantsController < ApplicationController

    def index
        plants = Plant.all
        render json: plants
    end 

    def create
        plant = Plant.create!(plant_params)
        render json: plant, status: :created 
    end 

    def show
        plant = Plant.find_by(id: params[:id])
        if plant
            render json: plant
        else
            render json: { error: "Plant not found" }, status: :unauthorized
        end
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

    # def current_user
    #     User.find_by(id: session[:user_id])
    # end 

    def plant_params
        params.permit(:name, :image)
    end

end
# class PlantsController < ApplicationController
#     before_action :authorize

#     def index
#         plants = current_user.plants
#         render json: plants
#     end 

#     def show
#         plant = current_user.find_by(id: params[:id])
#         if plant
#             render json: plant
#         else
#             render json: { error: "Plant not found" }, status: :unauthorized
#         end
#     end 

#     def create
#         plant = current_user.plants.create(command_params)
#         if plant.valid?
#             render json: Plant
#         else
#             render json: {errors: plants.errors.full_messages}. status: :unprocessable_entity 
#         end 
#     end 

#     def destroy
#         plant = Plant.find_by(id: params[:id])
#         if plant
#             plant.destroy
#             head :no_content
#         else
#             render json: { error: "Plant not found" }, status: :not_found
    
#         end
#     end 

#     def update
#         plant = Plant.find_by(id: params[:id])
#         plant.update(plant_params)
#         render json: plant
#     end


#     private

#     def current_user
#         User.find_by(id: session[:user_id])
#     end 

#     def plant_params
#         params.permit(:name, :image)
#     end

#     def authorize
#         return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id 
#     end  
# end