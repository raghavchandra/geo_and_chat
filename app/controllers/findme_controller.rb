class FindmeController < ApplicationController
  
  def index
    # rendering template app/view/index.html.erb
  end
  
  # POST
  def myLocation
    render :nothing => true
  end
  
end
