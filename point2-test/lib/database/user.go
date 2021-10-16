package database

import (
	"point/test/config"
	"point/test/models"
)

func CreateUser(user models.User) (interface{}, error) {
	tx := config.Db.Create(&user)
	if tx.Error != nil {
		return nil, tx.Error
	}
	return user, tx.Error
}

func GetUser(userId int) (interface{}, int, error) {
	user := models.User{}
	tx := config.Db.Find(&user, userId)

	if tx.Error != nil {
		return nil, 0, tx.Error
	}

	if tx.RowsAffected > 0 {
		return user, 1, nil
	}
	return nil, 0, nil
}

func DeleteUser(userId int) (interface{}, int, error) {
	user := models.User{}
	tx := config.Db.Delete(&user, userId)

	if tx.Error != nil {
		return nil, 0, tx.Error
	}

	if tx.RowsAffected > 0 {
		return "deleted", 1, nil
	}
	return nil, 0, nil
}

func UpdateUser(userId int, newData models.User) (interface{}, int, error) {
	user := models.User{}
	tx := config.Db.Find(&user, userId)
	if tx.Error != nil {
		return nil, 0, tx.Error
	}

	if tx.RowsAffected > 0 {
		saveData := config.Db.Model(&user).Updates(newData)
		if saveData.Error != nil {
			return nil, 0, saveData.Error
		}

		return user, 1, nil
	}

	return nil, 0, nil
}
