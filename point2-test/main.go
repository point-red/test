package main

import (
	"point/test/config"
	"point/test/routes"
)

func main() {
	config.InitDb()
	e := routes.New()
	e.Logger.Fatal(e.Start(":8000"))
}
