package com.khoithuong.controllers;

import java.util.HashMap;

import java.util.List;
import java.util.Map;

import com.khoithuong.exception.ResourceNotFoundException;
import com.khoithuong.models.Menu;
import com.khoithuong.repository.MenuRepository;
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
public class MenuController {
    @Autowired
    private MenuRepository menuRepository;

    @GetMapping("/menus")
    public List<Menu> getAllMenus() {
        return menuRepository.findAll();
    }

    @GetMapping("/menus/{id}")
    public ResponseEntity<Menu> getMenuById(@PathVariable(value = "id") Long menuId)
            throws ResourceNotFoundException {
        Menu menu = menuRepository.findById(menuId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + menuId));
        return ResponseEntity.ok().body(menu);
    }

    @PostMapping("/menus")
    public Menu createMenu(@RequestBody Menu menu) {
        return menuRepository.save(menu);
    }

    @PutMapping("/menus/{id}")
    public ResponseEntity<Menu> updateMenu(@PathVariable(value = "id") Long menuId,
                                               @RequestBody Menu menuDetails) throws ResourceNotFoundException {
        Menu menu = menuRepository.findById(menuId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + menuId));

        menu.setMenuName(menuDetails.getMenuName());
        menu.setUrl(menuDetails.getUrl());
        final Menu updatedMenu = menuRepository.save(menu);
        return ResponseEntity.ok(updatedMenu);
    }

    @DeleteMapping("/menus/{id}")
    public Map<String, Boolean> deleteMenu(@PathVariable(value = "id") Long menuId)
            throws ResourceNotFoundException {
         Menu menu = menuRepository.findById(menuId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + menuId));

        menuRepository.delete(menu);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
