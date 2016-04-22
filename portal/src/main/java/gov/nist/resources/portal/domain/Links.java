package gov.nist.resources.portal.domain;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="links")
public class Links {
	@Id
	private Object id;
	private String categorie;
	public String getCategorie() {
		return categorie;
	}
	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}
	private List<Component > components;
	public Object getId() {
		return id;
	}
	public void setId(Object id) {
		this.id = id;
	}
	public List<Component> getComponents() {
		return components;
	}
	public void setComponents(List<Component> components) {
		this.components = components;
	}
	public Links() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Links(Object id, List<Component> components) {
		super();
		this.id = id;
		this.components = components;
	}
	
	
	
}
