package com.bookstore.be.controller;

import com.bookstore.be.model.Category;
import com.bookstore.be.repository.CategoryRepository;
import com.bookstore.be.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@CrossOrigin(origins = "https://web-ban-sach-five.vercel.app")
@RestController
@RequestMapping("/category")

public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private CategoryRepository categoryRepository;

    @PostMapping("/addCate")
//    public String addCate(@RequestBody Category category){
//        categoryService.saveCate(category);
//        return "New category";
//    }
    //tạo, thêm mới cate
    public ResponseEntity<?> addCategories(@RequestBody List<Category> categories) {
        try {
            List<Category> savedCategories = categoryService.saveCate(categories);
            return ResponseEntity.ok(savedCategories);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error while adding categories");
        }
    }
    //lấy danh sách cate
    @GetMapping("/getAllCate")
    public List<Category> getAllCategory(){
        return categoryService.getAllCate();
    }

    //Lấy cate theo ID
    @GetMapping("/getCategoryById/{cateId}")
    public ResponseEntity<?> getCategoryById(@PathVariable int cateId) {
        try {
            Category category = categoryService.getCategoryById(cateId);
            if (category != null) {
                return ResponseEntity.ok(category);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error while fetching category");
        }
    }

    //cập nhập dư liẹu cate
    @PutMapping("/update/{cateId}")
    public void updateCategory(@PathVariable int cateId, @RequestBody Category newCategory) {
        if (!categoryRepository.existsById(cateId)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found with id: " + cateId);
        }

        Category categoryToUpdate = categoryRepository.findById(cateId).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found with id: " + cateId));

        categoryToUpdate.setNameC(newCategory.getNameC());
        categoryRepository.save(categoryToUpdate);
    }
    // xóa Cate
    @DeleteMapping("/{id}")
    public void deleteCategory(@PathVariable int id) {
        categoryService.deleteCategoryById(id);
    }

}
