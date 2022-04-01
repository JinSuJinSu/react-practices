package com.example.demo.repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.vo.TaskVo;

@Repository
public class TaskRepository {
	
	@Autowired
	private SqlSession sqlSession;
	
	public List<TaskVo> findAll(int cardNo) {
		return sqlSession.selectList("task.findAll",cardNo);
	}

	public boolean addTask(TaskVo taskVo) {
		int cnt=sqlSession.insert("task.addTask", taskVo);
		return cnt==1;
	}

	public boolean deleteTask(int taskNo) {
		int cnt=sqlSession.delete("task.deleteTask", taskNo);
		return cnt==1;
	}
	
	public String findDone(int taskNo) {
		return sqlSession.selectOne("task.findDone",taskNo);
	}

	public boolean updateCheckbox(int taskNo, String done) {
		Map<String, Object> map = new HashMap<>();
		map.put("taskNo", taskNo);
		System.out.println("초기값이뭐야???"+done);
		String newDone = done.equals("Y") ? "N": "Y";
		System.out.println("값이뭐야???"+newDone);
		map.put("newDone", newDone);
		
		int cnt=sqlSession.update("task.updateCheckbox", map);
		return cnt==1;
	}

}
