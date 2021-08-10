package agenda.agendaapispringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import agenda.agendaapispringboot.model.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {

}
