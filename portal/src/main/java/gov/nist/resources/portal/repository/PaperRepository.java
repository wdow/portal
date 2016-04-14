package gov.nist.resources.portal.repository;

import gov.nist.resources.portal.domain.Paper;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PaperRepository extends MongoRepository<Paper, String> {

}
