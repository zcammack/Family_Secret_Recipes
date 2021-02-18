require "test_helper"

class CookbooksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @cookbook = cookbooks(:one)
  end

  test "should get index" do
    get cookbooks_url, as: :json
    assert_response :success
  end

  test "should create cookbook" do
    assert_difference('Cookbook.count') do
      post cookbooks_url, params: { cookbook: { about: @cookbook.about, title: @cookbook.title } }, as: :json
    end

    assert_response 201
  end

  test "should show cookbook" do
    get cookbook_url(@cookbook), as: :json
    assert_response :success
  end

  test "should update cookbook" do
    patch cookbook_url(@cookbook), params: { cookbook: { about: @cookbook.about, title: @cookbook.title } }, as: :json
    assert_response 200
  end

  test "should destroy cookbook" do
    assert_difference('Cookbook.count', -1) do
      delete cookbook_url(@cookbook), as: :json
    end

    assert_response 204
  end
end
