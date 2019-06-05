package com.koala.controller;

import java.util.Iterator;

import javax.validation.ConstraintViolationException;

import com.koala.common.MyException;
import com.koala.vo.JsonBean;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;


@ControllerAdvice
@ResponseBody
public class CommonException {

	@ExceptionHandler(ConstraintViolationException.class)
	public JsonBean constraintViolation(ConstraintViolationException ex){
		
		// 获取ConstraintViolationException异常中的信息
		Iterator<javax.validation.ConstraintViolation<?>> iterator = 
				ex.getConstraintViolations().iterator();
		
		String errorMsg = null;
		
		while(iterator.hasNext()){
			javax.validation.ConstraintViolation<?> next = iterator.next();

			errorMsg = next.getMessage();
		}
		return JsonBean.error(errorMsg);
		
	}
	
	@ExceptionHandler(MyException.class)
	public JsonBean commonException(MyException e){

		return JsonBean.error(e.getErrorMsg());
	}
	
	@ExceptionHandler(Exception.class)
	public JsonBean finallyException(Exception e){

		return JsonBean.error(e.getMessage());
	}
	
	
}
