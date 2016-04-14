package gov.nist.resources.portal.repository;

import gov.nist.resources.portal.domain.IG_Document;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface IG_DocumentRepository extends MongoRepository<IG_Document, String>{

}
