package com.servicestation.servicestation;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ServiceStationController {

    @GetMapping(value = "/")
    public String home() {
        return "first";
    }

    @GetMapping(value = "/error")
    @ResponseBody
    public String error() {
        return "this is error";
    }
}
