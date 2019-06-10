package com.koala.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

public class StrUtils {

	
	public static String createOrderNum(){
		
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmssSSS");
		return sdf.format(date);
	}
}
