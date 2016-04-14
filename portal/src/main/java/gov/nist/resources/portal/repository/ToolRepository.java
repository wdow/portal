package gov.nist.resources.portal.repository;

import gov.nist.resources.portal.domain.Tool;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.CrudRepository;

public interface ToolRepository extends MongoRepository<Tool, String> {

}
