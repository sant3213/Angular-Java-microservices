package com.jalasoft.test.repository;

import com.jalasoft.test.model.Data;
import org.springframework.data.repository.CrudRepository;

public interface JpaRepository extends CrudRepository<Data,Long> {

}
