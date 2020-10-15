package br.com.codificando.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

	@GetMapping ("/")
	public String chamarIndex() {
		return "index";
	}
	@GetMapping ("/login")
	public String chamarLogin() {
		return "login";
	}
}
