package gov.nist.resources.portal.repository;

import gov.nist.resources.portal.domain.User;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

}
