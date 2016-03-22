package gov.nist.resources.portal.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="papers")
public class Paper {
	@Id
	private Object id; 
	private String title;
	private String link;
	private String publication_date;
	private String author;
	public String keywords;
	private String place;
	public String getPlace() {
		return place;
	}
	public void setPlace(String place) {
		this.place = place;
	}
	public Paper(Object id, String title, String link, String publication_date,
			String author, String keywords) {
		super();
		this.id = id;
		this.title = title;
		this.link = link;
		this.publication_date = publication_date;
		this.author = author;
		this.keywords = keywords;
	}
	public Paper() {
		super();
	}
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
	public String getKeywords() {
		return keywords;
	}
	public void setKeywords(String keywords) {
		this.keywords = keywords;
	}
	
}