package main

import "fmt"

func main() {
	fmt.Println(convertNumber("5"))
	fmt.Println(convertNumber("25"))
	fmt.Println(convertNumber("125"))
}

func convertNumber(number string) string {
	switch len(number) {
	case 1:
		number = "000" + number
	case 2:
		number = "00" + number
	case 3:
		number = "0" + number
	}

	return number
}
