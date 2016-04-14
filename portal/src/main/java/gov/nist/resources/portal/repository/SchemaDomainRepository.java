package gov.nist.resources.portal.repository;

import gov.nist.resources.portal.domain.SchemaDomain;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface SchemaDomainRepository extends MongoRepository<SchemaDomain, String> {

}
