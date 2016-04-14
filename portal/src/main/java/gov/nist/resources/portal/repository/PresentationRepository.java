package gov.nist.resources.portal.repository;

import gov.nist.resources.portal.domain.Presentation;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PresentationRepository extends
		MongoRepository<Presentation, String> {

}
