class ProjDocumentsController < ApplicationController
  before_action :set_proj_document, only: [:show, :update, :destroy]

  # GET /proj_documents
  def index
    @proj_documents = ProjDocument.all

    render json: @proj_documents
  end

  # GET /proj_documents/1
  def show
    render json: @proj_document
  end

  # POST /proj_documents
  def create
    @proj_document = ProjDocument.new(proj_document_params)

    if @proj_document.save
      render json: @proj_document, status: :created, location: @proj_document
    else
      render json: @proj_document.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /proj_documents/1
  def update
    if @proj_document.update(proj_document_params)
      render json: @proj_document
    else
      render json: @proj_document.errors, status: :unprocessable_entity
    end
  end

  # DELETE /proj_documents/1
  def destroy
    @proj_document.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_proj_document
      @proj_document = ProjDocument.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def proj_document_params
      params.require(:proj_document).permit(:title, :description, :file_url, :image_url)
    end
end
