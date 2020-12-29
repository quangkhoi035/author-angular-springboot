package com.khoithuong.repository;

import com.khoithuong.models.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {
    @Query(value = "select distinct * from menus\n" +
            "where id in (\n" +
            "\tselect menu_id from roles_menu\n" +
            "    where role_id in(\n" +
            "\t\tselect role_id from user_roles\n" +
            "        where user_id in (\n" +
            "\t\t\tselect id from users \n" +
            "            where username = ?1 \n" +
            "        )\n" +
            "    )\n" +
            ")", nativeQuery = true)
    List<Menu> findListMenuByUsername(String username);
}
