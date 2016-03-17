package gov.nist.resources.portal.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="artifacts")
public class Artifact {
@Id
private Object id;
private String domain;
private String standardVersion;
private String title;
private String resourceSet;
private String profile;
private String constraintes;
public Object getId() {
	return id;
}
public void setId(Object id) {
	this.id = id;
}
public String getDomain() {
	return domain;
}
public void setDomain(String domain) {
	this.domain = domain;
}
public String getStandardVersion() {
	return standardVersion;
}
public void setStandardVersion(String standardVersion) {
	this.standardVersion = standardVersion;
}
public String getTitle() {
	return title;
}
public void setTitle(String title) {
	this.title = title;
}
public String getResourceSet() {
	return resourceSet;
}
public void setResourceSet(String resourceSet) {
	this.resourceSet = resourceSet;
}
public String getProfile() {
	return profile;
}
public void setProfile(String profile) {
	this.profile = profile;
}
public String getConstraintes() {
	return constraintes;
}
public void setConstraintes(String constraintes) {
	this.constraintes = constraintes;
}
public Artifact(Object id, String domain, String standardVersion, String title,
		String resourceSet, String profile, String constraintes) {
	super();
	this.id = id;
	this.domain = domain;
	this.standardVersion = standardVersion;
	this.title = title;
	this.resourceSet = resourceSet;
	this.profile = profile;
	this.constraintes = constraintes;
}
public Artifact() {
	super();
	// TODO Auto-generated constructor stub
}

}
