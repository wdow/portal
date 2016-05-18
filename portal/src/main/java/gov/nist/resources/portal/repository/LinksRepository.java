package gov.nist.resources.portal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import gov.nist.resources.portal.domain.Links;

public interface LinksRepository extends MongoRepository<Links, String> {

}
