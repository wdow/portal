package gov.nist.resources.portal.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="tools")

public class Tool {
	
	 @Id
	 private Object id;
	 
	 private String title;
	 private String description;
	 private String version;
	 private String last_update;
	 private String activity;
	 private String categorie;
	 private String link;
	 private String status;
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public void setId(Object id) {
		this.id = id;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	public Object getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getVersion() {
		return version;
	}
	public void setVersion(String version) {
		this.version = version;
	}
	public String getLast_update() {
		return last_update;
	}
	public void setLast_update(String last_update) {
		this.last_update = last_update;
	}
	public String getActivity() {
		return activity;
	}
	public void setActivity(String activity) {
		this.activity = activity;
	}
	public String getCategorie() {
		return categorie;
	}
	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}
	
	
	
	public Tool(Object id, String title, String description, String version,
			String last_update, String activity, String categorie) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.version = version;
		this.last_update = last_update;
		this.activity = activity;
		this.categorie = categorie;
	}
	public Tool()
	{
		super();
	}
	public Tool(Long id, String title, String description, String version,
			String last_update, String activity, String categorie) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.version = version;
		this.last_update = last_update;
		this.activity = activity;
		this.categorie = categorie;
	}	 

}
