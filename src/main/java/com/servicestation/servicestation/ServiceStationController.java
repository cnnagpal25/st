package com.servicestation.servicestation;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ServiceStationController {

    @GetMapping(value = "/")
    public String first() {
        return "first";
    }

    @GetMapping(value = "/partial/login")
    public String login() {
        return "login";
    }

    @GetMapping(value = "/partial/home")
    public String home() {
        return "home";
    }

    @GetMapping(value = "/error")
    @ResponseBody
    public String error() {
        return "this is error";
    }
}
