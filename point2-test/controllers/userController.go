package controllers

import (
	"net/http"
	"point/test/lib/database"
	"point/test/models"
	"strconv"

	"github.com/labstack/echo/v4"
)

func CreateUserController(c echo.Context) error {
	user := models.User{}
	c.Bind(&user)

	outputUser, err := database.CreateUser(user)
	if err != nil {
		return c.JSON(http.StatusUnprocessableEntity, models.FailedResponse{
			Status:  "failed",
			Message: "failed to create new user",
		})
	}
	return c.JSON(http.StatusOK, models.SuccessResponse{
		Status:  "success",
		Message: "success to create new user",
		Data:    outputUser,
	})
}

func GetUserController(c echo.Context) error {
	userId, errorId := strconv.Atoi(c.Param("id"))
	if errorId != nil {
		return c.JSON(http.StatusBadRequest, models.FailedResponse{
			Status:  "failed",
			Message: "invalid user id",
		})
	}

	user, rowAffected, err := database.GetUser(userId)
	if err != nil {
		return c.JSON(http.StatusUnprocessableEntity, models.FailedResponse{
			Status:  "failed",
			Message: "failed to get user data",
		})
	}

	if rowAffected == 0 {
		return c.JSON(http.StatusOK, models.FailedResponse{
			Status:  "failed",
			Message: "user id not found",
		})
	}

	return c.JSON(http.StatusOK, models.SuccessResponse{
		Status:  "success",
		Message: "success to get user data",
		Data:    user,
	})
}

func DeleteUserController(c echo.Context) error {
	userId, errorId := strconv.Atoi(c.Param("id"))
	if errorId != nil {
		return c.JSON(http.StatusBadRequest, models.FailedResponse{
			Status:  "failed",
			Message: "invalid user id",
		})
	}

	user, rowAffected, err := database.DeleteUser(userId)
	if err != nil {
		return c.JSON(http.StatusUnprocessableEntity, models.FailedResponse{
			Status:  "failed",
			Message: "failed to delete user data",
		})
	}

	if rowAffected == 0 {
		return c.JSON(http.StatusOK, models.FailedResponse{
			Status:  "failed",
			Message: "user id not found",
		})
	}

	return c.JSON(http.StatusOK, models.SuccessResponse{
		Status:  "success",
		Message: "success to delete user data",
		Data:    user,
	})
}

func UpdateUserController(c echo.Context) error {
	userId, errorId := strconv.Atoi(c.Param("id"))
	if errorId != nil {
		return c.JSON(http.StatusBadRequest, models.FailedResponse{
			Status:  "failed",
			Message: "invalid user id",
		})
	}

	newData := models.User{}
	c.Bind(&newData)

	updatedData, rowAffected, err := database.UpdateUser(userId, newData)
	if err != nil {
		return c.JSON(http.StatusUnprocessableEntity, models.FailedResponse{
			Status:  "failed",
			Message: "failed to update user data",
		})
	}

	if rowAffected == 0 {
		return c.JSON(http.StatusOK, models.FailedResponse{
			Status:  "failed",
			Message: "user id not found",
		})
	}

	return c.JSON(http.StatusOK, models.SuccessResponse{
		Status:  "success",
		Message: "success to update user data",
		Data:    updatedData,
	})
}
