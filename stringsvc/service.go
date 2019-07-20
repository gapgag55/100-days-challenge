package main

import (
	"errors"
	"strings"
)

type StringService interface {
	Uppercase(string) (string, error)
	Count(string) int
}

type stringService struct{}

type ServiceMiddleware func(StringService) StringService

func (stringService) Uppercase(s string) (string, error) {
	if s == "" {
		return "", errors.New("Empty string")
	}
	return strings.ToUpper(s), nil
}

func (stringService) Count(s string) int {
	return len(s)
}
