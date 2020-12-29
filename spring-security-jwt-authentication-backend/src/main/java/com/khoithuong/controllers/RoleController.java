package com.khoithuong.controllers;

import java.util.HashMap;

import java.util.List;
import java.util.Map;

import com.khoithuong.exception.ResourceNotFoundException;
import com.khoithuong.models.Menu;
import com.khoithuong.models.Role;
import com.khoithuong.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class RoleController {
    @Autowired
    private RoleRepository roleRepository;

    @GetMapping("/roles")
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

    @GetMapping("/roles/{id}")
    public ResponseEntity<Role> getRoleById(@PathVariable(value = "id") Long roleId)
            throws ResourceNotFoundException {
        Role role = roleRepository.findById(roleId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + roleId));
        return ResponseEntity.ok().body(role);
    }

    @PostMapping("/roles")
    public Role createRole(@RequestBody Role role) {
        return roleRepository.save(role);
    }

    @PutMapping("/roles/{id}")
    public ResponseEntity<Role> updateEmployee(@PathVariable(value = "id") Long roleId,
                                               @RequestBody Role roleDetails) throws ResourceNotFoundException {
        Role role = roleRepository.findById(roleId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + roleId));

        role.setName(roleDetails.getName());
        role.setMenus(roleDetails.getMenus());
        final Role updatedRole = roleRepository.save(role);
        return ResponseEntity.ok(updatedRole);
    }

    @DeleteMapping("/roles/{id}")
    public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long roleId)
            throws ResourceNotFoundException {
        Role role = roleRepository.findById(roleId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + roleId));

        roleRepository.delete(role);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
