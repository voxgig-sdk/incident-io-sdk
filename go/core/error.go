package core

type IncidentIoError struct {
	IsIncidentIoError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewIncidentIoError(code string, msg string, ctx *Context) *IncidentIoError {
	return &IncidentIoError{
		IsIncidentIoError: true,
		Sdk:              "IncidentIo",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *IncidentIoError) Error() string {
	return e.Msg
}
