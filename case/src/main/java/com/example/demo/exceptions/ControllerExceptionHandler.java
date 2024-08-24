package com.example.demo.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.sql.SQLIntegrityConstraintViolationException;

@ControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(ObjectNotFoundException.class)
    public ResponseEntity<ApiErrorMenssage> objectNotFoundException(ObjectNotFoundException e) {
        final HttpStatus status = HttpStatus.NOT_FOUND;
        final ApiErrorMenssage apiErrorMenssage = new ApiErrorMenssage(e.getMessage());
        return ResponseEntity.status(status).body(apiErrorMenssage);
    }

    @ExceptionHandler(DataIntegrityException.class)
    public ResponseEntity<ApiErrorMenssage> dataIntegrityException(DataIntegrityException e) {
        final HttpStatus status = HttpStatus.BAD_REQUEST;
        final ApiErrorMenssage apiErrorMenssage = new ApiErrorMenssage(e.getMessage());
        return ResponseEntity.status(status).body(apiErrorMenssage);
    }

    @ExceptionHandler(SQLIntegrityConstraintViolationException.class)
    public ResponseEntity<ApiErrorMenssage> sqlIntegrityConstraintViolationException(SQLIntegrityConstraintViolationException e) {
        final HttpStatus status = HttpStatus.BAD_REQUEST;
        final ApiErrorMenssage apiErrorMenssage = new ApiErrorMenssage(e.getMessage());
        return ResponseEntity.status(status).body(apiErrorMenssage);
    }

}
