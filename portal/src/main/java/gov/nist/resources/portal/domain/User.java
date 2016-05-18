package gov.nist.resources.portal.domain;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="users")
public class User {

	@Id
	private Object id;
	private String username;
	private String password;
	private List<String> roles;
	public User() {
		super();
	
	}
	public User(String username, String password, List<String> roles) {
		super();
	
		this.username = username;
		this.password = password;
		this.roles = roles;
	}
	public Object getId() {
		return id;
	}
	public void setId(Object id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public List<String> getRoles() {
		return roles;
	}
	public void setRoles(List<String> roles) {
		this.roles = roles;
	}
	

}
