package agenda.agendaapispringboot.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import agenda.agendaapispringboot.exception.ResourceNotFoundException;
import agenda.agendaapispringboot.model.Contact;
import agenda.agendaapispringboot.repository.ContactRepository;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public List<Contact> findAll() {
        List<Contact> list = contactRepository.findAll();
        return list;
    }

    public Contact findById(Long id) {
        Optional<Contact> contact = contactRepository.findById(id);
        return contact.orElseThrow(() -> new ResourceNotFoundException(id));
    }

    public Contact save(Contact obj) {
        Contact contact = contactRepository.save(obj);
        return contact;
    }

    public void delete(Long id) {
        try {
            contactRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException(id);
        }

    }

    public Contact update(Long id, Contact obj) {
        try {
            Contact entity = contactRepository.getOne(id);
            updateData(entity, obj);
            entity = contactRepository.save(entity);
            return entity;
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException(id);
        }
    }

    public void updateData(Contact entity, Contact obj) {
        entity.setName(obj.getName());
        entity.setFone(obj.getFone());
        entity.setEmail(obj.getEmail());

    }

}
