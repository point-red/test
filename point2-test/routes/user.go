package routes

import (
	"point/test/controllers"

	"github.com/labstack/echo/v4"
)

func New() *echo.Echo {
	e := echo.New()

	e.POST("/users", controllers.CreateUserController)
	e.GET("/users/:id", controllers.GetUserController)
	e.DELETE("/users/:id", controllers.DeleteUserController)
	e.PUT("/users/:id", controllers.UpdateUserController)

	return e
}
