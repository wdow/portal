package gov.nist.resources.portal.repository;

import gov.nist.resources.portal.domain.Schema;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface SchemaRepository extends MongoRepository<Schema, String> {

}
