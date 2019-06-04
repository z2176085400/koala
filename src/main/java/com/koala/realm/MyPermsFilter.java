package com.koala.realm;

import org.apache.shiro.web.filter.authz.PermissionsAuthorizationFilter;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 *  是否是AJAX请求
 */
public class MyPermsFilter extends PermissionsAuthorizationFilter {

    // 访问权限验证异常，会调用该方法
    @Override
    protected boolean onAccessDenied(ServletRequest request, ServletResponse response) throws IOException {

        HttpServletRequest httpRequest = (HttpServletRequest)request;
        HttpServletResponse httpResponse = (HttpServletResponse)response;
        // 和ajax请求相关的请求头信息
        String header = httpRequest.getHeader("X-Requested-With");
        if(header != null && !header.equals("") && header.equals("XMLHttpRequest")){
            /*JsonBean bean = JsonUtils.createJsonBean(0, "没有访问权限");
            ObjectMapper objMapper = new ObjectMapper();
            // 通过响应返回json格式字符串
            response.getWriter().write(objMapper.writeValueAsString(bean));*/
            response.getWriter().write("{\"code\":0}");
        }else{
            // 非ajax方式，进行重定向
            httpResponse.sendRedirect(((HttpServletRequest) request).getContextPath() + "/unauthorized.jsp");
        }
        return false;
    }

}
