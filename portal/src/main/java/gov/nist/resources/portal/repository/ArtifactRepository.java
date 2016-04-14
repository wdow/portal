package gov.nist.resources.portal.repository;

import gov.nist.resources.portal.domain.Artifact;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ArtifactRepository extends MongoRepository<Artifact, String> {

}
