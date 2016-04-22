package gov.nist.resources.portal.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="presentations")
public class Presentation {
	@Id
	private Object id; 
	private String title;
	private String place;
	private double order;

	public double getOrder() {
		return order;
	}
	public void setOrder(double order) {
		this.order = order;
	}
	public String getPlace() {
		return place;
	}
	public void setPlace(String place) {
		this.place = place;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	private String link;
	private String publication_date;
	private String author;

	public Object getId() {
		return id;
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
	public String getPublication_date() {
		return publication_date;
	}
	public void setPublication_date(String publication_date) {
		this.publication_date = publication_date;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public Presentation() {
	
	}

	
	
}
