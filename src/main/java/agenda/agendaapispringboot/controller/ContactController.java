package agenda.agendaapispringboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import agenda.agendaapispringboot.model.Contact;
import agenda.agendaapispringboot.services.ContactService;

@RestController
@RequestMapping(value = "/contacts")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @GetMapping
    public ResponseEntity<List<Contact>> findAll() {
        List<Contact> list = contactService.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Contact> findById(@RequestParam Long id) {
        Contact contact = contactService.findById(id);
        return ResponseEntity.ok().body(contact);
    }

    @PostMapping
    public ResponseEntity<Contact> save(@RequestBody Contact obj) {
        Contact contact = contactService.save(obj);
        return ResponseEntity.ok().body(contact);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Contact> update(@RequestParam Long id, @RequestBody Contact obj) {
        Contact contact = contactService.update(id, obj);
        return ResponseEntity.ok().body(contact);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@RequestParam Long id) {
        contactService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
