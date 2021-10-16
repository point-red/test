package models

import "time"

type User struct {
	ID        uint       `gorm:"primaryKey"`
	Name      string     `gorm:"not null" json:"name" form:"name"`
	Email     string     `gorm:"unique" json:"email" form:"email"`
	Age       uint       `json:"age" form:"age"`
	CreatedAt time.Time  `gorm:"column:created_at" json:"-"`
	UpdatedAt time.Time  `gorm:"column:updated_at" json:"-"`
	DeletedAt *time.Time `gorm:"column:deleted_at" json:"-"`
}

type SuccessResponse struct {
	Status  string      `json:"status"`
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
}

type FailedResponse struct {
	Status  string `json:"status"`
	Message string `json:"message"`
}
