package com.bookstore.be.service;

import com.bookstore.be.model.Category;
import com.bookstore.be.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService{
    @Autowired
    private CategoryRepository categoryRepository;


    @Override
    public List<Category> saveCate(List<Category> categories) {
        return categoryRepository.saveAll(categories);
    }

    @Override
    public List<Category> getAllCate() {
        return categoryRepository.findAll();
    }

    @Override
    public Category getCategoryById(int cateId) {
        Optional<Category> categoryOptional = categoryRepository.findById(cateId);
        return categoryOptional.orElse(null);
    }


    @Override
    public void deleteCategoryById(int id) {
        categoryRepository.deleteById(id);
    }

    @Override
    public void updateCategory(int categoryId, Category newCategory) {

    }
}
