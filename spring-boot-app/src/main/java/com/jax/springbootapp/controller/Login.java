package com.jax.springbootapp.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Login {
    private Logger logger = LoggerFactory.getLogger(Login.class);

    @GetMapping("/login")
    public String login () {
        logger.info("hello.......");
        return "login";
    }
}
