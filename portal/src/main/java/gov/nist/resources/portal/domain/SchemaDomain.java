package gov.nist.resources.portal.domain;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection="SchemaDomains")
public class SchemaDomain {


	public SchemaDomain() {
	super();
	}
	@Id
	private Object id;
	public Object getId() {
		return id;
	}
	public void setId(Object id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public List<Schema> getSchemas() {
		return schemas;
	}
	public void setSchemas(List<Schema> schemas) {
		schemas = schemas;
	}
	private String title;
	private List<Schema> schemas;

}
