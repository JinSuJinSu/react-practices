package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.JsonResult;
import com.example.demo.repository.CardRepository;
import com.example.demo.repository.TaskRepository;
import com.example.demo.vo.TaskVo;

@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	private CardRepository cardRepository;
	
	@Autowired
	private TaskRepository taskRepository;
	
	@GetMapping("/card")
	public ResponseEntity<JsonResult> readCard() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(cardRepository.findAll()));
	}
	
	@GetMapping("/task")
	public ResponseEntity<JsonResult> readTask(
			@RequestParam(value="cardNo", required=true, defaultValue="1") int cardNo) {
		List<TaskVo> list = taskRepository.findAll(cardNo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(list));
	}
	
	@PostMapping("/task")
	public ResponseEntity<JsonResult> addTask(@RequestBody TaskVo taskVo){
		boolean result = taskRepository.addTask(taskVo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskVo));
	}
	
	@DeleteMapping("/task")
	public ResponseEntity<JsonResult> deleteTask(
			@RequestParam(value="taskNo", required=true, defaultValue="1") int taskNo){
		System.out.println("딜리트 진입 성공!!!");
		boolean result = taskRepository.deleteTask(taskNo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(true));
	}
	
	@PutMapping("/task")
	public ResponseEntity<JsonResult> updateCheckbox(
			@RequestParam(value="taskNo", required=true, defaultValue="1") int taskNo,
			@RequestParam(value="originDone", required=true, defaultValue="") String originDone){
				
		boolean result = taskRepository.updateCheckbox(taskNo, originDone);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(result));
	}
}
