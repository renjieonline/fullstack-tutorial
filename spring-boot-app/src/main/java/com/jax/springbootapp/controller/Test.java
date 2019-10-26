package com.jax.springbootapp.controller;

import org.apache.juli.logging.LogFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
public class Test {
    private Logger logger = LoggerFactory.getLogger(Login.class);

    @GetMapping("/test")
    public String test () {
        logger.info("test.......");
        return "test";
    }

    @PostMapping("/file/upload")
    public String upload (@RequestParam(value = "file") MultipartFile file) throws IOException {
        logger.info("upload.......");
        byte[] bytes = file.getBytes();
        File fileToSave = new File(file.getOriginalFilename());
        FileCopyUtils.copy(bytes, fileToSave);

        return fileToSave.getAbsolutePath();
    }

}
