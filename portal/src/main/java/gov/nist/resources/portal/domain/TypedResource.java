package gov.nist.resources.portal.domain;

import java.util.ArrayList;
import java.util.List;

public class TypedResource {
	
	List<String> types=new ArrayList<String>();

	public List<String> getTypes() {
		return types;
	}

	public void setTypes(List<String> types) {
		this.types = types;
	}

	public TypedResource() {
		super();
		// TODO Auto-generated constructor stub
	}

}
