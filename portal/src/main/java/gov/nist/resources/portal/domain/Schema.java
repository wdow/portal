package gov.nist.resources.portal.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="schemas")
public class Schema {
	
	@Id
	private Object id;
	private String description;
	private String type;
	private String source;
	public Schema() {
		super();
		
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		source = source;
	}
}