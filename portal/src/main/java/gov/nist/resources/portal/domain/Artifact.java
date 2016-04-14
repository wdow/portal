package gov.nist.resources.portal.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="artifacts")
public class Artifact {
@Id
private Object id;
private String domain;
private String valueSets;
private String constraintes;

public String getValueSets() {
	return valueSets;
}



public void setValueSets(String valueSets) {
	this.valueSets = valueSets;
}



public String getconstraintes() {
	return constraintes;
}



public void setconstraintes(String constraintes) {
	constraintes = constraintes;
}





private String title;
public Object getId() {
	return id;
}



public void setId(Object id) {
	this.id = id;
}



public Artifact(Object id, String domain, String title, String spec) {
	super();
	this.id = id;
	this.domain = domain;
	this.title = title;
	this.spec = spec;
}



public String getDomain() {
	return domain;
}



public void setDomain(String domain) {
	this.domain = domain;
}



public String getTitle() {
	return title;
}



public void setTitle(String title) {
	this.title = title;
}



public String getSpec() {
	return spec;
}



public void setSpec(String spec) {
	this.spec = spec;
}



private String spec;



public Artifact() {
	super();
	// TODO Auto-generated constructor stub
}

}
